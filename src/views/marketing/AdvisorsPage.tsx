'use client'

import { Link } from '../../lib/routerAdapter'

/** Process-only clinical care page — no fabricated named clinicians */
export function AdvisorsPage() {
  return (
    <main className="page-shell" style={{ padding: '3rem 1.25rem 4rem', maxWidth: '46rem', margin: '0 auto' }}>
      <p className="eyebrow" style={{ letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.75rem', color: '#5a7286' }}>
        North Star MD · Clinical care
      </p>
      <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 500, fontSize: 'clamp(1.85rem, 4vw, 2.5rem)', color: '#0a1f3d' }}>
        Licensed clinicians review every intake
      </h1>
      <p style={{ marginTop: '0.85rem', color: '#3a4d61', lineHeight: 1.6 }}>
        North Star MD connects eligible adults with licensed U.S. providers who review your medical intake before any
        prescription decision. Completing a questionnaire does not guarantee treatment. When prescribed, compounded
        medications are fulfilled by licensed U.S. pharmacies and are not FDA-approved finished products.
      </p>
      <ol style={{ marginTop: '2rem', paddingLeft: '1.2rem', color: '#0a1f3d', lineHeight: 1.7 }}>
        <li>
          <strong>Licensed U.S. review</strong> — A state-licensed provider evaluates your history before a prescription
          is issued.
        </li>
        <li>
          <strong>Typical turnaround</strong> — Clinical review often within about 24 hours, with follow-up if more
          information is needed.
        </li>
        <li>
          <strong>Accountable follow-through</strong> — Dose and plan adjustments can be requested through your patient
          portal while you are on an active protocol.
        </li>
      </ol>
      <p style={{ marginTop: '1.5rem', color: '#5a7286', fontSize: '0.92rem' }}>
        Clinician identities and credentials are confirmed inside the secure clinical workflow during evaluation. Named
        marketing profiles are not published here.
      </p>
      <p style={{ marginTop: '2rem' }}>
        <Link href="/start" className="btn btn-navy btn-pill">
          Check Eligibility
        </Link>
      </p>
    </main>
  )
}
