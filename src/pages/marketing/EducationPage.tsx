import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollReveal";

type EduFilter = "all" | "webinars" | "articles" | "podcasts";

const WEBINARS = [
  {
    title: "Genomics & Longevity: What Your DNA Reveals",
    tag: "Webinar",
    thumb: "/images/genomics_lab_classic.webp",
    fallback: "/images/store/lab-microscope.webp",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    featured: true,
  },
  {
    title: "Metabolic Cellular Health Fundamentals",
    tag: "Webinar",
    thumb: "/images/metabolic_cellular_classic.webp",
    fallback: "/images/store/energy-drink.webp",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Sleep, Brain Health & Peptide Recovery",
    tag: "Webinar",
    thumb: "/images/sleep_brain_classic.webp",
    fallback: "/images/store/brain-focus.webp",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Coastal Movement for Metabolic Health",
    tag: "Webinar",
    thumb: "/images/coastal_running_classic.webp",
    fallback: "/images/store/fitness-man.webp",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const ARTICLES = [
  {
    title: "Understanding NAD+ and Cellular Energy",
    excerpt: "How NAD+ coenzymes support mitochondrial function, cognitive clarity, and healthy aging pathways.",
    thumb: "/images/nad-longevity.webp",
    fallback: "/images/nad-hero.webp",
    content:
      "NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in every living cell. It plays a critical role in mitochondrial energy production, DNA repair, and cellular signaling. As we age, NAD+ levels naturally decline — contributing to reduced cellular energy and slower recovery. North Star MD NAD+ protocols are compounded under 503A pharmacy standards and prescribed only after a licensed clinician reviews your intake.",
    featured: true,
  },
  {
    title: "GLP-1 Compounding: What Patients Should Know",
    excerpt: "The difference between FDA-approved brands and compounded GLP-1 therapies.",
    thumb: "/images/glp1-treatment.webp",
    fallback: "/images/tirzepatide-hero.webp",
    content:
      "Brand-name GLP-1 medications like Wegovy and Ozempic are FDA-approved. Compounded versions are prepared in licensed 503A facilities under federal guidelines and are not individually FDA-reviewed. Your North Star provider determines clinical appropriateness based on your health history.",
  },
  {
    title: "Cold-Chain Shipping for Peptide Therapies",
    excerpt: "Why temperature control matters for Sermorelin and NAD+ delivery.",
    thumb: "/images/sermorelin-treatment.webp",
    fallback: "/images/sermorelin-hero.webp",
    content:
      "Peptide therapies are temperature-sensitive. North Star ships overnight in insulated packaging with gel packs. Refrigerate immediately on arrival and follow your provider's storage instructions.",
  },
  {
    title: "Building a Longevity Routine",
    excerpt: "Movement, nourishment, recovery, and clinical oversight — the whole-person model.",
    thumb: "/images/lifestyle-movement.webp",
    fallback: "/images/store/fitness-man.webp",
    content:
      "Longevity is not a single prescription. North Star MD weaves clinical protocols with lifestyle pillars — daily movement, metabolic nourishment, active recovery, and mind-body balance — for sustainable results.",
  },
];

const PODCASTS = [
  {
    title: "Clinical Consultation Deep Dive",
    subtitle: "What happens during your first North Star provider review",
    thumb: "/images/clinical-consultation.webp",
    fallback: "/images/store/consultation.webp",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export function EducationPage() {
  const [filter, setFilter] = useState<EduFilter>("all");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [article, setArticle] = useState<(typeof ARTICLES)[0] | null>(null);

  useScrollReveal([filter]);

  const showWebinars = filter === "all" || filter === "webinars";
  const showArticles = filter === "all" || filter === "articles";
  const showPodcasts = filter === "all" || filter === "podcasts";

  return (
    <main className="ns-page">
      <section className="ns-edu-hero">
        <div className="ns-wrap">
          <p className="eyebrow">Clinical education</p>
          <h1>
            Learn the science behind <em>your care.</em>
          </h1>
          <p className="ns-lead">
            Webinars, articles, and podcasts from North Star MD clinicians — evidence-based guidance for
            metabolic health, cellular longevity, and recovery.
          </p>
          <div className="ns-edu-filters" role="tablist">
            {(["all", "webinars", "articles", "podcasts"] as const).map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                className={filter === f ? "is-active" : ""}
                onClick={() => setFilter(f)}
              >
                {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
          <div className="ns-edu-stats">
            <div>
              <strong>{WEBINARS.length}</strong>
              <span>Webinars</span>
            </div>
            <div>
              <strong>{ARTICLES.length}</strong>
              <span>Articles</span>
            </div>
            <div>
              <strong>{PODCASTS.length}</strong>
              <span>Podcasts</span>
            </div>
          </div>
        </div>
      </section>

      {showWebinars && (
        <section className="ns-section">
          <div className="ns-wrap">
            <header className="ns-section-head" data-reveal>
              <p className="eyebrow">Webinars</p>
              <h2>Featured sessions</h2>
            </header>
            <div className="ns-edu-webinar-grid">
              {WEBINARS.map((w, i) => (
                <article
                  key={w.title}
                  className={`ns-edu-card${w.featured ? " is-featured" : ""}`}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
                >
                  <button
                    type="button"
                    className="ns-edu-thumb-btn"
                    onClick={() => {
                      setVideoUrl(w.url);
                      setVideoTitle(w.title);
                    }}
                  >
                    <img src={w.thumb} data-fallback={w.fallback} alt="" loading="lazy" />
                    <span className="ns-edu-play" aria-hidden="true">
                      ▶
                    </span>
                  </button>
                  <span className="ns-edu-tag">{w.tag}</span>
                  <h3>{w.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {showArticles && (
        <section className="ns-section ns-section-alt">
          <div className="ns-wrap">
            <header className="ns-section-head" data-reveal>
              <p className="eyebrow">Articles</p>
              <h2>Clinical guides</h2>
            </header>
            <div className="ns-edu-article-grid">
              {ARTICLES.map((a, i) => (
                <article
                  key={a.title}
                  className={`ns-edu-article${a.featured ? " is-featured" : ""}`}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
                >
                  <img src={a.thumb} data-fallback={a.fallback} alt="" loading="lazy" />
                  <div>
                    <h3>{a.title}</h3>
                    <p>{a.excerpt}</p>
                    <button type="button" className="ns-text-link" onClick={() => setArticle(a)}>
                      Read article →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {showPodcasts && (
        <section className="ns-section">
          <div className="ns-wrap">
            <header className="ns-section-head" data-reveal>
              <p className="eyebrow">Podcasts</p>
              <h2>Listen in</h2>
            </header>
            {PODCASTS.map((p) => (
              <article key={p.title} className="ns-edu-podcast" data-reveal>
                <button
                  type="button"
                  className="ns-edu-thumb-btn"
                  onClick={() => {
                    setVideoUrl(p.url);
                    setVideoTitle(p.title);
                  }}
                >
                  <img src={p.thumb} data-fallback={p.fallback} alt="" loading="lazy" />
                  <span className="ns-edu-play" aria-hidden="true">
                    ▶
                  </span>
                </button>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="ns-section">
        <div className="ns-wrap ns-section-cta" data-reveal>
          <Link to="/start" className="btn btn-gold btn-pill">
            Find my treatment
          </Link>
        </div>
      </section>

      {videoUrl && (
        <div className="ns-modal-overlay" role="dialog" aria-modal="true" aria-label={videoTitle}>
          <div className="ns-modal ns-modal-video">
            <button type="button" className="ns-modal-close" onClick={() => setVideoUrl(null)} aria-label="Close">
              ×
            </button>
            <h3>{videoTitle}</h3>
            <div className="ns-modal-video-frame">
              <iframe src={videoUrl} title={videoTitle} allowFullScreen />
            </div>
          </div>
        </div>
      )}

      {article && (
        <div className="ns-modal-overlay" role="dialog" aria-modal="true" aria-label={article.title}>
          <div className="ns-modal ns-modal-article">
            <button type="button" className="ns-modal-close" onClick={() => setArticle(null)} aria-label="Close">
              ×
            </button>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        </div>
      )}
    </main>
  );
}
