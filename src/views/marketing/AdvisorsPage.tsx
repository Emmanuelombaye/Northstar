'use client'

import { Link } from '../../lib/routerAdapter'

/** Process-only clinical care page — no fabricated named clinicians */
export function AdvisorsPage() {
  return (
    <main className="page-shell" style={{ padding: '3rem 1.25rem 4rem', maxWidth: '46rem', margin: '0 auto' }}>
      <p className="eyebrow" style={{ letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.75rem', color: '#5a7286' }}>
        Clinical care
      </p>
      <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 500, fontSize: 'clamp(1.85rem, 4vw, 2.5rem)', color: '#0a1f3d' }}>
        Licensed clinicians, patient-first standards
      </h1>
      <p style={{ marginTop: '0.85rem', color: '#3a4d61', lineHeight: 1.6 }}>
        North Star MD connects eligible adults with licensed U.S. providers who review your intake before any
        prescription decision. Completing a questionnaire does not guarantee treatment.
      </p>
      <ol style={{ marginTop: '2rem', paddingLeft: '1.2rem', color: '#0a1f3d', lineHeight: 1.7 }}>
        <li>
          <strong>Licensed U.S. review</strong> — Every intake is reviewed by a state-licensed provider before a
          prescription is issued.
        </li>
        <li>
          <strong>Within 24 hours</strong> — Typical clinical review turnaround, with follow-up if clarification is
          needed.
        </li>
        <li>
          <strong>Accountable follow-through</strong> — Plans can be adjusted when your response, labs, or goals call
          for a different approach.
        </li>
      </ol>
      <p style={{ marginTop: '1.5rem', color: '#5a7286', fontSize: '0.92rem' }}>
        Clinician identities and credentials are confirmed inside the secure clinical workflow during evaluation. Named
        profiles will appear here as the provider network is published for each state and program.
      </p>
      <p style={{ marginTop: '2rem' }}>
        <Link href="/start" className="btn btn-navy btn-pill">
          Check Eligibility
        </Link>
      </p>
    </main>
  )
}
