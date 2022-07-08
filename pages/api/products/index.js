import base from "../../../middlewares/common";

import {
  findAllProductsAvailable,
  findAllProductsUnavailable,
} from "../../../models/product";

async function handleGetProductAvailable(req, res) {
  res.send(await findAllProductsAvailable({ city: req.query.city }));
}

async function handleGetProductUnavailable(req, res) {
  res.send(await findAllProductsUnavailable({ city: req.query.city }));
}

export default base().get(
  handleGetProductAvailable,
  handleGetProductUnavailable
);
