import { getAdPrice } from "./ad-price";
import { AdType, PricingRule } from "./types";

export const GH_TOKEN = "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";
export const JWT="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
export class AdsCheckout {

  private customerName: string;

  private items: AdType[] = [];

  private secret = "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";

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
