import base from "../../../middlewares/common";

import {
  findAllProductsAvailable,
  findAllProductsUnavailable,
} from "../../../models/product";

async function handleGetProducts(req, res) {
  const availableProducts = await findAllProductsAvailable({
    city: req.query.city,
  });
  if (req.query.showUnavailable === "true") {
    const unavailableProducts = (
      await findAllProductsUnavailable({
        city: req.query.city,
      })
    ).map((product) => ({ ...product, unavailable: true }));

    return res.send(availableProducts.concat(unavailableProducts));
  }
  res.send(availableProducts);
}

export default base().get(handleGetProducts);
