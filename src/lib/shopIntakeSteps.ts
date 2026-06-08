/** Fixed 9-step clinical intake wizard (North Star MD shop). */

export const INTAKE_TOTAL_STEPS = 9;

export const INTAKE_STEP_LABELS = [
  "Treatment Goals",
  "Health Background",
  "Vitals & Demographics",
  "Safety Screening",
  "Clinical History",
  "Contact & Consent",
  "Clinical Review",
  "Your Plan",
  "Patient Login",
] as const;

export const STEP_CONTACT = 5;
export const STEP_LOADING = 6;
export const STEP_PLAN = 7;
export const STEP_PORTAL = 8;

export type IntakeQuestion = {
  id: string;
  type: "singleselect" | "multiselect" | "vitals";
  question: string;
  sub: string;
  options?: { label: string; value: string; warning?: string }[];
};

const GENERIC_PADDING: IntakeQuestion[] = [
  {
    id: "age_confirm",
    type: "singleselect",
    question: "Confirm your eligibility age",
    sub: "Telehealth clinical programs require patients to be 18 years or older.",
    options: [
      { label: "Yes, I am 18 years or older", value: "yes" },
      {
        label: "No, I am under 18",
        value: "no",
        warning: "Patients under 18 require guardian consent. Contact North Star MD support.",
      },
    ],
  },
  {
    id: "state_residence",
    type: "singleselect",
    question: "Which state do you currently reside in?",
    sub: "Licensed providers must verify your state for telehealth prescribing.",
    options: [
      { label: "California", value: "CA" },
      { label: "Texas", value: "TX" },
      { label: "Florida", value: "FL" },
      { label: "New York", value: "NY" },
      { label: "Other U.S. state", value: "other" },
    ],
  },
  {
    id: "medications",
    type: "singleselect",
    question: "Are you currently taking prescription medications?",
    sub: "Helps our clinicians review potential interactions before approval.",
    options: [
      { label: "Yes, I take one or more prescriptions", value: "yes" },
      { label: "No active prescription medications", value: "no" },
      { label: "Prefer not to say", value: "unspecified" },
    ],
  },
];

export function buildClinicalSteps(productQuestions: IntakeQuestion[] = []): IntakeQuestion[] {
  const steps = [...productQuestions];
  let padIndex = 0;
  while (steps.length < 5 && padIndex < GENERIC_PADDING.length) {
    const filler = GENERIC_PADDING[padIndex];
    if (!steps.some((q) => q.id === filler.id)) steps.push(filler);
    padIndex += 1;
  }
  return steps.slice(0, 5);
}

export type VitalsInput = {
  heightFeet: string;
  heightInches: string;
  weight: string;
  dob: string;
};

export function validateClinicalStep(
  question: IntakeQuestion | undefined,
  answers: Record<string, string | string[]>,
  vitals: VitalsInput = { heightFeet: "", heightInches: "", weight: "", dob: "" },
): { ok: boolean; message?: string } {
  if (!question) return { ok: true };

  if (question.type === "vitals") {
    if (!vitals.heightFeet || !vitals.heightInches || !vitals.weight || !vitals.dob) {
      return { ok: false, message: "Please fill out all vitals values." };
    }
    return { ok: true };
  }

  if (question.type === "multiselect") {
    const selected = answers[question.id];
    if (!Array.isArray(selected) || selected.length === 0) {
      return { ok: false, message: "Please select at least one option." };
    }
    return { ok: true };
  }

  if (question.type === "singleselect") {
    if (!answers[question.id]) {
      return { ok: false, message: "Please select an option." };
    }
    return { ok: true };
  }

  return { ok: true };
}

export function validateContactStep(input: {
  name: string;
  email: string;
  phone: string;
  consent: boolean;
}): { ok: boolean; message?: string } {
  if (!input.name?.trim()) return { ok: false, message: "Please enter your full name." };
  if (!input.email?.trim() || !input.email.includes("@")) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if (!input.phone?.trim()) return { ok: false, message: "Please enter your phone number." };
  if (!input.consent) {
    return { ok: false, message: "Please confirm the telehealth consent to continue." };
  }
  return { ok: true };
}

export function isVitalsStepActive(category: string, question?: IntakeQuestion): boolean {
  if (question?.type !== "vitals") return true;
  return category === "weight-loss";
}

export function resolveVitalsStepQuestion(
  category: string,
  question?: IntakeQuestion,
): IntakeQuestion | undefined {
  if (isVitalsStepActive(category, question)) return question;
  return GENERIC_PADDING[0];
}

export function intakeProgressPercent(stepIndex: number): number {
  return Math.min(Math.round((stepIndex / (INTAKE_TOTAL_STEPS - 1)) * 100), 100);
}
