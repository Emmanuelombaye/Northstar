"use client";

import { useEffect, useState } from "react";
import { Link } from "@/lib/routerAdapter";
import { useMediaLoader } from "../hooks/useMediaLoader";
import { useScrollReveal } from "../hooks/useScrollReveal";

const HERO_SLIDES = [
  {
    image: "/upper image on that landing page.png",
    mobileImage: "/images/hero-mobile-banner.png",
    fallback: "/new upper landing image.png",
    alt: "Physician-guided longevity with North Star MD",
  },
];

const LIFESTYLE_PILLARS = [
  {
    image: "/images/lifestyle-movement-v2.webp",
    fallback: "/images/lifestyle-movement-v2.png",
    title: "Daily movement",
    caption: "Sustainable activity patterns that support metabolic health year-round.",
    to: "/education",
  },
  {
    image: "/images/lifestyle-nourishment-v2.webp",
    fallback: "/images/lifestyle-nourishment-v2.png",
    title: "Metabolic nourishment",
    caption: "Nutrition guidance that stabilizes glucose and fuels cellular repair.",
    to: "/education",
  },
  {
    image: "/images/lifestyle-active-v2.webp",
    fallback: "/images/lifestyle-active-v2.png",
    title: "Active recovery",
    caption: "Sleep, strength, and recovery cycles built for decades — not just seasons.",
    to: "/sermorelin",
  },
  {
    image: "/images/lifestyle-balance-v2.webp",
    fallback: "/images/lifestyle-balance-v2.png",
    title: "Mind-body balance",
    caption: "Nervous-system recovery and cognitive clarity as part of whole-person longevity.",
    to: "/nad",
  },
];

const MARQUEE_TERMS = [
  "Compounded Semaglutide",
  "Tirzepatide+",
  "NAD+ Rejuvenation",
  "Sermorelin Peptides",
  "Metabolic Reset",
  "Hormone Optimization",
  "Cellular Energy",
  "Cold-Chain Delivery",
];

const FAQ_ITEMS = [
  {
    q: "Are weight-loss medications FDA approved?",
    a: "Brand-name GLP-1s such as Wegovy and Ozempic are FDA-approved. Compounded versions are prepared in licensed 503A compounding pharmacies under federal guidelines and are not individually FDA-reviewed.",
    bullets: [
      "Wegovy & Ozempic are FDA-approved brands",
      "Compounded formulas follow 503A pharmacy standards",
      "Compounded medications are not individually FDA-reviewed",
    ],
  },
  {
    q: "How fast is my intake reviewed?",
    a: "Most assessments are completed within 24 hours of submission.",
    bullets: [
      "Licensed clinicians review your health intake",
      "Prescriptions issued when clinically appropriate",
      "Your provider contacts you if more info is needed",
    ],
  },
  {
    q: "How are treatments shipped and stored?",
    a: "Temperature-sensitive peptides ship overnight in cold-chain packaging.",
    bullets: [
      "Insulated packaging with gel packs included",
      "Overnight delivery to your door",
      "Refrigerate immediately on arrival",
    ],
  },
  {
    q: "Is North Star MD a secure patient platform?",
    a: "Yes — licensed U.S. providers, HIPAA-aligned intake, and accredited compounding partners.",
    bullets: [
      "Board-certified physicians review every intake",
      "503A accredited pharmacy sourcing",
      "Secure patient enrollment and care portal",
    ],
  },
];

