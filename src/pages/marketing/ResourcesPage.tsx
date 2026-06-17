export function ResourcesPage() {
  return (
    <main className="resources-page">
      
      <section className="resources-hero">
        <div className="res-wrap">
          <p className="eyebrow">Science &amp; Longevity Library</p>
          <h1>Rigorous science. Tailored for daily life.</h1>
          <p className="resources-hero-lead">
            Explore our clinical repository of peer-reviewed biomarker playbooks, 
            low-glycemic cookbooks, and sleep checklists curated by board-certified specialists.
          </p>
        </div>
      </section>

      {/* Featured Guide Block */}
      <section style="background: #fff; padding: 48px 0 0;">
        <div className="res-wrap">
          <div className="featured-resource" onclick="window.location.href='/membership'">
            <div className="featured-left">
              <span className="featured-badge">Featured Deep-Dive</span>
              <h2 className="featured-title">ApoB Optimization: The Ultimate Cardiovascular Blueprint</h2>
              <p className="featured-desc">
                Cardiovascular stress is the number one threat to healthspan. This comprehensive clinical guide details how ApoB acts as the ultimate prognostic indicator for arterial health, outperforming standard LDL metrics by 300%. Learn the clinical strategies, dietary adjustments, and pharmaceutical interventions to drive your ApoB level to ideal longevity ranges.
              </p>
              <div className="featured-meta">
                <span>18 min read</span>
                <span style="color: var(--gold); font-weight: 600;">Medically Reviewed by Dr. Evelyn Sterling, MD</span>
              </div>
            </div>
            <div className="featured-bullets-container">
              <h4>What You Will Learn</h4>
              <ul className="featured-bullets">
                <li>
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M12 5L6.5 10.5L3.5 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span><strong>The ApoB/ApoA-1 Ratio:</strong> Deciphering particle counts vs lipid volume.</span>
                </li>
                <li>
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M12 5L6.5 10.5L3.5 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span><strong>Dietary Titrations:</strong> Impact of saturated fats, soluble fibers, and phytosterols on lipid dynamics.</span>
                </li>
                <li>
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M12 5L6.5 10.5L3.5 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span><strong>Therapy Blueprints:</strong> When to introduce statin, ezetimibe, or PCSK9 inhibitor co-therapies.</span>
                </li>
                <li>
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M12 5L6.5 10.5L3.5 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span><strong>Biological Age Markers:</strong> Reversing arterial plaque buildup through biomarker audits.</span>
                </li>
              </ul>
              <a href="/membership" className="btn btn-navy btn-pill" style="display: inline-block; padding: 12px 28px;">Read Full Blueprint</a>
            </div>
          </div>
        </div>
      </section>

      <div className="filter-container">
        <div className="filter-tabs" role="tablist" aria-label="Resource filters">
          <button className="filter-tab is-active" data-filter="all" role="tab" aria-selected="true">All Resources</button>
          <button className="filter-tab" data-filter="diagnostics" role="tab" aria-selected="false">Labs &amp; Diagnostics</button>
          <button className="filter-tab" data-filter="nutrition" role="tab" aria-selected="false">Nutrition</button>
          <button className="filter-tab" data-filter="sleep" role="tab" aria-selected="false">Sleep</button>
          <button className="filter-tab" data-filter="longevity" role="tab" aria-selected="false">Longevity Science</button>
        </div>
      </div>

      <section className="library-section">
        <div className="res-wrap">
          <div className="library-grid">
            {/* Resource 1: Labs */}
            <article className="resource-card" data-category="diagnostics" onclick="window.location.href='/membership'">
              <span className="resource-tag">Diagnostics &amp; Labs</span>
              <svg viewBox="0 0 24 24" fill="none" style="width: 36px; height: 36px; color: var(--gold); margin-bottom: 20px;">
                <path d="M12 2C12 2 19 9 19 14C19 17.866 15.866 21 12 21C8.13401 21 5 17.866 5 14C5 9 12 2 12 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                <path d="M12 17C10.3431 17 9 15.6569 9 14C9 13.1716 9.34315 12.4216 9.89949 11.8787" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              </svg>
              <h3>The Longevity Biomarker Playbook</h3>
              <p>
                Learn how to interpret blood panels like a preventative care physician. An in-depth review of GlycA, hs-CRP, ApoB, and biological age metrics.
              </p>
              <div className="resource-meta">
                <span className="resource-time">14 min read</span>
                <span className="resource-link">
                  Preview Guide
                  <svg viewBox="0 0 12 12" fill="none" style="width: 10px; height: 10px;">
                    <path d="M3 1.5L7.5 6L3 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </article>

            {/* Resource 2: Nutrition */}
            <article className="resource-card" data-category="nutrition" onclick="window.location.href='/membership'">
              <span className="resource-tag">Nutrition &amp; Cooking</span>
              <svg viewBox="0 0 24 24" fill="none" style="width: 36px; height: 36px; color: var(--gold); margin-bottom: 20px;">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M12 6C12 6 9 9.5 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 9.5 12 6 12 6Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                <path d="M12 15V18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <h3>Metabolic Kitchen: Longevity Recipes</h3>
              <p>
                Physician-formulated, low-glycemic recipes designed to optimize mitochondrial cellular energy, reduce glucose variability, and protect metabolics.
              </p>
              <div className="resource-meta">
                <span className="resource-time">45 Recipes</span>
                <span className="resource-link">
                  View Cookbook
                  <svg viewBox="0 0 12 12" fill="none" style="width: 10px; height: 10px;">
                    <path d="M3 1.5L7.5 6L3 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </article>

            {/* Resource 3: Sleep */}
            <article className="resource-card" data-category="sleep" onclick="window.location.href='/membership'">
              <span className="resource-tag">Sleep Optimization</span>
              <svg viewBox="0 0 24 24" fill="none" style="width: 36px; height: 36px; color: var(--gold); margin-bottom: 20px;">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                <path d="M11 6V11L14 12.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
              </svg>
              <h3>The Deep Circadian Sleep Protocol</h3>
              <p>
                A clinical framework to maximize slow-wave delta sleep phases, align circadian signaling, and improve overall heart-rate variability.
              </p>
              <div className="resource-meta">
                <span className="resource-time">9 min read</span>
                <span className="resource-link">
                  Access Protocol
                  <svg viewBox="0 0 12 12" fill="none" style="width: 10px; height: 10px;">
                    <path d="M3 1.5L7.5 6L3 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </article>

            {/* Resource 4: Peptides */}
            <article className="resource-card" data-category="longevity" onclick="window.location.href='/membership'">
              <span className="resource-tag">Longevity Science</span>
              <svg viewBox="0 0 24 24" fill="none" style="width: 36px; height: 36px; color: var(--gold); margin-bottom: 20px;">
                <path d="M4.5 10.5C4.5 10.5 7.5 7.5 12 7.5C16.5 7.5 19.5 10.5 19.5 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                <path d="M4.5 13.5C4.5 13.5 7.5 16.5 12 16.5C16.5 16.5 19.5 13.5 19.5 13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.3"/>
              </svg>
              <h3>Cellular Anti-Aging &amp; Peptide Pathways</h3>
              <p>
                An expert review of cellular regeneration pathways, outlining growth hormone secretagogues, collagen peptide science, and mitochondrial wellness.
              </p>
              <div className="resource-meta">
                <span className="resource-time">18 min read</span>
                <span className="resource-link">
                  Explore Science
                  <svg viewBox="0 0 12 12" fill="none" style="width: 10px; height: 10px;">
                    <path d="M3 1.5L7.5 6L3 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </article>

            {/* Resource 5: Cardio */}
            <article className="resource-card" data-category="diagnostics" onclick="window.location.href='/membership'">
              <span className="resource-tag">Diagnostics &amp; Labs</span>
              <svg viewBox="0 0 24 24" fill="none" style="width: 36px; height: 36px; color: var(--gold); margin-bottom: 20px;">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M12 7V12L15 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              <h3>Cardiovascular Health: ApoB &amp; Lipids</h3>
              <p>
                Why ApoB is the ultimate prognostic metric for arterial wall health. Discover clinical pathways to optimize lipids and block arterial plaque buildup.
              </p>
              <div className="resource-meta">
                <span className="resource-time">10 min read</span>
                <span className="resource-link">
                  Read Analysis
                  <svg viewBox="0 0 12 12" fill="none" style="width: 10px; height: 10px;">
                    <path d="M3 1.5L7.5 6L3 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </article>

            {/* Resource 6: Brain */}
            <article className="resource-card" data-category="longevity" onclick="window.location.href='/membership'">
              <span className="resource-tag">Longevity Science</span>
              <svg viewBox="0 0 24 24" fill="none" style="width: 36px; height: 36px; color: var(--gold); margin-bottom: 20px;">
                <path d="M9.5 14C9.5 14 10.5 15 12 15C13.5 15 14.5 14 14.5 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                <path d="M12 4V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M8 8H16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12Z" stroke="currentColor" strokeWidth="1.3"/>
              </svg>
              <h3>Cognitive Fitness &amp; Brain Longevity</h3>
              <p>
                Clinical strategies to optimize executive brain health, boost neurogenesis, and maintain robust memory retention through scientifically backed actions.
              </p>
              <div className="resource-meta">
                <span className="resource-time">15 min read</span>
                <span className="resource-link">
                  View Strategy
                  <svg viewBox="0 0 12 12" fill="none" style="width: 10px; height: 10px;">
                    <path d="M3 1.5L7.5 6L3 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section: Clinical Reviewers & Authors */}
      <section className="reviewers-section">
        <div className="res-wrap">
          <h2>Peer-Reviewed by Longevity Experts</h2>
          <p className="reviewers-lead">
            Every clinical blueprint, metabolic cookbook, and biological protocol in our library is written, 
            reviewed, and audited by our board-certified clinical advisory board to ensure absolute medical accuracy.
          </p>
          <div className="reviewers-grid">
            <article className="reviewer-card">
              <img src="https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=150&h=150&q=80" alt="Dr. Evelyn Sterling, MD" className="reviewer-avatar" />
              <div className="reviewer-info">
                <h3>Dr. Evelyn Sterling, MD</h3>
                <span className="reviewer-credentials">Lead Clinical Reviewer</span>
                <p className="reviewer-bio">Board-certified in preventative cardiology and metabolic longevity care with 15+ years of clinical oversight. Evelyn audits all lipidology and vascular protocols.</p>
              </div>
            </article>

            <article className="reviewer-card">
              <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=150&h=150&q=80" alt="Dr. Julian Reyes, PhD" className="reviewer-avatar" />
              <div className="reviewer-info">
                <h3>Dr. Julian Reyes, PhD</h3>
                <span className="reviewer-credentials">Molecular Epigeneticist</span>
                <p className="reviewer-bio">Stanford-trained molecular researcher specializing in epigenetic methylation clocks and biological aging rates. Julian audits all cellular science and peptide literature.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section: Clinical Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-inner">
          <h2>Subscribe to Longevity Dispatches</h2>
          <p>
            Join 12,000+ members who receive our bi-weekly scientific digests. 
            Get deep-dive analyses on emerging biomarker science, metabolic recipes, and sleep guidelines delivered directly to your inbox.
          </p>
          <form className="newsletter-form" onsubmit="event.preventDefault(); alert('Thank you for subscribing! Your longevity briefings will arrive shortly.');">
            <input type="email" placeholder="Enter your private email..." className="newsletter-input" required />
            <button type="submit" className="btn btn-navy btn-pill">Subscribe</button>
          </form>
        </div>
      </section>

      <section className="resources-cta">
        <div className="resources-cta-starburst" aria-hidden="true">
          <svg viewBox="0 0 300 300" fill="none">
            <path d="M150 6L164 118L278 132L164 146L150 258L136 146L22 132L136 118L150 6Z" stroke="currentColor" strokeWidth="0.85"/>
          </svg>
        </div>
        <h2>Unlock absolute access to the clinical repository.</h2>
        <p>
          Become a member of North Star MD to unlock our complete science databases, 
          metabolic recipe catalogs, and ongoing direct guidance with board-certified clinical professionals.
        </p>
        <a href="/membership" className="btn btn-gold btn-pill btn-lg">Explore Memberships</a>
      </section>
    
    </main>
  );
}
