"use client";

import { Link } from "@/lib/routerAdapter";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export function PrivacyPage() {
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
            alt="North Star Privacy Policy"
            decoding="async"
            fetchPriority="high"
          />
          <div className="ns-vision-hero-veil" />
        </div>
        <div className="ns-wrap ns-vision-hero-content">
          <span className="ns-vision-star-badge">🔒 Data Protection &amp; HIPAA</span>
          <p className="eyebrow">Data Privacy</p>
          <h1>Privacy Policy &amp; HIPAA Disclosures</h1>
          <p className="ns-lead">
            How your health logs, biomarker lab results, and protected health information (PHI) are encrypted and secured.
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
              At North Star MD, we are committed to safeguarding your private medical data and personal health information.
              This policy outlines how your clinical records are secured, encrypted, and processed under federal HIPAA regulations.
            </p>

            <hr className="legal-divider" />

            <div className="legal-section-block">
              <h2>1. HIPAA Compliance &amp; Protected Health Information (PHI)</h2>
              <p>
                All diagnostic bloodwork, clinical health intakes, physician communications, and compounding prescription histories
                are classified as Protected Health Information (PHI) under the Health Insurance Portability and Accountability Act (HIPAA).
              </p>
              <p>
                Your PHI is strictly encrypted using AES-256 bank-grade database security and is never sold, shared,
                or exposed to third-party data brokers or marketing platforms. Access is restricted exclusively to your credentialed North Star MD care team.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>2. Information We Collect</h2>
              <p>
                To provide tailored longevity protocols and physician oversight, we collect:
              </p>
              <ul className="legal-bullet-list">
                <li>Contact information, identity verification records, and billing tokens.</li>
                <li>HIPAA-aligned online medical intakes, symptom history, and medication profiles.</li>
                <li>Biomarker diagnostics ordered through our partner accredited laboratory networks.</li>
              </ul>
            </div>

            <div className="legal-section-block">
              <h2>3. Software Infrastructure &amp; Partner Systems</h2>
              <p>
                Our secure patient portals and digital health intake workflows operate in partnership with accredited, HIPAA-compliant telehealth software providers.
                All software infrastructure adheres strictly to federal data privacy standards.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>4. Your Privacy Rights</h2>
              <p>
                Under federal HIPAA mandates, you maintain the right to request full copies of your clinical health records, inspect your laboratory bloodwork,
                or request that your digital profile be archived or purged from our active patient portals at any time.
              </p>
            </div>

            <hr className="legal-divider" />

            <div className="legal-footer-links">
              <span>Related Legal Documents:</span>
              <div className="legal-chip-group">
                <Link to="/telehealth-consent" className="legal-chip bouncy-touch">Telehealth Consent</Link>
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
