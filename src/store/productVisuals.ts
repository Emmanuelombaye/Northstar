/** Per-product unique image URLs + Shopify copy + pharmacy metadata */

import { getCatalogCopy } from "./catalogCopy";
import { getProductImageUrls } from "./productImageUrls";
import { getShopifyMeta } from "./shopifyMeta";
import type { StoreCategory } from "./types";

function localSlugImage(slug: string, suffix = ""): { primary: string; alt: string } {
  const base = `/images/products/${slug}${suffix}`;
  return { primary: `${base}.jpg`, alt: `${base}.jpg` };
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
  const urls = getProductImageUrls(product.slug);
  const local = localSlugImage(product.slug);

  const primary = urls?.primary ?? local.primary;
  const alt = urls?.alt ?? localSlugImage(product.slug, "-alt").primary;

  return {
    ...product,
    name: copy?.name ?? product.name,
    tagline: copy?.tagline ?? product.tagline,
    description: copy?.description ?? product.description,
    longDescription: copy?.longDescription ?? product.longDescription,
    image: primary,
    imageFallback: urls?.primary ?? primary,
    imageAlt: alt,
    imageAltFallback: urls?.alt ?? alt,
    dosageForm: meta.dosageForm,
    strength: meta.strength,
    vendor: meta.vendor,
  };
}
