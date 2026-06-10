import { shop } from "../lib/shop";
import { CATEGORY_LABELS, PHARMACY_CATALOG, PLAN_INCLUDES } from "./catalog";
import { applyProductVisuals } from "./productVisuals";
import type { PharmacyProduct, StoreCategory } from "./types";

export { PLAN_INCLUDES };

export const PHARMACY_PRODUCTS = PHARMACY_CATALOG.map(applyProductVisuals);

export const STORE_CATEGORIES: { id: StoreCategory | "all"; label: string; icon: string }[] = [
  { id: "all", label: "All treatments", icon: "✦" },
  { id: "weight-loss", label: CATEGORY_LABELS["weight-loss"], icon: "◈" },
  { id: "mens-health", label: CATEGORY_LABELS["mens-health"], icon: "◆" },
  { id: "hair", label: CATEGORY_LABELS.hair, icon: "◉" },
  { id: "skincare", label: CATEGORY_LABELS.skincare, icon: "○" },
  { id: "sexual-wellness", label: CATEGORY_LABELS["sexual-wellness"], icon: "◐" },
  { id: "hormone", label: CATEGORY_LABELS.hormone, icon: "◓" },
];

function enroll(p: Pick<PharmacyProduct, "peakProduct" | "peakCategory" | "category">): string {
  if (p.peakProduct) return shop.product(p.peakProduct);
  if (p.peakCategory) return shop.category(p.peakCategory);
  return shop.category(p.category);
}

export function getProductBySlug(slug: string): PharmacyProduct | undefined {
  return PHARMACY_PRODUCTS.find((p) => p.slug === slug);
}

export function getProductEnrollUrl(p: PharmacyProduct): string {
  return enroll(p);
}

export function formatPrice(n: number): string {
  if (n === 0) return "Free consult";
  return `$${n}/mo`;
}

export function toCartItem(p: PharmacyProduct) {
  return {
    slug: p.slug,
    name: p.name,
    priceMonthly: p.priceMonthly,
    image: p.image,
    peakProduct: p.peakProduct,
    peakCategory: p.peakCategory,
  };
}

export const PRODUCT_COUNT = PHARMACY_PRODUCTS.length;
