import type { PharmacyProduct } from "../store/types";

export function discountPercent(product: PharmacyProduct): number | null {
  if (!product.compareAtPrice || product.priceMonthly <= 0) return null;
  if (product.priceMonthly >= product.compareAtPrice) return null;
  return Math.round((1 - product.priceMonthly / product.compareAtPrice) * 1000) / 10;
}

export function isPrescription(product: PharmacyProduct): boolean {
  return product.priceMonthly > 0 && product.category !== "sleep";
}
