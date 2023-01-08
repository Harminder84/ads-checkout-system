import { getAdPrice } from "./ad-price";
import { AdType, PricingRule } from "./types";

export class DealPricingRule implements PricingRule {

  constructor(private customerName: string,
    private adType: AdType,
    private availAds: number,
    private payForAds: number) {
  }

  computeDiscount(name: string, items: AdType[]): number {
    if (this.customerName == name) {
      const filteredAdTypes = items.filter((item: AdType) => this.adType == item)
      if (filteredAdTypes.length >= this.availAds) {
        return (this.availAds - this.payForAds) * getAdPrice(this.adType);
      }
    }
    return 0;
  }
}