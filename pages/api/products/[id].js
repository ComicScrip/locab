const {
  deleteOneProduct,
  patchOneProduct,
} = require("../../../models/product");
import base from "../../../middlewares/common";

async function handleDelete(req, res) {
  const productToDelete = await deleteOneProduct(req.query.id);
  return res.status(201).send(productToDelete);
}

const handlePatch = async (req, res) => {
  const productToPatch = await patchOneProduct(req.body);
  return res.status(201).send(productToPatch);
};

export default base().delete(handleDelete).patch(handlePatch);
