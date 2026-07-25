"use client";

import { useState } from "react";
import { Link } from "@/lib/routerAdapter";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface CategoryMeta {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  image: string;
}

const CATEGORY_INFOS: Record<string, CategoryMeta> = {
  all: {
    title: "All Clinical Protocols",
    subtitle: "Complete 45+ Direct-to-Home Telehealth Catalog",
    description: "Browse all physician-guided therapies compounded in U.S. licensed pharmacies and cold-chain shipped straight to your door.",
    badge: "Full Access",
    image: "/images/categories/cat-all-treatments.webp",
  },
  trt: {
    title: "Testosterone Therapy & HRT",
    subtitle: "Hormone Optimization & Endocrine Care",
    description: "Licensed U.S. medical provider protocols tailored to optimize bioidentical testosterone, restore drive, build lean muscle, and reclaim peak energy.",
    badge: "Endocrine Care",
    image: "/images/categories/cat-trt.webp",
  },
  "weight-loss": {
    title: "Weight Loss & GLP-1 Protocols",
    subtitle: "Metabolic Reset & Appetite Control",
    description: "Physician-guided Semaglutide & Tirzepatide+ compoundings designed to suppress food cravings, lower metabolic set-point, and drive long-term fat reduction.",
    badge: "Metabolic Reset",
    image: "/images/categories/cat-weight-loss.webp",
  },
  "sleep-recovery": {
    title: "Sleep & Circadian Recovery",
    subtitle: "Peptide Secretagogues & Restorative Sleep",
    description: "Targeted Sermorelin and CJC-1295 secretagogue therapies that stimulate natural growth hormone release, enhance deep REM sleep, and accelerate muscle repair.",
    badge: "Restorative Care",
    image: "/images/categories/cat-sleep-recovery.webp",
  },
  "anti-aging": {
    title: "Anti-Aging & Cellular Longevity",
    subtitle: "NAD+ Rejuvenation & Autophagy Boosters",
    description: "Direct coenzyme replenishment and sirtuin activators that promote mitochondrial revival, cellular repair, cognitive clarity, and healthy longevity.",
    badge: "Cellular Health",
    image: "/images/categories/cat-anti-aging.webp",
  },
  "sexual-wellness": {
    title: "Sexual Wellness & Vitality",
    subtitle: "Endothelial Performance & Libido Peptides",
    description: "Daily & as-needed prescription Tadalafil, Sildenafil, and PT-141 desire peptides engineered for peak vascular circulation, stamina, and romantic confidence.",
    badge: "Vascular Vitality",
    image: "/images/categories/cat-sexual-wellness.webp",
  },
  "hair-loss": {
    title: "Hair Loss & Follicle Restoration",
    subtitle: "Dual-Target DHT Blockers & Scalp Solutions",
    description: "Prescription Finasteride, Minoxidil, and Dutasteride topical & oral formulas designed to halt hair thinning, nourish roots, and stimulate dense regrowth.",
    badge: "Follicle Shield",
    image: "/images/categories/cat-hair-loss.webp",
  },
  detox: {
    title: "Detox & Cellular Repair",
    subtitle: "Master Antioxidants & Tissue Peptides",
    description: "Glutathione hepatic detoxifiers and BPC-157 systemic repair peptides that neutralize oxidative stress, support gut integrity, and enhance skin radiance.",
    badge: "Systemic Cleanse",
    image: "/images/categories/cat-detox.webp",
  },
};

