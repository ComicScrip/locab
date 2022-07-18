import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";

import { createCartItem, findCartItems } from "../../../models/cartItem";

async function handlePostCartItem(req, res) {
  return res.status(201).send(
    await createCartItem({
      customerId: req.currentUser.id,
      quantity: 1,
      productId: parseInt(req.query.productId, 10),
    })
  );
}

async function handleGetCartItems(req, res) {
  res.send(await findCartItems({ customerId: req.currentUser.id }));
}

export default base()
  .use(requireCurrentUser)
  .post(handlePostCartItem)
  .get(handleGetCartItems);
