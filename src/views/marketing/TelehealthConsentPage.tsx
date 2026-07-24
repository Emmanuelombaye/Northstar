"use client";

import { Link } from "@/lib/routerAdapter";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export function TelehealthConsentPage() {
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
            alt="North Star Legal Disclosure"
            decoding="async"
            fetchPriority="high"
          />
          <div className="ns-vision-hero-veil" />
        </div>
        <div className="ns-wrap ns-vision-hero-content">
          <span className="ns-vision-star-badge">📋 Medical &amp; Clinical Compliance</span>
          <p className="eyebrow">Medical Disclosure</p>
          <h1>Telehealth Informed Consent</h1>
          <p className="ns-lead">
            Required clinical disclosures and telemedicine terms for North Star MD members across all 50 states.
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
              Please review this Telehealth Informed Consent document carefully before starting your clinical intake.
              By checking <strong>"I Consent"</strong> during enrollment or within your patient portal, you acknowledge and agree to the telemedicine terms outlined below.
            </p>

            <hr className="legal-divider" />

            <div className="legal-section-block">
              <h2>1. What is Telehealth?</h2>
              <p>
                Telehealth (or telemedicine) involves the delivery of healthcare services using digital audio, video,
                or asynchronous secure messaging technologies.
              </p>
              <p>
                At North Star MD, telehealth permits you to receive preventative longevity medical reviews, advanced biomarker audits,
                and customized clinical compounding prescriptions without visiting a physical hospital in person.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>2. Asynchronous Medical Reviews</h2>
              <p>
                You understand and agree that many care paths at North Star MD operate asynchronously.
                Your licensed clinical practitioner will evaluate the digital intake records, blood panels, and symptoms you submit
                remotely, rather than conducting an in-person physical evaluation.
              </p>
              <p>
                If a practitioner determines that your clinical diagnostics require further clarification, they will reach out
                via secure messaging or phone consult before issuing or approving your prescription protocol.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>3. Disclosures, Potential Risks &amp; Technical Limits</h2>
              <p>
                While telehealth is highly convenient, HIPAA-aligned, and physician-guided, potential technical limits exist:
              </p>
              <ul className="legal-bullet-list">
                <li>In rare cases, network latency or data connection issues may delay clinical intake reviews.</li>
                <li>Because physical exams are remote, practitioners rely strictly on the truthfulness and accuracy of self-reported medical histories and lab bloodwork.</li>
                <li>Compounded treatments are prescribed only when clinically appropriate under 503A compounding regulations.</li>
              </ul>
            </div>

            <div className="legal-alert-box legal-alert-warning">
              <h3>🚨 4. NOT FOR EMERGENCY MEDICAL CARE</h3>
              <p>
                <strong>North Star MD does not provide emergency medical services.</strong>
              </p>
              <p>
                If you are experiencing a medical emergency, severe acute symptoms, chest pains, shortness of breath, or immediate life-threatening events,
                you agree to immediately dial <strong>911</strong> or visit your nearest hospital emergency department.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>5. Practitioner Licensing &amp; Prescribing Disclosures</h2>
              <p>
                Every physician and nurse practitioner within the North Star MD provider network is board-certified and credentialed
                to practice medicine in your home state. You agree to submit authentic identity verification and accurate medical records.
              </p>
            </div>

            <hr className="legal-divider" />

            <div className="legal-footer-links">
              <span>Related Legal Documents:</span>
              <div className="legal-chip-group">
                <Link to="/privacy" className="legal-chip bouncy-touch">Privacy Policy &amp; HIPAA</Link>
                <Link to="/terms" className="legal-chip bouncy-touch">Terms of Service</Link>
                <Link to="/start" className="btn btn-gold btn-pill bouncy-btn">Start Medical Intake &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