const ALL_PROTOCOLS = [
  // 1. TESTOSTERONE THERAPY (TRT)
  {
    id: "trt-cypionate",
    category: "trt",
    tag: "Testosterone Therapy",
    title: "Bioidentical Testosterone Optimization (TRT)",
    body: "Physician-guided bioidentical testosterone cypionate/enanthate protocol with custom dosage adjustments, LH support, and routine biomarker monitoring.",
    freq: "Twice weekly self-administration",
    ship: "Discreet overnight cold-chain shipping",
    price: "$189",
    detail: "/start",
    image: "/images/categories/cat-trt.webp",
    fallback: "/images/categories/cat-trt.png",
  },
  {
    id: "enclomiphene-citrate",
    category: "trt",
    tag: "Testosterone Therapy",
    title: "Enclomiphene Citrate Natural LH Booster",
    body: "Selective estrogen receptor modulator (SERM) that stimulates natural pituitary LH & FSH output, raising endogenous testosterone while preserving testicular volume.",
    freq: "Daily oral capsule",
    ship: "Free expedited delivery",
    price: "$119",
    detail: "/start",
    image: "/images/enclomiphene.webp",
    fallback: "/images/enclomiphene.png",
  },
  {
    id: "hcg-support",
    category: "trt",
    tag: "Testosterone Therapy",
    title: "HCG Testicular Support & Fertility Protocol",
    body: "Human Chorionic Gonadotropin prescription therapy used alongside TRT to maintain testicular function, natural fertility pathways, and intratesticular testosterone.",
    freq: "Twice weekly subcutaneous",
    ship: "Overnight cold-chain delivery",
    price: "$139",
    detail: "/start",
    image: "/images/hcg-trt-support.webp",
    fallback: "/images/hcg-trt-support.png",
  },

  // 2. WEIGHT LOSS
  {
    id: "semaglutide-plus",
    category: "weight-loss",
    tag: "Weight Loss",
    title: "Personalized Compounded Semaglutide+",
    body: "Weekly GLP-1 receptor agonist treatment engineered to reduce gastric emptying speed, lower blood glucose spikes, and deliver consistent appetite control.",
    freq: "Once weekly subcutaneous",
    ship: "Overnight cold-chain delivery included",
    price: "$146",
    detail: "/semaglutide",
    image: "/images/glp1-treatment.webp",
    fallback: "/images/tirzepatide-hero.webp",
  },
  {
    id: "tirzepatide-plus",
    category: "weight-loss",
    tag: "Weight Loss",
    title: "Personalized Compounded Tirzepatide+",
    body: "Dual GIP & GLP-1 receptor agonist offering dual-action metabolic stimulation for accelerated body fat reduction and metabolic reset.",
    freq: "Once weekly subcutaneous",
    ship: "Overnight cold-chain delivery included",
    price: "$229",
    detail: "/tirzepatide",
    image: "/images/tirzepatide-hero.webp",
    fallback: "/images/tirzepatide-hero.png",
  },
  {
    id: "liraglutide-daily",
    category: "weight-loss",
    tag: "Weight Loss",
    title: "Liraglutide Daily Metabolic Program",
    body: "Daily GLP-1 prescription therapy providing continuous glycemic balance, portion management, and flexible titration for sensitive individuals.",
    freq: "Daily subcutaneous pen",
    ship: "Overnight cold-chain delivery",
    price: "$179",
    detail: "/start",
    image: "/images/liraglutide-daily.webp",
    fallback: "/images/liraglutide-daily.png",
  },

  // 3. SLEEP & RECOVERY
  {
    id: "sermorelin-peptide",
    category: "sleep-recovery",
    tag: "Sleep & Recovery",
    title: "Compounded Sermorelin Peptide Therapy",
    body: "Growth hormone secretagogue that stimulates your pituitary gland to naturally produce GH, deepening slow-wave REM sleep and speeding tissue recovery.",
    freq: "Daily evening administration",
    ship: "Overnight cold-chain delivery",
    price: "$189",
    detail: "/sermorelin",
    image: "/images/sermorelin-treatment.webp",
    fallback: "/images/sermorelin-hero.webp",
  },
  {
    id: "cjc-ipamorelin",
    category: "sleep-recovery",
    tag: "Sleep & Recovery",
    title: "CJC-1295 + Ipamorelin Synergistic Blend",
    body: "Dual-action peptide combo delivering sustained pulsatile growth hormone secretion for lean muscle maintenance, joint repair, and restorative sleep quality.",
    freq: "Daily evening injection",
    ship: "Overnight cold-chain delivery",
    price: "$219",
    detail: "/sermorelin",
    image: "/images/sermorelin-hero.webp",
    fallback: "/images/sermorelin-hero.png",
  },
  {
    id: "trazodone-sleep",
    category: "sleep-recovery",
    tag: "Sleep & Recovery",
    title: "Trazodone & Circadian Sleep Protocol",
    body: "Physician-guided non-habit forming sleep aid designed to quiet nocturnal hyperarousal, shorten sleep onset, and consolidate uninterrupted sleep cycles.",
    freq: "30 minutes before sleep",
    ship: "Free expedited delivery",
    price: "$69",
    detail: "/start",
    image: "/images/melatonin-bottle.webp",
    fallback: "/images/melatonin-bottle.jpg",
  },

  // 4. ANTI-AGING & LONGEVITY
  {
    id: "nad-injections",
    category: "anti-aging",
    tag: "Anti-Aging & Longevity",
    title: "Compounded NAD+ Cellular Injections",
    body: "Direct coenzyme replenishment that fuels mitochondrial ATP production, repairs cellular DNA damage, reverses mental fog, and revitalizes metabolic energy.",
    freq: "Twice weekly subcutaneous",
    ship: "Overnight cold-chain delivery",
    price: "$149",
    detail: "/nad",
    image: "/images/nad-treatment.webp",
    fallback: "/images/nad-hero.webp",
  },
  {
    id: "metformin-longevity",
    category: "anti-aging",
    tag: "Anti-Aging & Longevity",
    title: "Metformin Longevity & Autophagy Protocol",
    body: "AMPK enzyme activator that mimics caloric restriction, lowers systemic glycation, clears senescent cells, and promotes cardiovascular health.",
    freq: "Daily oral tablet",
    ship: "Free expedited shipping",
    price: "$79",
    detail: "/start",
    image: "/images/metabolic-reset.webp",
    fallback: "/images/metabolic-reset.png",
  },
  {
    id: "nmn-resveratrol",
    category: "anti-aging",
    tag: "Anti-Aging & Longevity",
    title: "NMN + Micronized Resveratrol Matrix",
    body: "Synergistic NAD+ precursor paired with sirtuin activator Resveratrol to shield cells against oxidative stress and maintain youthful vascular elasticity.",
    freq: "Daily morning capsule",
    ship: "Free expedited delivery",
    price: "$89",
    detail: "/start",
    image: "/images/supplements.webp",
    fallback: "/images/supplements.jpg",
  },

  // 5. SEXUAL WELLNESS & ED
  {
    id: "tadalafil-daily",
    category: "sexual-wellness",
    tag: "Sexual Wellness",
    title: "Tadalafil Daily Vitality Protocol (5mg)",
    body: "Continuous low-dose PDE5 inhibitor promoting 24/7 endothelial nitric oxide release, improved pelvic blood flow, spontaneous performance, and prostate support.",
    freq: "Daily morning tablet",
    ship: "Discreet overnight delivery",
    price: "$69",
    detail: "/start",
    image: "/images/tadalafil-daily.webp",
    fallback: "/images/tadalafil-daily.png",
  },
  {
    id: "sildenafil-boost",
    category: "sexual-wellness",
    tag: "Sexual Wellness",
    title: "Compounded Sildenafil Sublingual Troches",
    body: "Rapid-acting sublingual troches that bypass digestive delay for maximum vascular vasodilation and peak erectile firmness within 15–30 minutes.",
    freq: "As-needed before intimacy",
    ship: "Discreet overnight delivery",
    price: "$79",
    detail: "/start",
    image: "/images/sildenafil.webp",
    fallback: "/images/sildenafil.png",
  },
  {
    id: "pt141-desire",
    category: "sexual-wellness",
    tag: "Sexual Wellness",
    title: "PT-141 (Bremelanotide) Libido Peptide",
    body: "Central nervous system melanocortin receptor agonist that directly activates sexual desire and arousal pathways in both men and women.",
    freq: "As-needed subcutaneous injection",
    ship: "Overnight cold-chain delivery",
    price: "$129",
    detail: "/start",
    image: "/images/categories/cat-sexual-wellness.webp",
    fallback: "/images/categories/cat-sexual-wellness.png",
  },

  // 6. HAIR LOSS
  {
    id: "finasteride-minoxidil",
    category: "hair-loss",
    tag: "Hair Loss",
    title: "Compounded Finasteride + Minoxidil Topical Solution",
    body: "Dual-action precision spray combining DHT-blocking Finasteride with follicle vascularizer Minoxidil to prevent hair recession and stimulate thick regrowth without systemic side effects.",
    freq: "Daily scalp application",
    ship: "Free expedited delivery",
    price: "$79",
    detail: "/start",
    image: "/images/finasteride-minoxidil-duo.webp",
    fallback: "/images/finasteride-minoxidil-duo.png",
  },
  {
    id: "dutasteride-shield",
    category: "hair-loss",
    tag: "Hair Loss",
    title: "Oral Dutasteride Advanced Follicle Shield",
    body: "Dual Type I & Type II 5-alpha reductase inhibitor delivering over 90% scalp DHT suppression for stubborn pattern hair loss resistant to standard treatments.",
    freq: "Daily oral capsule",
    ship: "Free expedited delivery",
    price: "$89",
    detail: "/start",
    image: "/images/dutasteride.webp",
    fallback: "/images/dutasteride.png",
  },
  {
    id: "biotin-scalp",
    category: "hair-loss",
    tag: "Hair Loss",
    title: "Biotin & Scalp Revitalizer Serum",
    body: "Nourishing botanical serum enriched with Biotin, Saw Palmetto, and Copper Peptides to strengthen hair shaft kerantin and soothe scalp micro-inflammation.",
    freq: "Daily application",
    ship: "Free expedited shipping",
    price: "$49",
    detail: "/start",
    image: "/images/biotin-hair-growth.webp",
    fallback: "/images/biotin-hair-growth.png",
  },

  // 7. DETOX & CELLULAR HEALTH
  {
    id: "glutathione-detox",
    category: "detox",
    tag: "Detox & Cellular Health",
    title: "Glutathione Master Antioxidant Injections",
    body: "Body's master antioxidant formula that neutralizes free radicals, supports liver phase II detoxification, lightens hyperpigmentation, and clears metabolic sludge.",
    freq: "Weekly subcutaneous",
    ship: "Overnight cold-chain delivery",
    price: "$129",
    detail: "/start",
    image: "/images/categories/cat-detox.webp",
    fallback: "/images/categories/cat-detox.png",
  },
  {
    id: "bpc157-repair",
    category: "detox",
    tag: "Detox & Cellular Health",
    title: "BPC-157 Systemic Healing & Gut Peptide",
    body: "Body Protection Compound peptide that accelerates tendon, ligament, and gut mucosal lining repair, calming GI tract inflammation and joint distress.",
    freq: "Daily subcutaneous",
    ship: "Overnight cold-chain delivery",
    price: "$169",
    detail: "/start",
    image: "/images/bpc-vial.webp",
    fallback: "/images/bpc-vial.jpg",
  },
  {
    id: "ghkcu-copper",
    category: "detox",
    tag: "Detox & Cellular Health",
    title: "GHK-Cu Copper Peptide Cellular Glow Matrix",
    body: "Tripeptide-copper complex that stimulates collagen I & III synthesis, remodels damaged skin tissue, and rejuvenates youthful skin elasticity.",
    freq: "Daily topical serum or injection",
    ship: "Overnight cold-chain delivery",
    price: "$139",
    detail: "/start",
    image: "/images/anti-aging-cream.webp",
    fallback: "/images/anti-aging-cream.png",
  },
];

