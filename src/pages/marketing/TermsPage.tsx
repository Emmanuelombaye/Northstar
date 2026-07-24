import { Link } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export function TermsPage() {
  useScrollReveal([]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="ns-page legal-page">
      <section className="ns-page-hero ns-vision-banner legal-hero-banner">
        <div className="ns-vision-hero-bg">
          <img
            src="/images/vision-hero-stars.png"
            alt="North Star Terms of Service"
            decoding="async"
            fetchPriority="high"
          />
          <div className="ns-vision-hero-veil" />
        </div>
        <div className="ns-wrap ns-vision-hero-content">
          <span className="ns-vision-star-badge">📜 Terms &amp; Governance</span>
          <p className="eyebrow">Direct Care Agreement</p>
          <h1>Terms of Service &amp; Membership</h1>
          <p className="ns-lead">
            Terms governing direct care memberships, physician consultation policies, compounding orders, and cancellations.
          </p>
          <div className="legal-hero-meta">
            <span className="legal-date-chip">Effective Date: January 1, 2026</span>
            <button type="button" className="legal-print-btn bouncy-btn" onClick={handlePrint}>
              🖨️ Print / Save Document
            </button>
          </div>
        </div>
      </section>

      <section className="ns-section legal-body-section">
        <div className="ns-wrap">
          <div className="legal-card-container bouncy-card" data-reveal>
            <p className="legal-intro-lead">
              Welcome to North Star MD. By accessing our platform, enrolling in direct care memberships,
              or submitting clinical health assessments, you agree to comply with the Terms of Service detailed below.
            </p>

            <hr className="legal-divider" />

            <div className="legal-section-block">
              <h2>1. The Direct Care Medical Model</h2>
              <p>
                North Star MD operates under a transparent direct-to-patient direct care fee structure.
                We do not bill commercial health insurance plans. All clinical consultations, biomarker reviews, and compounding titration fees are paid directly by the patient.
              </p>
              <p>
                You agree that you will not submit claims to federal healthcare programs (such as Medicare or Medicaid) for services or memberships paid to North Star MD.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>2. Memberships &amp; Recurring Subscriptions</h2>
              <p>
                Direct care memberships are billed on a recurring monthly or annual basis depending on your chosen plan.
              </p>
              <p>
                Your account is billed automatically on your renewal date. You may pause, adjust, or cancel your subscription at any time directly within your patient portal with zero termination penalties.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>3. Independent Clinical Review &amp; Prescription Safety</h2>
              <p>
                Submitting a health intake or completing checkout does not guarantee a prescription.
                All treatments require the independent clinical evaluation and approval of a licensed physician or nurse practitioner.
              </p>
              <p>
                If a provider determines that a protocol is clinically unsafe or inappropriate based on your medical history or bloodwork, your order will be cancelled and a full refund will be processed immediately.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>4. Cancellation &amp; Compounding Pharmacy Policies</h2>
              <p>
                Membership subscriptions may be cancelled at any time with no lock-in contract.
                Once a prescription order has been reviewed by your provider and transmitted to a 503A compounding pharmacy, custom sterile compounded medications cannot be returned or refunded due to federal pharmacy safety regulations.
              </p>
            </div>

            <hr className="legal-divider" />

            <div className="legal-footer-links">
              <span>Related Legal Documents:</span>
              <div className="legal-chip-group">
                <Link to="/telehealth-consent" className="legal-chip bouncy-touch">Telehealth Consent</Link>
                <Link to="/privacy" className="legal-chip bouncy-touch">Privacy Policy</Link>
                <Link to="/start" className="btn btn-gold btn-pill bouncy-btn">Start Medical Intake &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
