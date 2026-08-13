export function MembershipPage() {
  return (
    <main className="membership-page">
      
      <section className="membership-hero">
        <div className="memb-wrap">
          <p className="eyebrow">Direct Care Memberships</p>
          <h1>Expert medical guidance for your lifetime journey.</h1>
          <p className="membership-hero-lead">
            Physician-led cellular enhancement, metabolic balance, and anti-aging therapies. 
            Choose the membership tier aligned to your diagnostic biochemistry and personal goals.
          </p>

          <div className="billing-toggle-container">
            <span className="billing-label is-active" id="label-monthly">Monthly Billing</span>
            <div className="billing-switch" aria-label="Toggle billing cycle" role="checkbox" aria-checked="false">
              <span className="billing-switch-handle"></span>
            </div>
            <span className="billing-label" id="label-annual">
              Annual Billing
              <span className="discount-badge">Save 15%</span>
            </span>
          </div>
        </div>
      </section>

      <section className="plans-section">
        <div className="memb-wrap">
          <div className="plans-grid">
            {/* Tier 1: Metabolic Core */}
            <article className="card-membership" data-plan="metabolic">
              <div className="plan-header">
                <h3>Metabolic Core</h3>
                <p className="plan-desc">Focused oversight for weight management, glucose stabilization, and fundamental metabolic energy.</p>
                <div className="plan-price-block">
                  <span className="plan-currency">$</span>
                  <span className="plan-price">79</span>
                  <span className="plan-term">/ month</span>
                </div>
                <span className="plan-savings-tag"></span>
              </div>
              <p className="plan-features-title">Core Inclusions</p>
              <ul className="plan-features">
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Routine metabolic lab orders &amp; audits</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Asynchronous physician review (24hr turn)</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Therapy prescription guidance &amp; titration</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Secure message access to care team</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Discreet, temperature-safe prescription shipping</span>
                </li>
              </ul>
              <a href="https://joinnorthstarmd.com/care/north-star-md/shop" data-shop="category" data-shop-category="metabolic" className="btn btn-navy btn-pill btn-block">Select Core</a>
            </article>

            {/* Tier 2: Longevity Premium */}
            <article className="card-membership is-recommended" data-plan="longevity">
              <div className="card-badge">Recommended</div>
              <div className="plan-header">
                <h3>Longevity Premium</h3>
                <p className="plan-desc">Advanced cellular diagnostics, biomarker mapping, cellular longevity, and customized biological optimization plans.</p>
                <div className="plan-price-block">
                  <span className="plan-currency">$</span>
                  <span className="plan-price">149</span>
                  <span className="plan-term">/ month</span>
                </div>
                <span className="plan-savings-tag"></span>
              </div>
              <p className="plan-features-title">Everything in Core, Plus</p>
              <ul className="plan-features">
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Advanced cardiovascular &amp; cellular labs</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>DNA methylation &amp; biological age diagnostics</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Tailored peptide &amp; anti-aging pathways</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Priority access to clinical practitioners</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Quarterly plan review &amp; lab updates</span>
                </li>
              </ul>
              <a href="https://joinnorthstarmd.com/care/north-star-md/shop" data-shop="category" data-shop-category="longevity" className="btn btn-gold btn-pill btn-block">Select Premium</a>
            </article>

            {/* Tier 3: Executive Elite */}
            <article className="card-membership" data-plan="executive">
              <div className="plan-header">
                <h3>Executive Elite</h3>
                <p className="plan-desc">Comprehensive cellular optimization, scheduled physician access, premium concierge coordination, and advanced longevity screening support.</p>
                <div className="plan-price-block">
                  <span className="plan-currency">$</span>
                  <span className="plan-price">299</span>
                  <span className="plan-term">/ month</span>
                </div>
                <span className="plan-savings-tag"></span>
              </div>
              <p className="plan-features-title">The Absolute Standard</p>
              <ul className="plan-features">
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Scheduled physician video consults</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 dedicated concierge clinical support</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Whole-genome sequencing &amp; support</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Mitochondrial wellness therapeutics support</span>
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Annual body composition scanning &amp; analysis</span>
                </li>
              </ul>
              <a href="https://joinnorthstarmd.com/care/north-star-md/shop" data-shop="category" data-shop-category="executive" className="btn btn-navy btn-pill btn-block">Select Elite</a>
            </article>
          </div>
        </div>
      </section>

      <section className="comparison-section">
        <div className="memb-wrap">
          <h2>Compare plans at a glance.</h2>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Care Benefits</th>
                  <th>Metabolic Core</th>
                  <th>Longevity Premium</th>
                  <th>Executive Elite</th>
                </tr>
              </thead>
              <tbody>
                {/* Category 1: Clinical Operations */}
                <tr className="category-row">
                  <th colSpan={4}>Clinical Care &amp; Access</th>
                </tr>
                <tr>
                  <td>Onboarding clinical review</td>
                  <td>Within 24 Hours</td>
                  <td>Within 24 Hours</td>
                  <td>Instant Review</td>
                </tr>
                <tr>
                  <td>Direct video consultations</td>
                  <td>Add-on basis</td>
                  <td>1 Included / Quarter</td>
                  <td>Unlimited / Uncapped</td>
                </tr>
                <tr>
                  <td>Medical care team support</td>
                  <td>Standard Messaging</td>
                  <td>Priority Messaging</td>
                  <td>24/7 Concierge Chat</td>
                </tr>
                <tr>
                  <td>Active clinical titration</td>
                  <td>
                    <svg className="comparison-icon check" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" />
                    </svg>
                  </td>
                  <td>
                    <svg className="comparison-icon check" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" />
                    </svg>
                  </td>
                  <td>
                    <svg className="comparison-icon check" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" />
                    </svg>
                  </td>
                </tr>

                {/* Category 2: Diagnostics */}
                <tr className="category-row">
                  <th colSpan={4}>Diagnostics &amp; Testing</th>
                </tr>
                <tr>
                  <td>Routine biomarker labs</td>
                  <td>Included</td>
                  <td>Included</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>Advanced cellular screen</td>
                  <td>
                    <svg className="comparison-icon dash" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" />
                    </svg>
                  </td>
                  <td>Included</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>Epigenetic biological age testing</td>
                  <td>
                    <svg className="comparison-icon dash" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" />
                    </svg>
                  </td>
                  <td>Included</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>Whole-genome sequencing support</td>
                  <td>
                    <svg className="comparison-icon dash" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" />
                    </svg>
                  </td>
                  <td>
                    <svg className="comparison-icon dash" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" />
                    </svg>
                  </td>
                  <td>Included</td>
                </tr>

                {/* Category 3: Fulfillment */}
                <tr className="category-row">
                  <th colSpan={4}>Shipping &amp; Fulfillment</th>
                </tr>
                <tr>
                  <td>White-label secure delivery</td>
                  <td>Discreet Carrier</td>
                  <td>Discreet Carrier</td>
                  <td>Discreet Carrier</td>
                </tr>
                <tr>
                  <td>Temperature-sensitive packing</td>
                  <td>Included</td>
                  <td>Included</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>Overnight courier option</td>
                  <td>Add-on basis</td>
                  <td>Included</td>
                  <td>Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Intake & Delivery Experience Section (Asymmetric Grid) */}
      <section className="delivery-experience-section">
        <div className="treatment-wrap">
          <div className="delivery-experience-grid">
            <div className="delivery-experience-text">
              <p className="eyebrow">The Intake &amp; Delivery Experience</p>
              <h2>Unboxing a healthier, longer life.</h2>
              <p>
                Your direct-care membership is designed for absolute physical convenience. 
                Once your board-certified prescribing physician approves your metabolic longevity protocol, 
                our partner compounding pharmacies freshly package and ship your premium custom formulation.
              </p>
              <p>
                Delivered safely to your door in highly customized, discreet temperature-controlled cold packs, 
                your therapy kit arrives complete with medical guidance sheets, safety titrations, and sterile single-use tools.
              </p>
            </div>
            <div className="delivery-grid-visual">
              {/* AI IMAGE GENERATION PROMPT:
                Minimalist luxury clinical unboxing experience scene showing a premium white-label navy blue cardboard box containing cold-chain insulated wraps, sterile medicine vials and alcohol swabs resting neatly, natural sun light, photorealistic, depth of field, Hasselblad 50mm, color tone #f9f7f2 cream and #0a1f3d navy highlights --ar 4:3
              */}
              <img
                className="delivery-img-large"
                src="/images/product-box.webp" data-fallback="/images/product-box.png" decoding="async"
                alt="North Star MD unboxing cold chain delivery box"
              />
              {/* AI IMAGE GENERATION PROMPT:
                Close up photography of pure glass clinical medicine vials standing on a luxury timber bathroom vanity surface, beautiful linear window shadows, soft luxury ambient lighting, depth of field --ar 1:1
              */}
              <img
                className="delivery-img-square"
                src="/images/product-box/close.webp" data-fallback="/images/product-box/close.png" decoding="async"
                alt="Glass medical vials sitting on vanity"
              />
              {/* AI IMAGE GENERATION PROMPT:
                Macro shot of an elegant white clinical guidance booklet, single-use subcutaneous syringes and alcohol pads resting beautifully organized on raw neutral canvas, soft golden sunset, depth of field --ar 4:3
              */}
              <img
                className="delivery-img-wide"
                src="/images/product-box/wide.webp" data-fallback="/images/product-box/wide.png" decoding="async"
                alt="Clinical guidance sheets and sterile syringes"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="membership-faq">
        <div className="memb-wrap faq-wrap">
          <div>
            <p className="eyebrow">Membership FAQs</p>
            <h2>Questions, answered clearly.</h2>
            <p style={{ color: "var(--text-body)", marginTop: 14, lineHeight: 1.6 }}>
              Everything you need to know about our physician-guided plans, billing terms, and enrollment procedures.
            </p>
          </div>
          <div className="faq-list">
            <details open>
              <summary>Are lab costs included in my membership?</summary>
              <p>
                Yes, routine biomarker lab orders requested by your North Star MD clinical team are fully covered under your membership fee. Advanced diagnostics, such as DNA methylation or whole-genome mapping, are covered within our Premium and Elite tiers, respectively.
              </p>
            </details>
            <details>
              <summary>Can I switch plans or cancel my subscription at any time?</summary>
              <p>
                Absolutely. We believe in earning your trust month-after-month. There are no lock-in periods or hidden termination fees. You can upgrade, downgrade, or cancel your direct care plan anytime directly through your secure patient portal.
              </p>
            </details>
            <details>
              <summary>Does North Star MD accept standard medical insurance?</summary>
              <p>
                We operate under a Direct Care model, which means we do not contract directly with insurance carriers. This permits our board-certified clinical team to focus fully on preventative longevity care without restrictive insurance criteria. However, you can frequently use Health Savings Accounts (HSA) or Flexible Spending Accounts (FSA) to pay for both membership and therapy scripts.
              </p>
            </details>
            <details>
              <summary>How does the secure White-Label checkout operate?</summary>
              <p>
                Once you select your plan tier, you are guided through a HIPAA-aligned, secure medical intake powered by our backend partner, Peak Health. The patient dashboard is fully customized to present exclusive North Star MD clinical standards, ensuring a premium, private care flow.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta-block">
        <p className="cta-eyebrow">
          Your path begins here.
          <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 1L8 5.5L12 6.5L8 7.5L7 12L6 7.5L2 6.5L6 5.5L7 1Z" stroke="currentColor" strokeWidth="0.85" strokeLinejoin="round"/>
          </svg>
          Guided care.
        </p>
        <h2>Ready to invest in a longer, healthier life?</h2>
        <p className="cta-sub">Enroll today in a direct physician-led care membership program customized precisely to your biology.</p>
        <a href="https://joinnorthstarmd.com/care/north-star-md/shop?brand=north-star-md&amp;brandId=c8e7f6a2-4b1d-4e9f-a3c2-1d5e8f7a6b4c" data-shop="catalog" className="btn btn-gold btn-pill btn-lg">Start Your Intake</a>
      </section>
    
    </main>
  );
}
