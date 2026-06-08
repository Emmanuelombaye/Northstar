import { resolveProductPrimary, resolveProductSecondary } from "./imageFallback";
import type { PharmacyProduct } from "../store/types";

export type ProductImagePair = {
  primary: string;
  primaryWebp?: string;
  primaryFallback: string;
  secondary: string;
  secondaryWebp?: string;
  secondaryFallback: string;
};

/** Product card / PDP image pair — JPG primary to avoid webp 404 console errors */
export function getProductImagePair(product: PharmacyProduct): ProductImagePair {
  const a = resolveProductPrimary(product);
  const b = resolveProductSecondary(product);

  const same = a.src === b.src;
  return {
    primary: a.src,
    primaryWebp: a.webp,
    primaryFallback: a.chain[1] ?? a.src,
    secondary: same ? a.src : b.src,
    secondaryWebp: same ? a.webp : b.webp,
    secondaryFallback: same ? (a.chain[1] ?? a.src) : (b.chain[1] ?? b.src),
  };
}
