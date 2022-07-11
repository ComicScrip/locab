import base from "../../../middlewares/common";

import { createCartItem, findAllCartItems } from "../../../models/cartItem";

async function handlePostCartItem(req, res) {
  const { customerId, quantity, productSampleId } = req.body;
  return res.status(201).send(
    await createCartItem({
      customerId,
      quantity,
      productSampleId,
    })
  );
}

async function handleGetCartItems(req, res) {
  res.send(await findAllCartItems());
}

export default base().post(handlePostCartItem).get(handleGetCartItems);
