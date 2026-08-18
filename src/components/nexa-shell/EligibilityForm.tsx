'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  INTAKE_PHASES,
  US_STATES,
  isValidAdultDob,
  isValidEmail,
  isValidPhone,
  isValidZip,
} from '../../lib/nexa-shell/intake'
import { YUCCA } from '../../lib/nexa-shell/home-data'
import { POLICIES } from '../../lib/policies'
import { markPortalPurchased } from '../../lib/portalAuth'
import { PolicyBody } from './PolicyBody'

const PROGRAMS = [
  {
    slug: 'semaglutide',
    title: 'Semaglutide',
    navLabel: 'Semaglutide',
    thumb: `${YUCCA}/personalized-semaglutide-glp-1-injection-vial-yucca-health.avif`,
  },
  {
    slug: 'tirzepatide',
    title: 'Tirzepatide',
    navLabel: 'Tirzepatide',
    thumb: `${YUCCA}/personalized-tirzepatide-glp-1-injection-vial-yucca-health.avif`,
  },
] as const

const TOTAL_STEPS = INTAKE_PHASES.length

/** LegitScript-oriented clinical mock intake — North Star MD */
export default function EligibilityForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const formRef = useRef<HTMLDivElement>(null)

  const [currentStep, setCurrentStep] = useState(1)
  const [form, setForm] = useState({
    program: 'Semaglutide',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    dob: '',
    sex: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    screeningApplies: '',
    agreeConsent: false,
    authorizeReview: false,
  })
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const p = searchParams.get('program')
    if (p === 'tirzepatide') setForm((f) => ({ ...f, program: 'Tirzepatide' }))
    if (p === 'semaglutide') setForm((f) => ({ ...f, program: 'Semaglutide' }))
  }, [searchParams])

  const phase = INTAKE_PHASES[currentStep - 1]

  useEffect(() => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [currentStep])

  function validateStep(): string {
    if (currentStep === 1) {
      if (!form.email.trim() || !form.firstName.trim() || !form.lastName.trim() || !form.phone.trim() || !form.dob || !form.sex) {
        return 'Please complete all required patient information fields.'
      }
      if (!isValidEmail(form.email)) return 'Enter a valid email address.'
      if (!isValidPhone(form.phone)) return 'Enter a valid phone number.'
      if (!isValidAdultDob(form.dob)) return 'You must be 18 or older to continue.'
    }
    if (currentStep === 2) {
      if (!form.street.trim() || !form.city.trim() || !form.state.trim() || !form.zip.trim()) {
        return 'Enter a complete shipping address.'
      }
      if (!US_STATES.some((s) => s.value === form.state)) return 'Select a valid U.S. state.'
      if (!isValidZip(form.zip)) return 'Enter a valid ZIP / Postcode.'
    }
    if (currentStep === 3) {
      if (!form.screeningApplies) return 'Please answer the medical screening question.'
    }
    if (currentStep === 4) {
      if (!form.agreeConsent || !form.authorizeReview) {
        return 'Please accept both agreements to continue.'
      }
    }
    return ''
  }

  function goNext() {
    const msg = validateStep()
    if (msg) {
      setError(msg)
      return
    }
    setError('')
    if (currentStep < TOTAL_STEPS) setCurrentStep((s) => s + 1)
  }

  function goBack() {
    setError('')
    if (currentStep > 1) setCurrentStep((s) => s - 1)
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    const msg = validateStep()
    if (msg) {
      setError(msg)
      return
    }
    const draft = {
      ...form,
      submittedAt: new Date().toISOString(),
      brand: 'north-star-md',
      checkoutCompleted: true,
    }
    try {
      localStorage.setItem('northstar_intake_draft_v2', JSON.stringify(draft))
      markPortalPurchased()
    } catch {
      /* ignore */
    }
    setDone(true)
    window.setTimeout(() => {
      router.push('/portal')
    }, 1200)
  }

  if (done) {
    return (
      <div className="ns-intake-shell" ref={formRef}>
        <div className="ns-intake-card">
          <h1>Intake received</h1>
          <p>
            Your clinical questionnaire is saved. You&rsquo;ll continue to secure enrollment so a licensed provider can
            review your answers. Prescription treatment is not guaranteed.
          </p>
          <button type="button" className="ns-intake-btn" onClick={() => router.push('/')}>
            Back to home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="ns-intake-shell" ref={formRef}>
      <div className="ns-intake-card">
        <p className="ns-intake-eyebrow">North Star MD · Medical intake</p>
        <h1>Start your medical intake.</h1>
        <p className="ns-intake-lede">
          Select Semaglutide or Tirzepatide, then complete a clinical questionnaire. A licensed U.S. provider reviews
          your answers before any prescription decision. Compounded medications, if prescribed, are prepared by licensed
          U.S. pharmacies and are not FDA-approved finished products.
        </p>

        <div className="ns-intake-programs" role="list">
          {PROGRAMS.map((program) => {
            const active = form.program === program.title
            return (
              <button
                key={program.slug}
                type="button"
                role="listitem"
                className={`ns-intake-program ${active ? 'is-active' : ''}`}
                onClick={() => setForm({ ...form, program: program.title })}
              >
                <img src={program.thumb} alt="" width={48} height={48} />
                <span>{program.title}</span>
              </button>
            )
          })}
        </div>

        <div className="ns-intake-stepper" aria-hidden="true">
          <div className="ns-intake-stepper-fill" style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }} />
        </div>
        <ol className="ns-intake-phases">
          {INTAKE_PHASES.map((s, idx) => (
            <li key={s.id} className={idx + 1 === currentStep ? 'is-active' : idx + 1 < currentStep ? 'is-done' : ''}>
              {s.label}
            </li>
          ))}
        </ol>

        <form onSubmit={onSubmit}>
          {currentStep === 1 && (
            <fieldset className="ns-intake-fields">
              <legend>{phase.label}</legend>
              <label className="ns-intake-span">
                Email Address *
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </label>
              <label>
                First Name *
                <input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} required />
              </label>
              <label>
                Last Name *
                <input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} required />
              </label>
              <label className="ns-intake-span">
                Phone Number *
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
              </label>
              <label>
                Date of Birth *
                <input type="date" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} required />
              </label>
              <label>
                Sex Assigned at Birth *
                <select value={form.sex} onChange={(e) => setForm({ ...form, sex: e.target.value })} required>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>
            </fieldset>
          )}

          {currentStep === 2 && (
            <fieldset className="ns-intake-fields">
              <legend>{phase.label}</legend>
              <label className="ns-intake-span">
                Street Address *
                <input value={form.street} onChange={(e) => setForm({ ...form, street: e.target.value })} required />
              </label>
              <label className="ns-intake-span">
                Apartment / Suite (Optional)
                <input value={form.apartment} onChange={(e) => setForm({ ...form, apartment: e.target.value })} />
              </label>
              <label>
                City *
                <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} required />
              </label>
              <label>
                State *
                <select value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} required>
                  <option value="">Select</option>
                  {US_STATES.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                ZIP / Postcode *
                <input value={form.zip} onChange={(e) => setForm({ ...form, zip: e.target.value })} required />
              </label>
            </fieldset>
          )}

          {currentStep === 3 && (
            <fieldset className="ns-intake-fields">
              <legend>{phase.label}</legend>
              <div className="ns-intake-q">
                <p>Do any of the following conditions apply to you? *</p>
                <div className="ns-intake-options">
                  {['Yes, one or more', 'No, none apply'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={form.screeningApplies === opt ? 'is-active' : ''}
                      onClick={() => setForm({ ...form, screeningApplies: opt })}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </fieldset>
          )}

          {currentStep === 4 && (
            <fieldset className="ns-intake-fields">
              <legend>{phase.label}</legend>
              <label className="ns-intake-check">
                <input
                  type="checkbox"
                  checked={form.agreeConsent}
                  onChange={(e) => setForm({ ...form, agreeConsent: e.target.checked })}
                />
                <span>
                  I agree to the Terms of Service, Medical Consent form, and acknowledge the Telehealth Informed
                  Consent for specialized medical protocols. *
                </span>
              </label>
              <label className="ns-intake-check">
                <input
                  type="checkbox"
                  checked={form.authorizeReview}
                  onChange={(e) => setForm({ ...form, authorizeReview: e.target.checked })}
                />
                <span>
                  I authorize North Star MD&apos;s affiliated clinicians to securely review my medical records and prescribe
                  the necessary medication if candidate. *
                </span>
              </label>
              <p className="ns-intake-hint">
                Submitting this intake does not guarantee a prescription. A licensed provider must approve treatment.
              </p>
              <div className="ns-intake-docs">
                <p>Read these documents on this website before you continue</p>
                {POLICIES.map((doc) => (
                  <details key={doc.slug} className="ns-policy-embed">
                    <summary>{doc.navLabel}</summary>
                    <div className="ns-policy-embed-body">
                      <PolicyBody doc={doc} compact />
                    </div>
                  </details>
                ))}
              </div>
            </fieldset>
          )}

          {error ? <p className="ns-intake-error">{error}</p> : null}

          <div className="ns-intake-actions">
            {currentStep > 1 ? (
              <button type="button" className="ns-intake-btn ns-intake-btn--ghost" onClick={goBack}>
                Back
              </button>
            ) : (
              <span />
            )}
            {currentStep < TOTAL_STEPS ? (
              <button type="button" className="ns-intake-btn" onClick={goNext}>
                Continue
              </button>
            ) : (
              <button type="submit" className="ns-intake-btn">
                Complete checkout & open Patient Center →
              </button>
            )}
          </div>
        </form>

        <p className="ns-intake-fine">
          Prescription treatment is not guaranteed. Eligibility and treatment decisions are made by a licensed clinician.
          Availability varies by state and treatment.
        </p>
      </div>
    </div>
  )
}