export function HomePage() {
  const [slide, setSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useMediaLoader([slide]);
  useScrollReveal([slide]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((i) => (i + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <main className="ns-home">
      {/* 1. Hero banner */}
      <section className="ns-hero ns-hero-banner-mode" aria-label="Introduction">
        <div className="ns-hero-slides">
          {HERO_SLIDES.map((s, i) => (
            <div key={s.image} className={`ns-hero-slide${i === slide ? " is-active" : ""}`}>
              <picture style={{ width: "100%", height: "100%" }}>
                <source media="(max-width: 768px)" srcSet={s.mobileImage} />
                <img
                  src={s.image}
                  data-fallback={s.fallback}
                  alt={s.alt}
                  decoding="async"
                  fetchPriority={i === 0 ? "high" : "low"}
                />
              </picture>
            </div>
          ))}
        </div>

        <div className="ns-hero-hotspots">
          <Link
            to="/start"
            className="ns-hero-hotspot ns-hero-hotspot-start"
            aria-label="Start your journey"
          />
          <a
            href="#how-it-works-home"
            className="ns-hero-hotspot ns-hero-hotspot-how"
            aria-label="How it works"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("how-it-works-home")?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>

        <h1 className="sr-only">
          Find your North Star <em>before</em> decline sets in.
        </h1>
        <p className="sr-only">
          Physician-guided longevity, metabolic health, and wellness care — licensed U.S. providers,
          compounded therapies, and discreet delivery wherever you are.
        </p>

        {HERO_SLIDES.length > 1 && (
          <div className="ns-hero-dots" role="tablist" aria-label="Hero slides">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.image}
                type="button"
                role="tab"
                aria-selected={i === slide}
                aria-label={`Slide ${i + 1}`}
                className={i === slide ? "is-active" : ""}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
        )}
      </section>

      {/* 2. Proof strip */}
      <section className="ns-proof" aria-label="By the numbers">
        <div className="ns-wrap ns-proof-grid">
          <article data-reveal>
            <strong>50</strong>
            <span>States with licensed care access</span>
          </article>
          <article data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
            <strong>24h</strong>
            <span>Typical clinical intake review</span>
          </article>
          <article data-reveal style={{ ["--reveal-delay" as string]: "160ms" }}>
            <strong>100%</strong>
            <span>Online, physician-guided care</span>
          </article>
        </div>
      </section>

      {/* 3. Two pillars */}
      <section className="ns-pillars">
        <div className="ns-wrap ns-pillars-grid">
          <article data-reveal>
            <p className="eyebrow">Personalized care</p>
            <h3>See personal guidance</h3>
            <p>
              Every patient receives a tailored longevity plan built around your goals, biomarkers, and
              clinical history — not a one-size-fits-all protocol.
            </p>
          </article>
          <article data-reveal style={{ ["--reveal-delay" as string]: "100ms" }}>
            <p className="eyebrow">Clinical oversight</p>
            <h3>Provider consultation</h3>
            <p>
              A licensed U.S. practitioner reviews your online health intake within 24 hours and guides
              your treatment path from first assessment through delivery.
            </p>
          </article>
        </div>
      </section>

      {/* 4. How it works */}
      <section className="ns-pathway" id="how-it-works-home">
        <div className="ns-wrap">
          <header className="ns-section-head" data-reveal>
            <p className="eyebrow">Care pathway</p>
            <h2>How it works.</h2>
          </header>
          <ol className="ns-pathway-list">
            <li data-reveal>
              <span className="ns-step-num">01</span>
              <h3>Online health intake</h3>
              <p>
                Complete a short health assessment covering your biological goals, medications, and
                clinical history — HIPAA-aligned and designed for busy schedules.
              </p>
            </li>
            <li data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
              <span className="ns-step-num">02</span>
              <h3>Provider consultation</h3>
              <p>
                A licensed clinical provider reviews your data within 24 hours to construct a safe,
                personalized prescription plan when clinically appropriate.
              </p>
            </li>
            <li data-reveal style={{ ["--reveal-delay" as string]: "160ms" }}>
              <span className="ns-step-num">03</span>
              <h3>Cold-chain delivery</h3>
              <p>
                Partner compounding pharmacies verify and overnight ship your treatment in
                temperature-controlled packaging, directly to your door.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* 5. Eligibility */}
      <section className="ns-eligible">
        <div className="ns-wrap">
          <header className="ns-section-head" data-reveal>
            <p className="eyebrow">Safe &amp; transparent care</p>
            <h2>Are you eligible?</h2>
            <p className="ns-lead">
              Longevity treatments require professional medical assessment. North Star MD connects you
              with qualified U.S. providers and accredited 503A compounding pharmacies — secure intake
              and ongoing clinical support.
            </p>
          </header>
          <div className="ns-eligible-layout">
            <div className="ns-eligible-photo" data-reveal>
              <img
                src="/person sitting in corrner.png"
                data-fallback="/one sitted on corner.jpg"
                alt="Clinical consultation with a North Star MD provider"
                loading="lazy"
              />
            </div>
            <div className="ns-eligible-grid">
              <article data-reveal>
                <span className="ns-check" aria-hidden="true">
                  ✓
                </span>
                <h4>Accredited compounding pharmacies</h4>
                <p>
                  Prescription formulas are compounded in FDA-licensed 503A facilities using quality
                  ingredients and third-party assay checks.
                </p>
              </article>
              <article data-reveal style={{ ["--reveal-delay" as string]: "100ms" }}>
                <span className="ns-check" aria-hidden="true">
                  ✓
                </span>
                <h4>Licensed U.S. practitioners only</h4>
                <p>
                  Intake reviews and medical consults are handled by board-certified physicians or nurse
                  practitioners licensed in your home state.
                </p>
              </article>
            </div>
          </div>
          <div className="ns-eligible-cta" data-reveal>
            <Link to="/start" className="btn btn-gold btn-pill">
              Find my treatment
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Medical direction */}
      <section className="ns-md">
        <div className="ns-wrap ns-md-grid">
          <div className="ns-md-copy" data-reveal>
            <p className="eyebrow">Medical direction</p>
            <h2>Your care, led by a licensed physician.</h2>
            <p>
              Clinical protocols, dosage ranges, and safety audits are overseen by our Clinical Practice
              Director — real human oversight, not a chatbot.
            </p>
            <div className="ns-md-person">
              <img
                src="/images/sterling.webp"
                data-fallback="/images/sterling.png"
                alt="Dr. Evelyn Sterling, MD"
                width={96}
                height={96}
                loading="lazy"
              />
              <div>
                <strong>Dr. Evelyn Sterling, MD</strong>
                <span>Clinical Practice Director</span>
                <p>
                  Board-certified physician leading intake reviews, prescription protocols, and
                  personalized treatment plans for North Star MD members.
                </p>
              </div>
            </div>
            <Link to="/advisors" className="ns-text-link">
              Meet our clinical team →
            </Link>
          </div>
          <aside className="ns-md-aside" data-reveal>
            <h3>Medical safety &amp; oversight</h3>
            <p>
              Every dose is prescribed and monitored by licensed practitioners. If risks appear in your
              intake or labs, your provider adjusts your plan immediately.
            </p>
          </aside>
        </div>
      </section>

      {/* 7. Treatments */}
      <section className="ns-treatments" id="treatments">
        <div className="ns-wrap">
          <header className="ns-section-head" data-reveal>
            <p className="eyebrow">Clinical protocols</p>
            <h2>Explore our treatments.</h2>
            <p className="ns-lead">
              Physician-guided compounded therapies, cold-chain shipped overnight to your door.
            </p>
          </header>
          <div className="ns-treat-grid">
            <Link to="/treatments" className="ns-treat-card bouncy-card card-selectable" data-reveal>
              <div className="ns-treat-img">
                <img
                  src="/images/glp1-treatment.webp"
                  data-fallback="/images/tirzepatide-hero.webp"
                  alt="Compounded GLP-1"
                  loading="lazy"
                />
                <span className="ns-treat-badge">Metabolic Reset</span>
              </div>
              <div className="ns-treat-content">
                <h3>Compounded GLP-1</h3>
                <p>Semaglutide &amp; Tirzepatide for metabolic reset and sustainable weight management.</p>
                <div className="ns-treat-tags">
                  <span className="ns-treat-tag">Overnight Delivery</span>
                  <span className="ns-treat-tag">Physician Guided</span>
                </div>
                <span className="ns-treat-action bouncy-btn">
                  Explore Protocol &rarr;
                </span>
              </div>
            </Link>

            <Link
              to="/treatments"
              className="ns-treat-card bouncy-card card-selectable"
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
            >
              <div className="ns-treat-img">
                <img
                  src="/images/nad-treatment.webp"
                  data-fallback="/images/nad-hero.webp"
                  alt="Compounded NAD+"
                  loading="lazy"
                />
                <span className="ns-treat-badge">Cellular Energy</span>
              </div>
              <div className="ns-treat-content">
                <h3>Compounded NAD+</h3>
                <p>Cellular energy restoration, mitochondrial support, and cognitive clarity.</p>
                <div className="ns-treat-tags">
                  <span className="ns-treat-tag">Anti-Aging</span>
                  <span className="ns-treat-tag">Cognitive Focus</span>
                </div>
                <span className="ns-treat-action bouncy-btn">
                  Explore Protocol &rarr;
                </span>
              </div>
            </Link>

            <Link
              to="/treatments"
              className="ns-treat-card bouncy-card card-selectable"
              data-reveal
              style={{ ["--reveal-delay" as string]: "160ms" }}
            >
              <div className="ns-treat-img">
                <img
                  src="/images/sermorelin-treatment.webp"
                  data-fallback="/images/sermorelin-hero.webp"
                  alt="Compounded Sermorelin"
                  loading="lazy"
                />
                <span className="ns-treat-badge">Peptide Recovery</span>
              </div>
              <div className="ns-treat-content">
                <h3>Compounded Sermorelin</h3>
                <p>Recovery, sleep quality, and natural growth hormone stimulation.</p>
                <div className="ns-treat-tags">
                  <span className="ns-treat-tag">Deep Sleep</span>
                  <span className="ns-treat-tag">Muscle Repair</span>
                </div>
                <span className="ns-treat-action bouncy-btn">
                  Explore Protocol &rarr;
                </span>
              </div>
            </Link>
          </div>
          <div className="ns-treatments-cta" data-reveal style={{ ["--reveal-delay" as string]: "240ms" }}>
            <Link to="/start" className="btn btn-gold btn-pill bouncy-btn">
              Find My Custom Treatment Plan &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Keyword marquee */}
      <section className="ns-marquee" aria-label="Treatment focus areas">
        <div className="ns-marquee-track">
          {[...MARQUEE_TERMS, ...MARQUEE_TERMS].map((term, i) => (
            <span key={`${term}-${i}`}>{term}</span>
          ))}
        </div>
      </section>

      {/* 9. Lifestyle */}
      <section className="ns-lifestyle">
        <div className="ns-wrap">
          <header className="ns-section-head" data-reveal>
            <p className="eyebrow">Whole-person care</p>
            <h2>Longevity you can feel.</h2>
            <p className="ns-lead">
              Movement, nourishment, recovery, and clarity — woven into every North Star protocol.
            </p>
          </header>
          <div className="ns-life-gallery">
            {LIFESTYLE_PILLARS.map((pillar, i) => (
              <article
                key={pillar.title}
                className="ns-life-card"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
              >
                <img src={pillar.image} data-fallback={pillar.fallback} alt="" loading="lazy" />
                <div className="ns-life-card-overlay">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.caption}</p>
                  <Link to={pillar.to} className="ns-text-link">
                    Explore →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Closing CTA */}
      <section className="ns-close ns-close-banner">
        <div className="ns-close-banner-bg" aria-hidden="true">
          <img
            src="/images/home-scroll-banner.webp"
            data-fallback="/images/journey-seated.png"
            alt=""
            loading="lazy"
          />
          <div className="ns-close-banner-veil" />
        </div>
        <div className="ns-wrap ns-close-inner" data-reveal>
          <p className="eyebrow eyebrow-light">Your journey starts here</p>
          <h2>Better health today. A clearer path tomorrow.</h2>
          <p>Personalized North Star protocols built for the life you want to live — guided by science.</p>
          <div className="ns-hero-actions">
            <Link to="/start" className="btn btn-gold btn-pill">
              Find my treatment
            </Link>
            <Link to="/shop" className="btn btn-ghost-light btn-pill">
              Shop treatments
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="ns-faq" id="faq-home">
        <div className="ns-wrap ns-faq-grid">
          <header data-reveal>
            <p className="eyebrow">Answering your questions</p>
            <h2>Frequently asked.</h2>
            <p className="ns-lead">Quick answers — tap any question to expand.</p>
            <Link to="/faq" className="ns-text-link">
              View all FAQs →
            </Link>
          </header>
          <div className="ns-faq-list" data-reveal>
            {FAQ_ITEMS.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.q} className={`ns-faq-item${open ? " is-open" : ""}`}>
                  <button
                    type="button"
                    className="ns-faq-q"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="ns-faq-icon" aria-hidden="true">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="ns-faq-a">
                      <p>{item.a}</p>
                      <ul>
                        {item.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
