import base from "../../../middlewares/common";
import {
  createProductSample,
  findAllReferences,
} from "../../../models/reference";

async function handleGet(req, res) {
  res.send(await findAllReferences({ search: req.query.search }));
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

export default base().get(handleGet).post(handlePost);
