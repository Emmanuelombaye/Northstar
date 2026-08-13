'use client'

import { Link } from '../../lib/routerAdapter'

/** Education disabled for LegitScript — redirect-style stub without fake webinars/reviews */
export function EducationPage() {
  return (
    <main className="page-shell" style={{ padding: '3rem 1.25rem 4rem', maxWidth: '40rem', margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 500, color: '#0a1f3d' }}>
        Clinical information
      </h1>
      <p style={{ marginTop: '0.85rem', color: '#3a4d61', lineHeight: 1.6 }}>
        Educational articles and webinars are not published on this site. For care questions, complete a medical intake
        so a licensed provider can review your history.
      </p>
      <p style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <Link href="/start" className="btn btn-navy btn-pill">
          Check Eligibility
        </Link>
        <Link href="/how-it-works" className="btn btn-pill" style={{ border: '1.5px solid #e5e0d8' }}>
          How it works
        </Link>
      </p>
    </main>
  )
}
