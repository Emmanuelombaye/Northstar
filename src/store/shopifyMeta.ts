/** Shopify-style display metadata — form, strength, vendor, sort order */

import type { PharmacyProduct, StoreCategory } from "./types";

export type ShopifyMeta = {
  dosageForm: string;
  strength?: string;
  vendor: string;
  sortOrder: number;
};

const VENDOR = "North Star MD Pharmacy";

export const CATEGORY_SORT: StoreCategory[] = [
  "weight-loss",
  "longevity",
  "recovery",
  "mens-health",
  "womens-health",
  "hormone",
  "hair",
  "skincare",
  "sexual-wellness",
  "sleep",
  "mental-health",
];

const META: Record<string, ShopifyMeta> = {
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

  "nad-rejuvenation": { dosageForm: "Injection", strength: "200–500 mg", vendor: VENDOR, sortOrder: 1 },
  "nad-oral-boost": { dosageForm: "Capsule", vendor: VENDOR, sortOrder: 2 },
  "glutathione-glow": { dosageForm: "Injection", vendor: VENDOR, sortOrder: 3 },
  "nmn-cellular": { dosageForm: "Capsule", vendor: VENDOR, sortOrder: 4 },
  "metformin-longevity": { dosageForm: "Tablet", strength: "500–1000 mg", vendor: VENDOR, sortOrder: 5 },
  "resveratrol-protocol": { dosageForm: "Capsule", vendor: VENDOR, sortOrder: 6 },
  "coq10-energy": { dosageForm: "Capsule", vendor: VENDOR, sortOrder: 7 },
  "longevity-stack-bundle": { dosageForm: "Bundle", vendor: VENDOR, sortOrder: 8 },
  "epithalon-peptide": { dosageForm: "Injection", vendor: VENDOR, sortOrder: 9 },
  "thymosin-alpha": { dosageForm: "Injection", vendor: VENDOR, sortOrder: 10 },

  "sermorelin-recovery": { dosageForm: "Injection", vendor: VENDOR, sortOrder: 1 },
  "bpc-157-repair": { dosageForm: "Injection", strength: "BPC-157", vendor: VENDOR, sortOrder: 2 },
  "cjc-ipamorelin": { dosageForm: "Injection", vendor: VENDOR, sortOrder: 3 },
  "tb-500-recovery": { dosageForm: "Injection", vendor: VENDOR, sortOrder: 4 },
  "ghk-cu-tissue": { dosageForm: "Topical", vendor: VENDOR, sortOrder: 5 },
  "joint-recovery-stack": { dosageForm: "Bundle", vendor: VENDOR, sortOrder: 6 },
  "athlete-recovery-stack": { dosageForm: "Bundle", vendor: VENDOR, sortOrder: 7 },
  "pt-141-performance": { dosageForm: "Injection", vendor: VENDOR, sortOrder: 8 },

  "testosterone-trt": { dosageForm: "Injection", strength: "Cypionate 200 mg/mL", vendor: VENDOR, sortOrder: 1 },
  enclomiphene: { dosageForm: "Tablet", vendor: VENDOR, sortOrder: 2 },
  "hcg-trt-support": { dosageForm: "Injection", vendor: VENDOR, sortOrder: 3 },
  "anastrozole-estrogen": { dosageForm: "Tablet", strength: "1 mg", vendor: VENDOR, sortOrder: 4 },
  "dhea-mens": { dosageForm: "Capsule", vendor: VENDOR, sortOrder: 5 },
  "cialis-daily": { dosageForm: "Tablet", strength: "2.5–5 mg", vendor: VENDOR, sortOrder: 6 },
  "prostate-support": { dosageForm: "Protocol", vendor: VENDOR, sortOrder: 7 },
  "mens-vitality-panel": { dosageForm: "Lab Panel", vendor: VENDOR, sortOrder: 8 },

  "bioidentical-hrt": { dosageForm: "Compounded", vendor: VENDOR, sortOrder: 1 },
  "progesterone-bioidentical": { dosageForm: "Capsule", vendor: VENDOR, sortOrder: 2 },
  "estradiol-patch": { dosageForm: "Patch", vendor: VENDOR, sortOrder: 3 },
  "pcos-metformin": { dosageForm: "Tablet", vendor: VENDOR, sortOrder: 4 },
  "womens-hormone-panel": { dosageForm: "Lab Panel", vendor: VENDOR, sortOrder: 5 },
  "womens-weight-program": { dosageForm: "Program", vendor: VENDOR, sortOrder: 6 },

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

  "melatonin-sleep": { dosageForm: "Tablet", vendor: VENDOR, sortOrder: 1 },
  "trazodone-sleep": { dosageForm: "Tablet", vendor: VENDOR, sortOrder: 2 },
  "magnesium-glycinate": { dosageForm: "Capsule", vendor: VENDOR, sortOrder: 3 },
  "sleep-consultation": { dosageForm: "Consult", vendor: VENDOR, sortOrder: 4 },
  "cbn-sleep": { dosageForm: "Compounded", vendor: VENDOR, sortOrder: 5 },

  "sertraline-anxiety": { dosageForm: "Tablet", strength: "50–100 mg", vendor: VENDOR, sortOrder: 1 },
  "escitalopram-mood": { dosageForm: "Tablet", strength: "10–20 mg", vendor: VENDOR, sortOrder: 2 },
  "buspirone-stress": { dosageForm: "Tablet", vendor: VENDOR, sortOrder: 3 },
  "mental-health-intake": { dosageForm: "Consult", vendor: VENDOR, sortOrder: 4 },
  "wellbutrin-energy": { dosageForm: "Tablet", vendor: VENDOR, sortOrder: 5 },

  "thyroid-levothyroxine": { dosageForm: "Tablet", vendor: VENDOR, sortOrder: 1 },
  "armour-thyroid": { dosageForm: "Tablet", vendor: VENDOR, sortOrder: 2 },
  pregnenolone: { dosageForm: "Capsule", vendor: VENDOR, sortOrder: 3 },
  "dhea-womens": { dosageForm: "Capsule", vendor: VENDOR, sortOrder: 4 },
  "hormone-full-panel": { dosageForm: "Lab Panel", vendor: VENDOR, sortOrder: 5 },

  "physician-consultation": { dosageForm: "Consult", vendor: VENDOR, sortOrder: 1 },
  "cold-chain-shipping": { dosageForm: "Service", vendor: VENDOR, sortOrder: 2 },
  "injection-supplies-kit": { dosageForm: "Kit", vendor: VENDOR, sortOrder: 3 },
};

