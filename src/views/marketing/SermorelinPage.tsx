export function SermorelinPage() {
  return (
    <main className="sermorelin-page">
      
      {/* Hero Section */}
      <section className="treatment-hero">
        <div className="treatment-wrap">
          <div className="treatment-hero-grid">
            <div className="treatment-hero-text">
              <p className="eyebrow">Therapeutic Profile</p>
              <h1>Unlock endogenous vitality.</h1>
              <p className="treatment-hero-lead">
                Sermorelin acts as a bio-identical Growth Hormone Releasing Hormone (GHRH) analogue, stimulating your pituitary 
                receptors to release your natural growth hormone pools for sleep optimization, muscle support, and recovery.
              </p>
              <div className="treatment-hero-ctas">
                <a href="#program-select" className="btn btn-navy btn-pill btn-lg">View Program</a>
                <a href="/explore-treatments" className="btn btn-ghost btn-pill btn-lg">Explore Treatments</a>
              </div>
            </div>
            <div className="treatment-hero-image-wrap">
              {/* AI IMAGE GENERATION PROMPT:
                Minimalist medical portrait showing a luxury blue box labeled Sermorelin resting on a light raw linen texture, glowing natural morning sunshine casting beautiful organic leaf shadows, luxury direct care lifestyle photography, Hasselblad 50mm, photorealistic, color palette #f9f7f2 cream and #0a1f3d navy highlights --ar 4:3
              */}
              <img
                className="treatment-hero-image"
                src="/images/sermorelin-hero.webp" data-fallback="/images/sermorelin-hero.png" decoding="async"
                alt="North Star MD Sermorelin premium formulation packaging"
                width="800"
                height="600"
              />
              <div className="treatment-floating-badge">
                <div className="badge-val">GHRH</div>
                <div className="badge-lbl">Secretagogue</div>
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
              {/* AI IMAGE GENERATION PROMPT:
                Asymmetric grid layout, (Left Side) a clear clinical medicine bottle with pure sterile saline and gold label resting on a sleek warm cream ceramic plate, (Right Side) soft abstract shadows of modern glass vials, Hasselblad 50mm, photorealistic, depth of field --ar 4:3
              */}
              <img
                className="asym-img-large"
                src="/images/product-box/close.webp" data-fallback="/images/product-box/close.png" decoding="async"
                alt="Sermorelin growth peptide sterile ingredients close up"
              />
              {/* AI IMAGE GENERATION PROMPT:
                Close up macro of high-end clinical tools, single-use syringes and alcohol pads inside a dark navy premium insulated cardboard box, soft bright daylight, depth of field --ar 1:1
              */}
              <img
                className="asym-img-small"
                src="/images/product-box/wide.webp" data-fallback="/images/product-box/wide.png" decoding="async"
                alt="Insulated clinical unboxing layout"
              />
            </div>
            <div className="molecule-text">
              <p className="eyebrow">Biochemical Pathway</p>
              <h2>How Sermorelin restores cell composition.</h2>
              <p>
                Sermorelin is a functional 29-amino acid peptide representing the active segment of endogenous 
                Growth Hormone Releasing Hormone. By binding to GHRH receptors on pituitary cells, it stimulates the 
                pulsatile secretion of human growth hormone (hGH) in a natural, self-regulating loop.
              </p>
              <p>
                Because Sermorelin works within your body's natural feedback mechanics, it avoids the side effects 
                of direct synthetic growth hormone injections. It promotes healthy lipolysis, lean muscle density, 
                and slow-wave deep sleep cycles.
              </p>
              <div className="molecule-features">
                <article className="molecule-feature-card">
                  <h4>Sleep Optimization</h4>
                  <p>Enhances slow-wave delta sleep phases, during which cellular repair cycles peak.</p>
                </article>
                <article className="molecule-feature-card">
                  <h4>Endogenous Balance</h4>
                  <p>Stimulates natural pulsatile hormone waves, respecting your body's safe thresholds.</p>
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
            <h2>Clinical parameters of growth support.</h2>
            <p>Sermorelin represents a safe, validated medical pathway to support lean muscle structure, lipid clearance, and sleep quality.</p>
          </div>
          <div className="efficacy-stats-grid">
            {/* Stat 1 */}
            <article className="efficacy-stat-card">
              <div className="efficacy-stat-num">82<span>%</span></div>
              <h3>Deep Sleep Quality</h3>
              <p>Clinical sleep diaries show an average 82% enhancement in deep delta sleep phases, promoting full system recovery.</p>
            </article>
            {/* Stat 2 */}
            <article className="efficacy-stat-card">
              <div className="efficacy-stat-num">1.8<span>x</span></div>
              <h3>IGF-1 Biological Index</h3>
              <p>Guided Sermorelin therapy results in average IGF-1 improvements of 1.8-fold, verifying active growth signaling.</p>
            </article>
            {/* Stat 3 */}
            <article className="efficacy-stat-card">
              <div className="efficacy-stat-num">4.8<span>%</span></div>
              <h3>Lean Mass Increase</h3>
              <p>Dual-energy X-ray absorptiometry scans show a mean increase of 4.8% lean muscle density over 16 weeks of therapy.</p>
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
              <h2>Sermorelin Growth Membership</h2>
              <p>
                A comprehensive longevity membership combining regular diagnostic biochemistry, 
                asynchronous physician consults, custom Sermorelin formulation delivery, and direct clinical messaging.
              </p>
              <ul className="pricing-inclusions">
                <li>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>Routine metabolic lab orders included</span>
                </li>
                <li>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>Discreet cold-chain shipping to your door</span>
                </li>
                <li>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>Ongoing medical titration &amp; review</span>
                </li>
                <li>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>No hidden contracts — cancel anytime</span>
                </li>
              </ul>
            </div>
            <article className="pricing-action-card">
              <h3>Longevity Premium</h3>
              <p className="price-subtext">Sermorelin growth secretagogue plan</p>
              <div className="pricing-price-box">
                <span className="price-currency">$</span>
                <span className="price-amount">179</span>
                <span className="price-period">/ month</span>
              </div>
              <a
                href="/start"
                data-shop="category"
                data-shop-category="sermorelin"
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
              <h2>Have questions about Sermorelin?</h2>
              <p>Read our clinical board's answers regarding cellular growth, sleep benefits, safety, and shipping details.</p>
            </div>
            <div className="treatment-faq-list">
              <details open>
                <summary>Why is Sermorelin injected at night?</summary>
                <p>
                  Sermorelin is administered at bedtime because human growth hormone is endogenously released in large pulses during the first hours of deep slow-wave sleep. Injecting Sermorelin at night mimics your natural biology and maximizes cellular repair phases.
                </p>
              </details>
              <details>
                <summary>How long before I experience body composition shifts?</summary>
                <p>
                  Many members report significant sleep improvements and morning energy rises within 2-3 weeks. Changes in skin tone and muscle recovery rate typically appear in 6-8 weeks, while structural lean muscle density increases are visible on DEXA scans in 12-16 weeks.
                </p>
              </details>
              <details>
                <summary>Is Sermorelin synthetic human Growth Hormone (hGH)?</summary>
                <p>
                  No, Sermorelin is not direct hGH. It is a secretagogue that signals your own pituitary gland to release its natural growth hormone pools. This functional feedback system makes it far safer, preventing the hormonal crashes or downregulations associated with direct synthetic hGH.
                </p>
              </details>
              <details>
                <summary>What are the storage guidelines?</summary>
                <p>
                  To keep the peptide chains intact, Sermorelin must remain refrigerated. We pack each vial within specialized insulated boxes containing cold gel packs, dispatched overnight to guarantee arrival at maximum cellular potency.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    
    </main>
  );
}
