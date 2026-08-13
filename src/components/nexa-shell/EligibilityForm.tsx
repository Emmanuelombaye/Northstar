'use client'

import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  INTAKE_PHASES,
  US_STATES,
  getActiveScreeningQuestions,
  isScreeningComplete,
  isValidAdultDob,
  isValidEmail,
  isValidPhone,
  isValidZip,
  questionIsDisqualified,
  screeningHasDisqualifier,
} from '../../lib/nexa-shell/intake'
import { buildPatientLoginHandoff } from '../../lib/shop'
import { YUCCA } from '../../lib/nexa-shell/home-data'

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
    height: '',
    weight: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    answers: {} as Record<string, string>,
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

  const selectedProgram = useMemo(
    () => PROGRAMS.find((program) => program.title === form.program || program.navLabel === form.program),
    [form.program],
  )

  const screeningQs = useMemo(
    () =>
      getActiveScreeningQuestions({
        answers: form.answers,
        sexAtBirth: form.sex,
      }),
    [form.answers, form.sex],
  )

  const phase = INTAKE_PHASES[currentStep - 1]

  useEffect(() => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [currentStep])

  function setAnswer(id: string, value: string) {
    setForm((f) => ({ ...f, answers: { ...f.answers, [id]: value } }))
  }

  function validateStep(): string {
    if (currentStep === 1) {
      if (!form.height.trim() || !form.weight.trim() || !form.sex || !form.dob) {
        return 'Enter height, weight, sex at birth, and date of birth.'
      }
      if (!isValidAdultDob(form.dob)) return 'You must be 18 or older to continue.'
      const h = Number(form.height)
      const w = Number(form.weight)
      if (!Number.isFinite(h) || h < 48 || h > 90) return 'Enter height in inches (48–90).'
      if (!Number.isFinite(w) || w < 80 || w > 500) return 'Enter a valid weight in pounds.'
    }
    if (currentStep === 2) {
      if (
        !isScreeningComplete({
          answers: form.answers,
          sexAtBirth: form.sex,
        })
      ) {
        if (
          screeningHasDisqualifier({
            answers: form.answers,
            sexAtBirth: form.sex,
          })
        ) {
          return 'Based on your answers, a physician must review before you can continue. Contact care@joinnorthstarmd.com.'
        }
        return 'Answer all screening questions to continue.'
      }
    }
    if (currentStep === 3) {
      if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim() || !form.phone.trim()) {
        return 'Enter your name, email, and phone.'
      }
      if (!isValidEmail(form.email)) return 'Enter a valid email.'
      if (!isValidPhone(form.phone)) return 'Enter a valid phone number.'
    }
    if (currentStep === 4) {
      if (!form.street.trim() || !form.city.trim() || !form.state.trim() || !form.zip.trim()) {
        return 'Enter a complete shipping address.'
      }
      if (!US_STATES.some((s) => s.value === form.state)) return 'Select a valid U.S. state.'
      if (!isValidZip(form.zip)) return 'Enter a valid ZIP code.'
    }
    if (currentStep === 5) {
      if (!form.agreeConsent || !form.authorizeReview) {
        return 'Please accept both clinical agreements to complete your intake.'
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
    }
    try {
      localStorage.setItem('northstar_intake_draft_v2', JSON.stringify(draft))
    } catch {
      /* ignore */
    }
    setDone(true)
    const handoff = buildPatientLoginHandoff({
      peakProduct: selectedProgram?.slug === 'tirzepatide' ? 'tirzepatide' : 'semaglutide',
      peakCategory: 'weight-loss',
      category: 'weight-loss',
    })
    window.setTimeout(() => {
      window.location.href = handoff
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
              <label>
                Height (inches) *
                <input
                  type="number"
                  value={form.height}
                  onChange={(e) => setForm({ ...form, height: e.target.value })}
                  required
                />
              </label>
              <label>
                Weight (lbs) *
                <input
                  type="number"
                  value={form.weight}
                  onChange={(e) => setForm({ ...form, weight: e.target.value })}
                  required
                />
              </label>
              <label>
                Sex at birth *
                <select value={form.sex} onChange={(e) => setForm({ ...form, sex: e.target.value })} required>
                  <option value="">Select</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </label>
              <label>
                Date of birth *
                <input type="date" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} required />
              </label>
            </fieldset>
          )}

          {currentStep === 2 && (
            <fieldset className="ns-intake-fields">
              <legend>{phase.label}</legend>
              <p className="ns-intake-hint">Answer carefully. Some responses require physician review before you can continue.</p>
              {screeningQs.map((q) => {
                const val = form.answers[q.id] || ''
                const dq = questionIsDisqualified(q, val)
                return (
                  <div key={q.id} className={`ns-intake-q ${dq ? 'is-warn' : ''}`}>
                    <p>{q.question}</p>
                    {q.type === 'boolean' || q.type === 'select' ? (
                      <div className="ns-intake-options">
                        {(q.options || ['Yes', 'No']).map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            className={val === opt ? 'is-active' : ''}
                            onClick={() => setAnswer(q.id, opt)}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <input type="text" value={val} onChange={(e) => setAnswer(q.id, e.target.value)} />
                    )}
                    {dq ? (
                      <p className="ns-intake-warn">
                        <strong>Medical review required.</strong> Contact care@joinnorthstarmd.com for next steps.
                      </p>
                    ) : null}
                  </div>
                )
              })}
            </fieldset>
          )}

          {currentStep === 3 && (
            <fieldset className="ns-intake-fields">
              <legend>{phase.label}</legend>
              <label>
                First name *
                <input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} required />
              </label>
              <label>
                Last name *
                <input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} required />
              </label>
              <label>
                Email *
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </label>
              <label>
                Phone *
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
              </label>
            </fieldset>
          )}

          {currentStep === 4 && (
            <fieldset className="ns-intake-fields">
              <legend>{phase.label}</legend>
              <label>
                Street *
                <input value={form.street} onChange={(e) => setForm({ ...form, street: e.target.value })} required />
              </label>
              <label>
                Apt / suite
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
                ZIP *
                <input value={form.zip} onChange={(e) => setForm({ ...form, zip: e.target.value })} required />
              </label>
            </fieldset>
          )}

          {currentStep === 5 && (
            <fieldset className="ns-intake-fields">
              <legend>{phase.label}</legend>
              <label className="ns-intake-check">
                <input
                  type="checkbox"
                  checked={form.agreeConsent}
                  onChange={(e) => setForm({ ...form, agreeConsent: e.target.checked })}
                />
                <span>I consent to telehealth evaluation by a licensed clinician affiliated with North Star MD.</span>
              </label>
              <label className="ns-intake-check">
                <input
                  type="checkbox"
                  checked={form.authorizeReview}
                  onChange={(e) => setForm({ ...form, authorizeReview: e.target.checked })}
                />
                <span>
                  I authorize North Star MD&apos;s affiliated clinicians to securely review my medical information and
                  determine whether treatment is appropriate.
                </span>
              </label>
              <p className="ns-intake-hint">
                Submitting this intake does not guarantee a prescription. A licensed provider must approve treatment.
              </p>
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
                Submit medical intake →
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
