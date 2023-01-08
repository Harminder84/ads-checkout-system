
export type AdType = "classic" | "stand_out" | "premium";

export interface PricingRule {
  computeDiscount(name: string, items: AdType[]): number;
}