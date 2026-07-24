"use client";

import type { CSSProperties } from "react";
import { Link } from "@/lib/routerAdapter";
import type { PharmacyProduct } from "../../store/types";
import { formatPrice } from "../../store/products";
import { useCartContext } from "../../context/CartContext";
import { SafeImage } from "./SafeImage";

type Props = {
  product: PharmacyProduct;
  index?: number;
};

export function ProductCard({ product, index = 0 }: Props) {
  const { add } = useCartContext();
  const delay = Math.min(index * 60, 360);

  return (
    <article
      className="shop-card shop-card-premium"
      data-reveal
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {product.badge ? <span className="shop-badge">{product.badge}</span> : null}
      {product.newArrival ? <span className="shop-badge shop-badge-new">New</span> : null}
      {!product.inStock ? <span className="shop-badge shop-badge-muted">Waitlist</span> : null}

      <Link to={`/shop/product/${product.slug}`} className="shop-card-media-link">
        <div className="shop-card-media">
          <div className="shop-card-shine" aria-hidden="true" />
          <SafeImage path={product.image} alt={product.name} extraFallbacks={product.imageFallback ? [product.imageFallback] : []} />
        </div>
      </Link>

      <div className="shop-card-body">
        <p className="shop-card-category">{product.categoryLabel}</p>
        <Link to={`/shop/product/${product.slug}`}>
          <h2>{product.name}</h2>
        </Link>
        <p className="shop-card-tagline">{product.tagline}</p>
        <div className="shop-card-rating" aria-label={`Rated ${product.rating} out of 5`}>
          <span className="shop-stars" aria-hidden="true">
            {"★".repeat(Math.round(product.rating))}
            {"☆".repeat(5 - Math.round(product.rating))}
          </span>
          <span>({product.reviews.toLocaleString()})</span>
        </div>
        <div className="shop-card-pricing">
          <p className="shop-card-price">{formatPrice(product.priceMonthly)}</p>
          {product.compareAtPrice ? (
            <p className="shop-card-compare">${product.compareAtPrice}/mo</p>
          ) : null}
        </div>
        <div className="shop-card-actions">
          <button
            type="button"
            className="btn btn-ghost btn-pill shop-btn-add"
            onClick={() => add(product.slug)}
          >
            Add to cart
          </button>
          <Link to={`/shop/product/${product.slug}`} className="btn btn-navy btn-pill shop-btn-view">
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
