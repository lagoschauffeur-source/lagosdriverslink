/** Canonical chauffeur plans — all customer-facing prices should derive from here */
export const driverPlans = {
  daily: {
    id: "daily",
    name: "Daily Chauffeur",
    /** Short label for grids / badges */
    scheduleBadge: "On-Demand",
    description:
      "Best for events, airport pickups, or short-term driving needs.",
    baseRate: 30000,
    billingPeriod: "day" as const,
    features: [
      "12-hour shift deployment",
      "Flexible zone coverage",
      "Event & VIP logistics",
      "Same-day activation",
    ],
  },
  weekday: {
    id: "weekday",
    name: "Weekday Pro (Mon–Fri)",
    scheduleBadge: "Mon – Fri",
    hireGridPopular: true,
    description:
      "A good option for weekday office movement and regular business trips.",
    baseRate: 195000,
    billingPeriod: "month" as const,
    features: [
      "Dedicated executive driver",
      "Consistent commute routine",
      "Professional & punctual",
      "Quarterly skill audit",
    ],
  },
  "extended-weekday": {
    id: "extended-weekday",
    name: "Extended Cover (Mon–Sat)",
    scheduleBadge: "Mon – Sat",
    description:
      "Great for busy people and families who also need Saturday coverage.",
    baseRate: 230000,
    billingPeriod: "month" as const,
    features: [
      "6-day operational week",
      "Weekend errands logistics",
      "Priority replacement desk",
      "Inter-state capability",
    ],
  },
  "full-week": {
    id: "full-week",
    name: "Full Ecosystem (Mon–Sun)",
    scheduleBadge: "Mon – Sun",
    description:
      "Full weekly coverage for people and businesses that need a driver every day.",
    baseRate: 250000,
    billingPeriod: "month" as const,
    features: [
      "7-day total availability",
      "24/7 dedicated chauffeur",
      "Full weekend logistics",
      "Elite tier service",
    ],
  },
  vip: {
    id: "vip",
    name: "Specialist Driver",
    scheduleBadge: "Elite Tier",
    description:
      "Specially trained drivers for high-security movement, executive protection, and emergency situations.",
    baseRate: 335000,
    billingPeriod: "month" as const,
    features: [
      "Offensive driving",
      "Security procedures",
      "High-asset security",
      "First-responder certified",
    ],
  },
} as const;

/** Order for driver-request landing cards and selects */
export const driverRequestPlanOrder = [
  "daily",
  "weekday",
  "extended-weekday",
  "full-week",
  "vip",
] as const satisfies readonly (keyof typeof driverPlans)[];

/** Legacy URLs / stored values → canonical plan id */
const PLAN_ID_ALIASES: Record<string, keyof typeof driverPlans> = {
  weekdayPlus: "extended-weekday",
};

export type DriverPlanId = keyof typeof driverPlans;
export type DriverPlan = (typeof driverPlans)[DriverPlanId];

export function resolveDriverPlanId(raw: string): DriverPlanId | null {
  const normalized = PLAN_ID_ALIASES[raw] ?? raw;
  if (normalized in driverPlans) return normalized as DriverPlanId;
  return null;
}

export function getDriverPlanLabel(planId: string): string {
  const resolved = resolveDriverPlanId(planId);
  return resolved ? driverPlans[resolved].name : planId;
}

/** Hire wizard schedule options — keep in sync with `driverPlans` monthly rates */
export const salaryRates = {
  weekdays: 195000,
  weekdaysSaturday: 230000,
  fullWeek: 250000,
  spyPolice: 335000,
  shift: 30000,
} as const;
