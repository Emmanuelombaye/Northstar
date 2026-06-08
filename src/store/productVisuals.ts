/** Per-slug product images + Shopify copy + pharmacy metadata */

import { getCatalogCopy } from "./catalogCopy";
import { getPharmacyImages } from "./pharmacyImages";
import { getShopifyMeta } from "./shopifyMeta";
import type { StoreCategory } from "./types";

const BRAND_HERO_SLUGS = new Set([
  "tirzepatide-plus",
  "semaglutide-plus",
  "nad-rejuvenation",
  "sermorelin-recovery",
]);

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
  const fallback = getPharmacyImages(product.slug, product.category);

  const useBrandHero = BRAND_HERO_SLUGS.has(product.slug);
  const primary = useBrandHero ? fallback.primary : slugImage(product.slug);
  const alt = useBrandHero ? fallback.alt : slugImage(product.slug, "-alt");

  return {
    ...product,
    name: copy?.name ?? product.name,
    tagline: copy?.tagline ?? product.tagline,
    description: copy?.description ?? product.description,
    longDescription: copy?.longDescription ?? product.longDescription,
    image: primary.webp,
    imageFallback: primary.jpg,
    imageAlt: alt.webp,
    imageAltFallback: alt.jpg,
    dosageForm: meta.dosageForm,
    strength: meta.strength,
    vendor: meta.vendor,
  };
}
