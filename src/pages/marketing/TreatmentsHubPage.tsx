import { Link } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const TREATMENTS = [
  {
    plan: "glp1" as const,
    tag: "Weight Loss",
    title: "Compounded GLP-1",
    body: "Advanced Semaglutide & Tirzepatide prescriptions designed to reset metabolic baseline, control appetite, and achieve long-term weight reduction.",
    freq: "Once weekly subcutaneous",
    ship: "Overnight delivery (included)",
    price: "$249",
    detail: "/semaglutide",
    image: "/images/glp1-treatment.webp",
    fallback: "/images/tirzepatide-hero.webp",
  },
  {
    plan: "nad" as const,
    tag: "Cellular Health",
    title: "Compounded NAD+",
    body: "Direct cellular restoration coenzyme. Promotes mitochondrial rejuvenation, cellular repair, mental clarity, and metabolic function.",
    freq: "Twice weekly injection",
    ship: "Overnight delivery (included)",
    price: "$149",
    detail: "/nad",
    image: "/images/nad-treatment.webp",
    fallback: "/images/nad-hero.webp",
  },
  {
    plan: "peptide" as const,
    tag: "Vitality",
    title: "Compounded Sermorelin",
    body: "Secretagogue therapy to naturally stimulate growth hormone release, accelerating muscle recovery, strengthening sleep quality, and restoring energy.",
    freq: "Daily evening injection",
    ship: "Overnight delivery (included)",
    price: "$189",
    detail: "/sermorelin",
    image: "/images/sermorelin-treatment.webp",
    fallback: "/images/sermorelin-hero.webp",
  },
];

export function TreatmentsHubPage() {
  useScrollReveal([]);

  return (
    <main className="ns-page">
      <section className="ns-page-hero">
        <div className="ns-wrap">
          <p className="eyebrow">Direct-to-home prescriptions</p>
          <h1>
            Our <em>treatments.</em>
          </h1>
          <p className="ns-lead">
            Licensed North Star MD care protocols providing access to premium clinical compoundings,
            custom cold-chain shipped straight to your door.
          </p>
        </div>
      </section>

      <section className="ns-section">
        <div className="ns-wrap">
          <div className="ns-hub-treat-grid">
            {TREATMENTS.map((t, i) => (
              <article key={t.plan} className="ns-hub-treat-card" data-reveal style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
                <div className="ns-hub-treat-media">
                  <img src={t.image} data-fallback={t.fallback} alt={t.title} loading="lazy" />
                  <span className="ns-hub-treat-badge">{t.tag}</span>
                </div>
                <div className="ns-hub-treat-body">
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                  <dl className="ns-hub-treat-details">
                    <div>
                      <dt>Frequency</dt>
                      <dd>{t.freq}</dd>
                    </div>
                    <div>
                      <dt>Shipping</dt>
                      <dd>{t.ship}</dd>
                    </div>
                    <div className="ns-hub-treat-price">
                      <dt>From</dt>
                      <dd>
                        {t.price}/mo <span>All-inclusive</span>
                      </dd>
                    </div>
                  </dl>
                  <div className="ns-hub-treat-actions">
                    <Link to="/start" className="btn btn-gold btn-pill">
                      Find my treatment
                    </Link>
                    <Link to={t.detail} className="ns-text-link">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
