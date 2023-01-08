import { AdsCheckout } from "./src/ads-checkout";
import { DealPricingRule } from "./src/deal-pricing-rule";
import { DiscountPricingRule } from "./src/discount-pricing-rule";
import { PricingRule } from "./src/types";

const secondBitePricingRule: PricingRule = new DealPricingRule("SecondBite", "classic", 3, 2);
const axilCoffeePricingRule: PricingRule = new DiscountPricingRule("Axil Coffee Roasters", "stand_out", 299.99);
const myerStandOutPricingRule: PricingRule = new DealPricingRule("MYER", "stand_out", 5, 4)
const myerPremiumPricingRule: PricingRule = new DiscountPricingRule("MYER", "premium", 389.99);

const rules = [secondBitePricingRule, axilCoffeePricingRule, myerStandOutPricingRule, myerPremiumPricingRule];

const defaultAdsCheckout = AdsCheckout.new("default", rules);
defaultAdsCheckout.add("classic");
defaultAdsCheckout.add("stand_out");
defaultAdsCheckout.add("premium");
console.log(defaultAdsCheckout.total());

const secondBiteAdsCheckout = AdsCheckout.new("SecondBite", rules);
secondBiteAdsCheckout.add("classic");
secondBiteAdsCheckout.add("classic");
secondBiteAdsCheckout.add("classic");
secondBiteAdsCheckout.add("premium");
console.log(secondBiteAdsCheckout.total());

const axilCoffeeAdsCheckout = AdsCheckout.new("Axil Coffee Roasters", rules);
axilCoffeeAdsCheckout.add("stand_out");
axilCoffeeAdsCheckout.add("stand_out");
axilCoffeeAdsCheckout.add("stand_out");
axilCoffeeAdsCheckout.add("premium");
console.log(axilCoffeeAdsCheckout.total());

const myerAdsCheckout = AdsCheckout.new("MYER", rules);
myerAdsCheckout.add("stand_out");
myerAdsCheckout.add("stand_out");
myerAdsCheckout.add("stand_out");
myerAdsCheckout.add("stand_out");
myerAdsCheckout.add("stand_out");
myerAdsCheckout.add("premium");
console.log(myerAdsCheckout.total());