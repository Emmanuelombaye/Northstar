export function NadPage() {
  return (
    <main className="nad-page">
      
      {/* Hero Section */}
      <section className="treatment-hero">
        <div className="treatment-wrap">
          <div className="treatment-hero-grid">
            <div className="treatment-hero-text">
              <p className="eyebrow">Therapeutic Profile</p>
              <h1>Fuel cellular health at the source.</h1>
              <p className="treatment-hero-lead">
                Nicotinamide Adenine Dinucleotide (NAD+) is the essential coenzyme powering cellular ATP generation. 
                Our guided therapies elevate NAD+ pools to support DNA repair, sirtuin activation, and biological energy.
              </p>
              <div className="treatment-hero-ctas">
                <a href="#program-select" className="btn btn-navy btn-pill btn-lg">View Program</a>
                <a href="/treatments" className="btn btn-ghost btn-pill btn-lg">Explore Treatments</a>
              </div>
            </div>
            <div className="treatment-hero-image-wrap">
              <img
                className="treatment-hero-image"
                src="/images/nad-hero.webp" data-fallback="/images/nad-hero.png" decoding="async"
                alt="North Star MD NAD+ premium formulation packaging"
                width="800"
                height="600"
              />
              <div className="treatment-floating-badge">
                <div className="badge-val">NAD+</div>
                <div className="badge-lbl">Cellular Coenzyme</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Molecular Profile */}
      <section className="molecule-section">
        <div className="treatment-wrap">
          <div className="molecule-grid">
            <div className="asym-grid-visual">
              <img
                className="asym-img-large"
                src="/images/product-box/close.webp" data-fallback="/images/product-box/close.png" decoding="async"
                alt="NAD+ sterile raw ingredients close up"
              />
              <img
                className="asym-img-small"
                src="/images/product-box/wide.webp" data-fallback="/images/product-box/wide.png" decoding="async"
                alt="Insulated medical cold packaging grid"
              />
            </div>
            <div className="molecule-text">
              <p className="eyebrow">Biochemical Pathway</p>
              <h2>The energy system behind cellular longevity.</h2>
              <p>
                NAD+ is a critical molecule found in every living cell, acting as the primary electron carrier inside 
                mitochondrial respiration grids. As we age, systemic NAD+ pools decline sharply, leading to decreased 
                adenosine triphosphate (ATP) output, cellular senescence, and slow DNA recovery.
              </p>
              <p>
                By delivering medical-grade active NAD+ molecules directly, our guided programs stimulate the "Sirtuin" 
                longevity gene enzymes, signaling key cellular pathways to optimize metabolic energy and cellular health.
              </p>
              <div className="molecule-features">
                <article className="molecule-feature-card">
                  <h4>Sirtuin Activation</h4>
                  <p>Triggers SIRT1-7 longevity deacetylase enzymes to govern cellular aging cycles.</p>
                </article>
                <article className="molecule-feature-card">
                  <h4>Mitochondrial Respiration</h4>
                  <p>Restores cellular energy systems, combating systemic fatigue at a deep biological level.</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Efficacy */}
      <section className="efficacy-section">
        <div className="treatment-wrap">
          <div className="efficacy-inner">
            <p className="eyebrow">Evidence-Based Medicine</p>
            <h2>Proven cellular longevity advantages.</h2>
            <p>Our NAD+ therapies leverage peer-reviewed biochemistry to support systemic cell recovery, cognitive longevity, and mitochondrial energy.</p>
          </div>
          <div className="efficacy-stats-grid">
            {/* Stat 1 */}
            <article className="efficacy-stat-card">
              <div className="efficacy-stat-num">98<span>%</span></div>
              <h3>Mitochondrial Activation</h3>
              <p>Biochemical assays demonstrate significant increases in mitochondrial ATP respiration and metabolic stability in optimized cells.</p>
            </article>
            {/* Stat 2 */}
            <article className="efficacy-stat-card">
              <div className="efficacy-stat-num">2.2<span>x</span></div>
              <h3>Sirtuin SIRT1 Expression</h3>
              <p>Guided systemic replenishment results in over two-fold activation of key histone-deacetylase longevity sirtuins.</p>
            </article>
            {/* Stat 3 */}
            <article className="efficacy-stat-card">
              <div className="efficacy-stat-num">90<span>%</span></div>
              <h3>DNA Repair Pathways</h3>
              <p>Supplements major cellular enzyme groups (PARPs) responsible for identifying and repairing genomic mutations.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Pricing & Checkout Selector */}
      <section className="treatment-pricing" id="program-select">
        <div className="treatment-wrap">
          <div className="pricing-banner">
            <div className="pricing-details">
              <p className="eyebrow">Select Program</p>
              <h2>NAD+ Rejuvenation Membership</h2>
              <p>
                An premium direct-care longevity plan combining standard diagnostic biomarker tracking, 
                asynchronous physician protocols, direct clinical care messaging, and custom cold-chain NAD+ deliveries.
              </p>
              <ul className="pricing-inclusions">
                <li>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>Routine metabolic lab panels included</span>
                </li>
                <li>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>Discreet cold-chain insulated shipping</span>
                </li>
                <li>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>Ongoing medical titration &amp; support</span>
                </li>
                <li>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>No hidden contracts — cancel anytime</span>
                </li>
              </ul>
            </div>
            <article className="pricing-action-card">
              <h3>Longevity Premium</h3>
              <p className="price-subtext">Cellular NAD+ rejuvenation plan</p>
              <div className="pricing-price-box">
                <span className="price-currency">$</span>
                <span className="price-amount">199</span>
                <span className="price-period">/ month</span>
              </div>
              <a
                href="/start"
                data-shop="category"
                data-shop-category="nad"
                className="btn btn-gold btn-pill btn-block btn-lg"
              >
                Begin Medical Intake
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="treatment-faq">
        <div className="treatment-wrap">
          <div className="faq-grid-split">
            <div className="faq-intro">
              <p className="eyebrow">Clinical FAQ</p>
              <h2>Have questions about NAD+?</h2>
              <p>Read our clinical board's answers regarding cellular energy, safety, administration, and shipping.</p>
            </div>
            <div className="treatment-faq-list">
              <details open>
                <summary>What is the difference between oral NAD+ precursors and direct NAD+?</summary>
                <p>
                  Oral supplements (like NR or NMN) must pass through your gastrointestinal tract and liver, which breaks down the majority of the coenzyme prior to systemic cellular absorption. Direct subcutaneous administration bypasses digestion entirely, providing immediate, near-100% biological availability to your tissue grids.
                </p>
              </details>
              <details>
                <summary>How is NAD+ administered?</summary>
                <p>
                  NAD+ is administered via a small subcutaneous injection twice weekly in the abdomen or thigh. Our team provides precise, comfortable video instructions and single-use clinical tools within your customized direct care box.
                </p>
              </details>
              <details>
                <summary>What benefits can I expect to feel?</summary>
                <p>
                  Many members record improvements in focus, verbal recall, and physical stamina within the first 2-3 weeks of therapy. Over time, NAD+ optimization supports systemic recovery, immune resilience, and biological age indicators.
                </p>
              </details>
              <details>
                <summary>Why must NAD+ ship inside cold packs?</summary>
                <p>
                  Active NAD+ is a chemically fragile molecule that degrades rapidly under prolonged heat exposure. We compound our therapies fresh, packaging them immediately inside insulated boxes with cold gel packs, dispatched overnight to ensure maximum clinical potency.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    
    </main>
  );
}
