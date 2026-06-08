/** Unique primary + alt image per product slug */

export type ProductVisual = {
  image: string;
  imageFallback?: string;
  imageAlt: string;
  imageAltFallback?: string;
};

const B = (webp: string, png?: string) => ({ webp, png: png ?? webp.replace(".webp", ".png") });
const S = (name: string) => B(`/images/store/${name}.webp`, `/images/store/${name}.jpg`);
const P = (slug: string) => B(`/images/products/${slug}.webp`, `/images/products/${slug}.jpg`);
const A = (slug: string) => B(`/images/products/${slug}-alt.webp`, `/images/products/${slug}-alt.jpg`);

function v(
  primary: { webp: string; png?: string },
  alt: { webp: string; png?: string },
): ProductVisual {
  return {
    image: primary.webp,
    imageFallback: primary.png,
    imageAlt: alt.webp,
    imageAltFallback: alt.png,
  };
}

/** Per-slug Unsplash downloads (unique photo per treatment) */
const HAS_PRODUCT_IMAGE = new Set([
  "armour-thyroid",
  "bioidentical-hrt",
  "biotin-hair-growth",
  "bpc-157-repair",
  "cbn-sleep",
  "cialis-daily",
  "cjc-ipamorelin",
  "clindamycin-acne",
  "contrave-bundle",
  "dhea-mens",
  "dhea-womens",
  "dutasteride",
  "epithalon-peptide",
  "finasteride-minoxidil-duo",
  "finasteride",
  "glp1-maintenance",
  "joint-recovery-stack",
  "liraglutide-daily",
  "magnesium-glycinate",
  "melatonin-sleep",
  "mens-vitality-panel",
  "metabolic-panel-addon",
  "nad-oral-boost",
  "nad-rejuvenation",
  "nmn-cellular",
  "oxytocin-intimacy",
  "pregnenolone",
  "pt-141-desire",
  "pt-141-performance",
  "resveratrol-protocol",
  "sermorelin-recovery",
  "sertraline-anxiety",
  "sildenafil",
  "sleep-consultation",
  "tadalafil-as-needed",
  "tb-500-recovery",
  "testosterone-trt",
  "tirzepatide-plus",
  "trazodone-sleep",
  "tretinoin-005",
  "wegovy-pathway",
  "womens-hormone-panel",
  "womens-weight-program",
]);

/** North Star branded heroes — flagship injectables only */
const BRAND_HERO: Record<string, ProductVisual> = {
  "tirzepatide-plus": v(B("/images/tirzepatide-hero.webp"), A("tirzepatide-plus")),
  "semaglutide-plus": v(B("/images/semaglutide-hero.webp"), B("/images/weight-loss-card.webp")),
  "nad-rejuvenation": v(B("/images/nad-hero.webp"), A("nad-rejuvenation")),
  "sermorelin-recovery": v(B("/images/sermorelin-hero.webp"), A("sermorelin-recovery")),
  "mounjaro-pathway": v(B("/images/tirzepatide-hero.webp"), B("/images/panel-weight.webp")),
  "longevity-stack-bundle": v(B("/images/panel-nad.webp"), B("/images/longevity-card.webp")),
  "bpc-157-repair": v(B("/images/muscle-recovery-designed.webp"), A("bpc-157-repair")),
  "joint-recovery-stack": v(B("/images/panel-recovery.webp"), A("joint-recovery-stack")),
};

/** Curated fallbacks for products without a downloaded photo */
const FALLBACK_VISUALS: Record<string, ProductVisual> = {
  "metabolic-reset": v(B("/images/panel-weight.webp"), B("/images/result-weight-loss.webp")),
  "phentermine-control": v(S("melatonin-bottle"), B("/images/step-02-intake-checkout.webp")),
  "bmi-medical-program": v(S("alt-hormone-01"), B("/images/biomarker-screen.webp")),
  "weight-loss-starter": v(B("/images/step-01-choose-treatment.webp"), B("/images/step-04-delivery-kit.webp")),
  "glutathione-glow": v(B("/images/result-energy.webp"), S("spa-wellness")),
  "metformin-longevity": v(S("supplements"), B("/images/patient-result-04.webp")),
  "coq10-energy": v(S("brain-focus"), B("/images/result-energy.webp")),
  "thymosin-alpha": v(S("vial-pharmacy"), B("/images/exceptional-experience.webp")),
  "ghk-cu-tissue": v(S("skincare-cream"), S("alt-skin-01")),
  "athlete-recovery-stack": v(S("yoga-recovery"), B("/images/muscle-recovery-designed.webp")),
  "enclomiphene": v(S("mens-wellness"), B("/images/clinical-draw.webp")),
  "hcg-trt-support": v(B("/images/clinical-draw.webp"), S("hormone-lab")),
  "anastrozole-estrogen": v(S("vitamin-bottles"), B("/images/biomarker-screen.webp")),
  "prostate-support": v(S("alt-mens-01"), B("/images/clinical-draw.webp")),
  "progesterone-bioidentical": v(S("skincare-cream"), B("/images/journey-seated.webp")),
  "estradiol-patch": v(S("delivery-kit"), S("professional-woman")),
  "pcos-metformin": v(B("/images/patient-result-03.webp"), S("supplements")),
  "minoxidil-topical": v(S("hair-treatment"), B("/images/product.webp")),
  "ketoconazole-scalp": v(B("/images/product.webp"), S("skincare-cream")),
  "anti-aging-cream": v(B("/images/exceptional-experience.webp"), S("spa-wellness")),
  "hydroquinone-brightening": v(B("/images/why-northstar-md.webp"), S("alt-skin-01")),
  "azelaic-acid": v(S("skincare-cream"), B("/images/patient-result-05.webp")),
  "vitamin-c-protocol": v(S("spa-wellness"), B("/images/hero-photo.webp")),
  "tadalafil-daily": v(S("sexual-wellness"), B("/images/product-box.webp")),
  "ed-starter-bundle": v(B("/images/product-box.webp"), B("/images/step-02-intake-checkout.webp")),
  "escitalopram-mood": v(S("brain-focus"), S("mental-calm")),
  "buspirone-stress": v(S("meditation"), B("/images/journey.webp")),
  "mental-health-intake": v(B("/images/step-03-provider-review.webp"), S("professional-woman")),
  "wellbutrin-energy": v(S("brain-focus"), S("yoga-recovery")),
  "thyroid-levothyroxine": v(S("alt-hormone-01"), S("melatonin-bottle")),
  "hormone-full-panel": v(B("/images/biomarker-screen.webp"), B("/images/clinical-draw.webp")),
  "physician-consultation": v(B("/images/step-03-provider-review.webp"), B("/images/sterling.webp")),
  "cold-chain-shipping": v(B("/images/step-04-delivery-kit.webp"), S("delivery-kit")),
  "injection-supplies-kit": v(S("peptide-kit"), B("/images/step-04-delivery-kit.webp")),
};

function fromDownloaded(slug: string): ProductVisual {
  const primary = P(slug);
  const alt = A(slug);
  return v(primary, alt);
}

export function applyProductVisuals<T extends {
  slug: string;
  image: string;
  imageFallback?: string;
  imageAlt?: string;
  imageAltFallback?: string;
}>(product: T): T {
  const brand = BRAND_HERO[product.slug];
  if (brand) {
    return { ...product, ...brand };
  }
  if (HAS_PRODUCT_IMAGE.has(product.slug)) {
    const vis = fromDownloaded(product.slug);
    return { ...product, ...vis };
  }
  const fallback = FALLBACK_VISUALS[product.slug];
  if (fallback) {
    return { ...product, ...fallback };
  }
  return product;
}
