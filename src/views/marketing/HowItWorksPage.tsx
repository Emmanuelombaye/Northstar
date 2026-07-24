export function HowItWorksPage() {
  return (
    <main className="howitworks-page">
      
      <section className="how-hero">
        <div className="how-hero-starburst" aria-hidden="true">
          <svg viewBox="0 0 300 300" fill="none">
            <path d="M150 6L164 118L278 132L164 146L150 258L136 146L22 132L136 118L150 6Z" stroke="currentColor" strokeWidth="0.85"/>
          </svg>
        </div>
        <div className="how-wrap how-hero-grid">
          <div className="how-hero-copy">
            <p className="eyebrow">How It Works</p>
            <h1>Your North Star care journey, step by step.</h1>
            <p className="how-hero-lead">
              From choosing your treatment focus to ongoing physician support, every stage is
              designed to feel clear, secure, and personal—without unnecessary appointments or
              delays.
            </p>
            <p className="how-hero-note">
              Most patients complete intake in minutes. Clinical review is often finished within
              24 hours.
            </p>
            <div className="how-hero-actions">
              <a href="#steps" className="btn btn-gold btn-pill">See the 5 Steps</a>
              <a href="https://joinnorthstarmd.com/care/north-star-md/shop?brand=north-star-md&amp;brandId=c8e7f6a2-4b1d-4e9f-a3c2-1d5e8f7a6b4c" data-shop="catalog" className="btn btn-ghost btn-pill">Start Now</a>
            </div>
          </div>
          <div className="how-hero-media">
            <img
              src="/images/step-01-choose-treatment.webp" data-fallback="/images/step-01-choose-treatment.png" decoding="async"
              alt="Choosing a North Star MD treatment plan at home"
              width="1200"
              height="900"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="how-proof" aria-label="Care highlights">
        <div className="how-wrap how-proof-grid">
          <article>
            <span className="how-proof-icon" aria-hidden="true">
              <svg viewBox="0 0 28 28" fill="none"><circle cx="14" cy="10" r="4" stroke="currentColor" strokeWidth="1.2"/><path d="M6 24c0-4.5 3.5-6.5 8-6.5s8 2 8 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </span>
            <h3>Licensed Providers</h3>
            <p>Board-certified clinicians on every treatment decision.</p>
          </article>
          <article>
            <span className="how-proof-icon" aria-hidden="true">
              <svg viewBox="0 0 28 28" fill="none"><path d="M5 21V11M9.5 21V15M14 21V8M18.5 21V13M23 21V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </span>
            <h3>Fast Clinical Review</h3>
            <p>Most intakes reviewed within 24 hours—often sooner.</p>
          </article>
          <article>
            <span className="how-proof-icon" aria-hidden="true">
              <svg viewBox="0 0 28 28" fill="none"><rect x="6" y="12" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M10 12V9a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.2"/></svg>
            </span>
            <h3>Secure Delivery</h3>
            <p>Discreet shipping with temperature-safe packaging.</p>
          </article>
          <article>
            <span className="how-proof-icon" aria-hidden="true">
              <svg viewBox="0 0 28 28" fill="none"><path d="M14 24s-6-4.2-6-9.5a6 6 0 0112 0C20 19.8 14 24 14 24z" stroke="currentColor" strokeWidth="1.2"/></svg>
            </span>
            <h3>Ongoing Support</h3>
            <p>Messaging, follow-ups, and plan optimization included.</p>
          </article>
        </div>
      </section>

      <section className="journey-steps" id="steps" aria-label="Care journey steps">
        <div className="how-wrap journey-steps-head">
          <p className="eyebrow">Your 5-step journey</p>
          <h2>From onboarding through care, we guide you <em>every step</em> of the way.</h2>
          <p className="journey-steps-lead">
            A physician-led path built for real life: choose your focus, complete secure intake,
            get reviewed by a licensed provider, receive your medication, and stay supported as
            your plan evolves.
          </p>
        </div>

        <div className="journey-steps-list">
          <article className="step-row">
            <div className="step-row-media">
              <img
                src="/images/step-01-choose-treatment.webp" data-fallback="/images/step-01-choose-treatment.png" decoding="async"
                alt="Woman selecting a personalized North Star MD treatment plan"
                width="1200"
                height="900"
                loading="lazy"
              />
            </div>
            <div className="step-row-copy">
              <p className="step-badge"><span className="step-num">01</span> Step 1</p>
              <h3>Choose your treatment focus</h3>
              <p>
                Explore care paths for metabolic health, longevity, hormone support, and
                whole-person wellness—each designed by physicians, with clear expectations before
                you commit.
              </p>
              <ul className="step-points">
                <li>Personalized paths matched to your goals</li>
                <li>Transparent pricing before checkout</li>
                <li>No confusion about what is included</li>
              </ul>
            </div>
          </article>

          <article className="step-row step-row--reverse">
            <div className="step-row-media">
              <img
                src="/images/step-02-intake-checkout.webp" data-fallback="/images/step-02-intake-checkout.png" decoding="async"
                alt="Completing secure HIPAA-aligned intake on a smartphone"
                width="1200"
                height="900"
                loading="lazy"
              />
            </div>
            <div className="step-row-copy">
              <p className="step-badge"><span className="step-num">02</span> Step 2</p>
              <h3>Complete intake &amp; secure checkout</h3>
              <p>
                Share your medical history through our encrypted intake—most patients finish in
                under ten minutes from a phone or laptop. Identity verification helps keep your
                prescription safe.
              </p>
              <ul className="step-points">
                <li>HIPAA-aligned, encrypted forms</li>
                <li>Quick ID verification</li>
                <li>Secure checkout in one flow</li>
              </ul>
            </div>
          </article>

          <article className="step-row">
            <div className="step-row-media">
              <img
                src="/images/step-03-provider-review.webp" data-fallback="/images/step-03-provider-review.png" decoding="async"
                alt="Licensed physician reviewing a patient intake"
                width="1200"
                height="900"
                loading="lazy"
              />
            </div>
            <div className="step-row-copy">
              <p className="step-badge"><span className="step-num">03</span> Step 3</p>
              <h3>Provider reviews your intake</h3>
              <p>
                A licensed North Star MD clinician reviews your history, labs, and goals—usually
                within 24 hours. For most care paths, no live video visit is required to get
                started.
              </p>
              <ul className="step-points">
                <li>Board-certified clinical review</li>
                <li>Async review—no waiting room</li>
                <li>Direct outreach if more detail is needed</li>
              </ul>
            </div>
          </article>

          <article className="step-row step-row--reverse">
            <div className="step-row-media">
              <img
                src="/images/step-04-delivery-kit.webp" data-fallback="/images/step-04-delivery-kit.png" decoding="async"
                alt="North Star MD wellness kit delivered discreetly to your door"
                width="1200"
                height="900"
                loading="lazy"
              />
            </div>
            <div className="step-row-copy">
              <p className="step-badge"><span className="step-num">04</span> Step 4</p>
              <h3>Receive your medication</h3>
              <p>
                Your prescription is prepared and shipped discreetly with temperature-safe
                packaging. You receive clear onboarding guidance so you know exactly how to start
                from day one.
              </p>
              <ul className="step-points">
                <li>Discreet, premium packaging</li>
                <li>Pharmacy-grade handling</li>
                <li>Step-by-step start instructions</li>
              </ul>
            </div>
          </article>

          <article className="step-row">
            <div className="step-row-media">
              <img
                src="/images/step-05-ongoing-support.webp" data-fallback="/images/step-05-ongoing-support.png" decoding="async"
                alt="Patient enjoying ongoing wellness support at home"
                width="1200"
                height="900"
                loading="lazy"
              />
            </div>
            <div className="step-row-copy">
              <p className="step-badge"><span className="step-num">05</span> Step 5</p>
              <h3>Ongoing physician support</h3>
              <p>
                Your plan does not stop at delivery. Message your care team, schedule check-ins,
                and adjust treatment as your body responds—so results are built to last.
              </p>
              <ul className="step-points">
                <li>In-app messaging with your team</li>
                <li>Follow-ups and dose optimization</li>
                <li>Whole-person care over time</li>
              </ul>
              <a href="https://joinnorthstarmd.com/care/north-star-md/shop?brand=north-star-md&amp;brandId=c8e7f6a2-4b1d-4e9f-a3c2-1d5e8f7a6b4c" data-shop="catalog" className="btn btn-navy btn-pill step-cta">Begin Your Journey</a>
            </div>
          </article>
        </div>
      </section>

      <section className="how-faq">
        <div className="how-wrap faq-wrap">
          <div>
            <p className="eyebrow">FAQs</p>
            <h2>Questions, answered clearly.</h2>
            <p className="faq-intro">
              Straight answers about timing, appointments, and what happens after you enroll.
            </p>
          </div>
          <div className="faq-list">
            <details open>
              <summary>How quickly can I get started?</summary>
              <p>
                Most patients complete intake in minutes. A licensed provider typically reviews your
                information within 24 hours, and many hear back sooner.
              </p>
            </details>
            <details>
              <summary>Do I need a live video appointment?</summary>
              <p>
                Not for most paths. Care is reviewed asynchronously. If your clinician needs more
                context, they will contact you directly—no surprise requirements.
              </p>
            </details>
            <details>
              <summary>Is support included after treatment starts?</summary>
              <p>
                Yes. Messaging, check-ins, and treatment adjustments are part of the North Star MD
                experience—not an add-on.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta-block how-page-cta" id="get-started">
        <p className="cta-eyebrow">
          Better care starts with clarity.
          <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 1L8 5.5L12 6.5L8 7.5L7 12L6 7.5L2 6.5L6 5.5L7 1Z" stroke="currentColor" strokeWidth="0.85" strokeLinejoin="round"/>
          </svg>
          Start your journey.
        </p>
        <h2>Ready for physician-guided, personalized care?</h2>
        <p className="cta-sub">
          Join North Star MD and begin your treatment plan with confidence—five clear steps from
          intake to ongoing support.
        </p>
        <a href="https://joinnorthstarmd.com/care/north-star-md/shop?brand=north-star-md&amp;brandId=c8e7f6a2-4b1d-4e9f-a3c2-1d5e8f7a6b4c" data-shop="catalog" className="btn btn-gold btn-pill btn-lg">Get Started</a>
      </section>
    
    </main>
  );
}
