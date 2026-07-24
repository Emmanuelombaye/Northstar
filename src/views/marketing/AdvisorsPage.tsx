"use client";

import { Link } from "@/lib/routerAdapter";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const ADVISORS = [
  {
    name: "Dr. Evelyn Sterling, MD",
    role: "Clinical Practice Director",
    cred: "MD, FMNM — Preventative Lead",
    bio: "15+ years advising private longevity care clinics. Specializes in cardiovascular lipidology, cellular aging pathways, and custom metabolic titrations.",
    image: "/images/sterling.webp",
    fallback: "/images/sterling.png",
  },
  {
    name: "Dr. Marcus Vance, MD",
    role: "Metabolic Medicine Lead",
    cred: "MD, ABOM — GLP-1 Protocols",
    bio: "Board-certified in obesity medicine. Oversees compounded GLP-1 titration schedules, metabolic labs, and patient safety audits across all weight-management programs.",
    image: "/images/vance.webp",
    fallback: "/images/vance.png",
  },
  {
    name: "Dr. Alan Reyes, PharmD",
    role: "Compounding Pharmacy Liaison",
    cred: "PharmD — 503A Quality Assurance",
    bio: "Ensures every North Star prescription meets 503A compounding standards, cold-chain integrity, and third-party assay verification before dispatch.",
    image: "/images/reyes.webp",
    fallback: "/images/reyes.png",
  },
];

export function AdvisorsPage() {
  useScrollReveal([]);

  return (
    <main className="ns-page">
      <section className="ns-page-hero">
        <div className="ns-wrap">
          <p className="eyebrow">Clinical advisory board</p>
          <h1>
            Led by credentialed <em>pioneers.</em>
          </h1>
          <p className="ns-lead">
            North Star MD protocols are overseen by board-certified physicians and pharmacy specialists —
            real human oversight at every step of your care journey.
          </p>
        </div>
      </section>

      <section className="ns-section">
        <div className="ns-wrap">
          <div className="ns-advisors-grid">
            {ADVISORS.map((a, i) => (
              <article key={a.name} className="ns-advisor-card" data-reveal style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
                <div className="ns-advisor-photo">
                  <img src={a.image} data-fallback={a.fallback} alt={a.name} loading="lazy" />
                </div>
                <div className="ns-advisor-info">
                  <span className="ns-advisor-role">{a.role}</span>
                  <h3>{a.name}</h3>
                  <span className="ns-advisor-cred">{a.cred}</span>
                  <p>{a.bio}</p>
                </div>
              </article>
            ))}
          </div>

          <article className="ns-safety-card" data-reveal>
            <h3>Medical safety &amp; oversight</h3>
            <p>
              Every dose is prescribed and monitored by licensed practitioners. If risks appear in your
              intake or labs, your provider adjusts your plan immediately — no chatbot, no automated
              prescribing.
            </p>
            <Link to="/telehealth-consent" className="ns-text-link">
              Read telehealth consent →
            </Link>
          </article>

          <div className="ns-section-cta" data-reveal>
            <Link to="/start" className="btn btn-gold btn-pill">
              Find my treatment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
