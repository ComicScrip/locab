import base from "../../../middlewares/common";
const { deleteCartItem, patchCartItem } = require("../../../models/cartItem");

async function handleDeleteCartItem(req, res) {
  const cartItemToDelete = await deleteCartItem(req.query.id);
  return res.status(201).send(cartItemToDelete);
}

const handlePatchCartItem = async (req, res) => {
  const cartItemToPatch = await patchCartItem(req.query.id, req.body);
  return res.status(201).send(cartItemToPatch);
};

export default base().delete(handleDeleteCartItem).patch(handlePatchCartItem);
