/**
 * Single source for NGN amounts shown across marketing, forms, and emails.
 * Chauffeur rates: `driverPlans` in `./driver-plans`.
 */

import {
  driverPlans,
  driverRequestPlanOrder,
  resolveDriverPlanId,
  type DriverPlanId,
} from "./driver-plans";

/** One-time placement / processing (Managed vs Direct) */
export const placementProcessingFees = {
  managedService: 70_000,
  directEmployment: 100_000,
} as const;

/** Corporate page monthly list prices */
export const corporateMonthlyPlans = {
  basic: 150_000,
  premium: 300_000,
} as const;

const ngnFormatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatNgn(amount: number): string {
  return ngnFormatter.format(amount);
}

/** e.g. 195_000 → ₦195k */
export function formatNgnThousandsK(amount: number): string {
  const k = amount / 1000;
  const label = Number.isInteger(k)
    ? String(k)
    : k.toFixed(1).replace(/\.0$/, "");
  return `₦${label}k`;
}

export function formatChauffeurRateDisplay(planId: DriverPlanId): string {
  const p = driverPlans[planId];
  if (p.billingPeriod === "day") {
    return `${formatNgnThousandsK(p.baseRate)}/day`;
  }
  return `${formatNgnThousandsK(p.baseRate)}/mo`;
}

/** Email / notification single-line plan description */
export function getDriverRequestPlanSummaryLine(planId: string): string | undefined {
  const resolved = resolveDriverPlanId(planId);
  if (!resolved) return undefined;
  const p = driverPlans[resolved];
  const price =
    p.billingPeriod === "day"
      ? `${formatNgn(p.baseRate)} per day`
      : `${formatNgn(p.baseRate)} per month`;
  return `${p.name} (${price})`;
}

/** All known plan keys → summary (includes legacy aliases) */
export function driverRequestPlanDescriptionMap(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const id of driverRequestPlanOrder) {
    const line = getDriverRequestPlanSummaryLine(id);
    if (line) out[id] = line;
  }
  const ext = out["extended-weekday"];
  const full = out["full-week"];
  const vipLine = out.vip;
  if (ext) out.weekdayPlus = ext;
  if (full) out.fullWeek = full;
  if (vipLine) out.vipSpy = vipLine;
  return out;
}

export const hireGridPlanIds = driverRequestPlanOrder.filter(
  (id): id is Exclude<DriverPlanId, "vip"> => id !== "vip"
);

/** Short copy for emails when listing how pricing works */
export function getChauffeurPricingTeaser(): string {
  return `Current published rates start at ${formatNgn(driverPlans.daily.baseRate)} per day and from ${formatNgn(driverPlans.weekday.baseRate)} per month for weekday cover.`;
}
