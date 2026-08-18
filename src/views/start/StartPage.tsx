'use client'

import { Suspense } from 'react'
import EligibilityForm from '../../components/ns/EligibilityForm'
import '../../styles/ns-intake.css'

function StartFallback() {
  return (
    <div className="ns-intake-shell">
      <div className="ns-intake-card">
        <p>Loading intake…</p>
      </div>
    </div>
  )
}

export function StartPage() {
  return (
    <Suspense fallback={<StartFallback />}>
      <EligibilityForm />
    </Suspense>
  )
}
