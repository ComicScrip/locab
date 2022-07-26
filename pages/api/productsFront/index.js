import base from "../../../middlewares/common";

import {
  findAllProductsAvailable,
  findAllProductsUnavailable,
} from "../../../models/product";

async function handleGetProducts(req, res) {
  const availableProducts = await findAllProductsAvailable({
    city: req.query.city || "",
    fromDate: req.query.fromDate,
    toDate: req.query.toDate,
    productNameContains: req.query.productNameContains,
  });

  if (req.query.showUnavailable === "true") {
    const unavailableProducts = (
      await findAllProductsUnavailable({
        city: req.query.city || "",
        fromDate: req.query.fromDate,
        toDate: req.query.toDate,
        productNameContains: req.query.productNameContains,
      })
    ).map((product) => ({
      ...product,
      unavailable: true,
    }));

    return res.send(availableProducts.concat(unavailableProducts));
  }
  return res.send(availableProducts);
}

export default base().get(handleGetProducts);
