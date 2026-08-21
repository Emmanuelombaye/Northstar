/** North Star MD enrollment URLs (never change brandId without DB sync). */
export const SITE_ORIGIN = "https://www.joinnorthstarmd.com";
export const PEAK_ORIGIN = SITE_ORIGIN;
export const ENROLL_PATH = "/care/north-star-md/shop";
export const LOGIN_PATH = "/care/north-star-md/login";
export const BRAND_SLUG = "north-star-md";
export const BRAND_ID = "c8e7f6a2-4b1d-4e9f-a3c2-1d5e8f7a6b4c";

const TREATMENT_PRODUCT: Record<string, string> = {
  semaglutide: "semaglutide",
  tirzepatide: "tirzepatide",
  nad: "nad",
  sermorelin: "sermorelin",
  finasteride: "finasteride",
  minoxidil: "minoxidil",
  testosterone: "testosterone",
  sildenafil: "sildenafil",
  tadalafil: "tadalafil",
  tretinoin: "tretinoin",
  bpc157: "bpc",
  "bpc-157": "bpc",
  enclomiphene: "enclomiphene",
  glutathione: "glutathione",
  melatonin: "melatonin",
  liraglutide: "liraglutide",
  phentermine: "phentermine",
  dutasteride: "dutasteride",
  sertraline: "sertraline",
  escitalopram: "escitalopram",
  bupropion: "bupropion",
  levothyroxine: "levothyroxine",
  hcg: "hcg",
  pt141: "pt-141",
  "pt-141": "pt-141",
};

/** Enrollment category slugs used by the Patient Center. */
const CATEGORY_SLUG: Record<string, string> = {
  "weight-loss": "weight-loss",
  metabolic: "weight-loss",
  longevity: "longevity",
  executive: "longevity",
  recovery: "muscle-recovery",
  "muscle-recovery": "muscle-recovery",
  hair: "hair",
  skincare: "skincare",
  "mens-health": "mens-health",
  "sexual-wellness": "sexual-wellness",
  sleep: "sleep",
  hormone: "hormone",
  "mental-health": "mental-health",
  "womens-health": "hormone",
};

export type ShopLinkOpts = {
  product?: string;
  category?: string;
};

export function shopUrl(opts: ShopLinkOpts = {}): string {
  let productKey = opts.product;
  if (!productKey && opts.category && TREATMENT_PRODUCT[opts.category]) {
    productKey = TREATMENT_PRODUCT[opts.category];
  }

  const PRODUCT_SLUG_MAP: Record<string, string> = {
    semaglutide: "semaglutide-plus",
    tirzepatide: "tirzepatide-plus",
    nad: "nad-rejuvenation",
    sermorelin: "sermorelin-recovery",
  };

  const origin = typeof window !== "undefined" ? window.location.origin : "";

  if (productKey) {
    const localSlug = PRODUCT_SLUG_MAP[productKey] || productKey;
    return `${origin}/shop/product/${localSlug}`;
  } else if (opts.category) {
    const key = opts.category.trim().toLowerCase();
    const normalized = CATEGORY_SLUG[key] || key;
    const CATEGORY_MAP: Record<string, string> = {
      metabolic: "weight-loss",
      executive: "longevity",
      "muscle-recovery": "recovery",
      recovery: "recovery",
    };
    const localCategory = CATEGORY_MAP[normalized] || normalized;
    return `${origin}/shop?category=${localCategory}`;
  }

  return `${origin}/shop`;
}

export function patientLoginUrl(extra: Record<string, string> = {}): string {
  const params = new URLSearchParams({
    brand: BRAND_SLUG,
    brandId: BRAND_ID,
    ...extra,
  });
  const q = params.toString();
  return `${PEAK_ORIGIN}${LOGIN_PATH}${q ? `?${q}` : ""}`;
}

export function patientPortalPath(): string {
  return `/care/${BRAND_SLUG}/patient`;
}

/** After North Star MD intake — hand off to the Patient Center login. */
export function buildPatientLoginHandoff(opts: {
  peakProduct?: string;
  peakCategory?: string;
  category?: string;
}): string {
  const params: Record<string, string> = {
    source: "northstar-shop",
    redirect: patientPortalPath(),
  };

  if (opts.peakProduct) {
    params.product = opts.peakProduct;
  } else if (opts.peakCategory) {
    const key = opts.peakCategory.trim().toLowerCase();
    params.category = CATEGORY_SLUG[key] || key;
  } else if (opts.category) {
    const key = opts.category.trim().toLowerCase();
    params.category = CATEGORY_SLUG[key] || key;
  }

  return patientLoginUrl(params);
}

export const shop = {
  catalog: () => shopUrl(),
  category: (name: string) => shopUrl({ category: name }),
  product: (name: string) => shopUrl({ product: name }),
  login: () => patientLoginUrl(),
  patientHandoff: buildPatientLoginHandoff,
};
