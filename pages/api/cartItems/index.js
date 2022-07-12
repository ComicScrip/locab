import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";

import { createCartItem, findAllCartItems } from "../../../models/cartItem";
import { findAllProductSamples } from "../../../models/product";

async function handlePostCartItem(req, res) {
  const productSamples = await findAllProductSamples({
    productId: req.query.productId,
  });
  return res.status(201).send(
    await createCartItem({
      customerId: req.currentUser.id,
      quantity: 1,
      productSampleId: parseInt(Object.values(productSamples[0]), 10),
    })
  );
}

async function handleGetCartItems(req, res) {
  res.send(await findAllCartItems());
}

export default base()
  .use(requireCurrentUser)
  .post(handlePostCartItem)
  .get(handleGetCartItems);
