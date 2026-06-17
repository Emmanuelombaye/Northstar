export function PrivacyPage() {
  return (
    <main className="privacy-page">
      
      <section className="legal-hero">
        <div className="legal-content">
          <p className="eyebrow">Data Protection</p>
          <h1>Privacy Policy &amp; HIPAA Disclosures</h1>
          <p style="font-size: 14px; color: var(--text-body); margin-top: 8px;">Effective Date: January 1, 2026</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="legal-content">
          <p>
            At North Star MD, we are committed to safeguarding your private medical data and personal information. 
            This policy outlines how your health logs are secured, collected, and shared under federal regulations.
          </p>

          <h2>1. HIPAA Compliance &amp; Protected Health Information (PHI)</h2>
          <p>
            All patient diagnostic bloodwork, clinical intakes, practitioner communication, and medication histories 
            are categorized as Protected Health Information (PHI) under the Health Insurance Portability and Accountability Act (HIPAA).
          </p>
          <p>
            Your PHI is strictly secured under state-of-the-art medical database encryption and is never shared, sold, 
            or exposed to third-party marketing companies. Access is granted solely to your licensed North Star MD practitioners.
          </p>

          <h2>2. Data Collection &amp; Use</h2>
          <p>
            To provide clinical titrations and direct longevity care, we collect:
          </p>
          <ul>
            <li>Contact details, identity verification records, and secure billing tokens.</li>
            <li>HIPAA-aligned health intakes, prior disease histories, and active symptoms.</li>
            <li>Biomarker diagnostics ordered through our Quest and Labcorp partner clinics.</li>
          </ul>

          <h2>3. White-Label Third-Party Frameworks</h2>
          <p>
            Our online patient dashboards, buy-flows, and medical intakes are managed in partnership with **Peak Health**, 
            our secure white-label telehealth software provider. Peak Health complies with all federal HIPAA data storage 
            mandates, ensuring your care transitions safely.
          </p>

          <h2>4. Your Legal Rights</h2>
          <p>
            Under federal law, you maintain the right to inspect your clinical records, request copies of your diagnostic bloodwork, 
            or request that we terminate or purge your digital profile from our active care portals at any time.
          </p>

          <h2>5. Security Disclosures</h2>
          <p>
            We implement multiple layers of security to secure your PHI, including end-to-end database encryption, 
            secure socket layer (SSL) transactions, and strict clinical access controls.
          </p>
        </div>
      </section>
    
    </main>
  );
}
