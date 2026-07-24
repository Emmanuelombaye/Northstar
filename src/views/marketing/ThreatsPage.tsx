"use client";

import { Link } from "@/lib/routerAdapter";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const THREATS = [
  {
    num: "01",
    title: "Cardiovascular health",
    text: "Evaluating Lp(a), ApoB, cholesterol panels, and heritable cardiovascular traits to reduce arterial decay and vessel stiffness.",
    image: "/images/threat-cardio.webp",
    fallback: "/images/store/blood-test.webp",
    shape: "hexagon",
  },
  {
    num: "02",
    title: "Metabolic integrity",
    text: "Targeting insulin resistance, glucose regulation, fatty liver patterns, and visceral fat storage to reset cellular energy balances.",
    image: "/images/threat-metabolic.webp",
    fallback: "/images/store/energy-drink.webp",
    shape: "teardrop",
  },
  {
    num: "03",
    title: "Neurodegenerative markers",
    text: "Sequencing cognitive risk genes like APOE, cataloging sleep architecture, and optimizing cellular oxygenation to support mental clarity.",
    image: "/images/threat-neuro.webp",
    fallback: "/images/store/brain-focus.webp",
    shape: "blob",
  },
  {
    num: "04",
    title: "Oncological interception",
    text: "Analyzing genetic cancer predispositions and leveraging biomarkers for early phase multi-organ screening guidance.",
    image: "/images/threat-cancer.webp",
    fallback: "/images/store/lab-microscope.webp",
    shape: "shield",
  },
];

const AUDIT_ROWS = [
  {
    domain: "Cardiovascular",
    indicators: "ApoB, Lipoprotein(a), High-sensitivity CRP",
    intervention: "Lipid panel optimizations & hormone balance",
  },
  {
    domain: "Metabolic",
    indicators: "HbA1c, Fasting Insulin, Visceral Fat Ratio",
    intervention: "Compounded GLP-1 (Semaglutide) & NAD+ Support",
  },
  {
    domain: "Neurodegenerative",
    indicators: "APOE genotyping, sleep quality metrics",
    intervention: "Sermorelin recovery cycles & sleep sync",
  },
  {
    domain: "Oncological",
    indicators: "Hereditary cancer paneling, cell-free DNA",
    intervention: "Biomarker early detection guidance",
  },
];

export function ThreatsPage() {
  useScrollReveal([]);

  return (
    <main className="ns-page">
      <section className="ns-page-hero">
        <div className="ns-wrap">
          <p className="eyebrow">Drivers of biological decline</p>
          <h1>
            The four main domains <em>of aging.</em>
          </h1>
          <p className="ns-lead">
            Four core areas of decline — responsible for the vast majority of age-related systemic loss —
            analyzed and addressed early by your North Star clinician.
          </p>
        </div>
      </section>

      <section className="ns-section">
        <div className="ns-wrap">
          <div className="ns-threats-grid">
            {THREATS.map((t, i) => (
              <article key={t.num} className="ns-threat-card" data-reveal style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
                <div className={`ns-threat-img ns-threat-shape-${t.shape}`}>
                  <img src={t.image} data-fallback={t.fallback} alt={t.title} loading="lazy" />
                </div>
                <span className="ns-step-num">{t.num}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </article>
            ))}
          </div>

          <div className="ns-audit-table-wrap" data-reveal>
            <h2>What we audit &amp; monitor</h2>
            <div className="ns-audit-table-scroll">
              <table className="ns-audit-table">
                <thead>
                  <tr>
                    <th>Decline domain</th>
                    <th>Key indicators analyzed</th>
                    <th>Primary clinical intervention</th>
                  </tr>
                </thead>
                <tbody>
                  {AUDIT_ROWS.map((row) => (
                    <tr key={row.domain}>
                      <td>{row.domain}</td>
                      <td>{row.indicators}</td>
                      <td>{row.intervention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="ns-section-cta" data-reveal>
            <Link to="/start" className="btn btn-gold btn-pill">
              Start your assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
