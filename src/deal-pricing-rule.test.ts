import { getAdPrice } from "./ad-price";
import { DealPricingRule } from "./deal-pricing-rule";
import { PricingRule } from "./types";

describe("deal-pricing-rule", () => {

  it("should compute 0 discount when condition doesn't match", () => {
    const pricingRule: PricingRule = new DealPricingRule("test", "classic", 4, 3);
    const discount = pricingRule.computeDiscount("test", ["classic", "classic"]);
    expect(discount).toBe(0);
  });

  it("should compute discount for 3for2 case", () => {
    const pricingRule: PricingRule = new DealPricingRule("test", "classic", 3, 2);
    const discount = pricingRule.computeDiscount("test", ["classic", "classic", "classic"]);
    expect(discount).toBe(getAdPrice("classic"));
  });

// Todo: add more test scenarios.

});