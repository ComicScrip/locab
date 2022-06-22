const { deleteOneProduct } = require("../../../models/product");
import base from "../../../middlewares/common";

async function handleDelete(req, res) {
  const productToDelete = await deleteOneProduct(req.query.id);
  return res.status(201).send(productToDelete);
}

export default base().delete(handleDelete);
