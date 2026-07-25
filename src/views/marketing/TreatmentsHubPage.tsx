"use client";

import { useState } from "react";
import { Link } from "@/lib/routerAdapter";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const PROTOCOLS = [
  {
    id: "glp1",
    category: "weight-loss",
    tag: "Weight Loss",
    title: "Compounded GLP-1 (Semaglutide / Tirzepatide+)",
    body: "Advanced GLP-1 & Tirzepatide prescriptions designed to reset metabolic baseline, suppress food cravings, and support sustainable fat reduction.",
    freq: "Once weekly subcutaneous",
    ship: "Overnight cold-chain delivery",
    price: "$146",
    detail: "/semaglutide",
    image: "/images/glp1-treatment.webp",
    fallback: "/images/tirzepatide-hero.webp",
  },
  {
    id: "trt-support",
    category: "trt",
    tag: "Testosterone Therapy",
    title: "Testosterone Optimization & TRT Protocol",
    body: "Physician-guided bioidentical hormone restoration designed to reclaim drive, lean body composition, focus, and physical endurance.",
    freq: "Custom provider dosage",
    ship: "Overnight discreet shipping",
    price: "$189",
    detail: "/start",
    image: "/images/categories/cat-trt.webp",
    fallback: "/images/categories/cat-trt.png",
  },
  {
    id: "nad",
    category: "anti-aging",
    tag: "Anti-Aging & Longevity",
    title: "Compounded NAD+ Cellular Injections",
    body: "Direct coenzyme replenishment promoting mitochondrial rejuvenation, DNA repair, cognitive sharpness, and cellular energy revival.",
    freq: "Twice weekly subcutaneous",
    ship: "Overnight cold-chain delivery",
    price: "$149",
    detail: "/nad",
    image: "/images/nad-treatment.webp",
    fallback: "/images/nad-hero.webp",
  },
  {
    id: "sermorelin",
    category: "sleep-recovery",
    tag: "Sleep & Recovery",
    title: "Compounded Sermorelin Peptide Therapy",
    body: "Growth hormone secretagogue that stimulates natural GH output, accelerating muscle repair, enhancing deep REM sleep, and restoring youthful vigor.",
    freq: "Daily evening administration",
    ship: "Overnight cold-chain delivery",
    price: "$189",
    detail: "/sermorelin",
    image: "/images/sermorelin-treatment.webp",
    fallback: "/images/sermorelin-hero.webp",
  },
  {
    id: "sexual-ed",
    category: "sexual-wellness",
    tag: "Sexual Wellness & ED",
    title: "Tadalafil & Sildenafil Vitality Protocol",
    body: "Daily & as-needed vascular performance formulas paired with oxytocin and desire peptides for peak confidence and romantic stamina.",
    freq: "Daily or as-needed tablet",
    ship: "Discreet overnight delivery",
    price: "$89",
    detail: "/start",
    image: "/images/categories/cat-sexual-wellness.webp",
    fallback: "/images/categories/cat-sexual-wellness.png",
  },
  {
    id: "hair-follicle",
    category: "hair-loss",
    tag: "Hair Loss",
    title: "Compounded Finasteride & Minoxidil Dual Action",
    body: "Dual-target DHT blocking and follicle reactivation liquid spray designed to prevent thinning and stimulate dense hair regrowth.",
    freq: "Daily scalp application",
    ship: "Free expedited delivery",
    price: "$79",
    detail: "/start",
    image: "/images/categories/cat-hair-loss.webp",
    fallback: "/images/categories/cat-hair-loss.png",
  },
  {
    id: "glutathione-detox",
    category: "detox",
    tag: "Detox & Cellular Health",
    title: "Glutathione Master Antioxidant & BPC-157",
    body: "Cellular detoxifier and tissue healing peptides that neutralize oxidative stress, support liver metabolism, and enhance skin radiance.",
    freq: "Weekly subcutaneous",
    ship: "Overnight cold-chain delivery",
    price: "$129",
    detail: "/start",
    image: "/images/categories/cat-detox.webp",
    fallback: "/images/categories/cat-detox.png",
  },
] as const;

export function TreatmentsHubPage() {
  useScrollReveal([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProtocols = activeFilter === "all"
    ? PROTOCOLS
    : PROTOCOLS.filter((p) => p.category === activeFilter);

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
            Filter by clinical category below to find your custom prescription protocol.
          </p>
        </div>
      </section>

      {/* 2. Filterable Protocol Catalog Section */}
      <section className="ns-section ns-catalog-section" id="protocol-catalog" style={{ paddingTop: 32 }}>
        <div className="ns-wrap">
          {/* Filter Bar */}
          <div className="ns-cat-filter-tabs">
            <button
              type="button"
              className={`ns-filter-btn${activeFilter === "all" ? " is-active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All Treatments
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

          {/* Cards List */}
          <div className="ns-hub-treat-grid" style={{ marginTop: 32 }}>
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
                      <dt>From</dt>
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
