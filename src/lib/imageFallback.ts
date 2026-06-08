import { getPharmacyImages } from "../store/pharmacyImages";
import type { PharmacyProduct } from "../store/types";

export type ResolvedImage = {
  /** Always use this as <img src> — avoids webp 404 noise in the console */
  src: string;
  /** Optional <source type="image/webp"> */
  webp?: string;
  /** Ordered chain for onerror (jpg → webp → pharmacy store) */
  chain: string[];
};

/** Best on-disk raster path: prefer jpg, then png, then webp-derived jpg */
export function toRaster(path: string): string {
  if (path.endsWith(".jpg") || path.endsWith(".png")) return path;
  if (path.endsWith(".webp")) return path.replace(/\.webp$/, ".jpg");
  return `${path}.jpg`;
}

/** @deprecated alias */
export function toJpg(path: string): string {
  return toRaster(path);
}

export function toWebp(path: string): string {
  if (path.endsWith(".webp")) return path;
  return path.replace(/\.(jpg|png)$/, ".webp");
}

function unique(paths: string[]): string[] {
  return paths.filter((p, i) => p && paths.indexOf(p) === i);
}

/** Resolve any /images/ path to jpg-first with fallbacks */
export function toDisplayPath(path: string): string {
  if (path.endsWith(".jpg") || path.endsWith(".png")) return path;
  if (path.endsWith(".webp")) {
    const base = path.slice(0, -5);
    return `${base}.jpg`;
  }
  return path;
}

export function resolveImagePath(path: string, extra: string[] = []): ResolvedImage {
  const base = path.replace(/\.(webp|jpg|png)$/, "");
  const jpg = `${base}.jpg`;
  const png = `${base}.png`;
  const webp = `${base}.webp`;
  const src = path.endsWith(".jpg") || path.endsWith(".png") ? path : jpg;
  const chain = unique([
    src,
    jpg,
    png,
    webp,
    path,
    ...extra,
    "/images/store/vial-pharmacy.jpg",
    "/images/store/vial-pharmacy.webp",
  ]);
  return { src, webp: webp !== src ? webp : undefined, chain };
}

export function resolveProductPrimary(product: PharmacyProduct): ResolvedImage {
  const pharm = getPharmacyImages(product.slug, product.category);
  const extra = [
    product.image,
    product.imageFallback,
    product.imageAlt,
    product.imageAltFallback,
    pharm.primary.jpg,
    pharm.primary.webp,
    pharm.alt.jpg,
    pharm.alt.webp,
  ];
  const base = product.imageFallback ?? toJpg(product.image);
  return resolveImagePath(base, extra);
}

export function resolveProductSecondary(product: PharmacyProduct): ResolvedImage {
  const pharm = getPharmacyImages(product.slug, product.category);
  const extra = [
    product.imageAlt,
    product.imageAltFallback,
    product.image,
    product.imageFallback,
    pharm.alt.jpg,
    pharm.alt.webp,
    pharm.primary.jpg,
  ];
  const base = product.imageAltFallback ?? toJpg(product.imageAlt ?? product.image);
  return resolveImagePath(base, extra);
}
