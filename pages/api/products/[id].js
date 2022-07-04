const {
  deleteOneProduct,
  patchOneProduct,
  getOneProduct,
} = require("../../../models/product");
import base from "../../../middlewares/common";

async function handleDelete(req, res) {
  const productToDelete = await deleteOneProduct(req.query.id);
  return res.status(201).send(productToDelete);
}

const handleGetOneProduct = async (req, res) => {
  const product = await getOneProduct(req.query.id);
  return res.status(201).send(product);
};

const handlePatch = async (req, res) => {
  const productToPatch = await patchOneProduct(req.query.id, req.body);
  return res.status(200).send(productToPatch);
};

export default base()
  .get(handleGetOneProduct)
  .delete(handleDelete)
  .patch(handlePatch);
