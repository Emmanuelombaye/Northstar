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
    title: "The Science of Biological Age vs. Chronological Age",
    excerpt: "How DNA methylation, telomere length, and cardiac calcium scores reveal your true biological age — and how proactive clinical auditing intercepts decline 10-15 years early.",
    category: "Biomarker Science",
    readTime: "6 min read",
    author: "Dr. Evelyn Sterling, MD",
    thumb: "/images/article-biological-age.png",
    fallback: "/images/store/blood-test.webp",
    content: `Chronological age measures the rotation of the Earth around the Sun. Biological age measures the rate of decay across your cellular, cardiovascular, and metabolic systems.

At North Star MD, we perform comprehensive precision biomarker auditing — examining DNA methylation clocks, ApoB, hs-CRP, fasting insulin, and free hormone levels. By measuring cellular decay before symptoms manifest, licensed clinical providers construct targeted compounding protocols that slow or reverse biological age indicators.

Key Clinical Takeaways:
• Biomarker drift occurs up to 15 years before clinical disease diagnosis.
• ApoB and Lp(a) levels provide early cardiovascular risk profiling far beyond traditional cholesterol checks.
• Proactive hormone and peptide optimization stabilizes mitochondrial ATP production.`,
    featured: true,
  },
  {
    title: "Tirzepatide+ Dual-Agonism: The Next Frontier in Metabolic Reset",
    excerpt: "Exploring GIP and GLP-1 receptor co-agonism, glucose stabilization, visceral fat targeting, and personalized dosage titration.",
    category: "Metabolic Optimization",
    readTime: "5 min read",
    author: "Clinical Advisory Board",
    thumb: "/images/article-tirzepatide-metabolic.png",
    fallback: "/images/glp1-treatment.webp",
    content: `Compounded Tirzepatide+ represents a landmark evolution in metabolic medicine. Unlike single-agonist GLP-1 medications, Tirzepatide activates both GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 receptors simultaneously.

This dual-action mechanism enhances insulin sensitivity, slows gastric emptying, and targets visceral adipose tissue while preserving lean muscle mass when paired with proper protein intake and resistance exercise.

Prescription Guidance:
• Formulated in 503A accredited compounding facilities under strict assay standards.
• Micro-titrated monthly under licensed physician supervision to minimize gastrointestinal side effects.
• Combined with cold-chain overnight shipping to protect peptide integrity.`,
    featured: false,
  },
  {
    title: "Mitochondrial Rejuvenation: NAD+ & Cellular Energy",
    excerpt: "Understanding sirtuin enzyme activation, ATP production in aging tissue, and how 503A compounded NAD+ protocols combat systemic fatigue.",
    category: "Cellular Longevity",
    readTime: "7 min read",
    author: "Dr. Evelyn Sterling, MD",
    thumb: "/images/article-mitochondrial-nad.png",
    fallback: "/images/nad-treatment.webp",
    content: `Nicotinamide Adenine Dinucleotide (NAD+) is an essential coenzyme present in every human cell, required for converting nutrients into ATP cellular energy and activating sirtuin enzymes responsible for DNA repair.

By age 50, average systemic NAD+ levels drop by over 50%. Subcutaneous and oral compounded NAD+ therapies replenish cellular pools, leading to improved cognitive clarity, accelerated post-exercise recovery, and enhanced mitochondrial efficiency.

Clinical Observations:
• Sirtuin-1 (SIRT1) activation supports neuronal protection and mental sharpness.
• Patients report noticeable improvements in endurance and sleep quality within 2-3 weeks of therapy.`,
    featured: false,
  },
  {
    title: "Growth Hormone Secretagogues: Sermorelin & Deep Sleep Recovery",
    excerpt: "How Sermorelin naturally stimulates pituitary growth hormone release during stage 4 slow-wave sleep without suppressing natural endocrine feedback loops.",
    category: "Peptide Recovery",
    readTime: "5 min read",
    author: "Clinical Advisory Board",
    thumb: "/images/article-sermorelin-sleep.png",
    fallback: "/images/sermorelin-treatment.webp",
    content: `Sermorelin is a synthetic peptide containing the first 29 amino acids of endogenous Growth Hormone Releasing Hormone (GHRH). It signals your pituitary gland to produce and secrete your own natural human growth hormone (hGH) in physiological pulses.

Because Sermorelin works through natural feedback loops, it avoids pituitary suppression and tachyphylaxis associated with synthetic hGH injections.

Benefits of Sermorelin Therapy:
• Enhances deep stage-4 slow wave sleep for neurological restoration.
• Accelerates soft tissue and muscle fiber repair post-workout.
• Supports collagen synthesis for improved skin elasticity and joint comfort.`,
    featured: false,
  },
  {
    title: "Hormone Optimization for Men & Women: Decoupling Vitality from Decline",
    excerpt: "Balancing bioidentical free testosterone, thyroid T3/T4, progesterone, and estradiol to restore cognitive sharpness, libido, and muscle mass.",
    category: "Endocrine Health",
    readTime: "8 min read",
    author: "Board-Certified Endocrine Specialists",
    thumb: "/images/milestone-2025-biomarkers.png",
    fallback: "/images/store/blood-test.webp",
    content: `Hormone decline is not an inevitable fate — it is an endocrine imbalance that can be audited and corrected through precision medical care.

North Star MD evaluates free and total testosterone, SHBG, DHEA-S, sensitive estradiol, and thyroid panel markers to construct bioidentical hormone optimization protocols tailored to your exact serum levels.

Protocol Essentials:
• Micro-dosing schedules to avoid hormonal spikes and aromatization.
• Ongoing blood work monitoring every 90-180 days to ensure safety and clinical efficacy.`,
    featured: false,
  },
  {
    title: "Cold-Chain Logistics & 503A Quality Assurance in Compounded Care",
    excerpt: "Behind the scenes: accredited 503A pharmacy compounding, third-party potency assay checks, and insulated overnight cold shipping.",
    category: "Medical Safety",
    readTime: "4 min read",
    author: "Quality Assurance Directorate",
    thumb: "/images/milestone-2023-peptides.png",
    fallback: "/images/store/consultation.webp",
    content: `Temperature-sensitive peptide and biologic therapies degrade rapidly if exposed to ambient heat. North Star MD enforces rigorous cold-chain logistics from pharmacy compounding to your doorstep.

Every prescription is prepared in licensed 503A compounding facilities using USP-grade active ingredients. Shipments travel in vacuum-insulated containers with temperature-monitored gel packs overnight.`,
    featured: false,
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
                className={`bouncy-touch${filter === f ? " is-active" : ""}`}
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
                  className={`ns-edu-card bouncy-card card-selectable${w.featured ? " is-featured" : ""}`}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
                >
                  <button
                    type="button"
                    className="ns-edu-thumb-btn bouncy-touch"
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
              <p className="eyebrow">Articles &amp; Research</p>
              <h2>Clinical guides</h2>
            </header>
            <div className="ns-edu-article-grid">
              {ARTICLES.map((a, i) => (
                <article
                  key={a.title}
                  className={`ns-edu-article bouncy-card card-selectable${a.featured ? " is-featured" : ""}`}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
                >
                  <img src={a.thumb} data-fallback={a.fallback} alt={a.title} loading="lazy" />
                  <div className="ns-edu-article-body">
                    <div className="ns-edu-article-meta">
                      <span className="ns-edu-cat-badge">{a.category}</span>
                      <span className="ns-edu-read-time">{a.readTime}</span>
                    </div>
                    <h3>{a.title}</h3>
                    <p>{a.excerpt}</p>
                    <div className="ns-edu-article-foot">
                      <span className="ns-edu-author">{a.author}</span>
                      <button type="button" className="ns-text-link bouncy-touch" onClick={() => setArticle(a)}>
                        Read article &rarr;
                      </button>
                    </div>
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
              <article key={p.title} className="ns-edu-podcast bouncy-card card-selectable" data-reveal>
                <button
                  type="button"
                  className="ns-edu-thumb-btn bouncy-touch"
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
          <Link to="/start" className="btn btn-gold btn-pill bouncy-btn">
            Find my treatment &rarr;
          </Link>
        </div>
      </section>

      {videoUrl && (
        <div className="ns-modal-overlay" role="dialog" aria-modal="true" aria-label={videoTitle}>
          <div className="ns-modal ns-modal-video">
            <button type="button" className="ns-modal-close bouncy-touch" onClick={() => setVideoUrl(null)} aria-label="Close">
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
            <button type="button" className="ns-modal-close bouncy-touch" onClick={() => setArticle(null)} aria-label="Close">
              ×
            </button>

            <div className="ns-article-modal-header">
              <div className="ns-edu-article-meta">
                <span className="ns-edu-cat-badge">{article.category}</span>
                <span className="ns-edu-read-time">{article.readTime}</span>
              </div>
              <h2>{article.title}</h2>
              <div className="ns-article-modal-author">
                By <strong>{article.author}</strong> • Published by North Star MD Clinical Team
              </div>
            </div>

            <div className="ns-article-modal-img">
              <img src={article.thumb} data-fallback={article.fallback} alt={article.title} />
            </div>

            <div className="ns-article-modal-body">
              {article.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="ns-article-modal-cta">
              <Link to="/start" className="btn btn-gold btn-pill bouncy-btn" onClick={() => setArticle(null)}>
                Start Your Clinical Intake &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
