import { useMemo, useState } from "react";

import { ShopMarquee } from "../components/shop/ShopMarquee";

import { ShopHero } from "../components/shop/ShopHero";

import { FeaturedCarousel } from "../components/shop/FeaturedCarousel";

import { ProductCard } from "../components/shop/ProductCard";

import { ShopTrust } from "../components/shop/ShopTrust";

import { CartDrawer } from "../components/shop/CartDrawer";

import { PHARMACY_PRODUCTS, PRODUCT_COUNT, STORE_CATEGORIES } from "../store/products";

import type { SortKey, StoreCategory } from "../store/types";

import { useMediaLoader } from "../hooks/useMediaLoader";

import { useScrollReveal } from "../hooks/useScrollReveal";



export function ShopPage() {

  const [category, setCategory] = useState<StoreCategory | "all">("all");

  const [query, setQuery] = useState("");

  const [sort, setSort] = useState<SortKey>("featured");



  const products = useMemo(() => {

    let list = [...PHARMACY_PRODUCTS];

    if (category !== "all") list = list.filter((p) => p.category === category);

    const q = query.trim().toLowerCase();

    if (q) {

      list = list.filter(

        (p) =>

          p.name.toLowerCase().includes(q) ||

          p.tagline.toLowerCase().includes(q) ||

          p.categoryLabel.toLowerCase().includes(q),

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

        list.sort((a, b) => Number(b.popular) - Number(a.popular) || b.reviews - a.reviews);

    }

    return list;

  }, [category, query, sort]);



  useMediaLoader([category, query, sort]);

  useScrollReveal([category, query, sort, products.length]);



  return (

    <main className="shop-page shop-page-premium">

      <ShopMarquee />

      <ShopHero />

      <FeaturedCarousel />



      <section id="catalog" className="shop-catalog">

        <div className="shop-wrap shop-catalog-layout">

          <aside className="shop-sidebar" data-reveal>

            <p className="shop-sidebar-label">Categories</p>

            <nav className="shop-sidebar-nav" aria-label="Product categories">

              {STORE_CATEGORIES.map((c) => (

                <button

                  key={c.id}

                  type="button"

                  className={`shop-sidebar-btn${category === c.id ? " is-active" : ""}`}

                  onClick={() => setCategory(c.id)}

                >

                  <span className="shop-sidebar-icon">{c.icon}</span>

                  {c.label}

                </button>

              ))}

            </nav>

          </aside>



          <div className="shop-main">

            <div className="shop-toolbar shop-toolbar-premium" data-reveal>

              <div className="shop-search-wrap">

                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">

                  <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.4" />

                  <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />

                </svg>

                <input

                  type="search"

                  placeholder="Search treatments…"

                  value={query}

                  onChange={(e) => setQuery(e.target.value)}

                  aria-label="Search treatments"

                />

              </div>

              <div className="shop-toolbar-meta">

                <label className="shop-sort">

                  <span>Sort</span>

                  <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>

                    <option value="featured">Featured</option>
                    <option value="newest">New arrivals</option>

                    <option value="price-asc">Price: low to high</option>

                    <option value="price-desc">Price: high to low</option>

                    <option value="rating">Top rated</option>

                    <option value="name">A–Z</option>

                  </select>

                </label>

                <p className="shop-count">
                  {products.length} of {PRODUCT_COUNT} program{PRODUCT_COUNT === 1 ? "" : "s"}
                </p>

              </div>

            </div>



            <div className="shop-grid shop-grid-premium">

              {products.map((product, i) => (

                <ProductCard key={product.slug} product={product} index={i} />

              ))}

            </div>



            {products.length === 0 ? (

              <p className="shop-empty" data-reveal>

                No treatments match your search. Try another category or clear filters.

              </p>

            ) : null}

          </div>

        </div>

      </section>



      <ShopTrust />

      <CartDrawer />

    </main>

  );

}