export function TreatmentsHubPage() {
  useScrollReveal([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const currentCategoryMeta = CATEGORY_INFOS[activeFilter] || CATEGORY_INFOS.all;
  const filteredProtocols = activeFilter === "all"
    ? ALL_PROTOCOLS
    : ALL_PROTOCOLS.filter((p) => p.category === activeFilter);

  return (
    <main className="ns-page ns-treatments-hub-page">
      {/* 1. Hero Header */}
      <section className="ns-page-hero">
        <div className="ns-wrap text-center">
          <p className="eyebrow">Direct-to-home prescriptions</p>
          <h1>
            Explore our <em>treatments.</em>
          </h1>
          <p className="ns-lead" style={{ maxWidth: 680, margin: "0 auto" }}>
            Physician-guided compounded therapies, cold-chain shipped overnight to your door.
            Filter by clinical category below to discover your custom treatment plan.
          </p>
        </div>
      </section>

      {/* 2. Interactive Filter Tabs */}
      <section className="ns-section ns-catalog-section" id="protocol-catalog" style={{ paddingTop: 16 }}>
        <div className="ns-wrap">
          <div className="ns-cat-filter-tabs">
            <button
              type="button"
              className={`ns-filter-btn${activeFilter === "all" ? " is-active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All Treatments ({ALL_PROTOCOLS.length})
            </button>
            <button
              type="button"
              className={`ns-filter-btn${activeFilter === "trt" ? " is-active" : ""}`}
              onClick={() => setActiveFilter("trt")}
            >
              Testosterone Therapy
            </button>
            <button
              type="button"
              className={`ns-filter-btn${activeFilter === "weight-loss" ? " is-active" : ""}`}
              onClick={() => setActiveFilter("weight-loss")}
            >
              Weight Loss
            </button>
            <button
              type="button"
              className={`ns-filter-btn${activeFilter === "sleep-recovery" ? " is-active" : ""}`}
              onClick={() => setActiveFilter("sleep-recovery")}
            >
              Sleep &amp; Recovery
            </button>
            <button
              type="button"
              className={`ns-filter-btn${activeFilter === "anti-aging" ? " is-active" : ""}`}
              onClick={() => setActiveFilter("anti-aging")}
            >
              Anti-Aging &amp; Longevity
            </button>
            <button
              type="button"
              className={`ns-filter-btn${activeFilter === "sexual-wellness" ? " is-active" : ""}`}
              onClick={() => setActiveFilter("sexual-wellness")}
            >
              Sexual Wellness
            </button>
            <button
              type="button"
              className={`ns-filter-btn${activeFilter === "hair-loss" ? " is-active" : ""}`}
              onClick={() => setActiveFilter("hair-loss")}
            >
              Hair Loss
            </button>
            <button
              type="button"
              className={`ns-filter-btn${activeFilter === "detox" ? " is-active" : ""}`}
              onClick={() => setActiveFilter("detox")}
            >
              Detox &amp; Cellular
            </button>
          </div>

          {/* 3. Category Feature Banner Header */}
          <div className="ns-cat-feature-banner">
            <div className="ns-cat-banner-art">
              <img src={currentCategoryMeta.image} alt={currentCategoryMeta.title} />
            </div>
            <div className="ns-cat-banner-content">
              <span className="ns-cat-banner-badge">{currentCategoryMeta.badge}</span>
              <h2>{currentCategoryMeta.title}</h2>
              <p className="ns-cat-banner-sub">{currentCategoryMeta.subtitle}</p>
              <p className="ns-cat-banner-desc">{currentCategoryMeta.description}</p>
              <div className="ns-cat-banner-stats">
                <span>✓ Licensed U.S. Physicians</span>
                <span>✓ U.S. Compounding Pharmacies</span>
                <span>✓ Free Expedited Cold-Chain Delivery</span>
              </div>
            </div>
          </div>

          {/* 4. Filtered Protocols Grid */}
          <div className="ns-hub-treat-grid" style={{ marginTop: 36 }}>
            {filteredProtocols.map((t) => (
              <article key={t.id} className="ns-hub-treat-card" data-reveal>
                <div className="ns-hub-treat-media">
                  <img src={t.image} data-fallback={t.fallback} alt={t.title} loading="lazy" />
                  <span className="ns-hub-treat-badge">{t.tag}</span>
                </div>
                <div className="ns-hub-treat-body">
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                  <dl className="ns-hub-treat-details">
                    <div>
                      <dt>Administration</dt>
                      <dd>{t.freq}</dd>
                    </div>
                    <div>
                      <dt>Fulfillment</dt>
                      <dd>{t.ship}</dd>
                    </div>
                    <div className="ns-hub-treat-price">
                      <dt>Starting at</dt>
                      <dd>
                        {t.price}/mo <span>All-inclusive</span>
                      </dd>
                    </div>
                  </dl>
                  <div className="ns-hub-treat-actions">
                    <Link to="/start" className="btn btn-navy btn-pill">
                      See if I qualify
                    </Link>
                    <Link to={t.detail} className="ns-text-link">
                      Protocol details →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
