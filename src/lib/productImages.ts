import type { PharmacyProduct, StoreCategory } from "../store/types";

/** Second image per category when product has no gallery / imageAlt */
const CATEGORY_ALT: Record<StoreCategory, string> = {
  "weight-loss": "/images/weight-loss-card.webp",
  longevity: "/images/longevity-card.webp",
  recovery: "/images/muscle-recovery-card.webp",
  "mens-health": "/images/clinical-draw.webp",
  "womens-health": "/images/store/womens-wellness.webp",
  hair: "/images/store/hair-treatment.webp",
  skincare: "/images/store/skincare-cream.webp",
  "sexual-wellness": "/images/product-box.webp",
  sleep: "/images/store/sleep-rest.webp",
  "mental-health": "/images/store/mental-calm.webp",
  hormone: "/images/store/hormone-lab.webp",
};

const CATEGORY_ALT_FB: Record<StoreCategory, string> = {
  "weight-loss": "/images/weight-loss-card.png",
  longevity: "/images/longevity-card.png",
  recovery: "/images/muscle-recovery-card.png",
  "mens-health": "/images/clinical-draw.png",
  "womens-health": "/images/store/womens-wellness.jpg",
  hair: "/images/store/hair-treatment.jpg",
  skincare: "/images/store/skincare-cream.jpg",
  "sexual-wellness": "/images/product-box.png",
  sleep: "/images/store/sleep-rest.jpg",
  "mental-health": "/images/store/mental-calm.jpg",
  hormone: "/images/store/hormone-lab.jpg",
};

export type ProductImagePair = {
  primary: string;
  primaryFallback?: string;
  secondary: string;
  secondaryFallback?: string;
};

export function getProductImagePair(product: PharmacyProduct): ProductImagePair {
  const secondary =
    product.imageAlt ?? product.gallery?.[0] ?? CATEGORY_ALT[product.category] ?? product.image;
  const secondaryFallback =
    product.imageAltFallback ?? product.gallery?.[1] ?? CATEGORY_ALT_FB[product.category];

  return {
    primary: product.image,
    primaryFallback: product.imageFallback,
    secondary,
    secondaryFallback: secondaryFallback !== secondary ? secondaryFallback : product.imageFallback,
  };
}
