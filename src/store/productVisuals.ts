/** Pharmacy-only product images — no lifestyle stock photos */

import { getPharmacyImages } from "./pharmacyImages";
import { getShopifyMeta } from "./shopifyMeta";
import type { StoreCategory } from "./types";

export function applyProductVisuals<
  T extends {
    slug: string;
    category: StoreCategory;
    image: string;
    imageFallback?: string;
    imageAlt?: string;
    imageAltFallback?: string;
    dosageForm?: string;
    strength?: string;
    vendor?: string;
  },
>(product: T): T {
  const pair = getPharmacyImages(product.slug, product.category);
  const meta = getShopifyMeta(product.slug, product.category);

  return {
    ...product,
    image: pair.primary.webp,
    imageFallback: pair.primary.jpg,
    imageAlt: pair.alt.webp,
    imageAltFallback: pair.alt.jpg,
    dosageForm: meta.dosageForm,
    strength: meta.strength,
    vendor: meta.vendor,
  };
}
