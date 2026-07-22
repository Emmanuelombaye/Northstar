import { Link } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const MILESTONES = [
  {
    year: "2022",
    title: "Genesis of North Star MD",
    desc: "Founded with the objective of linking proactive wellness with advanced preventative medicine to stop biological decline before symptoms appear.",
    image: "/images/milestone-2022.webp",
    fallback: "/images/hero-photo.png",
  },
  {
    year: "2023",
    title: "Peptide Supply Partnerships",
    desc: "Established agreements with FDA-regulated 503A outsourcing pharmacies for premium pharmaceutical-grade compounding for weight management and NAD+ therapies.",
    image: "/images/milestone-2023.webp",
    fallback: "/images/journey-seated.png",
  },
  {
    year: "2024",
    title: "Patient Center Launch",
    desc: "Launched our secure, HIPAA-aligned North Star Patient Center, connecting members with licensed clinical practitioners for rapid medical reviews in under 24 hours.",
    image: "/images/milestone-2024.webp",
    fallback: "/images/store/consultation.webp",
  },
  {
    year: "2025",
    title: "Precision Biomarker Auditing",
    desc: "Integrated advanced biomarker panels and cardiac diagnostics to catch heritable traits and metabolic drift years before they develop.",
    image: "/images/milestone-2025.webp",
    fallback: "/images/store/lab-microscope.webp",
  },
];

export function VisionPage() {
  useScrollReveal([]);

  return (
    <main className="ns-page">
      <section className="ns-page-hero ns-vision-banner">
        <div className="ns-wrap">
          <p className="eyebrow">Our Vision</p>
          <h1>
            Longer, healthier, fully functional lives — <em>guided by science.</em>
          </h1>
          <p className="ns-lead">
            North Star MD makes preventative longevity possible through personalized protocols, licensed U.S.
            providers, and the next generation of metabolic therapies.
          </p>
        </div>
      </section>

      <section className="ns-section">
        <div className="ns-wrap">
          <header className="ns-section-head ns-section-head-center" data-reveal>
            <p className="eyebrow">Philosophical foundation</p>
            <h2>The decline of aging is <em>now optional.</em></h2>
          </header>
          <div className="ns-philosophy-grid">
            <article className="ns-philosophy-card" data-reveal>
              <span className="ns-step-num">01</span>
              <h3>Proactive interception</h3>
              <p>
                Traditional medicine responds after symptoms appear. North Star focuses on early biomarker
                tracking and preventative compounding to adjust levels before systems break down.
              </p>
            </article>
            <article className="ns-philosophy-card" data-reveal>
              <span className="ns-step-num">02</span>
              <h3>Customized biology</h3>
              <p>
                Every metabolic rate, hormone profile, and recovery curve is individual. We discard
                one-size-fits-all dosing — formulations correspond strictly to your biomarkers.
              </p>
            </article>
            <article className="ns-philosophy-card" data-reveal>
              <span className="ns-step-num">03</span>
              <h3>Whole-person vitality</h3>
              <p>
                Longevity is not the absence of disease, but the active presence of physical energy,
                structural mobility, and cognitive clarity — woven into every protocol.
              </p>
            </article>
          </div>

          <div className="ns-testimonial" data-reveal>
            <div className="ns-testimonial-media">
              <img
                src="/images/sermorelin-recovery.webp"
                data-fallback="/images/sermorelin-hero.webp"
                alt="Patient recovery and vitality"
                loading="lazy"
              />
            </div>
            <div className="ns-testimonial-copy">
              <p className="eyebrow">Aspirational living</p>
              <blockquote>
                “We believe in extending your healthspan to match your lifespan. Vitality is an active
                commitment, not a heritable guarantee.”
              </blockquote>
              <p className="ns-testimonial-cite">— Clinical Advisory Board, North Star MD</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ns-section ns-milestones">
        <div className="ns-wrap">
          <header className="ns-section-head ns-section-head-center" data-reveal>
            <p className="eyebrow">Our journey</p>
            <h2>Key clinical <em>milestones.</em></h2>
          </header>
          <ol className="ns-timeline">
            {MILESTONES.map((m, i) => (
              <li key={m.year} className="ns-timeline-item" data-reveal style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
                <div className="ns-timeline-media">
                  <img src={m.image} data-fallback={m.fallback} alt={m.title} loading="lazy" />
                </div>
                <div className="ns-timeline-copy">
                  <span className="ns-timeline-year">{m.year}</span>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </li>
            ))}
          </ol>
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
