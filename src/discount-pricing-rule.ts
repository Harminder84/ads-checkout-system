import { getAdPrice } from "./ad-price";
import { AdType, PricingRule } from "./types";

export class DiscountPricingRule implements PricingRule {

  constructor(private customerName: string,
    private adType: AdType,
    private discountedPrice: number) {
  }

  computeDiscount(name: string, items: AdType[]): number {
    if (this.customerName == name) {
      const filteredAdTypes = items.filter((item: AdType) => this.adType == item)
      if (filteredAdTypes.length > 0) {
        return (getAdPrice(this.adType) - this.discountedPrice) * filteredAdTypes.length;
      }
    }
    return 0;
  }
}