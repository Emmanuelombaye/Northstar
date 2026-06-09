/** Per-product labeled pharmacy mockup images + Shopify copy */

import { getCatalogCopy } from "./catalogCopy";
import { getShopifyMeta } from "./shopifyMeta";
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
  const meta = getShopifyMeta(product.slug, product.category);
  const copy = getCatalogCopy(product.slug);

  return {
    ...product,
    name: copy?.name ?? product.name,
    tagline: copy?.tagline ?? product.tagline,
    description: copy?.description ?? product.description,
    longDescription: copy?.longDescription ?? product.longDescription,
    image: localImage(product.slug),
    imageFallback: localImage(product.slug),
    imageAlt: localImage(product.slug, "-alt"),
    imageAltFallback: localImage(product.slug, "-alt"),
    dosageForm: meta.dosageForm,
    strength: meta.strength,
    vendor: meta.vendor,
  };
}
