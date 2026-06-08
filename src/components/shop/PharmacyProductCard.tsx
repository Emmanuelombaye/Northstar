import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { discountPercent, isPrescription } from "../../lib/productDiscount";
import { useCartContext } from "../../context/CartContext";
import { useWishlistContext } from "../../context/WishlistContext";
import { formatPrice } from "../../store/products";
import type { PharmacyProduct } from "../../store/types";

type Props = {
  product: PharmacyProduct;
  index?: number;
  compact?: boolean;
};

export function PharmacyProductCard({ product, index = 0, compact = false }: Props) {
  const { add } = useCartContext();
  const { toggle, has } = useWishlistContext();
  const pct = discountPercent(product);
  const rx = isPrescription(product);
  const wished = has(product.slug);

  return (
    <article
      className={`pharm-card${compact ? " pharm-card-compact" : ""}`}
      data-reveal
      style={{ "--reveal-delay": `${Math.min(index * 50, 300)}ms` } as CSSProperties}
    >
      <div className="pharm-card-badges">
        {pct ? <span className="pharm-discount-badge">{pct}%</span> : null}
        {rx ? <span className="pharm-rx-badge">Rx</span> : null}
      </div>

      <button
        type="button"
        className={`pharm-wishlist${wished ? " is-active" : ""}`}
        aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
        onClick={() => toggle(product.slug)}
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
        <img
          src={product.image}
          data-fallback={product.imageFallback}
          alt={product.name}
          loading="lazy"
          decoding="async"
        />
      </Link>

      <div className="pharm-card-body">
        <Link to={`/shop/product/${product.slug}`}>
          <h3>{product.name}</h3>
        </Link>
        <div className="pharm-card-price">
          <strong>{formatPrice(product.priceMonthly)}</strong>
          {product.compareAtPrice ? <s>${product.compareAtPrice}/mo</s> : null}
        </div>
        {!compact ? (
          <button type="button" className="pharm-add-btn" onClick={() => add(product.slug)}>
            Add to cart
          </button>
        ) : null}
      </div>
    </article>
  );
}
