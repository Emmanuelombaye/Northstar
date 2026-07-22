import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  clearStartDraft,
  loadStartDraft,
  registerPortalUser,
  saveStartDraft,
  type StartDraft,
  type StartTier,
  type TreatmentPlan,
} from "../../lib/portalAuth";

const TREATMENTS = [
  {
    id: "glp1" as TreatmentPlan,
    badge: "GLP-1",
    title: "Weight Management",
    body: "Curb appetite and support sustainable fat loss with provider-guided GLP-1 care.",
    product: "Personalized Semaglutide",
    price: "$146",
    image: "/images/glp1-treatment.webp",
    fallback: "/images/tirzepatide-hero.webp",
  },
  {
    id: "nad" as TreatmentPlan,
    badge: "NAD+",
    title: "Cellular Longevity",
    body: "Support cellular energy, recovery, and healthy aging with clinician oversight.",
    product: "NAD+ Protocol",
    price: "$189",
    image: "/images/nad-treatment.webp",
    fallback: "/images/nad-hero.webp",
  },
  {
    id: "peptide" as TreatmentPlan,
    badge: "Peptide",
    title: "Vitality & Recovery",
    body: "Support sleep, recovery, and lean muscle with a personalized peptide plan.",
    product: "Sermorelin",
    price: "$168",
    image: "/images/sermorelin-treatment.webp",
    fallback: "/images/sermorelin-hero.webp",
  },
];

const PLANS: { id: StartTier; label: string; perMonth: number; total: number; popular?: boolean }[] = [
  { id: "1mo", label: "1-month", perMonth: 249, total: 249 },
  { id: "3mo", label: "3-month", perMonth: 199, total: 597, popular: true },
  { id: "6mo", label: "6-month", perMonth: 146, total: 876 },
];

const INTAKE_STEPS = [
  {
    id: "goal",
    question: "What is your primary health goal?",
    type: "choice" as const,
    field: "goal" as const,
    options: [
      { value: "lose-weight", label: "Lose weight & curb appetite" },
      { value: "energy", label: "More energy & cellular vitality" },
      { value: "recovery", label: "Recovery, sleep & lean muscle" },
      { value: "longevity", label: "Long-term longevity support" },
    ],
  },
  {
    id: "bmi",
    question: "Tell us about your body metrics",
    type: "metrics" as const,
  },
  {
    id: "conditions",
    question: "Do any of these apply to you?",
    type: "choice" as const,
    field: "conditions" as const,
    options: [
      { value: "none", label: "None of these" },
      { value: "diabetes", label: "Type 2 diabetes or prediabetes" },
      { value: "hypertension", label: "High blood pressure" },
      { value: "cholesterol", label: "High cholesterol" },
      { value: "other", label: "Other chronic condition" },
    ],
  },
  {
    id: "meds",
    question: "Are you currently on GLP-1 or peptide therapy?",
    type: "choice" as const,
    field: "meds" as const,
    options: [
      { value: "no", label: "No, not currently" },
      { value: "yes-sema", label: "Yes — Semaglutide" },
      { value: "yes-tirz", label: "Yes — Tirzepatide" },
      { value: "yes-other", label: "Yes — other peptide/GLP-1" },
    ],
  },
];

const STEPS = ["treatment", "intake", "plan", "checkout", "verify", "account"] as const;
type Step = (typeof STEPS)[number];

function Progress({ step }: { step: Step }) {
  const idx = STEPS.indexOf(step);
  const pct = Math.round(((idx + 1) / STEPS.length) * 100);
  return (
    <div className="sf-progress">
      <div className="sf-progress-track">
        <div className="sf-progress-bar" style={{ width: `${pct}%` }} />
      </div>
      <p className="sf-progress-label">
        Step {idx + 1} of {STEPS.length}
      </p>
    </div>
  );
}