const FORM_DEFAULT: Record<string, string> = {
  "weight-loss": "Injection",
  longevity: "Injection",
  recovery: "Injection",
  "mens-health": "Tablet",
  "womens-health": "Compounded",
  hair: "Tablet",
  skincare: "Topical",
  "sexual-wellness": "Tablet",
  sleep: "Tablet",
  "mental-health": "Tablet",
  hormone: "Tablet",
};

export function getShopifyMeta(slug: string, category: StoreCategory): ShopifyMeta {
  return (
    META[slug] ?? {
      dosageForm: FORM_DEFAULT[category] ?? "Rx",
      vendor: VENDOR,
      sortOrder: 99,
    }
  );
}

export function sortProductsShopify(a: PharmacyProduct, b: PharmacyProduct): number {
  const catA = CATEGORY_SORT.indexOf(a.category);
  const catB = CATEGORY_SORT.indexOf(b.category);
  if (catA !== catB) return catA - catB;
  const orderA = getShopifyMeta(a.slug, a.category).sortOrder;
  const orderB = getShopifyMeta(b.slug, b.category).sortOrder;
  if (orderA !== orderB) return orderA - orderB;
  return a.name.localeCompare(b.name);
}

export function groupProductsByCategory(products: PharmacyProduct[]) {
  return CATEGORY_SORT.map((category) => ({
    category,
    products: products
      .filter((p) => p.category === category)
      .sort((a, b) => getShopifyMeta(a.slug, a.category).sortOrder - getShopifyMeta(b.slug, b.category).sortOrder),
  })).filter((g) => g.products.length > 0);
}
