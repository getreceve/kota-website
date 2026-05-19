import type { VerticalConfig } from "./types";
import debtSettlement from "./debt-settlement";
import insurance from "./insurance";

export type { VerticalConfig };

let cached: VerticalConfig | null = null;

export function getVerticalConfig(): VerticalConfig {
  if (cached) return cached;
  const vertical = process.env.NEXT_PUBLIC_VERTICAL ?? "debt-settlement";
  cached = vertical === "insurance" ? insurance : debtSettlement;
  return cached;
}
