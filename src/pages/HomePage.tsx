import { Link } from "react-router-dom";
import { useMediaLoader } from "../hooks/useMediaLoader";
import { shop } from "../lib/shop";

/** Pixel-faithful port of legacy index.html <main> — do not restyle without design approval. */
export function HomePage() {
  useMediaLoader([]);

  return (
    <main>
      <section className="hero" aria-label="Introduction">
        <div className="hero-desktop hero-banner">
          <h1 className="sr-only">Find Your North Star.</h1>
          <p className="sr-only">
            Physician-guided longevity, metabolic health, and wellness care—delivered wherever you are.
          </p>
          <img
            src="/images/hero-landing.png"
            decoding="async"
            alt="Find Your North Star — woman with sunlit hills, physician-guided longevity and wellness care"
            width={2007}
            height={784}
            fetchPriority="high"
          />
        </div>

        <div className="hero-mobile">
          <div className="hero-mobile-inner">
            <div className="hero-mobile-copy">
              <h1>Find Your North Star.</h1>
              <div className="hero-rule" aria-hidden="true" />
              <p className="hero-lead">
                Physician-guided longevity, metabolic health, and wellness care—delivered wherever you are.
              </p>
            </div>
            <div className="hero-mobile-visual">
              <img
                src="/images/hero-mobile-couple.png"
                decoding="async"
                alt="Couple enjoying sunlit hills — physician-guided longevity and wellness care with North Star MD"
                width={998}
                height={540}
                fetchPriority="high"
              />
              <aside className="hero-tagline" aria-label="Care promise">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2L14 9L21 11L14 13L12 20L10 13L3 11L10 9L12 2Z"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Whole-person care for real, lasting results.</span>
              </aside>
            </div>
            <div className="hero-btns">
              <Link to="/shop" className="btn btn-gold btn-pill btn-block">
                Start Your Journey
              </Link>
              <a href="/how-it-works" className="btn btn-ghost btn-pill btn-block">
                How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="value-bar">
        <div className="value-inner">
          <article className="value-cell">
            <svg className="value-ico" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <path d="M11 16v9M14 13v12M18 14v11M22 11v14M26 16v9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M9 25h18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <circle cx="18" cy="10" r="3" stroke="currentColor" strokeWidth="1.3" />
            </svg>
            <h3>Physician-Led</h3>
            <p>Expert medical care you can trust.</p>
          </article>
          <article className="value-cell">
            <svg className="value-ico" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <path d="M18 5L20 14L29 16.5L20 19L18 28L16 19L7 16.5L16 14L18 5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
            </svg>
            <h3>Personalized</h3>
            <p>Care plans tailored to your unique goals.</p>
          </article>
          <article className="value-cell">
            <svg className="value-ico" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <path d="M18 30s-8-5.5-8-12a8 8 0 0116 0c0 6.5-8 12-8 12z" stroke="currentColor" strokeWidth="1.3" />
              <path d="M14 16c2-3 6-3 8 0M18 14v10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <h3>Science-Backed</h3>
            <p>Evidence-based treatments that work.</p>
          </article>
          <article className="value-cell">
            <svg className="value-ico" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <path d="M18 29s-7-4.8-7-11a5.5 5.5 0 0111 0c0 6.2-7 11-7 11z" stroke="currentColor" strokeWidth="1.3" />
            </svg>
            <h3>Whole-Person</h3>
            <p>Supporting your health from the inside out.</p>
          </article>
          <article className="value-cell">
            <svg className="value-ico" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <rect x="13" y="16" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="M15.5 16v-2a2.5 2.5 0 015 0v2" stroke="currentColor" strokeWidth="1.3" />
            </svg>
            <h3>Convenient</h3>
            <p>100% online care on your schedule.</p>
          </article>
        </div>
      </section>

      <section className="care-block" id="treatments">
        <div className="care-inner">
          <div className="care-text">
            <p className="eyebrow">Physician-guided programs</p>
            <h2>Weight loss, longevity, and recovery—built around you.</h2>
            <p>
              Compare GLP-1 weight management, NAD+ rejuvenation, and sermorelin recovery options with
              transparent pricing, licensed pharmacy fulfillment, and ongoing clinical support.
            </p>
            <Link to="/shop" className="btn btn-navy btn-pill">
              Shop treatments
            </Link>
          </div>
          <div className="care-scene">
            <img
              src="/images/product-box.png"
              decoding="async"
              alt="North Star MD box, supplements, and greenery on linen"
              width={1200}
              height={900}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="journey-block" id="about">
        <div className="journey-navy">
          <div className="journey-starburst" aria-hidden="true">
            <svg viewBox="0 0 300 300" fill="none">
              <path
                d="M150 6L164 118L278 132L164 146L150 258L136 146L22 132L136 118L150 6Z"
                stroke="currentColor"
                strokeWidth="0.85"
              />
            </svg>
          </div>
          <div className="journey-navy-copy">
            <p className="eyebrow eyebrow-light">More than medicine</p>
            <h2>A partner in your health journey.</h2>
            <p>
              Beyond prescriptions, you get a dedicated team invested in your long-term wellbeing—with
              check-ins, adjustments, and guidance every step of the way.
            </p>
            <a href="/how-it-works" className="text-link">
              Learn More
            </a>
          </div>
        </div>

        <div className="journey-features" id="how-it-works">
          <div className="journey-row">
            <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <circle cx="14" cy="10" r="4" stroke="currentColor" strokeWidth="1.2" />
              <path d="M6 24c0-4.5 3.5-6.5 8-6.5s8 2 8 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <div>
              <strong>One-on-one support</strong>
              <p>Work closely with your care team.</p>
            </div>
          </div>
          <div className="journey-row">
            <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M5 21V11M9.5 21V15M14 21V8M18.5 21V13M23 21V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <div>
              <strong>Ongoing optimization</strong>
              <p>Plans that evolve with you.</p>
            </div>
          </div>
          <div className="journey-row">
            <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M14 24s-6-4.2-6-9.5a6 6 0 0112 0C20 19.8 14 24 14 24z" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            <div>
              <strong>Built for real life</strong>
              <p>Sustainable habits. Realistic goals.</p>
            </div>
          </div>
        </div>

        <div className="journey-photo">
          <img
            src="/images/journey-seated.png"
            decoding="async"
            alt="Woman seated by a window holding a glass of water"
            width={1266}
            height={1242}
            loading="lazy"
          />
        </div>
      </section>

      <section className="cta-block" id="membership">
        <p className="cta-eyebrow">
          Longevity is a journey.
          <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M7 1L8 5.5L12 6.5L8 7.5L7 12L6 7.5L2 6.5L6 5.5L7 1Z"
              stroke="currentColor"
              strokeWidth="0.85"
              strokeLinejoin="round"
            />
          </svg>
          We're here to guide it.
        </p>
        <h2>Better health today. A better you tomorrow.</h2>
        <p className="cta-sub">Join North Star MD and take the first step toward a longer, healthier life.</p>
        <a href={shop.catalog()} className="btn btn-gold btn-pill btn-lg" id="get-started">
          Become a Member
        </a>
      </section>
    </main>
  );
}
