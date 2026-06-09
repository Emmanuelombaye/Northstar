import { getPharmacyImages } from "../store/pharmacyImages";
import type { PharmacyProduct } from "../store/types";

export type ResolvedImage = {
  src: string;
  webp?: string;
  chain: string[];
};

export function isExternalUrl(path: string): boolean {
  return /^https?:\/\//i.test(path);
}

/** Best on-disk raster path: prefer jpg, then png, then webp-derived jpg */
export function toRaster(path: string): string {
  if (isExternalUrl(path)) return path;
  if (path.endsWith(".jpg") || path.endsWith(".png")) return path;
  if (path.endsWith(".webp")) return path.replace(/\.webp$/, ".jpg");
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
  if (isExternalUrl(path)) return path;
  if (path.endsWith(".jpg") || path.endsWith(".png")) return path;
  if (path.endsWith(".webp")) {
    const base = path.slice(0, -5);
    return `${base}.jpg`;
  }
  return path;
}

export function resolveImagePath(path: string, extra: string[] = []): ResolvedImage {
  if (isExternalUrl(path)) {
    const chain = unique([path, ...extra.filter(isExternalUrl)]);
    return { src: path, chain };
  }

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
    pharm.primary.jpg,
    pharm.primary.webp,
  ].filter(Boolean) as string[];

  const base = product.image || product.imageFallback || toJpg(`/images/products/${product.slug}`);
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
  ].filter(Boolean) as string[];

  const base =
    product.imageAlt ||
    product.imageAltFallback ||
    product.image ||
    toJpg(`/images/products/${product.slug}-alt`);
  return resolveImagePath(base, extra);
}
