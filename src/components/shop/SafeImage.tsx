import { useCallback, useRef } from "react";
import { resolveImagePath, type ResolvedImage } from "../../lib/imageFallback";

type Props = {
  path: string;
  alt?: string;
  className?: string;
  loading?: "lazy" | "eager";
  extraFallbacks?: string[];
  resolved?: ResolvedImage;
};

/**
 * Loads JPG first (always on disk) with optional webp <source>.
 * Chains through fallbacks on error — no broken images, fewer console 404s.
 */
export function SafeImage({
  path,
  alt = "",
  className = "",
  loading = "lazy",
  extraFallbacks = [],
  resolved,
}: Props) {
  const attempt = useRef(0);
  const img = resolved ?? resolveImagePath(path, extraFallbacks);

  const onError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const el = e.currentTarget;
      attempt.current += 1;
      const next = img.chain[attempt.current];
      if (next && el.src !== next) {
        el.src = next;
      }
    },
    [img.chain],
  );

  return (
    <picture>
      {img.webp ? <source srcSet={img.webp} type="image/webp" /> : null}
      <img
        src={img.src}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        onError={onError}
      />
    </picture>
  );
}
