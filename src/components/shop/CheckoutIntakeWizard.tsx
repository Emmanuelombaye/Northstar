import { useEffect, useMemo, useState } from "react";
import { getQuestionsForProduct } from "../../lib/intakeQuestions";
import { buildPatientLoginHandoff } from "../../lib/shop";
import {
  INTAKE_STEP_LABELS,
  INTAKE_TOTAL_STEPS,
  STEP_CONTACT,
  STEP_LOADING,
  STEP_PLAN,
  STEP_PORTAL,
  buildClinicalSteps,
  intakeProgressPercent,
  resolveVitalsStepQuestion,
  validateClinicalStep,
  validateContactStep,
  type IntakeQuestion,
} from "../../lib/shopIntakeSteps";
import { useCheckoutContext } from "../../context/CheckoutContext";
import { formatPrice } from "../../store/products";
import type { PharmacyProduct } from "../../store/types";

type PlanDuration = "1month" | "3month" | "6month";

type Recommendation = PharmacyProduct & {
  calculatedBmi?: string;
  isAlternative?: boolean;
  safetyLabel?: string;
};

const LOADING_MESSAGES = [
  "Checking clinical safety profile & contraindications…",
  "Reviewing your health background & vitals…",
  "Generating your personalized care plan…",
];

function planPrice(base: number, duration: PlanDuration): number {
  if (duration === "3month") return Math.round(base * 0.85);
  if (duration === "6month") return Math.round(base * 0.7);
  return base;
}

