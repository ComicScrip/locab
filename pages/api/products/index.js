import base from "../../../middlewares/common";

import {
  findAllProductsAvailable,
  findAllProductsUnavailable,
} from "../../../models/product";

async function handleGetProducts(req, res) {
  const from = new Date(req.query.from);
  const to = new Date(req.query.to);

  console.log(req.query.from);

  let days = (to.getTime() - from.getTime()) / (1000 * 3600 * 24);
  if (days > 15) {
    days = 16;
  }

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
  const priceCategoryDuration = daysToPriceCategory[days];

  const availableProducts = (
    await findAllProductsAvailable({
      city: req.query.city,
      from: req.query.from,
      to: req.query.to,
    })
  ).map((product) => ({
    ...product,
    price: product.priceCategory[priceCategoryDuration],
  }));

  if (req.query.showUnavailable === "true") {
    const unavailableProducts = (
      await findAllProductsUnavailable({
        city: req.query.city,
        from: req.query.from,
        to: req.query.to,
      })
    ).map((product) => ({
      ...product,
      price: product.priceCategory[priceCategoryDuration],
      unavailable: true,
    }));

    return res.send(availableProducts.concat(unavailableProducts));
  }
  return res.send(availableProducts);
}

export default base().get(handleGetProducts);
