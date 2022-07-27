import base from "../../../middlewares/common";

import { countProductSamples } from "../../../models/product";

async function handleCountProductSamples(req, res) {
  res.send(
    await countProductSamples({
      city: req.query.city || "",
      productId: req.query.productId,
      fromDate: req.query.fromDate,
      toDate: req.query.toDate,
    })
  );
}

export default base().get(handleCountProductSamples);
