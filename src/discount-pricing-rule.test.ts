//Todo: unit test cases pending

import { getAdPrice } from "./ad-price";
import { DiscountPricingRule } from "./discount-pricing-rule";
import { PricingRule } from "./types";

describe("discount-pricing-rule", () => {

  it("should compute discount premium add", () => {
    const pricingRule: PricingRule = new DiscountPricingRule("test", "premium", 389.99);
    const discount = pricingRule.computeDiscount("test", ["classic", "premium"]);
    expect(discount).toBe(getAdPrice("premium") - 389.99);
  });

  // Todo: add more test scenarios.

});