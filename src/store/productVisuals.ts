/** Per-product labeled pharmacy mockup images + North Star MD copy */

import { getCatalogCopy } from "./catalogCopy";
import { getCatalogMeta } from "./shopifyMeta";
import { PRODUCT_IMAGE_URLS } from "./productImageUrls";
import type { StoreCategory } from "./types";

function localImage(slug: string, suffix = ""): string {
  return `/images/products/${slug}${suffix}.jpg`;
}

export function applyProductVisuals<
  T extends {
    slug: string;
    category: StoreCategory;
    name: string;
    tagline: string;
    description: string;
    longDescription: string;
    image: string;
    imageFallback?: string;
    imageAlt?: string;
    imageAltFallback?: string;
    dosageForm?: string;
    strength?: string;
    vendor?: string;
  },
>(product: T): T {
  const meta = getCatalogMeta(product.slug, product.category);
  const copy = getCatalogCopy(product.slug);
  const urls = PRODUCT_IMAGE_URLS[product.slug];

  return {
    ...product,
    dosageForm: meta.dosageForm,
    strength: meta.strength,
    vendor: meta.vendor,
  };
}
