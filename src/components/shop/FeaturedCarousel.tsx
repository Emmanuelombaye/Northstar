"use client";

import { Link } from "@/lib/routerAdapter";
import { PHARMACY_PRODUCTS, formatPrice } from "../../store/products";
import { SafeImage } from "./SafeImage";

const featured = PHARMACY_PRODUCTS.filter((p) => p.popular).slice(0, 6);

export function FeaturedCarousel() {
  const items = [...featured, ...featured];

  return (
    <section className="shop-featured" data-reveal>
      <div className="shop-wrap">
        <div className="shop-section-head">
          <p className="eyebrow">Featured programs</p>
          <h2>Physician favorites</h2>
        </div>
      </div>
      <div className="shop-featured-track-wrap">
        <div className="shop-featured-track">
          {items.map((p, i) => (
            <Link key={`${p.slug}-${i}`} to={`/shop/product/${p.slug}`} className="shop-featured-slide">
              <SafeImage path={p.image} alt="" extraFallbacks={p.imageFallback ? [p.imageFallback] : []} />
              <div className="shop-featured-slide-body">
                <span>{p.categoryLabel}</span>
                <strong>{p.name}</strong>
                <em>{formatPrice(p.priceMonthly)}</em>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
