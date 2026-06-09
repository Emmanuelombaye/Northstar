import { resolveProductPrimary, resolveProductSecondary } from "./imageFallback";
import type { PharmacyProduct } from "../store/types";

export type ProductImagePair = {
  primary: string;
  primaryFallback: string;
  secondary: string;
  secondaryFallback: string;
};

/** Product card / PDP image pair — JPG/PNG only */
export function getProductImagePair(product: PharmacyProduct): ProductImagePair {
  const a = resolveProductPrimary(product);
  const b = resolveProductSecondary(product);

  const same = a.src === b.src;
  return {
    primary: a.src,
    primaryFallback: a.chain[1] ?? a.src,
    secondary: same ? a.src : b.src,
    secondaryFallback: same ? (a.chain[1] ?? a.src) : (b.chain[1] ?? b.src),
  };
}
