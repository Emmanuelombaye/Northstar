/** North Star MD catalog display metadata — form, strength, vendor, sort order */

import type { PharmacyProduct, StoreCategory } from "./types";

export type CatalogMeta = {
  dosageForm: string;
  strength?: string;
  vendor: string;
  sortOrder: number;
};

const VENDOR = "North Star MD Pharmacy";

export const CATEGORY_SORT: StoreCategory[] = [
  "weight-loss",
  "mens-health",
  "hair",
  "skincare",
  "sexual-wellness",
  "hormone",
];

const META: Record<string, CatalogMeta> = {
  "tirzepatide-plus": { dosageForm: "Injection", strength: "2.5–15 mg weekly", vendor: VENDOR, sortOrder: 1 },
  "semaglutide-plus": { dosageForm: "Injection", strength: "0.25–2.4 mg weekly", vendor: VENDOR, sortOrder: 2 },
  "liraglutide-daily": { dosageForm: "Injection", strength: "0.6–3 mg daily", vendor: VENDOR, sortOrder: 3 },
  "metabolic-reset": { dosageForm: "Program", vendor: VENDOR, sortOrder: 4 },
  "phentermine-control": { dosageForm: "Tablet", strength: "37.5 mg", vendor: VENDOR, sortOrder: 5 },
  "contrave-bundle": { dosageForm: "Tablet", strength: "8/90 mg", vendor: VENDOR, sortOrder: 6 },
  "wegovy-pathway": { dosageForm: "Injection", strength: "Semaglutide 2.4 mg", vendor: VENDOR, sortOrder: 7 },
  "mounjaro-pathway": { dosageForm: "Injection", strength: "Tirzepatide 15 mg", vendor: VENDOR, sortOrder: 8 },
  "bmi-medical-program": { dosageForm: "Program", vendor: VENDOR, sortOrder: 9 },
  "weight-loss-starter": { dosageForm: "Kit", vendor: VENDOR, sortOrder: 10 },
  "glp1-maintenance": { dosageForm: "Injection", vendor: VENDOR, sortOrder: 11 },
  "metabolic-panel-addon": { dosageForm: "Lab Panel", vendor: VENDOR, sortOrder: 12 },

  "testosterone-trt": { dosageForm: "Injection", strength: "Cypionate 200 mg/mL", vendor: VENDOR, sortOrder: 1 },
  enclomiphene: { dosageForm: "Tablet", vendor: VENDOR, sortOrder: 2 },
  "hcg-trt-support": { dosageForm: "Injection", vendor: VENDOR, sortOrder: 3 },
  "anastrozole-estrogen": { dosageForm: "Tablet", strength: "1 mg", vendor: VENDOR, sortOrder: 4 },
  "dhea-mens": { dosageForm: "Capsule", vendor: VENDOR, sortOrder: 5 },
  "cialis-daily": { dosageForm: "Tablet", strength: "2.5–5 mg", vendor: VENDOR, sortOrder: 6 },
  "prostate-support": { dosageForm: "Protocol", vendor: VENDOR, sortOrder: 7 },
  "mens-vitality-panel": { dosageForm: "Lab Panel", vendor: VENDOR, sortOrder: 8 },

  finasteride: { dosageForm: "Tablet", strength: "1 mg", vendor: VENDOR, sortOrder: 1 },
  "minoxidil-topical": { dosageForm: "Topical", strength: "5%", vendor: VENDOR, sortOrder: 2 },
  "finasteride-minoxidil-duo": { dosageForm: "Bundle", vendor: VENDOR, sortOrder: 3 },
  dutasteride: { dosageForm: "Capsule", strength: "0.5 mg", vendor: VENDOR, sortOrder: 4 },
  "ketoconazole-scalp": { dosageForm: "Shampoo", strength: "2%", vendor: VENDOR, sortOrder: 5 },
  "biotin-hair-growth": { dosageForm: "Capsule", vendor: VENDOR, sortOrder: 6 },

  "tretinoin-005": { dosageForm: "Cream", strength: "0.05%", vendor: VENDOR, sortOrder: 1 },
  "anti-aging-cream": { dosageForm: "Cream", vendor: VENDOR, sortOrder: 2 },
  "hydroquinone-brightening": { dosageForm: "Cream", vendor: VENDOR, sortOrder: 3 },
  "azelaic-acid": { dosageForm: "Gel", strength: "15%", vendor: VENDOR, sortOrder: 4 },
  "clindamycin-acne": { dosageForm: "Gel", vendor: VENDOR, sortOrder: 5 },
  "vitamin-c-protocol": { dosageForm: "Serum", vendor: VENDOR, sortOrder: 6 },

  sildenafil: { dosageForm: "Tablet", strength: "50–100 mg", vendor: VENDOR, sortOrder: 1 },
  "tadalafil-daily": { dosageForm: "Tablet", strength: "2.5–5 mg", vendor: VENDOR, sortOrder: 2 },
  "tadalafil-as-needed": { dosageForm: "Tablet", strength: "10–20 mg", vendor: VENDOR, sortOrder: 3 },
  "ed-starter-bundle": { dosageForm: "Bundle", vendor: VENDOR, sortOrder: 4 },
  "pt-141-desire": { dosageForm: "Injection", vendor: VENDOR, sortOrder: 5 },
  "oxytocin-intimacy": { dosageForm: "Nasal Spray", vendor: VENDOR, sortOrder: 6 },

  "thyroid-levothyroxine": { dosageForm: "Tablet", vendor: VENDOR, sortOrder: 1 },
  "armour-thyroid": { dosageForm: "Tablet", vendor: VENDOR, sortOrder: 2 },
  pregnenolone: { dosageForm: "Capsule", vendor: VENDOR, sortOrder: 3 },
  "dhea-womens": { dosageForm: "Capsule", vendor: VENDOR, sortOrder: 4 },
  "hormone-full-panel": { dosageForm: "Lab Panel", vendor: VENDOR, sortOrder: 5 },
};

const FORM_DEFAULT: Record<string, string> = {
  "weight-loss": "Injection",
  "mens-health": "Tablet",
  hair: "Tablet",
  skincare: "Topical",
  "sexual-wellness": "Tablet",
  hormone: "Tablet",
};

export function getCatalogMeta(slug: string, category: StoreCategory): CatalogMeta {
  return (
    META[slug] ?? {
      dosageForm: FORM_DEFAULT[category] ?? "Rx",
      vendor: VENDOR,
      sortOrder: 99,
    }
  );
}

export function sortCatalogProducts(a: PharmacyProduct, b: PharmacyProduct): number {
  const catA = CATEGORY_SORT.indexOf(a.category);
  const catB = CATEGORY_SORT.indexOf(b.category);
  if (catA !== catB) return catA - catB;
  const orderA = getCatalogMeta(a.slug, a.category).sortOrder;
  const orderB = getCatalogMeta(b.slug, b.category).sortOrder;
  if (orderA !== orderB) return orderA - orderB;
  return a.name.localeCompare(b.name);
}

export function groupProductsByCategory(products: PharmacyProduct[]) {
  return CATEGORY_SORT.map((category) => ({
    category,
    products: products
      .filter((p) => p.category === category)
      .sort((a, b) => getCatalogMeta(a.slug, a.category).sortOrder - getCatalogMeta(b.slug, b.category).sortOrder),
  })).filter((g) => g.products.length > 0);
}
