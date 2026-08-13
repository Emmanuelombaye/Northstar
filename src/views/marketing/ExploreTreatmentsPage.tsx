'use client'

import { Link } from '@/lib/routerAdapter'

/**
 * LegitScript-safe treatments overview — process + accurate compounding facts only.
 * No fake reviews, outcome guarantees, or “all 50 states” claims.
 */
export function ExploreTreatmentsPage() {
  return (
    <main className="page-shell" style={{ padding: '3rem 1.25rem 4rem', maxWidth: '46rem', margin: '0 auto' }}>
      <p style={{ letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.75rem', color: '#5a7286' }}>
        North Star MD
      </p>
      <h1
        style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontWeight: 500,
          fontSize: 'clamp(1.85rem, 4vw, 2.5rem)',
          color: '#0a1f3d',
          marginTop: '0.35rem',
        }}
      >
        Treatments start with a provider review
      </h1>
      <p style={{ marginTop: '0.85rem', color: '#3a4d61', lineHeight: 1.65 }}>
        North Star MD offers telehealth evaluation for compounded Semaglutide and Tirzepatide when medically
        appropriate. Completing a questionnaire does not guarantee a prescription. Compounded medications are prepared
        by licensed U.S. pharmacies when prescribed and are not FDA-approved finished products.
      </p>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 500, color: '#0a1f3d', fontSize: '1.35rem' }}>
          Weight management options
        </h2>
        <ul style={{ marginTop: '0.75rem', paddingLeft: '1.15rem', color: '#3a4d61', lineHeight: 1.7 }}>
          <li>
            <Link href="/semaglutide" style={{ color: '#0a1f3d', fontWeight: 600 }}>
              Compounded Semaglutide
            </Link>{' '}
            — weekly GLP-1 pathway, provider-guided when appropriate.
          </li>
          <li>
            <Link href="/tirzepatide" style={{ color: '#0a1f3d', fontWeight: 600 }}>
              Compounded Tirzepatide
            </Link>{' '}
            — weekly GLP-1 + GIP pathway, provider-guided when appropriate.
          </li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 500, color: '#0a1f3d', fontSize: '1.35rem' }}>
          What every plan requires
        </h2>
        <ul style={{ marginTop: '0.75rem', paddingLeft: '1.15rem', color: '#3a4d61', lineHeight: 1.7 }}>
          <li>Clinical intake and medical history</li>
          <li>Review by a licensed U.S. provider in an eligible state</li>
          <li>Itemized pricing confirmed before enrollment if prescribed</li>
          <li>Fulfillment through a licensed U.S. compounding pharmacy</li>
        </ul>
      </section>

      <p style={{ marginTop: '1.5rem', color: '#5a7286', fontSize: '0.92rem', lineHeight: 1.55 }}>
        Availability depends on your state and clinical eligibility. Individual experiences vary. Treatment is not
        guaranteed to produce a specific outcome.
      </p>

      <p style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <Link href="/start" className="btn btn-navy btn-pill">
          Check Eligibility
        </Link>
        <Link href="/how-it-works" className="btn btn-pill" style={{ border: '1.5px solid #e5e0d8' }}>
          How it works
        </Link>
        <Link href="/shop" className="btn btn-pill" style={{ border: '1.5px solid #e5e0d8' }}>
          Browse shop
        </Link>
      </p>
    </main>
  )
}
