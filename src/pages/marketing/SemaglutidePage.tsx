export function SemaglutidePage() {
  return (
    <main className="semaglutide-page">
      
      {/* Hero Section */}
      <section className="treatment-hero">
        <div className="treatment-wrap">
          <div className="treatment-hero-grid">
            <div className="treatment-hero-text">
              <p className="eyebrow">Therapeutic Profile</p>
              <h1>Sustained metabolic calibration.</h1>
              <p className="treatment-hero-lead">
                Semaglutide acts as a high-affinity GLP-1 receptor agonist, signaling physiological satiety pathways 
                to support long-term glucose stabilization, lipolysis, and vascular metabolic resilience.
              </p>
              <div className="treatment-hero-ctas">
                <a href="#program-select" className="btn btn-navy btn-pill btn-lg">View Program</a>
                <a href="/explore-treatments" className="btn btn-ghost btn-pill btn-lg">Explore Treatments</a>
              </div>
            </div>
            <div className="treatment-hero-image-wrap">
              {/* AI IMAGE GENERATION PROMPT:
                Minimalist studio editorial photography, a sleek modern medicine box of Semaglutide sitting on a pristine warm cream surface, soft warm morning light casting elegant linear shadows, luxury direct-care aesthetic, Hasselblad 50mm, photorealistic, color palette #f9f7f2 cream and #0a1f3d navy highlights, depth of field --ar 4:3
              */}
              <img
                className="treatment-hero-image"
                src="/images/semaglutide-hero.webp" data-fallback="/images/semaglutide-hero.png" decoding="async"
                alt="North Star MD Semaglutide premium packaging"
                width="800"
                height="600"
              />
              <div className="treatment-floating-badge">
                <div className="badge-val">GLP-1</div>
                <div className="badge-lbl">Receptor Agonist</div>
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
                Asymmetric split screen visual, (Left Image) a close-up elegant glass vial of clinical medicine with clear sterile liquid resting inside a serene oak drawer, (Right Image) minimalist warm organic plant details in a glass beaker, natural bright ambient lighting, Hasselblad 50mm, hyper-realistic, depth of field --ar 4:3
              */}
              <img
                className="asym-img-large"
                src="/images/product-box/close.webp" data-fallback="/images/product-box/close.png" decoding="async"
                alt="Metabolic medicine sterile glass vial"
              />
              {/* AI IMAGE GENERATION PROMPT:
                Close-up macro shot of clean medical materials, pristine alcohol swabs and modern disposable clinical tools arranged neatly on a warm neutral linen canvas, soft golden sun rays, clinical luxury, depth of field --ar 1:1
              */}
              <img
                className="asym-img-small"
                src="/images/product-box/wide.webp" data-fallback="/images/product-box/wide.png" decoding="async"
                alt="Aesthetic clinical supplies close up"
              />
            </div>
            <div className="molecule-text">
              <p className="eyebrow">Biochemical Pathway</p>
              <h2>How Semaglutide recalibrates metabolic speed.</h2>
              <p>
                As a Glucagon-Like Peptide-1 (GLP-1) receptor agonist, Semaglutide mimics endogenous gut hormones 
                secreted in response to nutrition. By binding selectively to pancreatic and neurological receptors, 
                it enhances insulin secretion in a glucose-dependent manner while slowing gastric emptying.
              </p>
              <p>
                This double action mitigates rapid blood sugar peaks and suppresses chronic systemic cravings, allowing 
                your physiology to establish a peaceful, calibrated baseline for sustained weight stabilization.
              </p>
              <div className="molecule-features">
                <article className="molecule-feature-card">
                  <h4>Glucose Regulation</h4>
                  <p>Encourages glucose-dependent insulin secretion, preventing blood sugar crashes.</p>
                </article>
                <article className="molecule-feature-card">
                  <h4>Satiety Signaling</h4>
                  <p>Signals neurological receptors to reduce hunger impulses naturally.</p>
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
            <h2>Proven in major clinical trials.</h2>
            <p>We build our programs on rigorous peer-reviewed clinical studies that demonstrate safety, efficacy, and outstanding metabolic protection.</p>
          </div>
          <div className="efficacy-stats-grid">
            {/* Stat 1 */}
            <article className="efficacy-stat-card">
              <div className="efficacy-stat-num">14.9<span>%</span></div>
              <h3>Mean Weight Reduction</h3>
              <p>Participants in the landmark STEP-1 clinical trial achieved an average reduction of 14.9% body weight over 68 weeks.</p>
            </article>
            {/* Stat 2 */}
            <article className="efficacy-stat-card">
              <div className="efficacy-stat-num">86<span>%</span></div>
              <h3>Clinically Significant Loss</h3>
              <p>Over 86% of clinical trial participants achieved a total weight loss of 5% or more, indicating consistent response rates.</p>
            </article>
            {/* Stat 3 */}
            <article className="efficacy-stat-card">
              <div className="efficacy-stat-num">3<span>x</span></div>
              <h3>Cardiovascular Protection</h3>
              <p>GLP-1 agonists show significant secondary cardiovascular markers protection, helping lower systemic arterial strain.</p>
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
              <h2>Semaglutide Care Membership</h2>
              <p>
                A comprehensive longevity membership combining regular diagnostic biochemistry, asynchronous physician 
                consults, custom Semaglutide formulation shipping, and direct clinical messaging.
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
              <h3>Metabolic Core</h3>
              <p className="price-subtext">Semaglutide optimization plan</p>
              <div className="pricing-price-box">
                <span className="price-currency">$</span>
                <span className="price-amount">249</span>
                <span className="price-period">/ month</span>
              </div>
              <a
                href="https://joinnorthstarmd.com/care/north-star-md/shop?brand=north-star-md&amp;brandId=c8e7f6a2-4b1d-4e9f-a3c2-1d5e8f7a6b4c"
                data-shop="category"
                data-shop-category="semaglutide"
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
              <h2>Have questions about Semaglutide?</h2>
              <p>Read our clinical board's answers regarding metabolic wellness, side effects, titration, and delivery.</p>
            </div>
            <div className="treatment-faq-list">
              <details open>
                <summary>How is Semaglutide administered?</summary>
                <p>
                  Semaglutide is administered once weekly via a tiny, virtually painless subcutaneous injection in the abdomen or thigh. Our team provides detailed, step-by-step video instructions and sterile supplies with your delivery box.
                </p>
              </details>
              <details>
                <summary>What are the potential side effects?</summary>
                <p>
                  The most common side effects are mild gastrointestinal symptoms, including slight nausea, indigestion, or occasional constipation. These are typically temporary and subside as your body acclimates to the compound. Our clinical team actively titrates your dosage incrementally to minimize discomfort.
                </p>
              </details>
              <details>
                <summary>How long does it take to see results?</summary>
                <p>
                  While individual biology varies, many members notice reduced food noise and appetite stabilization within the first 2-4 weeks. Significant metabolic weight shifts are typically visible within 8-12 weeks of consistent therapy alongside nutritional adjustments.
                </p>
              </details>
              <details>
                <summary>How does the shipping cold-chain work?</summary>
                <p>
                  To preserve molecular integrity, Semaglutide is shipped inside specialized, insulated temperature-controlled cold packs. Your package is dispatched overnight directly from our licensed partner compounding pharmacies to ensure clinical safety.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    
    </main>
  );
}
