import { getPharmacyImages } from "../store/pharmacyImages";
import type { PharmacyProduct } from "../store/types";

export type ResolvedImage = {
  src: string;
  chain: string[];
};

export function isExternalUrl(path: string): boolean {
  return /^https?:\/\//i.test(path);
}

/** Map to on-disk raster (products/store → jpg; brand heroes → png). Never load .webp in the browser. */
export function toRaster(path: string): string {
  if (isExternalUrl(path)) return path;
  if (/\.(jpe?g|png)$/i.test(path)) return path;
  if (path.endsWith(".webp")) {
    if (path.includes("/images/products/") || path.includes("/images/store/")) {
      return path.replace(/\.webp$/i, ".jpg");
    }
    return path.replace(/\.webp$/i, ".png");
  }
  return `${path}.jpg`;
}

export function toJpg(path: string): string {
  return toRaster(path);
}

export function toWebp(path: string): string {
  if (isExternalUrl(path)) return path;
  if (path.endsWith(".webp")) return path;
  return path.replace(/\.(jpg|png)$/, ".webp");
}

function unique(paths: string[]): string[] {
  return paths.filter((p, i) => p && paths.indexOf(p) === i);
}

export function toDisplayPath(path: string): string {
  return toRaster(path);
}

/** JPG/PNG only — never advertises webp (prevents console 404 on refresh). */
export function resolveImagePath(path: string, extra: string[] = []): ResolvedImage {
  if (isExternalUrl(path)) {
    const chain = unique([path, ...extra.filter(isExternalUrl)]);
    return { src: path, chain };
  }

  const base = path.replace(/\.(webp|jpg|png)$/, "");
  const jpg = `${base}.jpg`;
  const png = `${base}.png`;
  const src = path.endsWith(".jpg") || path.endsWith(".png") ? path : jpg;
  const chain = unique([
    src,
    jpg,
    png,
    ...extra.map(toRaster),
    "/images/store/vial-pharmacy.jpg",
  ]);
  return { src, chain };
}

export function resolveProductPrimary(product: PharmacyProduct): ResolvedImage {
  const pharm = getPharmacyImages(product.slug, product.category);
  const extra = [
    product.image,
    product.imageFallback,
    product.imageAlt,
    pharm.primary.jpg,
  ]
    .filter(Boolean)
    .map((p) => toRaster(p as string));

  const base =
    (product.image && toRaster(product.image)) ||
    (product.imageFallback && toRaster(product.imageFallback)) ||
    `/images/products/${product.slug}.jpg`;
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
  ]
    .filter(Boolean)
    .map((p) => toRaster(p as string));

  const base =
    (product.imageAlt && toRaster(product.imageAlt)) ||
    (product.imageAltFallback && toRaster(product.imageAltFallback)) ||
    (product.image && toRaster(product.image)) ||
    `/images/products/${product.slug}-alt.jpg`;
  return resolveImagePath(base, extra);
}
