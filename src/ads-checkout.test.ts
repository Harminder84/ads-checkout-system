import { AdsCheckout } from "./ads-checkout";
import { DealPricingRule } from "./deal-pricing-rule";
import { DiscountPricingRule } from "./discount-pricing-rule";
import { PricingRule } from "./types";

describe("ads-checkout", () => {

  let pricingRules: PricingRule[];

  beforeEach(() => {
    const secondBitePricingRule: PricingRule = new DealPricingRule("SecondBite", "classic", 3, 2);
    const axilCoffeePricingRule: PricingRule = new DiscountPricingRule("Axil Coffee Roasters", "stand_out", 299.99);
    const myerStandOutPricingRule: PricingRule = new DealPricingRule("MYER", "stand_out", 5, 4)
    const myerPremiumPricingRule: PricingRule = new DiscountPricingRule("MYER", "premium", 389.99);
    pricingRules = [secondBitePricingRule, axilCoffeePricingRule, myerStandOutPricingRule, myerPremiumPricingRule];
  });

  it("should create an instance of ads-checkout", () => {
    const adsCheckout = AdsCheckout.new("test", []);
    expect(adsCheckout).toBeInstanceOf(AdsCheckout);

  });

  it("should calculate ads price with no pricing rules", () => {
    const adsCheckout = AdsCheckout.new("test", []);
    adsCheckout.add("classic");
    adsCheckout.add("stand_out");
    adsCheckout.add("premium");
    expect(adsCheckout.total()).toBe(987.97);
  });

  it("should calculate ads price with deal pricing rules", () => {
    const adsCheckout = AdsCheckout.new("SecondBite", pricingRules);
    adsCheckout.add("classic");
    adsCheckout.add("classic");
    adsCheckout.add("classic");
    adsCheckout.add("premium");
    expect(adsCheckout.total()).toBe(934.97);
  });

  it("should calculate ads price with discount pricing rules", () => {
    const adsCheckout = AdsCheckout.new("Axil Coffee Roasters", pricingRules);
    adsCheckout.add("stand_out");
    adsCheckout.add("stand_out");
    adsCheckout.add("stand_out");
    adsCheckout.add("premium");
    expect(adsCheckout.total()).toBe(1294.96);
  });

  it("should calculate ads price with deal and discount pricing rules", () => {
    const adsCheckout = AdsCheckout.new("MYER", pricingRules);
    adsCheckout.add("stand_out");
    adsCheckout.add("stand_out");
    adsCheckout.add("stand_out");
    adsCheckout.add("stand_out");
    adsCheckout.add("stand_out");
    adsCheckout.add("premium");
    expect(adsCheckout.total()).toBe(1681.95);
  });

});