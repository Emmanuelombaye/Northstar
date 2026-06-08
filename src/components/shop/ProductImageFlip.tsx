import { useEffect, useState } from "react";
import { getProductImagePair } from "../../lib/productImages";
import type { PharmacyProduct } from "../../store/types";

type Props = {
  product: PharmacyProduct;
  className?: string;
  autoPlay?: boolean;
};

/** Dual-image crossfade — Pablo-style alternating product photos */
export function ProductImageFlip({ product, className = "", autoPlay = true }: Props) {
  const pair = getProductImagePair(product);
  const [showB, setShowB] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!autoPlay || pair.primary === pair.secondary) return;
    const ms = hover ? 1400 : 2800;
    const id = window.setInterval(() => setShowB((v) => !v), ms);
    return () => window.clearInterval(id);
  }, [autoPlay, hover, pair.primary, pair.secondary]);

  const same = pair.primary === pair.secondary;

  return (
    <div
      className={`pharm-img-flip${showB && !same ? " is-alt" : ""}${hover ? " is-hover" : ""} ${className}`.trim()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setShowB(false);
      }}
    >
      <img
        className="pharm-img-flip-a"
        src={pair.primary}
        data-fallback={pair.primaryFallback}
        alt={product.name}
        loading="lazy"
        decoding="async"
      />
      {!same ? (
        <img
          className="pharm-img-flip-b"
          src={pair.secondary}
          data-fallback={pair.secondaryFallback}
          alt=""
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
      ) : null}
      <span className="pharm-img-flip-shine" aria-hidden="true" />
    </div>
  );
}
