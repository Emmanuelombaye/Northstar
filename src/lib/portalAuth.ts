/** Local demo auth + start-funnel persistence for North Star MD Patient Center. */

const DB_KEY = "ns_auth_db_v1";
const SESSION_KEY = "ns_auth_session_v1";
const START_KEY = "ns_start_draft_v1";

export const DEMO_USER = {
  email: "demo@northstarmd.com",
  password: "nsdemo",
};

export type StartTier = "1mo" | "3mo" | "6mo";
export type TreatmentPlan = "glp1" | "nad" | "peptide";

export type StartDraft = {
  plan?: TreatmentPlan;
  tier?: StartTier;
  intakeIndex?: number;
  goal?: string;
  height?: string;
  weight?: string;
  conditions?: string;
  meds?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  resumeStep?: string;
};

export type PortalUser = {
  id: string;
  name: string;
  email: string;
  plan: TreatmentPlan;
  tier: StartTier;
};

type AuthDb = {
  users: Record<string, { password: string; user: PortalUser }>;
};

function loadDb(): AuthDb {
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (raw) return JSON.parse(raw) as AuthDb;
  } catch {
    /* ignore */
  }
  const db: AuthDb = {
    users: {
      [DEMO_USER.email]: {
        password: DEMO_USER.password,
        user: {
          id: "demo-001",
          name: "Alex Rivera",
          email: DEMO_USER.email,
          plan: "glp1",
          tier: "3mo",
        },
      },
    },
  };
  localStorage.setItem(DB_KEY, JSON.stringify(db));
  return db;
}

function saveDb(db: AuthDb) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

export function getSessionUser(): PortalUser | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as PortalUser;
  } catch {
    return null;
  }
}

export function loginPortal(email: string, password: string): PortalUser {
  const db = loadDb();
  const entry = db.users[email.toLowerCase()];
  if (!entry || entry.password !== password) {
    throw new Error("Invalid email or password.");
  }
  localStorage.setItem(SESSION_KEY, JSON.stringify(entry.user));
  return entry.user;
}

export function logoutPortal() {
  localStorage.removeItem(SESSION_KEY);
}

export function registerPortalUser(input: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  plan: TreatmentPlan;
  tier: StartTier;
}): PortalUser {
  const db = loadDb();
  const email = input.email.toLowerCase();
  if (db.users[email]) {
    throw new Error("An account with this email already exists.");
  }
  const user: PortalUser = {
    id: `user-${Date.now()}`,
    name: `${input.firstName} ${input.lastName}`.trim(),
    email,
    plan: input.plan,
    tier: input.tier,
  };
  db.users[email] = { password: input.password, user };
  saveDb(db);
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return user;
}

export function saveStartDraft(draft: StartDraft) {
  localStorage.setItem(START_KEY, JSON.stringify(draft));
}

export function loadStartDraft(): StartDraft | null {
  try {
    const raw = localStorage.getItem(START_KEY);
    return raw ? (JSON.parse(raw) as StartDraft) : null;
  } catch {
    return null;
  }
}

export function clearStartDraft() {
  localStorage.removeItem(START_KEY);
}

export const intakeIndex = (draft: StartDraft | null) => draft?.intakeIndex ?? 0;
