export function getProductPrice(nbDays, priceCategory) {
  const daysToPriceCategory = {
    1: "oneDay",
    2: "twoDays",
    3: "threeDays",
    4: "fourDays",
    5: "fiveDays",
    6: "sixDays",
    7: "sevenDays",
    8: "eightDays",
    9: "nineDays",
    10: "tenDays",
    11: "elevenDays",
    12: "twelveDays",
    13: "thirteenDays",
    14: "fourteenDays",
    15: "fifteenDays",
    16: "sixteenDays",
  };
  const priceCategoryDuration = daysToPriceCategory[nbDays > 16 ? 16 : nbDays];
  return priceCategory[priceCategoryDuration];
}
