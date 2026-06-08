/** Per-slug product images + Shopify copy + pharmacy metadata */

import { getCatalogCopy } from "./catalogCopy";
import { getShopifyMeta } from "./shopifyMeta";
import type { StoreCategory } from "./types";

function slugImage(slug: string, suffix = ""): { webp: string; jpg: string } {
  const base = `/images/products/${slug}${suffix}`;
  return { webp: `${base}.webp`, jpg: `${base}.jpg` };
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
  const primary = slugImage(product.slug);
  const alt = slugImage(product.slug, "-alt");

  return {
    ...product,
    name: copy?.name ?? product.name,
    tagline: copy?.tagline ?? product.tagline,
    description: copy?.description ?? product.description,
    longDescription: copy?.longDescription ?? product.longDescription,
    // JPG primary — always exists after build; webp is enhancement only
    image: primary.jpg,
    imageFallback: primary.webp,
    imageAlt: alt.jpg,
    imageAltFallback: alt.webp,
    dosageForm: meta.dosageForm,
    strength: meta.strength,
    vendor: meta.vendor,
  };
}
