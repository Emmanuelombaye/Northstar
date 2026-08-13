export function ExploreTreatmentsPage() {
  return (
    <main className="exploretreatments-page">
      
      <section className="explore-hero">
        <div className="explore-wrap">
          <h1>Explore our treatments below and choose what's best <em>for you.</em></h1>
          <div className="hero-trust-marquee" aria-hidden="true">
            <div className="hero-trust-track">
              <span>U.S. Licensed Pharmacies</span>
              <span>Licensed Providers in all 50 States</span>
              <span>Free Expedited Shipment</span>
              <span>U.S. Licensed Pharmacies</span>
              <span>Licensed Providers in all 50 States</span>
              <span>Free Expedited Shipment</span>
            </div>
          </div>
        </div>
      </section>

      <section className="programs-section">
        <div className="explore-wrap">
          <div className="filter-tabs filter-tabs-simple" role="tablist" aria-label="Treatment category filters">
              <button className="filter-tab is-active" role="tab" aria-selected="true" data-filter="weight">
                <span className="tab-labels">
                  <strong>Weight Loss</strong>
                  <small>Tirzepatide + Semaglutide</small>
                </span>
                <img src="/images/tirzepatide-hero.webp" data-fallback="/images/tirzepatide-hero.png" decoding="async" alt="Personalized Tirzepatide+ weight loss" loading="lazy" />
              </button>
              <button className="filter-tab" role="tab" aria-selected="false" data-filter="longevity">
                <span className="tab-labels">
                  <strong>Longevity</strong>
                  <small>NAD+ Rejuvenation</small>
                </span>
                <img src="/images/nad-hero.webp" data-fallback="/images/nad-hero.png" decoding="async" alt="NAD+ longevity treatment" loading="lazy" />
              </button>
              <button className="filter-tab" role="tab" aria-selected="false" data-filter="recovery">
                <span className="tab-labels">
                  <strong>Muscle Recovery</strong>
                  <small>Sermorelin Recovery</small>
                </span>
                <img src="/images/sermorelin-hero.webp" data-fallback="/images/sermorelin-hero.png" decoding="async" alt="Sermorelin muscle recovery treatment" loading="lazy" />
              </button>
            </div>

          <div className="program-panel is-active" data-panel="weight">
            <article className="program-card">
              <div className="program-media program-media-card">
                <img src="/images/weight-loss-card.webp" data-fallback="/images/weight-loss-card.png" decoding="async" alt="Personalized GLP-1 injections — Tirzepatide+ and Semaglutide+ by North Star MD" className="program-card-art" fetchPriority="high" />
              </div>
              <div className="program-content">
                <h3>Personalized GLP-1 Injections</h3>
                <p className="program-lead">A weekly treatment designed to support appetite suppression, metabolic optimization, and long-term weight management through GLP-1 receptor activation.</p>
                <div className="medication-pills">
                  <span><a href="/tirzepatide">Personalized Tirzepatide+</a></span>
                  <span><a href="/semaglutide">Personalized Semaglutide+</a></span>
                </div>
                <p className="plan-includes-title">All Plans Include:</p>
                <ul className="plan-includes">
                  <li>Free Medical Consultation</li>
                  <li>Free Expedited Shipping</li>
                  <li>24/7 Dedicated Support</li>
                  <li>Access to Patient Portal</li>
                </ul>
                <div className="guarantee-note">
                  <strong>North Star MD Guarantee</strong> — Provider-guided care, medications from U.S. licensed pharmacies, and only charged if treatment is prescribed — with flexibility to change or cancel anytime.
                </div>
                <div className="pricing-row">
                  <span className="pricing-label">Starting as low as:</span>
                  <p className="pricing-value"><s className="pricing-was">$206/mo*</s> $146 <small>/mo*</small></p>
                </div>
                <div className="program-ctas">
                  <a href="https://joinnorthstarmd.com/care/north-star-md/shop" data-shop="category" data-shop-category="weight-loss" className="btn btn-navy btn-pill btn-block">See if I qualify</a>
                </div>
                <p className="program-footnote">*New Patients, Semaglutide 6-month plan</p>
              </div>
            </article>
          </div>

          <div className="program-panel" data-panel="longevity">
            <article className="program-card">
              <div className="program-media program-media-card">
                <img src="/images/longevity-card.webp" data-fallback="/images/longevity-card.png" decoding="async" alt="NAD+ injections by North Star MD" className="program-card-art" loading="lazy" />
              </div>
              <div className="program-content">
                <h3>NAD+ Injections</h3>
                <p className="program-lead">A treatment designed to support cellular energy, focus, metabolism, and healthy aging through replenishment of NAD+ levels.</p>
                <p className="plan-includes-title">All Plans Include:</p>
                <ul className="plan-includes">
                  <li>Free Medical Consultation</li>
                  <li>Free Expedited Shipping</li>
                  <li>24/7 Dedicated Support</li>
                  <li>Access to Patient Portal</li>
                </ul>
                <div className="guarantee-note">
                  <strong>North Star MD Guarantee</strong> — Provider-guided care, medications from U.S. licensed pharmacies, and only charged if treatment is prescribed — with flexibility to change or cancel anytime.
                </div>
                <div className="pricing-row">
                  <span className="pricing-label">Starting as low as:</span>
                  <p className="pricing-value">$192 <small>/mo*</small></p>
                </div>
                <div className="program-ctas">
                  <a href="https://joinnorthstarmd.com/care/north-star-md/shop" data-shop="category" data-shop-category="nad" className="btn btn-navy btn-pill btn-block">See if I qualify</a>
                </div>
                <p className="program-footnote">*NAD+ 3-month plan</p>
              </div>
            </article>
          </div>

          <div className="program-panel" data-panel="recovery">
            <article className="program-card">
              <div className="program-media program-media-card">
                <img src="/images/muscle-recovery-card.webp" data-fallback="/images/muscle-recovery-card.png" decoding="async" alt="Sermorelin injections by North Star MD" className="program-card-art" loading="lazy" />
              </div>
              <div className="program-content">
                <h3>Sermorelin Injections</h3>
                <p className="program-lead">A daily peptide injection designed to support natural growth hormone production, energy, sleep quality, and recovery.</p>
                <p className="plan-includes-title">All Plans Include:</p>
                <ul className="plan-includes">
                  <li>Free Medical Consultation</li>
                  <li>Free Expedited Shipping</li>
                  <li>24/7 Dedicated Support</li>
                  <li>Access to Patient Portal</li>
                </ul>
                <div className="guarantee-note">
                  <strong>North Star MD Guarantee</strong> — Provider-guided care, medications from U.S. licensed pharmacies, and only charged if treatment is prescribed — with flexibility to change or cancel anytime.
                </div>
                <div className="pricing-row">
                  <span className="pricing-label">Starting as low as:</span>
                  <p className="pricing-value">$192 <small>/mo*</small></p>
                </div>
                <div className="program-ctas">
                  <a href="https://joinnorthstarmd.com/care/north-star-md/shop" data-shop="category" data-shop-category="sermorelin" className="btn btn-navy btn-pill btn-block">See if I qualify</a>
                </div>
                <p className="program-footnote">*Sermorelin 3-month plan</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Weight Loss deep content (Yucca structure, North Star MD brand) */}
      <div className="category-detail is-active" data-detail="weight">
        <section className="results-strip">
          <div className="explore-wrap">
            <h2>Our <em>patients' results</em> speak for themselves!</h2>
            <div className="results-marquee" aria-label="Patient success stories">
              <div className="results-marquee-track">
                <figure className="results-marquee-slide">
                  <div className="results-marquee-media">
                    <img src="/images/patient-result-01.webp" data-fallback="/images/patient-result-01.png" decoding="async" alt="Woman at home — North Star MD telehealth intake and provider-guided care" width="900" height="675" />
                    <figcaption className="results-marquee-caption">
                      <span className="results-marquee-stat">Care from <em>home</em></span>
                      <span className="results-marquee-detail">Licensed U.S. providers review your intake online—no clinic visit to get started.</span>
                      <span className="results-marquee-tag">Physician-guided telehealth</span>
                    </figcaption>
                  </div>
                </figure>
                <figure className="results-marquee-slide">
                  <div className="results-marquee-media">
                    <img src="/images/patient-result-02.webp" data-fallback="/images/patient-result-02.png" decoding="async" alt="Woman walking outdoors — sustainable GLP-1 weight management with North Star MD" width="900" height="675" />
                    <figcaption className="results-marquee-caption">
                      <span className="results-marquee-stat">Built for <em>lasting</em> change</span>
                      <span className="results-marquee-detail">GLP-1 therapy paired with lifestyle support—designed around your real routine.</span>
                      <span className="results-marquee-tag">Weight management · GLP-1</span>
                    </figcaption>
                  </div>
                </figure>
                <figure className="results-marquee-slide">
                  <div className="results-marquee-media">
                    <img src="/images/patient-result-03.webp" data-fallback="/images/patient-result-03.png" decoding="async" alt="Woman preparing a healthy meal — personalized North Star MD treatment plan" width="900" height="675" />
                    <figcaption className="results-marquee-caption">
                      <span className="results-marquee-stat">More than <em>medication</em></span>
                      <span className="results-marquee-detail">Your plan reflects your health history, goals, and how you actually live day to day.</span>
                      <span className="results-marquee-tag">Personalized treatment</span>
                    </figcaption>
                  </div>
                </figure>
                <figure className="results-marquee-slide">
                  <div className="results-marquee-media">
                    <img src="/images/patient-result-04.webp" data-fallback="/images/patient-result-04.png" decoding="async" alt="Woman stretching at home — ongoing North Star MD care team support" width="900" height="675" />
                    <figcaption className="results-marquee-caption">
                      <span className="results-marquee-stat">Support <em>between</em> visits</span>
                      <span className="results-marquee-detail">Message your care team, track orders, and stay connected through the patient portal.</span>
                      <span className="results-marquee-tag">24/7 dedicated support</span>
                    </figcaption>
                  </div>
                </figure>
                <figure className="results-marquee-slide">
                  <div className="results-marquee-media">
                    <img src="/images/patient-result-05.webp" data-fallback="/images/patient-result-05.png" decoding="async" alt="Woman after workout — North Star MD member energy and wellness" width="900" height="675" />
                    <figcaption className="results-marquee-caption">
                      <span className="results-marquee-stat">Energy you can <em>feel*</em></span>
                      <span className="results-marquee-detail">Many members report improved appetite control and more confidence in daily life.</span>
                      <span className="results-marquee-tag">Member experience</span>
                    </figcaption>
                  </div>
                </figure>
                {/* Duplicate set for seamless infinite scroll */}
                <figure className="results-marquee-slide" aria-hidden="true">
                  <div className="results-marquee-media">
                    <img src="/images/patient-result-01.webp" data-fallback="/images/patient-result-01.png" decoding="async" alt="" width="900" height="675" loading="lazy" />
                    <figcaption className="results-marquee-caption">
                      <span className="results-marquee-stat">Care from <em>home</em></span>
                      <span className="results-marquee-detail">Licensed U.S. providers review your intake online—no clinic visit to get started.</span>
                      <span className="results-marquee-tag">Physician-guided telehealth</span>
                    </figcaption>
                  </div>
                </figure>
                <figure className="results-marquee-slide" aria-hidden="true">
                  <div className="results-marquee-media">
                    <img src="/images/patient-result-02.webp" data-fallback="/images/patient-result-02.png" decoding="async" alt="" width="900" height="675" loading="lazy" />
                    <figcaption className="results-marquee-caption">
                      <span className="results-marquee-stat">Built for <em>lasting</em> change</span>
                      <span className="results-marquee-detail">GLP-1 therapy paired with lifestyle support—designed around your real routine.</span>
                      <span className="results-marquee-tag">Weight management · GLP-1</span>
                    </figcaption>
                  </div>
                </figure>
                <figure className="results-marquee-slide" aria-hidden="true">
                  <div className="results-marquee-media">
                    <img src="/images/patient-result-03.webp" data-fallback="/images/patient-result-03.png" decoding="async" alt="" width="900" height="675" loading="lazy" />
                    <figcaption className="results-marquee-caption">
                      <span className="results-marquee-stat">More than <em>medication</em></span>
                      <span className="results-marquee-detail">Your plan reflects your health history, goals, and how you actually live day to day.</span>
                      <span className="results-marquee-tag">Personalized treatment</span>
                    </figcaption>
                  </div>
                </figure>
                <figure className="results-marquee-slide" aria-hidden="true">
                  <div className="results-marquee-media">
                    <img src="/images/patient-result-04.webp" data-fallback="/images/patient-result-04.png" decoding="async" alt="" width="900" height="675" loading="lazy" />
                    <figcaption className="results-marquee-caption">
                      <span className="results-marquee-stat">Support <em>between</em> visits</span>
                      <span className="results-marquee-detail">Message your care team, track orders, and stay connected through the patient portal.</span>
                      <span className="results-marquee-tag">24/7 dedicated support</span>
                    </figcaption>
                  </div>
                </figure>
                <figure className="results-marquee-slide" aria-hidden="true">
                  <div className="results-marquee-media">
                    <img src="/images/patient-result-05.webp" data-fallback="/images/patient-result-05.png" decoding="async" alt="" width="900" height="675" loading="lazy" />
                    <figcaption className="results-marquee-caption">
                      <span className="results-marquee-stat">Energy you can <em>feel*</em></span>
                      <span className="results-marquee-detail">Many members report improved appetite control and more confidence in daily life.</span>
                      <span className="results-marquee-tag">Member experience</span>
                    </figcaption>
                  </div>
                </figure>
              </div>
            </div>
            <p className="results-disclaimer">*Individual results vary. Treatment requires evaluation by a licensed U.S. provider; not all patients qualify. Compounded medications are prepared by licensed U.S. pharmacies.</p>
            <div className="rating-strip">
              <div>
                <strong>Rx</strong>
                <span>Licensed U.S. provider review</span>
              </div>
              <div>
                <strong>US</strong>
                <span>Qualified pharmacy fulfillment</span>
              </div>
            </div>
          </div>
        </section>

        <section className="designed-deep">
          <div className="explore-wrap designed-deep-grid">
            <div className="designed-deep-copy">
              <h2>Weight loss treatments, <em>designed</em> around you</h2>
              <p>Your treatment begins with a provider review and is personalized to your weight loss goals, health history, and how your body responds over time.</p>
              <p>Explore below for details on medication, plans, how it all works, and safety information.</p>
            </div>
            <div className="designed-deep-visual">
              <img src="/images/panel-weight.webp" data-fallback="/images/panel-weight.png" decoding="async" alt="North Star MD weight loss program — personalized GLP-1 treatment designed around the patient" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="treatment-blocks">
          <div className="explore-wrap">
            <div className="treatment-block-grid">
              <article className="treatment-block">
                <h3>Medication Options</h3>
                <div className="treatment-option">
                  <h4><a href="/tirzepatide">Personalized Tirzepatide+</a></h4>
                  <p>Activates both GLP-1 and GIP pathways for broader appetite and blood sugar control. Often delivers stronger, faster results.</p>
                </div>
                <div className="treatment-option">
                  <h4><a href="/semaglutide">Personalized Semaglutide+</a></h4>
                  <p>Targets the GLP-1 pathway to reduce appetite and support steady, consistent weight loss. A proven option with gradual, reliable progress.</p>
                </div>
              </article>
              <article className="treatment-block">
                <h3>Form Options</h3>
                <div className="form-option-card">
                  <img src="/images/panel-weight.webp" data-fallback="/images/panel-weight.png" decoding="async" alt="North Star MD GLP-1 weekly subcutaneous injection pen for personalized weight loss treatment" loading="lazy" />
                  <div>
                    <h4>Injection <span className="form-tag">Most effective</span></h4>
                    <p>Weekly subcutaneous shot.<br />Clinically proven delivery with the strongest results at every dose.</p>
                  </div>
                </div>
              </article>
              <article className="treatment-block treatment-block-wide">
                <h3>Plans</h3>
                <div className="plan-cards">
                  <div className="plan-card">
                    <h4>Monthly Plan</h4>
                    <p className="plan-meta">4 shots | Billed &amp; Shipped <em>every month</em></p>
                    <p>Pay monthly with no long-term commitment. Ideal if you want to start and adjust as you go.</p>
                    <span className="plan-tag">Most flexible</span>
                  </div>
                  <div className="plan-card">
                    <h4>3-Month Plan</h4>
                    <p className="plan-meta">12 shots | Billed &amp; Shipped <em>every 3mo</em></p>
                    <p>Save more per month with a full 3-month supply shipped upfront. Built for steady, uninterrupted progress.</p>
                    <span className="plan-tag">Best value</span>
                  </div>
                  <div className="plan-card">
                    <h4>6-Month Plan</h4>
                    <p className="plan-meta">24 shots | Billed <em>every 6mo</em>, Shipped <em>every 3mo</em></p>
                    <p>Our lowest monthly cost. Shipped in two 3-month batches with provider check-ins along the way. For patients ready to commit to real, lasting results.</p>
                    <span className="plan-tag">Maximum savings</span>
                  </div>
                </div>
                <p className="payment-note">All major credit cards accepted · Buy Now, Pay Later (only for 3 and 6-month plans)</p>
              </article>
            </div>
          </div>
        </section>

        <section className="includes-icons">
          <div className="explore-wrap">
            <h2>All plans <em>include</em>:</h2>
            <ul className="includes-icon-grid">
              <li>Free medical consultation included with every North Star MD treatment plan.</li>
              <li>Free expedited shipping included with every North Star MD treatment plan.</li>
              <li>24/7 dedicated patient support included with every North Star MD treatment plan.</li>
              <li>Access to North Star MD patient center included with every treatment plan.</li>
            </ul>
          </div>
        </section>

        <section className="how-section how-section-deep">
          <div className="explore-wrap">
            <p className="eyebrow">How It Works</p>
            <div className="how-steps">
              <article>
                <img src="/images/step-01-choose-treatment.webp" data-fallback="/images/step-01-choose-treatment.png" decoding="async" alt="" className="how-step-img" loading="lazy" />
                <h3>Choose a <em>treatment plan</em></h3>
                <p>Complete a short medical history questionnaire to confirm your eligibility for GLP-1 treatment.</p>
              </article>
              <article>
                <img src="/images/step-02-intake-checkout.webp" data-fallback="/images/step-02-intake-checkout.png" decoding="async" alt="" className="how-step-img" loading="lazy" />
                <h3><em>Checkout</em> <em>&amp;</em> <em>Verify</em> <em>identity</em></h3>
                <p>After checkout, verify your identity for the licensed provider by entering the last four digits of your SSN or uploading a photo of your government ID.</p>
              </article>
              <article>
                <img src="/images/step-03-provider-review.webp" data-fallback="/images/step-03-provider-review.png" decoding="async" alt="" className="how-step-img" loading="lazy" />
                <h3><em>Provider</em> reviews intake</h3>
                <p>A licensed U.S. provider reviews your intake within 24 hours and may follow up with questions or recommendations — <em>no live visit needed.</em></p>
              </article>
              <article>
                <img src="/images/step-04-delivery-kit.webp" data-fallback="/images/step-04-delivery-kit.png" decoding="async" alt="" className="how-step-img" loading="lazy" />
                <h3><em>Receive</em> your medication</h3>
                <p>Once approved, your personalized prescription will be fulfilled by our partner pharmacy. Your medication ships via <em>UPS 2-Day Air</em> and arrives at your doorstep.</p>
              </article>
              <article>
                <img src="/images/step-05-ongoing-support.webp" data-fallback="/images/step-05-ongoing-support.png" decoding="async" alt="" className="how-step-img" loading="lazy" />
                <h3><em>Start</em> your treatment</h3>
                <p>Your care team is with you from day one. You'll get a checklist, Patient Center access, and can reach out to us anytime for support.</p>
              </article>
            </div>
            <p className="how-cta-line">Get started today! Can't decide? We're here to help.</p>
            <a href="https://joinnorthstarmd.com/care/north-star-md/shop" data-shop="category" data-shop-category="weight-loss" className="btn btn-navy btn-pill">Get Started</a>
          </div>
        </section>
      </div>

      {/* Longevity / NAD+ */}
      <div className="category-detail" data-detail="longevity" hidden>
        <section className="designed-deep">
          <div className="explore-wrap designed-deep-grid">
            <div className="designed-deep-copy">
              <h2>Longevity treatments, <em>designed</em> around you</h2>
              <p>Your treatment begins with a provider review and is personalized to your longevity goals, health history, and how your body responds over time.</p>
              <p>Explore below for details on medication, plans, how it all works, and safety information.</p>
            </div>
            <div className="designed-deep-visual">
              <img src="/images/result-energy.webp" data-fallback="/images/result-energy.png" decoding="async" alt="North Star MD longevity program — personalized NAD+ treatment plan designed around the patient" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="treatment-blocks">
          <div className="explore-wrap">
            <div className="treatment-block-grid">
              <article className="treatment-block treatment-block-wide">
                <h3>Plans</h3>
                <div className="plan-cards plan-cards-two">
                  <div className="plan-card">
                    <h4>Monthly Plan</h4>
                    <p className="plan-meta">Billed &amp; Shipped <em>every month</em></p>
                    <p>Pay monthly with no long-term commitment. Ideal if you want to start and adjust as you go.</p>
                    <span className="plan-tag">Most flexible</span>
                  </div>
                  <div className="plan-card">
                    <h4>3-Month Plan</h4>
                    <p className="plan-meta">Billed &amp; Shipped <em>every 3mo</em></p>
                    <p>Save more per month with a full 3-month supply shipped upfront. Built for steady, uninterrupted progress.</p>
                    <span className="plan-tag">Best value</span>
                  </div>
                </div>
                <p className="payment-note">All major credit cards accepted · Buy Now, Pay Later (only for 3 and 6-month plans)</p>
              </article>
              <article className="treatment-block">
                <h3>Medication Options</h3>
                <div className="treatment-option">
                  <h4><a href="/nad">NAD+</a></h4>
                  <p>A weekly treatment designed to support cellular energy, focus, metabolism, and healthy aging through replenishment of NAD+ levels.</p>
                </div>
              </article>
              <article className="treatment-block">
                <h3>Form Options</h3>
                <div className="form-option-card">
                  <img src="/images/nad-hero.webp" data-fallback="/images/nad-hero.png" decoding="async" alt="North Star MD NAD+ weekly subcutaneous injection vial" loading="lazy" />
                  <div>
                    <h4>Injection <span className="form-tag">Most effective</span></h4>
                    <p>Weekly subcutaneous shot.<br />Clinically proven delivery with the strongest results.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="includes-icons">
          <div className="explore-wrap">
            <h2>All plans <em>include</em>:</h2>
            <ul className="includes-icon-grid">
              <li>Free medical consultation included with every North Star MD treatment plan.</li>
              <li>Free expedited shipping included with every North Star MD treatment plan.</li>
              <li>24/7 dedicated patient support included with every North Star MD treatment plan.</li>
              <li>Access to North Star MD patient center included with every treatment plan.</li>
            </ul>
          </div>
        </section>

        <section className="how-section how-section-deep">
          <div className="explore-wrap">
            <p className="eyebrow">How It Works</p>
            <div className="how-steps">
              <article>
                <img src="/images/step-01-choose-treatment.webp" data-fallback="/images/step-01-choose-treatment.png" decoding="async" alt="" className="how-step-img" loading="lazy" />
                <h3>Choose a <em>treatment plan</em></h3>
                <p>Complete a short medical history questionnaire to confirm your eligibility for NAD+ treatment.</p>
              </article>
              <article>
                <img src="/images/step-02-intake-checkout.webp" data-fallback="/images/step-02-intake-checkout.png" decoding="async" alt="" className="how-step-img" loading="lazy" />
                <h3><em>Checkout</em> <em>&amp;</em> <em>Verify</em> <em>identity</em></h3>
                <p>After checkout, verify your identity for the licensed provider by entering the last four digits of your SSN or uploading a photo of your government ID.</p>
              </article>
              <article>
                <img src="/images/step-03-provider-review.webp" data-fallback="/images/step-03-provider-review.png" decoding="async" alt="" className="how-step-img" loading="lazy" />
                <h3><em>Provider</em> reviews intake</h3>
                <p>A licensed U.S. provider reviews your intake within 24 hours and may follow up with questions or recommendations — <em>no live visit needed.</em></p>
              </article>
              <article>
                <img src="/images/step-04-delivery-kit.webp" data-fallback="/images/step-04-delivery-kit.png" decoding="async" alt="" className="how-step-img" loading="lazy" />
                <h3><em>Receive</em> your medication</h3>
                <p>Once approved, your personalized prescription will be fulfilled by our partner pharmacy. Your medication ships via <em>UPS 2-Day Air</em> and arrives at your doorstep.</p>
              </article>
              <article>
                <img src="/images/step-05-ongoing-support.webp" data-fallback="/images/step-05-ongoing-support.png" decoding="async" alt="" className="how-step-img" loading="lazy" />
                <h3><em>Start</em> your treatment</h3>
                <p>Your care team is with you from day one. You'll get a checklist, Patient Center access, and can reach out to us anytime for support.</p>
              </article>
            </div>
            <p className="how-cta-line">Get started today! Can't decide? We're here to help.</p>
            <a href="https://joinnorthstarmd.com/care/north-star-md/shop" data-shop="category" data-shop-category="nad" className="btn btn-navy btn-pill">Get Started</a>
          </div>
        </section>
      </div>

      {/* Muscle Recovery / Sermorelin */}
      <div className="category-detail" data-detail="recovery" hidden>
        <section className="designed-deep designed-deep--banner">
          <div className="explore-wrap">
            <img src="/images/muscle-recovery-designed.webp" data-fallback="/images/muscle-recovery-designed.png" decoding="async" alt="Muscle recovery treatments designed around you — North Star MD Official Treatment Guide" className="designed-banner-img" loading="lazy" />
          </div>
        </section>

        <section className="treatment-blocks">
          <div className="explore-wrap">
            <div className="treatment-block-grid">
              <article className="treatment-block treatment-block-wide">
                <h3>Plans</h3>
                <div className="plan-cards plan-cards-two">
                  <div className="plan-card">
                    <h4>Monthly Plan</h4>
                    <p className="plan-meta">Billed &amp; Shipped <em>every month</em></p>
                    <p>Pay monthly with no long-term commitment. Ideal if you want to start and adjust as you go.</p>
                    <span className="plan-tag">Most flexible</span>
                  </div>
                  <div className="plan-card">
                    <h4>3-Month Plan</h4>
                    <p className="plan-meta">Billed &amp; Shipped <em>every 3mo</em></p>
                    <p>Save more per month with a full 3-month supply shipped upfront. Built for steady, uninterrupted progress.</p>
                    <span className="plan-tag">Best value</span>
                  </div>
                </div>
                <p className="payment-note">All major credit cards accepted · Buy Now, Pay Later (only for 3 and 6-month plans)</p>
              </article>
              <article className="treatment-block">
                <h3>Medication Options</h3>
                <div className="treatment-option">
                  <h4><a href="/sermorelin">Sermorelin</a></h4>
                  <p>A daily peptide injection designed to support natural growth hormone production, energy, sleep quality, and recovery.</p>
                </div>
              </article>
              <article className="treatment-block">
                <h3>Form Options</h3>
                <div className="form-option-card">
                  <img src="/images/sermorelin-hero.webp" data-fallback="/images/sermorelin-hero.png" decoding="async" alt="North Star MD Sermorelin daily subcutaneous peptide injection vial" loading="lazy" />
                  <div>
                    <h4>Injection <span className="form-tag">Most effective</span></h4>
                    <p><em>Daily</em> subcutaneous shot. Clinically proven delivery with the strongest results.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="includes-icons">
          <div className="explore-wrap">
            <h2>All plans <em>include</em>:</h2>
            <ul className="includes-icon-grid">
              <li>Free medical consultation included with every North Star MD treatment plan.</li>
              <li>Free expedited shipping included with every North Star MD treatment plan.</li>
              <li>24/7 dedicated patient support included with every North Star MD treatment plan.</li>
              <li>Access to North Star MD patient center included with every treatment plan.</li>
            </ul>
          </div>
        </section>

        <section className="how-section how-section-deep">
          <div className="explore-wrap">
            <p className="eyebrow">How It Works</p>
            <div className="how-steps">
              <article>
                <img src="/images/step-01-choose-treatment.webp" data-fallback="/images/step-01-choose-treatment.png" decoding="async" alt="" className="how-step-img" loading="lazy" />
                <h3>Choose a <em>treatment plan</em></h3>
                <p>Complete a short medical history questionnaire to confirm your eligibility for Sermorelin treatment.</p>
              </article>
              <article>
                <img src="/images/step-02-intake-checkout.webp" data-fallback="/images/step-02-intake-checkout.png" decoding="async" alt="" className="how-step-img" loading="lazy" />
                <h3><em>Checkout</em> <em>&amp;</em> <em>Verify</em> <em>identity</em></h3>
                <p>After checkout, verify your identity for the licensed provider by entering the last four digits of your SSN or uploading a photo of your government ID.</p>
              </article>
              <article>
                <img src="/images/step-03-provider-review.webp" data-fallback="/images/step-03-provider-review.png" decoding="async" alt="" className="how-step-img" loading="lazy" />
                <h3><em>Provider</em> reviews intake</h3>
                <p>A licensed U.S. provider reviews your intake within 24 hours and may follow up with questions or recommendations — <em>no live visit needed.</em></p>
              </article>
              <article>
                <img src="/images/step-04-delivery-kit.webp" data-fallback="/images/step-04-delivery-kit.png" decoding="async" alt="" className="how-step-img" loading="lazy" />
                <h3><em>Receive</em> your medication</h3>
                <p>Once approved, your personalized prescription will be fulfilled by our partner pharmacy. Your medication ships via <em>UPS 2-Day Air</em> and arrives at your doorstep.</p>
              </article>
              <article>
                <img src="/images/step-05-ongoing-support.webp" data-fallback="/images/step-05-ongoing-support.png" decoding="async" alt="" className="how-step-img" loading="lazy" />
                <h3><em>Start</em> your treatment</h3>
                <p>Your care team is with you from day one. You'll get a checklist, Patient Center access, and can reach out to us anytime for support.</p>
              </article>
            </div>
            <p className="how-cta-line">Get started today! Can't decide? We're here to help.</p>
            <a href="https://joinnorthstarmd.com/care/north-star-md/shop" data-shop="category" data-shop-category="sermorelin" className="btn btn-navy btn-pill">Get Started</a>
          </div>
        </section>
      </div>

      <section className="why-section why-section--art">
        <div className="explore-wrap">
          <img src="/images/why-northstar-md.webp" data-fallback="/images/why-northstar-md.png" decoding="async" alt="Why North Star MD — transparent and trusted care, tailored personalized plans, and science-backed results" className="section-art-img" loading="lazy" />
        </div>
      </section>

      <section className="testimonials-section testimonials-section--art">
        <div className="explore-wrap">
          <img src="/images/exceptional-experience.webp" data-fallback="/images/exceptional-experience.png" decoding="async" alt="North Star MD patient portal and care team support" className="section-art-img" loading="lazy" />
        </div>
      </section>

      <section className="explore-faq">
        <div className="explore-wrap">
          <h2>Do you have questions?<br />We have answers</h2>
          <div className="faq-list">
            <details>
              <summary>What is North Star MD?</summary>
              <p>North Star MD is a telehealth platform connecting patients with licensed providers and pharmacies for personalized, compounded treatments. While we are best known for our GLP-1 weight management programs, we also support patients across other health needs with tailored, science-backed care.</p>
            </details>
            <details>
              <summary>Who is eligible for treatment?</summary>
              <p>You may qualify if your BMI is 30+, or 27+ with a weight-related condition (such as type 2 diabetes, high blood pressure, or high cholesterol). Patients with BMI above 25 may also qualify depending on medical history, as determined by a licensed provider.</p>
            </details>
            <details>
              <summary>How does North Star MD work?</summary>
              <p>Complete your intake online → Provider review (within 24 hours) → If approved, your medication is compounded by a licensed pharmacy and shipped to your home via UPS 2-Day Air.</p>
            </details>
            <details>
              <summary>Are these medications FDA-approved?</summary>
              <p>No. North Star MD provides compounded medications prepared by licensed U.S. pharmacies operating under strict state and federal oversight. While compounded medications are not FDA-approved and have not undergone FDA review for safety, effectiveness, or manufacturing quality, our pharmacy partners are fully licensed and held to rigorous compounding standards.</p>
            </details>
            <details>
              <summary>How much does treatment cost?</summary>
              <p>Pricing is shared after intake once eligibility is confirmed. Current offers are as low as $146/month for new Semaglutide patients (6-month plan) and $258/month for new Tirzepatide patients (6-month plan). Discounts may apply based on commitments and current promotions.</p>
            </details>
          </div>
          <p className="faq-more"><a href="/faq">View all FAQs</a></p>
        </div>
      </section>

      <section className="final-cta">
        <div className="explore-wrap">
          <h2>Choose your treatment</h2>
          <div className="choose-treatment-grid">
            <article>
              <img src="/images/weight-loss-card.webp" data-fallback="/images/weight-loss-card.png" decoding="async" alt="" className="choose-treatment-thumb" loading="lazy" />
              <h3>Weight Loss</h3>
              <p>Support healthy, sustainable weight loss with a personalized approach.</p>
              <p className="choose-meds"><a href="/tirzepatide">Tirzepatide</a> · <a href="/semaglutide">Semaglutide</a></p>
              <p className="choose-price">As low as $146/mo</p>
              <a href="https://joinnorthstarmd.com/care/north-star-md/shop" data-shop="category" data-shop-category="weight-loss" className="btn btn-navy btn-pill btn-sm">Weight Loss</a>
            </article>
            <article>
              <img src="/images/longevity-card.webp" data-fallback="/images/longevity-card.png" decoding="async" alt="" className="choose-treatment-thumb" loading="lazy" />
              <h3>Longevity</h3>
              <p>Optimize energy, longevity, and overall wellness as you age.</p>
              <p className="choose-meds"><a href="/nad">NAD+</a></p>
              <p className="choose-price">As low as $192/mo</p>
              <a href="https://joinnorthstarmd.com/care/north-star-md/shop" data-shop="category" data-shop-category="nad" className="btn btn-navy btn-pill btn-sm">Longevity</a>
            </article>
            <article>
              <img src="/images/muscle-recovery-card.webp" data-fallback="/images/muscle-recovery-card.png" decoding="async" alt="" className="choose-treatment-thumb" loading="lazy" />
              <h3>Muscle Recovery</h3>
              <p>Enhance recovery and performance to support an active lifestyle.</p>
              <p className="choose-meds"><a href="/sermorelin">Sermorelin</a></p>
              <p className="choose-price">As low as $192/mo</p>
              <a href="https://joinnorthstarmd.com/care/north-star-md/shop" data-shop="category" data-shop-category="sermorelin" className="btn btn-navy btn-pill btn-sm">Muscle Recovery</a>
            </article>
          </div>
          <div className="final-cta-actions">
            <a href="https://joinnorthstarmd.com/care/north-star-md/shop" data-shop="catalog" className="btn btn-gold btn-pill btn-lg">Get Started</a>
          </div>
        </div>
      </section>
    
    </main>
  );
}
