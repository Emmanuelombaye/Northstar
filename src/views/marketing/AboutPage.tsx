export function AboutPage() {
  return (
    <main className="about-page">
      
      <section className="about-hero">
        <div className="about-wrap">
          <p className="eyebrow">Our Mission &amp; Values</p>
          <h1>The clinical authority behind your longevity journey.</h1>
          <p className="about-hero-lead">
            We are a group of board-certified clinical practitioners, metabolic researchers, and care coordinators 
            dedicated to moving health from reactive treatments to proactive cellular optimization.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <div className="about-wrap">
          <div className="mission-grid">
            <div className="mission-text">
              <p className="eyebrow">Preventative Direct-Care</p>
              <h2>A medical philosophy engineered for the future.</h2>
              <p>
                Standard medicine is designed to respond to disease after it surfaces. 
                At North Star MD, we leverage advanced cellular assays, cardiac biomarker screens, 
                and epigenetic age algorithms to analyze, identify, and optimize your physiology years before symptoms emerge.
              </p>
              <p>
                By cutting out standard insurance delays, our clinical team works directly for you—ensuring 
                highly customized metabolic and cellular anti-aging programs built strictly around your diagnostics.
              </p>
            </div>
            <div className="mission-stats">
              <article className="stat-card">
                <div className="stat-num">100%</div>
                <div className="stat-label">Online Convenience</div>
              </article>
              <article className="stat-card">
                <div className="stat-num">24h</div>
                <div className="stat-label">Clinical Reviews</div>
              </article>
              <article className="stat-card">
                <div className="stat-num">3+</div>
                <div className="stat-label">Biomarker Audits</div>
              </article>
              <article className="stat-card">
                <div className="stat-num">0</div>
                <div className="stat-label">Lock-In Contracts</div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="about-wrap">
          <h2>Led by credentialed pioneers.</h2>
          <div className="team-grid">
            {/* Team 1: Evelyn */}
            <article className="team-card">
              <div className="team-photo-wrap">
                <img
                  src="/images/sterling.webp" data-fallback="/images/sterling.png" decoding="async"
                  alt="Dr. Evelyn Sterling, MD portrait"
                  width="800"
                  height="800"
                  loading="lazy"
                />
              </div>
              <div className="team-info">
                <span className="team-role">Clinical Practice Director</span>
                <h3>Dr. Evelyn Sterling, MD</h3>
                <span className="team-credentials">MD, FMNM — Preventative Lead</span>
                <p className="team-bio">
                  Dr. Sterling has spent 15+ years advising private longevity care clinics. She specializes in cardiovascular lipidology, cellular aging pathways, and custom metabolic titrations.
                </p>
              </div>
            </article>

            {/* Team 2: Marcus */}
            <article className="team-card">
              <div className="team-photo-wrap">
                <img
                  src="/images/vance.webp" data-fallback="/images/vance.png" decoding="async"
                  alt="Marcus Vance, NP portrait"
                  width="800"
                  height="800"
                  loading="lazy"
                />
              </div>
              <div className="team-info">
                <span className="team-role">Metabolic Therapy Lead</span>
                <h3>Marcus Vance, NP</h3>
                <span className="team-credentials">MSN, APRN — Weight Care Coordinator</span>
                <p className="team-bio">
                  Marcus focuses on digital biomarkers, continuous glucose monitor (CGM) metrics, and hormone balance. He guides metabolic titration, helping members build lasting vascular resilience.
                </p>
              </div>
            </article>

            {/* Team 3: Reyes */}
            <article className="team-card">
              <div className="team-photo-wrap">
                <img
                  src="/images/reyes.webp" data-fallback="/images/reyes.png" decoding="async"
                  alt="Dr. Julian Reyes, PhD portrait"
                  width="800"
                  height="800"
                  loading="lazy"
                />
              </div>
              <div className="team-info">
                <span className="team-role">Scientific Research Advisor</span>
                <h3>Dr. Julian Reyes, PhD</h3>
                <span className="team-credentials">PhD, Molecular Epigenetics (Stanford)</span>
                <p className="team-bio">
                  Dr. Reyes directs our research pipeline. He evaluates emerging literature on DNA methylation clocks, biological age markers, and cellular NAD+ kinetics to keep our practices peerless.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="compliance-block">
        <div className="about-wrap">
          <div className="compliance-box">
            <svg className="compliance-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <h2>HIPAA-Aligned Privacy &amp; Data Encryption</h2>
            <p>
              All patient intakes, diagnostics logs, care charts, and communication portals are protected 
              by end-to-end medical-grade database encryption. Your private health logs are shared only 
              with your dedicated North Star MD board-certified practitioners.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-block">
        <p className="cta-eyebrow">
          The future is preventative.
          <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 1L8 5.5L12 6.5L8 7.5L7 12L6 7.5L2 6.5L6 5.5L7 1Z" stroke="currentColor" strokeWidth="0.85" strokeLinejoin="round"/>
          </svg>
          Partner with us.
        </p>
        <h2>Ready for direct clinical guidance?</h2>
        <p className="cta-sub">Begin your comprehensive biomarker assessment and treatment program under the expert care of our longevity practitioners.</p>
        <a href="https://joinnorthstarmd.com/care/north-star-md/shop?brand=north-star-md&amp;brandId=c8e7f6a2-4b1d-4e9f-a3c2-1d5e8f7a6b4c" data-shop="catalog" className="btn btn-gold btn-pill btn-lg">Start Your Journey</a>
      </section>
    
    </main>
  );
}
