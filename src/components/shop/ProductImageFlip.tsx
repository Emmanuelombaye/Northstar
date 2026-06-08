import { useEffect, useRef, useState, type RefObject } from "react";
import { getProductImagePair } from "../../lib/productImages";
import type { PharmacyProduct } from "../../store/types";

function useImageFallback(ref: RefObject<HTMLImageElement | null>) {
  useEffect(() => {
    const img = ref.current;
    if (!img) return;
    const fallback = img.getAttribute("data-fallback");
    if (!fallback) return;
    const onError = () => {
      if (img.getAttribute("src") !== fallback) img.setAttribute("src", fallback);
    };
    img.addEventListener("error", onError);
    return () => img.removeEventListener("error", onError);
  }, [ref]);
}

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
  const imgARef = useRef<HTMLImageElement>(null);
  const imgBRef = useRef<HTMLImageElement>(null);
  useImageFallback(imgARef);
  useImageFallback(imgBRef);

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
        ref={imgARef}
        className="pharm-img-flip-a"
        src={pair.primary}
        data-fallback={pair.primaryFallback}
        alt={product.name}
        loading="lazy"
        decoding="async"
      />
      {!same ? (
        <img
          ref={imgBRef}
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
