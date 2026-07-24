"use client";

import type { CSSProperties } from "react";
import { Link, useNavigate } from "@/lib/routerAdapter";
import { discountPercent, isPrescription } from "../../lib/productDiscount";

import { useCartContext } from "../../context/CartContext";
import { useWishlistContext } from "../../context/WishlistContext";
import { useCheckoutContext } from "../../context/CheckoutContext";
import { formatPrice } from "../../store/products";
import type { PharmacyProduct } from "../../store/types";
import { ProductImageFlip } from "./ProductImageFlip";

type Props = {
  product: PharmacyProduct;
  index?: number;
  compact?: boolean;
};

export function PharmacyProductCard({ product, index = 0, compact = false }: Props) {
  const navigate = useNavigate();
  const { add } = useCartContext();
  const { startCheckout } = useCheckoutContext();
  const { toggle, has } = useWishlistContext();

  const pct = discountPercent(product);

  const rx = isPrescription(product);

  const wished = has(product.slug);

  return (
    <article
      className={`pharm-card${compact ? " pharm-card-compact" : ""}`}
      style={{ "--reveal-delay": `${Math.min(index * 45, 400)}ms`, "--card-i": index, cursor: "pointer" } as CSSProperties}
      onClick={() => navigate(`/shop/product/${product.slug}`)}
    >

      <div className="pharm-card-badges">

        {pct ? <span className="pharm-discount-badge">{pct}%</span> : null}

        {rx ? <span className="pharm-rx-badge">Rx</span> : null}

      </div>



      <button
        type="button"
        className={`pharm-wishlist${wished ? " is-active" : ""}`}
        aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
        onClick={(e) => {
          e.stopPropagation();
          toggle(product.slug);
        }}
      >

        <svg viewBox="0 0 24 24" fill={wished ? "currentColor" : "none"} aria-hidden="true">

          <path

            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"

            stroke="currentColor"

            strokeWidth="1.4"

          />

        </svg>

      </button>



      <Link to={`/shop/product/${product.slug}`} className="pharm-card-media">

        <ProductImageFlip product={product} />

      </Link>



      <div className="pharm-card-body">

        <p className="pharm-card-vendor">{product.vendor ?? "North Star MD Pharmacy"}</p>

        <Link to={`/shop/product/${product.slug}`}>

          <h3>{product.name}</h3>

        </Link>

        {product.dosageForm ? (
          <p className="pharm-card-form">
            {product.dosageForm}
            {product.strength ? ` · ${product.strength}` : ""}
          </p>
        ) : null}

        <div className="pharm-card-price">

          {product.priceMonthly > 0 ? <span className="pharm-price-from">From</span> : null}

          <strong>{formatPrice(product.priceMonthly)}</strong>

          {product.compareAtPrice ? <s className="pharm-price-compare">${product.compareAtPrice}</s> : null}

        </div>

        {!compact ? (
          <div className="pharm-card-actions">
            <button 
              type="button" 
              className="pharm-enroll-btn" 
              onClick={(e) => {
                e.stopPropagation();
                startCheckout(product.slug);
              }}
            >
              Enroll now
            </button>
            <button 
              type="button" 
              className="pharm-add-btn" 
              onClick={(e) => {
                e.stopPropagation();
                add(product.slug);
              }}
            >
              + Cart
            </button>
          </div>
        ) : null}

      </div>

    </article>

  );

}

