import { useMemo, useState } from "react";

import { BrowseCategoryBanners } from "../components/shop/BrowseCategoryBanners";

import { CartDrawer } from "../components/shop/CartDrawer";

import { CategoryTileGrid } from "../components/shop/CategoryTileGrid";

import { CookieBanner } from "../components/shop/CookieBanner";

import { OffersSlider } from "../components/shop/OffersSlider";

import { PharmacyProductCard } from "../components/shop/PharmacyProductCard";

import { ShopBannerCarousel } from "../components/shop/ShopBannerCarousel";

import { ShopBrandsWall } from "../components/shop/ShopBrandsWall";

import { ShopNewsletter } from "../components/shop/ShopNewsletter";

import { ShopPharmacyBar } from "../components/shop/ShopPharmacyBar";
import { ShopTrustBar } from "../components/shop/ShopTrustBar";

import { ShopPharmacyFooter } from "../components/shop/ShopPharmacyFooter";



import { useMediaLoader } from "../hooks/useMediaLoader";

import { useScrollReveal } from "../hooks/useScrollReveal";

import { CategoryCollectionSection } from "../components/shop/CategoryCollectionSection";

import { PHARMACY_PRODUCTS, PRODUCT_COUNT } from "../store/products";

import { groupProductsByCategory, sortProductsShopify } from "../store/shopifyMeta";

import { useSearchParams } from "react-router-dom";
import type { SortKey, StoreCategory } from "../store/types";



export function ShopPage() {

  const [searchParams, setSearchParams] = useSearchParams();
  const category = (searchParams.get("category") as StoreCategory | "all") || "all";

  const setCategory = (newCat: StoreCategory | "all") => {
    setSearchParams((prev) => {
      if (newCat === "all") {
        prev.delete("category");
      } else {
        prev.set("category", newCat);
      }
      return prev;
    }, { replace: true });
    
    // Auto-scroll to catalog to prevent "middle of nowhere" feeling
    setTimeout(() => {
      const catalogEl = document.getElementById("catalog");
      if (catalogEl) {
        const top = catalogEl.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 50);
  };

  const [query, setQuery] = useState("");

  const [sort, setSort] = useState<SortKey>("featured");



  const featured = useMemo(() => PHARMACY_PRODUCTS.filter((p) => p.popular).slice(0, 8), []);

  const collections = useMemo(() => groupProductsByCategory(PHARMACY_PRODUCTS), []);

  const showCollections = category === "all" && !query.trim();

  const products = useMemo(() => {
    let list = [...PHARMACY_PRODUCTS];

    if (category !== "all") list = list.filter((p) => p.category === category);

    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          (p.dosageForm?.toLowerCase().includes(q) ?? false) ||
          (p.strength?.toLowerCase().includes(q) ?? false),
      );
    }

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.priceMonthly - b.priceMonthly);
        break;
      case "price-desc":
        list.sort((a, b) => b.priceMonthly - a.priceMonthly);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "newest":
        list.sort((a, b) => Number(b.newArrival) - Number(a.newArrival));
        break;
      default:
        list.sort(sortProductsShopify);
    }

    return list;
  }, [category, query, sort]);



  useMediaLoader([category, query, sort]);

  useScrollReveal([category, query, sort, products.length]);



  return (

    <main className="shop-page pharm-store">

      <ShopPharmacyBar />

      <ShopBannerCarousel />

      <ShopTrustBar />

      <CategoryTileGrid onSelect={setCategory} active={category === "all" ? undefined : category} />

      <OffersSlider />

      <BrowseCategoryBanners onSelect={setCategory} />



      <section className="pharm-section">

        <div className="pharm-wrap">

          <h2 className="pharm-section-title">Featured Treatments</h2>

          <p className="pharm-section-sub">

            Physician-prescribed medications · U.S. pharmacy fulfillment · monthly subscription pricing

          </p>

          <div className="pharm-featured-grid pharm-collection-grid">

            {featured.map((p, i) => (

              <PharmacyProductCard key={p.slug} product={p} index={i} />

            ))}

          </div>

        </div>

      </section>



      <ShopBrandsWall />

      <section id="catalog" className="pharm-section pharm-catalog">
        <div className="pharm-wrap">
          <h2 className="pharm-section-title">{showCollections ? "Shop by Category" : "All Products"}</h2>

          <p className="pharm-section-sub">
            {PRODUCT_COUNT} Rx &amp; wellness products · U.S. licensed pharmacy · organized by treatment category
          </p>



          <div className="pharm-catalog-toolbar">
            <div className="pharm-catalog-pills">
              {[
                { id: "all", label: "All categories" },
                { id: "weight-loss", label: "Weight Loss" },
                { id: "longevity", label: "Longevity" },
                { id: "recovery", label: "Recovery" },
                { id: "mens-health", label: "Men's Health" },
                { id: "womens-health", label: "Women's Health" },
                { id: "hair", label: "Hair" },
                { id: "skincare", label: "Skincare" },
                { id: "sexual-wellness", label: "Sexual Wellness" },
                { id: "sleep", label: "Sleep" },
                { id: "mental-health", label: "Mental Health" },
                { id: "hormone", label: "Hormone" }
              ].map(cat => (
                <button
                  key={cat.id}
                  className={`pharm-pill ${category === cat.id ? 'is-active' : ''}`}
                  onClick={() => setCategory(cat.id as StoreCategory | "all")}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            
            <div className="pharm-catalog-controls">
              <div className="pharm-search">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <input
                  type="search"
                  placeholder="Search treatments…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search products"
                />
              </div>

              <select className="pharm-sort-select" value={sort} onChange={(e) => setSort(e.target.value as SortKey)} aria-label="Sort products">

                <option value="featured">Featured</option>

                <option value="newest">New arrivals</option>

                <option value="price-asc">Price: low to high</option>

                <option value="price-desc">Price: high to low</option>

                <option value="rating">Top rated</option>

                <option value="name">A–Z</option>

              </select>

              <span className="pharm-result-count">{products.length} results</span>

            </div>

          </div>



          {showCollections ? (
            <div className="pharm-collections-wrapper" style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "60px" }}>
              {collections.map((col) => (
                <CategoryCollectionSection
                  key={col.category}
                  category={col.category}
                  products={col.products}
                  onViewAll={setCategory}
                />
              ))}
            </div>
          ) : (
            <div className="pharm-product-grid pharm-product-grid-all pharm-collection-grid" style={{ marginTop: "32px" }}>
              {products.map((p, i) => (
                <PharmacyProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          )}

          {!showCollections && products.length === 0 ? (

            <p className="pharm-empty">No products match your search. Try another category or clear your search.</p>

          ) : null}

        </div>

      </section>



      <ShopNewsletter />

      <ShopPharmacyFooter />

      <CartDrawer />

      <CookieBanner />

    </main>

  );

}

