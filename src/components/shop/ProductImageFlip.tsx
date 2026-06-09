import { useCallback, useEffect, useRef, useState } from "react";
import { resolveProductPrimary, resolveProductSecondary } from "../../lib/imageFallback";
import { getProductImagePair } from "../../lib/productImages";
import type { PharmacyProduct } from "../../store/types";

type FlipImgProps = {
  resolved: ReturnType<typeof resolveProductPrimary>;
  className: string;
  alt: string;
};

function FlipImg({ resolved, className, alt }: FlipImgProps) {
  const attempt = useRef(0);

  const onError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      attempt.current += 1;
      const next = resolved.chain[attempt.current];
      if (next && e.currentTarget.src !== next) {
        const el = e.currentTarget;
        const picture = el.parentElement;
        if (picture && picture.tagName.toLowerCase() === "picture") {
          const sources = picture.getElementsByTagName("source");
          for (let i = 0; i < sources.length; i++) {
            sources[i].srcset = "";
          }
        }
        el.src = next;
      }
    },
    [resolved.chain],
  );

  const external = resolved.src.startsWith("http");

  return (
    <picture>
      {!external && resolved.webp ? <source srcSet={resolved.webp} type="image/webp" /> : null}
      <img
        className={className}
        src={resolved.src}
        alt={alt}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={onError}
      />
    </picture>
  );
}

type Props = {
  product: PharmacyProduct;
  className?: string;
  autoPlay?: boolean;
};

/** Dual-image crossfade with JPG-first loading (no webp 404 console errors) */
export function ProductImageFlip({ product, className = "", autoPlay = true }: Props) {
  const pair = getProductImagePair(product);
  const primary = resolveProductPrimary(product);
  const secondary = resolveProductSecondary(product);
  const [showB, setShowB] = useState(false);
  const [hover, setHover] = useState(false);

  const same = pair.primary === pair.secondary;

  useEffect(() => {
    if (!autoPlay || same) return;
    const ms = hover ? 1400 : 2800;
    const id = window.setInterval(() => setShowB((v) => !v), ms);
    return () => window.clearInterval(id);
  }, [autoPlay, hover, same]);

  return (
    <div
      className={`pharm-img-flip${showB && !same ? " is-alt" : ""}${hover ? " is-hover" : ""} ${className}`.trim()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setShowB(false);
      }}
    >
      <FlipImg resolved={primary} className="pharm-img-flip-a" alt={product.name} />
      {!same ? (
        <FlipImg resolved={secondary} className="pharm-img-flip-b" alt="" />
      ) : null}
      <span className="pharm-img-flip-shine" aria-hidden="true" />
    </div>
  );
}
