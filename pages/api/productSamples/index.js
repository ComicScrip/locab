import base from "../../../middlewares/common";

import { findAllProductSamples } from "../../../models/productSample";

async function handleGetProductSample(req, res) {
  res.send(await findAllProductSamples());
}

export default base().get(handleGetProductSample);
