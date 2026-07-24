export function TirzepatidePage() {
  return (
    <main className="tirzepatide-page">
      
      {/* Hero Section */}
      <section className="treatment-hero">
        <div className="treatment-wrap">
          <div className="treatment-hero-grid">
            <div className="treatment-hero-text">
              <p className="eyebrow">Therapeutic Profile</p>
              <h1>Dual-agonist pathway optimization.</h1>
              <p className="treatment-hero-lead">
                Tirzepatide is a pioneering polypeptide that activates both GIP and GLP-1 metabolic receptors, 
                leveraging synergistic cellular pathways for glucose management, lipolysis, and cardiac safety.
              </p>
              <div className="treatment-hero-ctas">
                <a href="#program-select" className="btn btn-navy btn-pill btn-lg">View Program</a>
                <a href="/explore-treatments" className="btn btn-ghost btn-pill btn-lg">Explore Treatments</a>
              </div>
            </div>
            <div className="treatment-hero-image-wrap">
              {/* AI IMAGE GENERATION PROMPT:
                Minimalist medical studio setup showing an elegant dark blue medicine package labeled Tirzepatide, pristine white marble surface, warm golden linear shadows, organic aesthetic design, depth of field, Hasselblad 50mm, color tone #f9f7f2 cream and #0a1f3d navy details --ar 4:3
              */}
              <img
                className="treatment-hero-image"
                src="/images/tirzepatide-hero.webp" data-fallback="/images/tirzepatide-hero.png" decoding="async"
                alt="North Star MD Tirzepatide premium packaging"
                width="800"
                height="600"
              />
              <div className="treatment-floating-badge">
                <div className="badge-val">GIP+</div>
                <div className="badge-lbl">GLP-1 Dual Action</div>
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
                An asymmetric grid view, (Left Side) a clear medicine bottle with gold cap and pure sterile saline on a warm cream raw linen background, (Right Side) soft abstract shapes of natural warm neutral stones, studio bright soft shadows, Hasselblad 50mm, photorealistic, depth of field --ar 4:3
              */}
              <img
                className="asym-img-large"
                src="/images/product-box/close.webp" data-fallback="/images/product-box/close.png" decoding="async"
                alt="Tirzepatide glass vial and gold details"
              />
              {/* AI IMAGE GENERATION PROMPT:
                Close-up macro of clinical luxury syringes, needles and medical guidance sheets sitting perfectly organized inside a clean navy tray on a soft neutral surface, sun rays, depth of field --ar 1:1
              */}
              <img
                className="asym-img-small"
                src="/images/product-box/wide.webp" data-fallback="/images/product-box/wide.png" decoding="async"
                alt="Syringe and clinical packaging close up"
              />
            </div>
            <div className="molecule-text">
              <p className="eyebrow">Biochemical Pathway</p>
              <h2>The power of dual-receptor synergism.</h2>
              <p>
                Unlike single-target therapies, Tirzepatide is a single peptide chain engineered to co-agonize both 
                the Glucose-Dependent Insulinotropic Polypeptide (GIP) and GLP-1 hormone receptors. 
                GIP acts dynamically within adipose tissues to regulate lipid deposition and metabolic rate.
              </p>
              <p>
                When paired with GLP-1 satiety pathways, this dual action synergistic approach prevents 
                metabolic adaptation, stabilizes insulin sensitivity, and provides unmatched, clinically studied efficiency.
              </p>
              <div className="molecule-features">
                <article className="molecule-feature-card">
                  <h4>Dual Agonism</h4>
                  <p>Co-triggers GIP and GLP-1 cellular pathways for double the metabolic benefit.</p>
                </article>
                <article className="molecule-feature-card">
                  <h4>Lipid Homeostasis</h4>
                  <p>Directly acts on fat tissue receptors to calibrate cellular energy expenditures.</p>
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
            <h2>Peerless trial achievements.</h2>
            <p>Tirzepatide represents the peak of modern peptide therapy, yielding historically high margins of metabolic optimization in trials.</p>
          </div>
          <div className="efficacy-stats-grid">
            {/* Stat 1 */}
            <article className="efficacy-stat-card">
              <div className="efficacy-stat-num">20.9<span>%</span></div>
              <h3>Mean Weight Reduction</h3>
              <p>Participants in the SURPASS-1 clinical trials achieved a historic average body weight reduction of 20.9% over 72 weeks.</p>
            </article>
            {/* Stat 2 */}
            <article className="efficacy-stat-card">
              <div className="efficacy-stat-num">91<span>%</span></div>
              <h3>Clinically Significant Loss</h3>
              <p>Over 91% of clinical trial participants achieved a total weight loss of 5% or more, showcasing remarkable efficacy.</p>
            </article>
            {/* Stat 3 */}
            <article className="efficacy-stat-card">
              <div className="efficacy-stat-num">2.4<span>%</span></div>
              <h3>Average HbA1c Reduction</h3>
              <p>Clinical logs showed an average HbA1c reduction of 2.4%, validating exceptional systemic glucose control.</p>
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
              <h2>Tirzepatide Care Membership</h2>
              <p>
                Our most advanced metabolic program. Includes regular clinical biomarker panels, asynchronous physician 
                assessments, custom cold-chain Tirzepatide supply delivery, and priority clinical support.
              </p>
              <ul className="pricing-inclusions">
                <li>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>Routine metabolic lab orders included</span>
                </li>
                <li>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>Premium insulated overnight delivery</span>
                </li>
                <li>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>Ongoing medical titration &amp; safety reviews</span>
                </li>
                <li>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>No hidden contracts — cancel anytime</span>
                </li>
              </ul>
            </div>
            <article className="pricing-action-card">
              <h3>Longevity Premium</h3>
              <p className="price-subtext">Advanced dual-agonist plan</p>
              <div className="pricing-price-box">
                <span className="price-currency">$</span>
                <span className="price-amount">329</span>
                <span className="price-period">/ month</span>
              </div>
              <a
                href="https://joinnorthstarmd.com/care/north-star-md/shop?brand=north-star-md&amp;brandId=c8e7f6a2-4b1d-4e9f-a3c2-1d5e8f7a6b4c"
                data-shop="category"
                data-shop-category="tirzepatide"
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
              <h2>Have questions about Tirzepatide?</h2>
              <p>Read our clinical board's answers regarding metabolic wellness, dual receptors, and delivery protocols.</p>
            </div>
            <div className="treatment-faq-list">
              <details open>
                <summary>How does Tirzepatide differ from Semaglutide?</summary>
                <p>
                  While Semaglutide acts purely on the GLP-1 receptor, Tirzepatide is a dual-agonist targeting both GIP and GLP-1. In clinical trials, Tirzepatide has demonstrated slightly higher average weight reduction percentages and improved overall gastrointestinal tolerance due to GIP's positive synergistic actions on cell tissues.
                </p>
              </details>
              <details>
                <summary>What is the titration schedule?</summary>
                <p>
                  Our physicians start you on a low therapeutic dose (typically 2.5mg weekly) to allow your digestive system to adjust. Every 4 weeks, your clinical care team evaluates your biomarker feedback and may incrementally titrate your dose (to 5mg, 7.5mg, etc.) to ensure steady optimization.
                </p>
              </details>
              <details>
                <summary>Is standard blood testing required?</summary>
                <p>
                  Yes, to ensure absolute cardiac and metabolic safety, all North Star MD memberships include routine clinical blood biomarker assessments. Your prescribing physician reviews these panels prior to escalating dosages to verify lipid and pancreatic health.
                </p>
              </details>
              <details>
                <summary>How should Tirzepatide be stored?</summary>
                <p>
                  Tirzepatide is a fragile polypeptide and must be stored under refrigeration (between 36°F and 46°F) to prevent molecular breakdown. Vials should never be frozen. We dispatch all shipments inside custom temperature-sensitive insulation grids.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    
    </main>
  );
}
