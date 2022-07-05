import base from "../../../middlewares/common";

import { createCartItem } from "../../../models/cartItem";

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

export default base().post(handlePostCartItem);
