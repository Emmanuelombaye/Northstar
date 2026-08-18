'use client'

import { Link } from '../../lib/routerAdapter'
import { RetroClosingSection } from '../../components/ns/SharedSections'
import { NS_IMG } from '../../lib/ns/home-data'
import '../../styles/ns-home.css'

type Props = {
  slug: 'semaglutide' | 'tirzepatide'
}

const COPY = {
  semaglutide: {
    title: 'Compounded Semaglutide',
    chip: 'GLP-1',
    blurb:
      'A weekly compounded GLP-1 injection that may support appetite regulation as part of a medically supervised weight-management plan. Prescribed only when a licensed U.S. provider determines it is appropriate after reviewing your intake.',
    vial: `${NS_IMG}/personalized-semaglutide-glp-1-injection-vial-yucca-health.avif`,
    pathway: 'Compounded GLP-1 (Semaglutide)',
  },
  tirzepatide: {
    title: 'Compounded Tirzepatide',
    chip: 'GLP-1 + GIP',
    blurb:
      'A weekly compounded dual-pathway GLP-1 + GIP injection that may support appetite regulation when medically appropriate. Prescribed only when a licensed U.S. provider determines it is appropriate after reviewing your intake.',
    vial: `${NS_IMG}/personalized-tirzepatide-glp-1-injection-vial-yucca-health.avif`,
    pathway: 'Compounded GLP-1 + GIP (Tirzepatide)',
  },
} as const

export default function GlpProgramPage({ slug }: Props) {
  const content = COPY[slug]
  const other = slug === 'semaglutide' ? 'tirzepatide' : 'semaglutide'

  return (
    <div className="yucca-home ns-yucca" data-retro-scope style={{ padding: '2rem 1rem 0' }}>
      <section className="goal-treatments-section" style={{ paddingTop: 0 }}>
        <div className="goal-treatments-container">
          <div className="goal-product-card" style={{ maxWidth: '36rem', margin: '0 auto' }}>
            <div className="goal-product-tags">
              <div className="goal-product-tags-left">
                <span className="goal-product-tag" style={{ borderColor: 'var(--navy)' }}>
                  {content.chip}
                </span>
                <span className="goal-product-tag" style={{ borderColor: 'var(--gold)', color: 'var(--navy)' }}>
                  Provider-guided
                </span>
              </div>
            </div>
            <div className="goal-product-top">
              <div className="goal-product-vial">
                <img src={content.vial} alt="" className="goal-vial goal-vial--front" />
              </div>
              <div className="goal-product-meta">
                <div
                  className="goal-product-price"
                  style={{ background: 'linear-gradient(145deg, var(--navy) 0%, color-mix(in oklch, var(--navy) 70%, var(--gold)) 100%)' }}
                >
                  FROM $0<span> intake</span>
                </div>
                <p className="goal-product-price-note">Itemized pricing before enrollment</p>
              </div>
            </div>
            <p style={{ margin: '0 0 0.35rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.04em', fontSize: '0.8rem' }}>
              NORTH STAR MD
            </p>
            <h1 className="goal-product-title">{content.title}</h1>
            <p className="goal-product-desc">{content.blurb}</p>
            <p className="goal-product-detail">
              {content.pathway} · Not FDA-approved as a finished product · Licensed U.S. provider review required.
            </p>
            <div className="goal-product-ctas">
              <Link href={`/start?program=${slug}`} className="goal-product-cta goal-product-cta--primary">
                Check Eligibility
              </Link>
              <Link href={`/${other}`} className="goal-product-cta goal-product-cta--ghost">
                View {other === 'semaglutide' ? 'Semaglutide' : 'Tirzepatide'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '40rem', margin: '2rem auto', padding: '0 1rem', color: '#3a4d61' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, color: 'var(--navy)' }}>Important information</h2>
        <ul style={{ marginTop: '0.75rem', paddingLeft: '1.1rem', lineHeight: 1.6 }}>
          <li>Complete a clinical intake first — this is not a checkout-first purchase flow.</li>
          <li>A licensed U.S. clinician reviews your history before any prescription decision.</li>
          <li>If prescribed, a licensed U.S. compounding pharmacy prepares and ships your medication.</li>
          <li>
            Compounded medications are not FDA-approved finished products and have not undergone FDA review for safety,
            effectiveness, or manufacturing quality as finished drugs.
          </li>
          <li>Individual experiences vary. Completing intake does not guarantee treatment or a specific outcome.</li>
        </ul>
      </section>

      <RetroClosingSection ctaHref={`/start?program=${slug}`} />
    </div>
  )
}
