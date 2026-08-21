export function FaqPage() {
  const faqMedia = [
    { src: "/images/home/faq-provider-review.png", alt: "Provider review and safety" },
    { src: "/images/home/faq-shipping-pharmacy.png", alt: "Pharmacy and shipping standards" },
    { src: "/images/home/faq-safety-eligibility.png", alt: "Eligibility and treatment guidance" },
  ] as const;

  return (
    <main className="faq-page">
      <section className="faq-hero">
        <div className="faq-wrap">
          <p className="eyebrow">North Star MD</p>
          <h1>Clear answers before you begin.</h1>
          <p className="faq-hero-lead">
            How Semaglutide and Tirzepatide care works at North Star MD — intake, licensed provider review, pharmacy
            fulfillment, and billing. Completing an intake does not guarantee a prescription.
          </p>
        </div>
      </section>

      <section className="faq-main-section">
        <div className="faq-media-grid ns-snap ns-snap--3" aria-hidden="true">
          {faqMedia.map((item) => (
            <figure key={item.src} className="faq-media-card">
              <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
        <div className="faq-list-container">
          <div className="faq-group" id="clinical">
            <h2 className="faq-group-title">Intake &amp; clinical review</h2>

            <details className="faq-item" open>
              <summary>Is a prescription guaranteed?</summary>
              <p>
                No. Completing an intake does not guarantee treatment. A licensed U.S. clinician reviews your medical
                history and decides whether Semaglutide or Tirzepatide is appropriate.
              </p>
            </details>

            <details className="faq-item">
              <summary>How does the clinical intake work?</summary>
              <p>
                You share medical history, metrics, and shipping details in a secure questionnaire. A state-licensed
                North Star MD provider reviews your answers — typically within about 24 hours — and may follow up if
                more information is needed.
              </p>
            </details>

            <details className="faq-item">
              <summary>Is a live video visit required?</summary>
              <p>
                Not always. Many reviews are asynchronous. If your clinician needs more context, they can message you
                through the Patient Center or schedule a visit.
              </p>
            </details>

            <details className="faq-item">
              <summary>Who reviews my intake?</summary>
              <p>
                A licensed U.S. healthcare provider — such as a physician, DO, or nurse practitioner — licensed to
                practice in your state reviews your questionnaire before any prescription decision.
              </p>
            </details>
          </div>

          <div className="faq-group" id="treatments">
            <h2 className="faq-group-title">Treatments &amp; compounding</h2>

            <details className="faq-item">
              <summary>What treatments does North Star MD offer?</summary>
              <p>
                North Star MD focuses on physician-guided Semaglutide and Tirzepatide programs, with additional
                wellness protocols available through the shop when clinically appropriate. Your provider decides what,
                if anything, is right for you.
              </p>
            </details>

            <details className="faq-item">
              <summary>Are compounded medications FDA-approved?</summary>
              <p>
                Compounded Semaglutide and Tirzepatide are prepared by licensed U.S. pharmacies for individual patients
                when prescribed. They are not FDA-approved as finished branded products and have not been reviewed by
                the FDA for safety, effectiveness, or manufacturing quality as finished drugs.
              </p>
            </details>

            <details className="faq-item">
              <summary>What should I know about side effects?</summary>
              <p>
                Side effects vary. Common effects may include nausea, constipation, diarrhea, or appetite changes,
                especially while your body adjusts. Your provider can adjust your protocol if needed.
              </p>
            </details>
          </div>

          <div className="faq-group" id="billing">
            <h2 className="faq-group-title">Pricing &amp; payments</h2>

            <details className="faq-item">
              <summary>How does pricing work?</summary>
              <p>
                You can begin the medical intake at no charge. If prescribed, itemized program pricing is confirmed
                before enrollment. You are not charged for ongoing medication fulfillment unless a provider approves
                treatment.
              </p>
            </details>

            <details className="faq-item">
              <summary>Can I use an HSA or FSA card?</summary>
              <p>
                Many patients use HSA or FSA debit cards for doctor-prescribed care. Eligibility depends on your plan.
                North Star MD does not bill commercial insurance.
              </p>
            </details>

            <details className="faq-item">
              <summary>Do you accept health insurance?</summary>
              <p>
                No. North Star MD is a direct-pay telehealth practice. This keeps clinical review focused on your
                history and eligibility rather than insurance authorization.
              </p>
            </details>
          </div>

          <div className="faq-group" id="shipping">
            <h2 className="faq-group-title">Pharmacy &amp; shipping</h2>

            <details className="faq-item">
              <summary>Where is medication shipped from?</summary>
              <p>
                When prescribed, medication is fulfilled by licensed U.S. compounding pharmacies and shipped to an
                eligible address. Availability depends on your state and clinical review.
              </p>
            </details>

            <details className="faq-item">
              <summary>How does temperature-controlled shipping work?</summary>
              <p>
                Injectable medications that require refrigeration are packed for cold-chain transit and shipped
                discreetly to your door.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta-block">
        <p className="cta-eyebrow">North Star MD · GLP-1 care</p>
        <h2>Ready for a clinical review?</h2>
        <p className="cta-sub">
          Start a free medical intake. A licensed U.S. provider decides if Semaglutide or Tirzepatide is appropriate.
        </p>
        <a href="/start" className="btn btn-gold btn-pill btn-lg">
          Check Eligibility
        </a>
      </section>
    </main>
  );
}
