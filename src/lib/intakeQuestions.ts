import type { IntakeQuestion } from "./shopIntakeSteps";
import type { PharmacyProduct } from "../store/types";

export function getQuestionsForProduct(product: PharmacyProduct): IntakeQuestion[] {
  const { category, name } = product;

  if (category === "weight-loss") {
    return [
      {
        id: "goals",
        type: "multiselect",
        question: "What are your primary weight loss goals?",
        sub: `Customize your intake for ${name}.`,
        options: [
          { label: "Lose 10–25 lbs", value: "lose_moderate" },
          { label: "Lose 25–50 lbs", value: "lose_significant" },
          { label: "Improve metabolic wellness & energy", value: "improve_metabolic" },
          { label: "Manage stress or emotional eating", value: "manage_eating" },
        ],
      },
      {
        id: "vitals",
        type: "vitals",
        question: "Provide your basic physical parameters",
        sub: "Height and weight are required to calculate BMI for clinical evaluation.",
      },
      {
        id: "contraindications",
        type: "singleselect",
        question: "Thyroid cancer risk screening",
        sub: "Do you or an immediate family member have a history of MTC or MEN 2?",
        options: [
          {
            label: "Yes, I or a family member have MTC/MEN2 history",
            value: "yes",
            warning:
              "GLP-1 medications are not approved for individuals with MTC or MEN2 history. We will suggest alternate treatments.",
          },
          { label: "No history", value: "no" },
        ],
      },
      {
        id: "pregnancy",
        type: "singleselect",
        question: "Pregnancy & breastfeeding check",
        sub: "Are you currently pregnant, lactating, or planning pregnancy within 12 months?",
        options: [
          { label: "Yes", value: "yes", warning: "GLP-1 programs are not safe during pregnancy or breastfeeding." },
          { label: "No", value: "no" },
        ],
      },
      {
        id: "history",
        type: "multiselect",
        question: "Do you have a clinical history of any of the following?",
        sub: "Select all that apply for safe prescribing.",
        options: [
          { label: "Pancreatitis or active gallbladder stones", value: "pancreatitis" },
          { label: "Kidney function issues / renal disease", value: "kidney" },
          { label: "Severe GI motility issues (e.g. gastroparesis)", value: "gi" },
          { label: "None of the above", value: "none" },
        ],
      },
    ];
  }

  if (category === "longevity") {
    return [
      {
        id: "longevity_goals",
        type: "multiselect",
        question: "What longevity outcomes matter most to you?",
        sub: `Tailoring ${name} to your cellular health goals.`,
        options: [
          { label: "Energy & mitochondrial support", value: "energy" },
          { label: "Cognitive clarity & focus", value: "cognitive" },
          { label: "Healthy aging & inflammation control", value: "aging" },
          { label: "Recovery & physical resilience", value: "recovery" },
        ],
      },
      {
        id: "nad_experience",
        type: "singleselect",
        question: "Have you used NAD+ or peptide therapies before?",
        sub: "Helps your clinician set an appropriate starting protocol.",
        options: [
          { label: "Yes, currently or previously", value: "yes" },
          { label: "No, this would be my first program", value: "no" },
          { label: "Interested but need guidance", value: "guidance" },
        ],
      },
      {
        id: "lifestyle",
        type: "singleselect",
        question: "How would you describe your current activity level?",
        sub: "Activity informs dosing and lifestyle recommendations.",
        options: [
          { label: "Highly active (4+ sessions/week)", value: "high" },
          { label: "Moderately active", value: "moderate" },
          { label: "Mostly sedentary", value: "low" },
        ],
      },
    ];
  }

  if (category === "recovery") {
    return [
      {
        id: "recovery_focus",
        type: "multiselect",
        question: "What are you hoping to recover or improve?",
        sub: `Matching ${name} to your tissue repair goals.`,
        options: [
          { label: "Joint or tendon discomfort", value: "joint" },
          { label: "Post-workout muscle recovery", value: "muscle" },
          { label: "Injury or surgical healing support", value: "injury" },
          { label: "Overall performance & resilience", value: "performance" },
        ],
      },
      {
        id: "activity_level",
        type: "singleselect",
        question: "Are you currently training or physically active?",
        sub: "Peptide protocols vary for athletes vs. general wellness.",
        options: [
          { label: "Competitive or heavy training", value: "athlete" },
          { label: "Regular exercise 2–4x/week", value: "regular" },
          { label: "Light activity or rehab phase", value: "light" },
        ],
      },
      {
        id: "peptide_history",
        type: "singleselect",
        question: "Prior peptide or injectable experience?",
        sub: "Your clinician will review safe titration either way.",
        options: [
          { label: "Yes, experienced with peptides", value: "yes" },
          { label: "No prior peptide use", value: "no" },
        ],
      },
    ];
  }

  if (category === "sleep") {
    return [
      {
        id: "sleep_challenge",
        type: "multiselect",
        question: "What is your primary sleep challenge?",
        sub: `Customizing ${name} for your sleep profile.`,
        options: [
          { label: "Difficulty falling asleep", value: "falling" },
          { label: "Waking during the night", value: "waking" },
          { label: "Waking unrefreshed", value: "unrefreshed" },
          { label: "Stress blocking sleep", value: "stress" },
        ],
      },
      {
        id: "sleep_duration",
        type: "singleselect",
        question: "How many hours do you typically sleep?",
        sub: "Sleep duration helps guide medication vs. supplement approach.",
        options: [
          { label: "Under 5 hours", value: "under5" },
          { label: "5–7 hours", value: "5to7" },
          { label: "7+ hours but poor quality", value: "quality" },
        ],
      },
      {
        id: "melatonin_ok",
        type: "singleselect",
        question: "Are you open to prescription sleep support if recommended?",
        sub: "A licensed clinician will determine the safest option.",
        options: [
          { label: "Yes, open to clinician-guided Rx", value: "yes" },
          { label: "Prefer supplements only", value: "supplements" },
        ],
      },
    ];
  }

  if (category === "mental-health") {
    return [
      {
        id: "mental_goals",
        type: "multiselect",
        question: "What symptoms are you seeking support for?",
        sub: "Helps route your intake to the right psychiatric review.",
        options: [
          { label: "Anxiety or worry", value: "anxiety" },
          { label: "Low mood or depression", value: "mood" },
          { label: "Stress & burnout", value: "stress" },
          { label: "Sleep disruption from mental health", value: "sleep" },
        ],
      },
      {
        id: "prior_treatment",
        type: "singleselect",
        question: "Have you tried mental health medication before?",
        sub: "Prior treatments inform safe prescribing decisions.",
        options: [
          { label: "Yes, currently taking medication", value: "current" },
          { label: "Yes, in the past", value: "past" },
          { label: "No prior psychiatric medications", value: "none" },
        ],
      },
      {
        id: "urgency",
        type: "singleselect",
        question: "How soon are you seeking care?",
        sub: "If you are in crisis, please call 988 or go to your nearest ER.",
        options: [
          { label: "Within the next few weeks", value: "soon" },
          { label: "Exploring options", value: "exploring" },
        ],
      },
    ];
  }

  if (category === "mens-health" || category === "hormone" || category === "womens-health") {
    return [
      {
        id: "hormone_goals",
        type: "multiselect",
        question: "What hormone or vitality goals do you have?",
        sub: `Personalizing ${name} for your clinical profile.`,
        options: [
          { label: "Energy & fatigue", value: "energy" },
          { label: "Body composition & metabolism", value: "metabolic" },
          { label: "Libido or sexual wellness", value: "libido" },
          { label: "Mood, sleep, or cognitive changes", value: "mood" },
        ],
      },
      {
        id: "labs_recent",
        type: "singleselect",
        question: "Have you had hormone labs in the past 12 months?",
        sub: "Recent labs speed up clinician review; we can order panels if needed.",
        options: [
          { label: "Yes, within 12 months", value: "yes" },
          { label: "No / not sure", value: "no" },
        ],
      },
      {
        id: "symptom_duration",
        type: "singleselect",
        question: "How long have you noticed these symptoms?",
        sub: "Duration helps prioritize evaluation urgency.",
        options: [
          { label: "Less than 3 months", value: "recent" },
          { label: "3–12 months", value: "moderate" },
          { label: "Over a year", value: "long" },
        ],
      },
    ];
  }

  if (category === "hair") {
    return [
      {
        id: "hair_pattern",
        type: "singleselect",
        question: "Where do you notice hair thinning?",
        sub: "Pattern helps match topical vs. oral therapy.",
        options: [
          { label: "Crown / top of head", value: "crown" },
          { label: "Receding hairline", value: "hairline" },
          { label: "Diffuse thinning overall", value: "diffuse" },
        ],
      },
      {
        id: "hair_duration",
        type: "singleselect",
        question: "How long have you noticed hair loss?",
        sub: "Earlier intervention often improves outcomes.",
        options: [
          { label: "Less than 6 months", value: "recent" },
          { label: "6 months to 2 years", value: "moderate" },
          { label: "More than 2 years", value: "long" },
        ],
      },
      {
        id: "prior_hair_rx",
        type: "singleselect",
        question: "Have you used finasteride or minoxidil before?",
        sub: "Prior treatments inform your clinician's plan.",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
    ];
  }

  if (category === "skincare") {
    return [
      {
        id: "skin_concern",
        type: "multiselect",
        question: "What skin concerns would you like to address?",
        sub: `Selecting the right protocol for ${name}.`,
        options: [
          { label: "Acne or breakouts", value: "acne" },
          { label: "Fine lines & aging", value: "aging" },
          { label: "Dark spots / hyperpigmentation", value: "pigment" },
          { label: "Texture or rosacea", value: "texture" },
        ],
      },
      {
        id: "skin_sensitivity",
        type: "singleselect",
        question: "How sensitive is your skin?",
        sub: "Sensitivity guides retinoid and acid strength.",
        options: [
          { label: "Very sensitive", value: "high" },
          { label: "Moderately tolerant", value: "medium" },
          { label: "Resilient / experienced with actives", value: "low" },
        ],
      },
      {
        id: "pregnant_skin",
        type: "singleselect",
        question: "Are you pregnant, nursing, or planning pregnancy?",
        sub: "Some dermatology prescriptions are contraindicated in pregnancy.",
        options: [
          { label: "Yes", value: "yes", warning: "Several Rx skincare agents are not safe in pregnancy." },
          { label: "No", value: "no" },
        ],
      },
    ];
  }

  if (category === "sexual-wellness") {
    return [
      {
        id: "ed_goals",
        type: "singleselect",
        question: "What outcome are you seeking?",
        sub: "Your answers are confidential and reviewed by a licensed clinician.",
        options: [
          { label: "Improved erectile function", value: "ed" },
          { label: "Daily spontaneity (daily Rx)", value: "daily" },
          { label: "Desire / intimacy support", value: "desire" },
        ],
      },
      {
        id: "cardiac_history",
        type: "singleselect",
        question: "Any history of heart disease or nitrate medications?",
        sub: "Required safety screen for PDE5 inhibitors.",
        options: [
          {
            label: "Yes — heart disease or nitrate use",
            value: "yes",
            warning: "PDE5 medications may be contraindicated. Your clinician will review alternatives.",
          },
          { label: "No", value: "no" },
        ],
      },
      {
        id: "ed_frequency",
        type: "singleselect",
        question: "How often do you want to be intimate?",
        sub: "Helps choose daily vs. as-needed dosing.",
        options: [
          { label: "Several times per week", value: "frequent" },
          { label: "A few times per month", value: "occasional" },
        ],
      },
    ];
  }

  return [
    {
      id: "general_intent",
      type: "multiselect",
      question: `What is your primary goal with ${name}?`,
      sub: "Helps us customize your clinical intake documentation.",
      options: [
        { label: "Physician-guided treatment plan", value: "treatment" },
        { label: "Preventative health optimization", value: "prevention" },
        { label: "Doctor-recommended continuation", value: "doctor" },
      ],
    },
  ];
}
