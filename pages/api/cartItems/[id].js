import base from "../../../middlewares/common";
const {
  deleteCartItem,
  patchCartItem,
  getCartItem,
} = require("../../../models/cartItem");

async function handleDeleteCartItem(req, res) {
  const cartItemToDelete = await deleteCartItem(req.query.id);
  return res.status(201).send(cartItemToDelete);
}

const handlePatchCartItem = async (req, res) => {
  const cartItemToPatch = await patchCartItem(req.body);
  return res.status(201).send(cartItemToPatch);
};

const handleGetCartItem = async (req, res) => {
  const cartItemToGet = await getCartItem(req.query);
  return res.status(201).send(cartItemToGet);
};

export default base()
  .delete(handleDeleteCartItem)
  .patch(handlePatchCartItem)
  .get(handleGetCartItem);