export function CheckoutIntakeWizard() {
  const { open, product, closeCheckout } = useCheckoutContext();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [heightFeet, setHeightFeet] = useState("5");
  const [heightInches, setHeightInches] = useState("8");
  const [weight, setWeight] = useState("170");
  const [dob, setDob] = useState("1990-01-01");
  const [loading, setLoading] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(0);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactConsent, setContactConsent] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [planDuration, setPlanDuration] = useState<PlanDuration>("3month");
  const [loginUrl, setLoginUrl] = useState("");
  const [error, setError] = useState("");

  const clinicalSteps = useMemo(
    () => (product ? buildClinicalSteps(getQuestionsForProduct(product)) : []),
    [product],
  );

  useEffect(() => {
    if (!open || !product) return;
    setStep(0);
    setAnswers({});
    setRecommendation(null);
    setContactName("");
    setContactEmail("");
    setContactPhone("");
    setContactConsent(false);
    setLoginUrl("");
    setError("");
    setPlanDuration("3month");
  }, [open, product?.slug]);

  if (!open || !product) return null;

  const vitals = { heightFeet, heightInches, weight, dob };

  function selectOption(questionId: string, value: string, multi: boolean) {
    if (multi) {
      const list = (answers[questionId] as string[] | undefined) ?? [];
      const next = list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
      setAnswers((prev) => ({ ...prev, [questionId]: next }));
    } else {
      setAnswers((prev) => ({ ...prev, [questionId]: value }));
    }
  }

  function evaluatePlan(): Recommendation {
    if (product!.category === "weight-loss") {
      const blocked =
        answers.contraindications === "yes" || answers.pregnancy === "yes";
      if (blocked) {
        return {
          ...product!,
          name: "North Star Wellness Consultation",
          tagline: "Alternative clinical pathway",
          description:
            "A comprehensive wellness program with nutrition coaching and physician consults. Recommended because GLP-1 medications were contraindicated based on your answers.",
          longDescription: product!.longDescription,
          isAlternative: true,
          safetyLabel: "Alternative plan recommended",
          priceMonthly: 49,
        };
      }
      const inches = parseInt(heightFeet, 10) * 12 + parseInt(heightInches, 10);
      const lbs = parseInt(weight, 10);
      const bmi = inches > 0 && lbs > 0 ? ((lbs * 703) / (inches * inches)).toFixed(1) : undefined;
      return {
        ...product!,
        calculatedBmi: bmi,
        safetyLabel: "Eligible for physician review",
      };
    }
    return { ...product!, safetyLabel: "Ready for clinician review" };
  }

  function startEvaluation() {
    setLoading(true);
    setLoadingIndex(0);
    setStep(STEP_LOADING);
    const timer = window.setInterval(() => {
      setLoadingIndex((prev) => {
        if (prev < LOADING_MESSAGES.length - 1) return prev + 1;
        window.clearInterval(timer);
        setLoading(false);
        setRecommendation(evaluatePlan());
        setStep(STEP_PLAN);
        return prev;
      });
    }, 1200);
  }

  function handleNext() {
    setError("");
    if (step < STEP_CONTACT) {
      const q = resolveVitalsStepQuestion(product!.category, clinicalSteps[step]);
      const validation = validateClinicalStep(q, answers, vitals);
      if (!validation.ok) {
        setError(validation.message ?? "Please complete this step.");
        return;
      }
      setStep(step + 1);
      return;
    }

    if (step === STEP_CONTACT) {
      const validation = validateContactStep({
        name: contactName,
        email: contactEmail,
        phone: contactPhone,
        consent: contactConsent,
      });
      if (!validation.ok) {
        setError(validation.message ?? "Please complete contact details.");
        return;
      }
      startEvaluation();
    }
  }

  function handleBack() {
    setError("");
    if (step === STEP_PORTAL) {
      setStep(STEP_PLAN);
      return;
    }
    if (step === STEP_PLAN) {
      setStep(STEP_CONTACT);
      return;
    }
    if (step > 0) setStep(step - 1);
    else closeCheckout();
  }

  function handleContinueToLogin() {
    const rec = recommendation ?? product!;
    const url = buildPatientLoginHandoff({
      peakProduct: rec.peakProduct,
      peakCategory: rec.peakCategory,
      category: rec.category,
    });
    setLoginUrl(url);
    setStep(STEP_PORTAL);
  }

  function renderQuestion(q: IntakeQuestion) {
    if (q.type === "vitals") {
      return (
        <div>
          <h2 className="ns-intake-title">{q.question}</h2>
          <p className="ns-intake-sub">{q.sub}</p>
          <div className="ns-intake-vitals-grid">
            <div>
              <label className="ns-intake-field-label">Height (feet)</label>
              <select className="ns-intake-select" value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)}>
                {["4", "5", "6", "7"].map((v) => (
                  <option key={v} value={v}>{v} ft</option>
                ))}
              </select>
            </div>
            <div>
              <label className="ns-intake-field-label">Height (inches)</label>
              <select className="ns-intake-select" value={heightInches} onChange={(e) => setHeightInches(e.target.value)}>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={String(i)}>{i} in</option>
                ))}
              </select>
            </div>
          </div>
          <label className="ns-intake-field-label">Weight (lbs)</label>
          <input type="number" className="ns-intake-input" value={weight} onChange={(e) => setWeight(e.target.value)} />
          <label className="ns-intake-field-label">Date of birth</label>
          <input type="date" className="ns-intake-input" value={dob} onChange={(e) => setDob(e.target.value)} />
        </div>
      );
    }

    const multi = q.type === "multiselect";
    return (
      <div>
        <h2 className="ns-intake-title">{q.question}</h2>
        <p className="ns-intake-sub">{q.sub}</p>
        <div className="ns-intake-options">
          {(q.options ?? []).map((opt) => {
            const selected = multi
              ? ((answers[q.id] as string[] | undefined) ?? []).includes(opt.value)
              : answers[q.id] === opt.value;
            return (
              <div key={opt.value}>
                <div
                  className={`ns-intake-option${selected ? " active" : ""}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => selectOption(q.id, opt.value, multi)}
                  onKeyDown={(e) => e.key === "Enter" && selectOption(q.id, opt.value, multi)}
                >
                  {multi ? (
                    <span className="ns-intake-check">{selected ? "✓" : ""}</span>
                  ) : (
                    <span className="ns-intake-radio" />
                  )}
                  <span className="ns-intake-option-text">{opt.label}</span>
                </div>
                {selected && opt.warning ? (
                  <div className="ns-intake-warning">⚠ {opt.warning}</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const rec = recommendation ?? product;
  const showFooter = !loading && step !== STEP_LOADING;

  return (
    <div className="ns-intake-overlay" role="dialog" aria-modal="true" aria-label="Clinical intake checkout">
      <div className="ns-intake-nav">
        <button type="button" className="ns-intake-back" onClick={handleBack}>
          ← Back
        </button>
        <img src="/favicon.svg" alt="North Star MD" className="ns-intake-logo" />
        <div style={{ width: 60 }} />
      </div>

      <div className="ns-intake-progress-track">
        <div className="ns-intake-progress-fill" style={{ width: `${intakeProgressPercent(step)}%` }} />
      </div>

      <p className="ns-intake-step-label">
        Step <strong>{step + 1}</strong> of {INTAKE_TOTAL_STEPS} · {INTAKE_STEP_LABELS[step]}
      </p>

      <div className="ns-intake-pills">
        {INTAKE_STEP_LABELS.map((label, idx) => (
          <span
            key={label}
            className={`ns-intake-pill${idx === step ? " active" : idx < step ? " done" : ""}`}
          >
            {idx + 1}. {label.split(" ")[0]}
          </span>
        ))}
      </div>

      <div className="ns-intake-body">
        {loading || step === STEP_LOADING ? (
          <div className="ns-intake-loading">
            <div className="ns-intake-spinner" />
            <h3 className="ns-intake-title">Analyzing medical eligibility</h3>
            <p className="ns-intake-sub">{LOADING_MESSAGES[loadingIndex]}</p>
          </div>
        ) : step < STEP_CONTACT ? (
          renderQuestion(resolveVitalsStepQuestion(product.category, clinicalSteps[step])!)
        ) : step === STEP_CONTACT ? (
          <div>
            <h2 className="ns-intake-title">Create your health profile</h2>
            <p className="ns-intake-sub">
              Submit your contact details to complete your clinical assessment for {product.name}.
            </p>
            <label className="ns-intake-field-label">Full name</label>
            <input className="ns-intake-input" value={contactName} onChange={(e) => setContactName(e.target.value)} placeholder="e.g. Alex Harrison" />
            <label className="ns-intake-field-label">Email address</label>
            <input type="email" className="ns-intake-input" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} placeholder="you@email.com" />
            <label className="ns-intake-field-label">Phone number</label>
            <input type="tel" className="ns-intake-input" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} placeholder="(555) 000-0000" />
            <div className="ns-intake-consent">
              <input type="checkbox" id="ns-consent" checked={contactConsent} onChange={(e) => setContactConsent(e.target.checked)} />
              <label htmlFor="ns-consent">
                I confirm my health answers are accurate and I consent to telehealth evaluation by North Star MD licensed clinicians.
              </label>
            </div>
          </div>
        ) : step === STEP_PLAN ? (
          <div>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <span className="ns-intake-badge">Step 8 — Your recommended plan</span>
            </div>
            <div className="ns-intake-plan-card">
              <div className="ns-intake-plan-head">
                <div>
                  <h3>{rec.name}</h3>
                  <p>{rec.isAlternative ? "Alternative recommendation" : product.categoryLabel}</p>
                </div>
                <span aria-hidden="true" style={{ fontSize: 28 }}>🛡</span>
              </div>
              <div className="ns-intake-plan-body">
                <p className="ns-intake-plan-desc">{rec.description || rec.longDescription}</p>
                {rec.calculatedBmi ? (
                  <div className="ns-intake-bmi-grid">
                    <div>
                      <span>Calculated BMI</span>
                      <strong>{rec.calculatedBmi}</strong>
                    </div>
                    <div>
                      <span>Safety assessment</span>
                      <strong style={{ fontSize: "1rem", color: rec.isAlternative ? "#991b1b" : "var(--gold-dark)" }}>
                        {rec.safetyLabel}
                      </strong>
                    </div>
                  </div>
                ) : null}
                {rec.priceMonthly > 0 ? (
                  <>
                    <label className="ns-intake-field-label">Select plan length</label>
                    <div className="ns-intake-duration-grid">
                      {(["1month", "3month", "6month"] as PlanDuration[]).map((d) => (
                        <div
                          key={d}
                          className={`ns-intake-duration${planDuration === d ? " active" : ""}`}
                          onClick={() => setPlanDuration(d)}
                          role="button"
                          tabIndex={0}
                        >
                          {d === "3month" ? <span className="ns-intake-duration-badge">Save 15%</span> : null}
                          {d === "6month" ? <span className="ns-intake-duration-badge">Save 30%</span> : null}
                          <span>{d === "1month" ? "Monthly" : d === "3month" ? "3 months" : "6 months"}</span>
                          <strong>{formatPrice(planPrice(rec.priceMonthly, d))}</strong>
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
                <button type="button" className="ns-intake-cta-gold" onClick={handleContinueToLogin}>
                  Continue to patient login →
                </button>
              </div>
            </div>
          </div>
        ) : step === STEP_PORTAL ? (
          <div className="ns-intake-portal-card">
            <span className="ns-intake-badge">Step 9 — Patient login</span>
            <h2 className="ns-intake-title">Open your North Star patient portal</h2>
            <p className="ns-intake-sub">
              Intake is complete on North Star MD. Log in on Peak Health to access your branded patient portal — orders, messages, and care.
            </p>
            <ol className="ns-intake-portal-steps">
              <li>North Star MD patient dashboard</li>
              <li>Complete payment for your selected plan</li>
              <li>Prescriptions, messages, and follow-up care</li>
            </ol>
            <button
              type="button"
              className="ns-intake-cta-gold"
              onClick={() => window.location.assign(loginUrl || buildPatientLoginHandoff({
                peakProduct: rec.peakProduct,
                peakCategory: rec.peakCategory,
                category: rec.category,
              }))}
            >
              Log in to North Star patient portal
            </button>
          </div>
        ) : null}

        {error ? <p className="ns-intake-warning" style={{ marginTop: 16 }}>{error}</p> : null}
      </div>

      {showFooter ? (
        <div className="ns-intake-footer">
          <div className="ns-intake-footer-inner">
            {step <= STEP_CONTACT ? (
              <>
                <button type="button" className="ns-intake-back" onClick={handleBack}>
                  ← Previous
                </button>
                <button type="button" className="ns-intake-next" onClick={handleNext}>
                  Continue →
                </button>
              </>
            ) : step === STEP_PLAN ? (
              <button type="button" className="ns-intake-back" onClick={() => { setStep(0); setRecommendation(null); }}>
                Restart assessment
              </button>
            ) : (
              <button type="button" className="ns-intake-back" onClick={handleBack}>
                ← Back to plan
              </button>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
