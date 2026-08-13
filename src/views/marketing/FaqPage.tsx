export function FaqPage() {
  return (
    <main className="faq-page">
      
      <section className="faq-hero">
        <div className="faq-wrap">
          <p className="eyebrow">Clinical Support</p>
          <h1>Clear answers for your health journey.</h1>
          <p className="faq-hero-lead">
            Everything you need to know about our physician-guided plans, telemedicine compliance, 
            HSA/FSA payment policies, and cold-chain shipping logistics.
          </p>
        </div>
      </section>

      <div className="faq-tab-container">
        <div className="faq-tabs" role="tablist" aria-label="Support categories">
          <button className="faq-tab is-active" data-group="all" role="tab" aria-selected="true">All FAQs</button>
          <button className="faq-tab" data-group="clinical" role="tab" aria-selected="false">Medical &amp; Intake</button>
          <button className="faq-tab" data-group="billing" role="tab" aria-selected="false">Payments &amp; HSA</button>
          <button className="faq-tab" data-group="shipping" role="tab" aria-selected="false">Pharmacy &amp; Transit</button>
        </div>
      </div>

      <section className="faq-main-section">
        <div className="faq-list-container">
          {/* Group 1: Medical & Intake */}
          <div className="faq-group" id="clinical">
            <h2 className="faq-group-title">Medical &amp; Clinical Intake</h2>
            
            <details className="faq-item" open>
              <summary>How does the secure clinical intake operate?</summary>
              <p>
                Our HIPAA-aligned onboarding allows you to securely share your medical history, current biomarkers, 
                and primary care goals online. A board-certified North Star MD physician evaluates your case, 
                approves appropriate therapy paths, and directs your lab orders—typically within 24 hours.
              </p>
            </details>

            <details className="faq-item">
              <summary>Is a live video consultation required?</summary>
              <p>
                Not always. Many of our preventative longevity and weight care paths utilize asynchronous clinical review. 
                If your doctor requires further clinical context, or if you are enrolled in our Premium or Elite 
                membership tiers, video check-ins are scheduled directly inside your member portal.
              </p>
            </details>

            <details className="faq-item">
              <summary>Who are the North Star MD medical practitioners?</summary>
              <p>
                Every practitioner in our clinical network is a board-certified medical doctor (MD), doctor of osteopathic 
                medicine (DO), or advanced nurse practitioner (APRN) licensed in the United States. Our directors and advisors 
                specialize in endocrinology, preventative longevity science, and cardiovascular lipidology.
              </p>
            </details>
          </div>

          {/* Group 2: Billing & HSA */}
          <div className="faq-group" id="billing">
            <h2 className="faq-group-title">Payments &amp; HSA / FSA</h2>
            
            <details className="faq-item">
              <summary>Can I pay for my treatment with HSA or FSA cards?</summary>
              <p>
                Yes! Because North Star MD provides doctor-prescribed therapies, diagnostic labs, and ongoing clinical care, 
                our memberships are fully qualifying medical expenses. You can check out directly using your HSA or FSA debit card.
              </p>
            </details>

            <details className="faq-item">
              <summary>Do you accept standard health insurance?</summary>
              <p>
                We operate under a Direct Care model, which means we do not contract with insurance carriers. Bypassing 
                standard commercial insurance enables our physicians to focus 100% on preventative longevity strategies 
                without restrictive insurance criteria or authorization delays.
              </p>
            </details>

            <details className="faq-item">
              <summary>How do I receive super-bills for reimbursement?</summary>
              <p>
                Simply toggle the "Request Super-Bill" trigger inside your member portal after any treatment cycle. 
                Our billing desk will generate an itemized clinical invoice complete with all standard CPT codes 
                and ICD-10 diagnostic markers for you to submit to your insurer.
              </p>
            </details>
          </div>

          {/* Group 3: Pharmacy & Shipping */}
          <div className="faq-group" id="shipping">
            <h2 className="faq-group-title">Pharmacy, Transit &amp; Logistics</h2>
            
            <details className="faq-item">
              <summary>Where are my prescriptions formulated?</summary>
              <p>
                All therapies are formulated, compounded, and shipped strictly by our CLIA-certified compounding pharmacy 
                partners in the United States. Compounds undergo third-party assay checks for purity and consistency.
              </p>
            </details>

            <details className="faq-item">
              <summary>How does temperature-controlled shipping work?</summary>
              <p>
                Emerging cellular peptides require strict cold-chain preservation during transit. Your prescription is packed 
                in specialized insulated boxes with medical-grade frozen gel packs, maintaining optimal cool temperatures 
                from our sterile pharmacy directly to your doorstep.
              </p>
            </details>

            <details className="faq-item">
              <summary>How quickly will my treatment ship?</summary>
              <p>
                Once your physician reviews your lab results and approves your custom longevity script, the order is sent 
                to our compounding pharmacy. Your box is prepared, packed, and shipped via overnight or express courier, 
                reaching you in 1 to 2 business days.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta-block">
        <p className="cta-eyebrow">
          Always here to support you.
          <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 1L8 5.5L12 6.5L8 7.5L7 12L6 7.5L2 6.5L6 5.5L7 1Z" stroke="currentColor" strokeWidth="0.85" strokeLinejoin="round"/>
          </svg>
          Direct care support.
        </p>
        <h2>Still have questions? Chat with our team.</h2>
        <p className="cta-sub">Our clinical care coordinators are standing by to guide you through payment, state coverage, or lab options.</p>
        <a href="https://joinnorthstarmd.com/care/north-star-md/shop?brand=north-star-md&amp;brandId=c8e7f6a2-4b1d-4e9f-a3c2-1d5e8f7a6b4c" data-shop="catalog" className="btn btn-gold btn-pill btn-lg">Start Live Intake</a>
      </section>
    
    </main>
  );
}
