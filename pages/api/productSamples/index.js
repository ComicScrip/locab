import base from "../../../middlewares/common";
import {
  createProductSample,
  findAllProductSample,
} from "../../../models/productSample";

import requireCurrentUser from "../../../middlewares/requireCurrentUser";
import requireAdmin from "../../../middlewares/requireAdmin";

async function handleGet(req, res) {
  res.send(await findAllProductSample({ search: req.query.search }));
}

async function handlePost(req, res) {
  const {
    referenceNumber,
    productId,
    condition,
    dateOfPurchase,
    comment,
    premiseId,
  } = req.body;
  return res.status(201).send(
    await createProductSample({
      referenceNumber,
      productId,
      condition,
      dateOfPurchase,
      comment,
      premiseId,
    })
  );
}

export default base()
  .use(requireCurrentUser, requireAdmin)
  .get(handleGet)
  .post(handlePost);
