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

import { ShopPharmacyFooter } from "../components/shop/ShopPharmacyFooter";

import { ShopStoreNav } from "../components/shop/ShopStoreNav";

import { useMediaLoader } from "../hooks/useMediaLoader";

import { useScrollReveal } from "../hooks/useScrollReveal";

import { CategoryCollectionSection } from "../components/shop/CategoryCollectionSection";

import { PHARMACY_PRODUCTS, PRODUCT_COUNT } from "../store/products";

import { groupProductsByCategory, sortProductsShopify } from "../store/shopifyMeta";

import type { SortKey, StoreCategory } from "../store/types";



export function ShopPage() {

  const [category, setCategory] = useState<StoreCategory | "all">("all");

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

      <ShopStoreNav />

      <ShopBannerCarousel />

      <CategoryTileGrid onSelect={setCategory} active={category === "all" ? undefined : category} />

      <OffersSlider />

      <BrowseCategoryBanners onSelect={setCategory} />



      <section className="pharm-section">

        <div className="pharm-wrap">

          <h2 className="pharm-section-title">Featured Products</h2>

          <p className="pharm-section-sub">

            Don't miss this opportunity at a special discount just for this week.

          </p>

          <div className="pharm-featured-grid pharm-collection-grid">

            {featured.map((p, i) => (

              <PharmacyProductCard key={p.slug} product={p} index={i} />

            ))}

          </div>

        </div>

      </section>



      <ShopBrandsWall />

      {showCollections ? (
        collections.map((col) => (
          <CategoryCollectionSection
            key={col.category}
            category={col.category}
            products={col.products}
            onViewAll={setCategory}
          />
        ))
      ) : null}

      <section id="catalog" className="pharm-section pharm-catalog">

        <div className="pharm-wrap">

          <h2 className="pharm-section-title">{showCollections ? "Browse &amp; search catalog" : "All Products"}</h2>

          <p className="pharm-section-sub">
            {PRODUCT_COUNT} Rx &amp; wellness products · U.S. licensed pharmacy · organized by treatment category
          </p>



          <div className="pharm-catalog-toolbar">

            <div className="pharm-search">

              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">

                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.4" />

                <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />

              </svg>

              <input

                type="search"

                placeholder="Search medicines & treatments…"

                value={query}

                onChange={(e) => setQuery(e.target.value)}

                aria-label="Search products"

              />

            </div>

            <div className="pharm-catalog-filters">

              <select

                value={category}

                onChange={(e) => setCategory(e.target.value as StoreCategory | "all")}

                aria-label="Filter by category"

              >

                <option value="all">All categories</option>

                <option value="weight-loss">Weight Loss</option>

                <option value="longevity">Longevity</option>

                <option value="recovery">Recovery</option>

                <option value="mens-health">Men's Health</option>

                <option value="womens-health">Women's Health</option>

                <option value="hair">Hair</option>

                <option value="skincare">Skincare</option>

                <option value="sexual-wellness">Sexual Wellness</option>

                <option value="sleep">Sleep</option>

                <option value="mental-health">Mental Health</option>

                <option value="hormone">Hormone</option>

              </select>

              <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)} aria-label="Sort products">

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
            <p className="pharm-catalog-hint">Browse collections above, or search / filter to view the full pharmacy catalog.</p>
          ) : (
            <div className="pharm-product-grid pharm-product-grid-all pharm-collection-grid">
              {products.map((p, i) => (
                <PharmacyProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          )}

          {!showCollections && products.length === 0 ? (

            <p className="pharm-empty">No products match your search. Try another category.</p>

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

