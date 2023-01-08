

import { AdType } from "./types";

// Hardcoded Ads product, it can be dynamic
const productsMap = new Map<AdType, number>();
productsMap.set("classic", 269.99);
productsMap.set("stand_out", 322.99);
productsMap.set("premium", 394.99);

export const getAdPrice = (type: AdType): number => {
  const price = productsMap.get(type);
  if (price) {
    return price;
  }
  return 0;
};

