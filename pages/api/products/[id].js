const {
  deleteOneProduct,
  patchOneProduct,
  getOneProduct,
} = require("../../../models/product");
import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";
import requireAdmin from "../../../middlewares/requireAdmin";

async function handleDelete(req, res) {
  await deleteOneProduct(req.query.id);
  return res.status(204).send();
}

const handleGetOneProduct = async (req, res) => {
  const product = await getOneProduct(req.query.id);
  return res.status(200).send(product);
};

const handlePatch = async (req, res) => {
  const productToPatch = await patchOneProduct(req.query.id, req.body);
  return res.status(200).send(productToPatch);
};

export default base()
  .use(requireCurrentUser)
  .use(requireAdmin)
  .get(handleGetOneProduct)
  .delete(handleDelete)
  .patch(handlePatch);
