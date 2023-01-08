import { getAdPrice } from "./ad-price";
import { AdType, PricingRule } from "./types";

export class AdsCheckout {

  private customerName: string;

  private items: AdType[] = [];

  private constructor(name: string, private rules: PricingRule[]) {
    this.customerName = name;
  }

  static new(name: string, rules: PricingRule[]): AdsCheckout {
    return new AdsCheckout(name, rules)
  }

  add(item: AdType): void {
    this.items.push(item);
  }

  total(): number {
    let sum = 0;
    this.items.map((item: AdType) => {
      sum = sum + getAdPrice(item);
    });

    this.rules.forEach((rule) => {
      const discount = rule.computeDiscount(this.customerName, this.items);
      sum = sum - discount;
    });

    return sum;
  }

}