export function StartPage() {
  const navigate = useNavigate();
  const pending = loadStartDraft();

  const [step, setStep] = useState<Step>((pending?.resumeStep as Step) || "treatment");
  const [planId, setPlanId] = useState<TreatmentPlan | "">(pending?.plan || "");
  const [intakeIndex, setIntakeIndex] = useState(pending?.intakeIndex ?? 0);
  const [intake, setIntake] = useState({
    goal: pending?.goal || "",
    height: pending?.height || "",
    weight: pending?.weight || "",
    conditions: pending?.conditions || "",
    meds: pending?.meds || "",
  });
  const [tier, setTier] = useState<StartTier>(pending?.tier || "3mo");
  const [checkout, setCheckout] = useState({
    firstName: pending?.firstName || "",
    lastName: pending?.lastName || "",
    email: pending?.email || "",
    phone: pending?.phone || "",
    card: "",
    exp: "",
    cvc: "",
  });
  const [verify, setVerify] = useState({ method: "ssn" as "ssn" | "id", ssn4: "", idNote: "" });
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const treatment = useMemo(() => TREATMENTS.find((t) => t.id === planId) || null, [planId]);
  const plan = useMemo(() => PLANS.find((p) => p.id === tier) || PLANS[1], [tier]);
  const intakeStep = INTAKE_STEPS[intakeIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step, intakeIndex]);

  const persist = (extra: Partial<StartDraft> = {}) => {
    saveStartDraft({
      plan: planId || undefined,
      tier,
      intakeIndex,
      ...intake,
      firstName: checkout.firstName,
      lastName: checkout.lastName,
      email: checkout.email,
      phone: checkout.phone,
      resumeStep: step,
      ...extra,
    });
  };

  const go = (next: Step) => {
    setError("");
    setStep(next);
    persist({ resumeStep: next });
  };

  const continueIntake = () => {
    if (intakeStep.type === "choice" && intakeStep.field) {
      if (!intake[intakeStep.field]) {
        setError("Please choose an option to continue.");
        return;
      }
    }
    if (intakeStep.type === "metrics" && (!intake.height || !intake.weight)) {
      setError("Enter height and weight to continue.");
      return;
    }
    setError("");
    if (intakeIndex < INTAKE_STEPS.length - 1) {
      setIntakeIndex((i) => i + 1);
      persist({ intakeIndex: intakeIndex + 1 });
      return;
    }
    go("plan");
  };

  const continueCheckout = (e: FormEvent) => {
    e.preventDefault();
    if (!checkout.firstName || !checkout.email || checkout.card.replace(/\s/g, "").length < 12) {
      setError("Complete your contact details and card to continue.");
      return;
    }
    go("verify");
  };

  const continueVerify = (e: FormEvent) => {
    e.preventDefault();
    if (verify.method === "ssn" && !/^\d{4}$/.test(verify.ssn4)) {
      setError("Enter the last 4 digits of your SSN.");
      return;
    }
    if (verify.method === "id" && !verify.idNote.trim()) {
      setError("Add a short note confirming you uploaded a government ID (simulated).");
      return;
    }
    go("account");
  };

  const finishAccount = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (password.length < 4) {
      setError("Choose a password with at least 4 characters.");
      return;
    }
    if (password !== password2) {
      setError("Passwords do not match.");
      return;
    }
    if (!planId) return;
    setBusy(true);
    try {
      registerPortalUser({
        firstName: checkout.firstName,
        lastName: checkout.lastName,
        email: checkout.email,
        password,
        plan: planId,
        tier,
      });
      clearStartDraft();
      navigate("/portal");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not open Patient Center.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="sf">
      <header className="sf-top">
        <div className="sf-top-inner">
          <Link to="/" className="sf-top-brand" aria-label="North Star MD home">
            <span className="logo-name">North Star MD</span>
          </Link>
          <Link to="/" className="sf-top-exit">
            Exit
          </Link>
        </div>
      </header>

      <main className="sf-main">
        <Progress step={step} />

        {step === "treatment" && (
          <section className="sf-panel">
            <h1>Find your North Star treatment</h1>
            <p className="sf-lead">Select a clinical protocol to begin your personalized intake.</p>
            <div className="sf-treat-grid">
              {TREATMENTS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`sf-treat-card${planId === t.id ? " is-selected" : ""}`}
                  onClick={() => {
                    setPlanId(t.id);
                    setError("");
                  }}
                >
                  <img src={t.image} data-fallback={t.fallback} alt="" loading="lazy" />
                  <span className="sf-treat-badge">{t.badge}</span>
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                  <strong>{t.product}</strong>
                  <span>From {t.price}/mo</span>
                </button>
              ))}
            </div>
            {error && <p className="sf-error">{error}</p>}
            <button
              type="button"
              className="btn btn-gold btn-pill"
              onClick={() => {
                if (!planId) {
                  setError("Select a treatment to continue.");
                  return;
                }
                go("intake");
              }}
            >
              Continue
            </button>
          </section>
        )}

        {step === "intake" && intakeStep && (
          <section className="sf-panel">
            <h2>{intakeStep.question}</h2>
            {intakeStep.type === "choice" && intakeStep.field && (
              <div className="sf-choices">
                {intakeStep.options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    className={intake[intakeStep.field!] === opt.value ? "is-selected" : ""}
                    onClick={() => setIntake({ ...intake, [intakeStep.field!]: opt.value })}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
            {intakeStep.type === "metrics" && (
              <div className="sf-metrics">
                <label>
                  Height (in)
                  <input
                    type="text"
                    value={intake.height}
                    onChange={(e) => setIntake({ ...intake, height: e.target.value })}
                    placeholder="e.g. 68"
                  />
                </label>
                <label>
                  Weight (lbs)
                  <input
                    type="text"
                    value={intake.weight}
                    onChange={(e) => setIntake({ ...intake, weight: e.target.value })}
                    placeholder="e.g. 175"
                  />
                </label>
              </div>
            )}
            {error && <p className="sf-error">{error}</p>}
            <div className="sf-nav-row">
              <button
                type="button"
                className="btn btn-ghost btn-pill"
                onClick={() => {
                  if (intakeIndex > 0) setIntakeIndex((i) => i - 1);
                  else go("treatment");
                }}
              >
                Back
              </button>
              <button type="button" className="btn btn-gold btn-pill" onClick={continueIntake}>
                Continue
              </button>
            </div>
          </section>
        )}

        {step === "plan" && (
          <section className="sf-panel">
            <h2>Choose your plan</h2>
            <p className="sf-lead">Flexible membership — change or cancel anytime after clinical approval.</p>
            <div className="sf-plan-grid">
              {PLANS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`sf-plan-card${tier === p.id ? " is-selected" : ""}${p.popular ? " is-popular" : ""}`}
                  onClick={() => setTier(p.id)}
                >
                  {p.popular && <span className="sf-plan-pop">Most popular</span>}
                  <h3>{p.label}</h3>
                  <strong>${p.perMonth}</strong>
                  <span>/month</span>
                  <p>${p.total} total</p>
                </button>
              ))}
            </div>
            {treatment && (
              <div className="sf-summary">
                <p>
                  <strong>{treatment.title}</strong> · {plan.label} · ${plan.total}
                </p>
              </div>
            )}
            <div className="sf-nav-row">
              <button type="button" className="btn btn-ghost btn-pill" onClick={() => go("intake")}>
                Back
              </button>
              <button type="button" className="btn btn-gold btn-pill" onClick={() => go("checkout")}>
                Continue
              </button>
            </div>
          </section>
        )}

        {step === "checkout" && (
          <section className="sf-panel">
            <h2>Secure checkout</h2>
            <p className="sf-lead">Simulated authorization hold — no real charge. Charged only if prescribed.</p>
            <form className="sf-form" onSubmit={continueCheckout}>
              <div className="sf-form-row">
                <label>
                  First name
                  <input
                    required
                    value={checkout.firstName}
                    onChange={(e) => setCheckout({ ...checkout, firstName: e.target.value })}
                  />
                </label>
                <label>
                  Last name
                  <input
                    value={checkout.lastName}
                    onChange={(e) => setCheckout({ ...checkout, lastName: e.target.value })}
                  />
                </label>
              </div>
              <label>
                Email
                <input
                  type="email"
                  required
                  value={checkout.email}
                  onChange={(e) => setCheckout({ ...checkout, email: e.target.value })}
                />
              </label>
              <label>
                Phone
                <input
                  value={checkout.phone}
                  onChange={(e) => setCheckout({ ...checkout, phone: e.target.value })}
                />
              </label>
              <label>
                Card number
                <input
                  required
                  value={checkout.card}
                  onChange={(e) => setCheckout({ ...checkout, card: e.target.value })}
                  placeholder="4242 4242 4242 4242"
                />
              </label>
              <div className="sf-form-row">
                <label>
                  Exp
                  <input
                    value={checkout.exp}
                    onChange={(e) => setCheckout({ ...checkout, exp: e.target.value })}
                    placeholder="MM/YY"
                  />
                </label>
                <label>
                  CVC
                  <input
                    value={checkout.cvc}
                    onChange={(e) => setCheckout({ ...checkout, cvc: e.target.value })}
                  />
                </label>
              </div>
              {error && <p className="sf-error">{error}</p>}
              <div className="sf-nav-row">
                <button type="button" className="btn btn-ghost btn-pill" onClick={() => go("plan")}>
                  Back
                </button>
                <button type="submit" className="btn btn-gold btn-pill">
                  Continue
                </button>
              </div>
            </form>
          </section>
        )}

        {step === "verify" && (
          <section className="sf-panel">
            <h2>Identity verification</h2>
            <p className="sf-lead">Required for prescription eligibility (simulated).</p>
            <form className="sf-form" onSubmit={continueVerify}>
              <div className="sf-choices sf-choices-inline">
                <button
                  type="button"
                  className={verify.method === "ssn" ? "is-selected" : ""}
                  onClick={() => setVerify({ ...verify, method: "ssn" })}
                >
                  SSN last 4
                </button>
                <button
                  type="button"
                  className={verify.method === "id" ? "is-selected" : ""}
                  onClick={() => setVerify({ ...verify, method: "id" })}
                >
                  Government ID
                </button>
              </div>
              {verify.method === "ssn" ? (
                <label>
                  Last 4 digits of SSN
                  <input
                    maxLength={4}
                    value={verify.ssn4}
                    onChange={(e) => setVerify({ ...verify, ssn4: e.target.value.replace(/\D/g, "") })}
                  />
                </label>
              ) : (
                <label>
                  Upload note (simulated)
                  <textarea
                    value={verify.idNote}
                    onChange={(e) => setVerify({ ...verify, idNote: e.target.value })}
                    placeholder="Confirm government ID uploaded"
                  />
                </label>
              )}
              {error && <p className="sf-error">{error}</p>}
              <div className="sf-nav-row">
                <button type="button" className="btn btn-ghost btn-pill" onClick={() => go("checkout")}>
                  Back
                </button>
                <button type="submit" className="btn btn-gold btn-pill">
                  Continue
                </button>
              </div>
            </form>
          </section>
        )}

        {step === "account" && (
          <section className="sf-panel">
            <h2>Create your Patient Center account</h2>
            <p className="sf-lead">Access appointments, messages, and your care plan in one place.</p>
            <form className="sf-form" onSubmit={finishAccount}>
              <label>
                Password
                <input
                  type="password"
                  required
                  minLength={4}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <label>
                Confirm password
                <input
                  type="password"
                  required
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </label>
              {error && <p className="sf-error">{error}</p>}
              <div className="sf-nav-row">
                <button type="button" className="btn btn-ghost btn-pill" onClick={() => go("verify")}>
                  Back
                </button>
                <button type="submit" className="btn btn-gold btn-pill" disabled={busy}>
                  {busy ? "Opening…" : "Open Patient Center"}
                </button>
              </div>
            </form>
          </section>
        )}
      </main>
    </div>
  );
}
