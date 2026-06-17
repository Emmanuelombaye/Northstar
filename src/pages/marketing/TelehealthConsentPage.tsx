export function TelehealthConsentPage() {
  return (
    <main className="telehealthconsent-page">
      
      <section className="legal-hero">
        <div className="legal-content">
          <p className="eyebrow">Medical Disclosure</p>
          <h1>Telehealth Informed Consent</h1>
          <p style="font-size: 14px; color: var(--text-body); margin-top: 8px;">Effective Date: January 1, 2026</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="legal-content">
          <p>
            Please review this Telehealth Informed Consent document carefully before starting your clinical intake. 
            By checking "I Consent" in our portal, you acknowledge and agree to the telemedicine terms outlined below.
          </p>

          <h2>1. What is Telehealth?</h2>
          <p>
            Telehealth (or telemedicine) involves the delivery of healthcare services using digital audio, video, 
            or asynchronous secure messaging technologies. 
          </p>
          <p>
            At North Star MD, telehealth permits you to receive preventative longevity medical reviews, advanced biomarker audits, 
            and customized clinical compounding prescriptions without visiting a standard hospital in person.
          </p>

          <h2>2. Asynchronous Medical Reviews</h2>
          <p>
            You understand and agree that many care paths at North Star MD operate asynchronously. 
            Your licensed practitioner will evaluate the digital intake records, blood panels, and symptoms you submit 
            remotely, rather than conducting a face-to-face evaluation. 
          </p>
          <p>
            If a practitioner determines that your clinical diagnostics require further clarification, they will reach out 
            to schedule a secure real-time consult before approving your cellular prescription.
          </p>

          <h2>3. Disclosures, Risks &amp; Technical Limits</h2>
          <p>
            While telehealth is highly convenient and science-backed, there are potential technical risks:
          </p>
          <ul>
            <li>In rare cases, transmission failures, dropouts, or data connection issues may delay clinical evaluations.</li>
            <li>Limited physical exams mean practitioners rely heavily on the accuracy of the biomarkers and prior medical histories you self-submit.</li>
          </ul>

          <h2>4. NOT FOR EMERGENCY CARE</h2>
          <p>
            **North Star MD does not provide emergency medical services.** 
          </p>
          <p>
            If you are experiencing a medical emergency, acute symptoms, chest pains, or immediate wellness threats, 
            you agree to immediately dial **911** or visit your nearest hospital emergency department.
          </p>

          <h2>5. Practitioner Licensing Disclosures</h2>
          <p>
            Every physician and nurse practitioner within the North Star MD provider network is legally licensed and credentialed 
            to prescribe within your state of residence. You agree to submit truthful, accurate verification records.
          </p>
        </div>
      </section>
    
    </main>
  );
}
