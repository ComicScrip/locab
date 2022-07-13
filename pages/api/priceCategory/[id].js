const {
  deleteOnePrice,
  patchOnePrice,
  getOnePrice,
} = require("../../../models/priceCategory");
import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";
import requireAdmin from "../../../middlewares/requireAdmin";

async function handleDeletePrice(req, res) {
  await deleteOnePrice(req.query.id);
  return res.status(204).send();
}

const handleGetOnePrice = async (req, res) => {
  const product = await getOnePrice(req.query.id);
  return res.status(200).send(product);
};

const handlePatchPrice = async (req, res) => {
  const productToPatch = await patchOnePrice(req.query.id, req.body);
  return res.status(200).send(productToPatch);
};

export default base()
  .use(requireCurrentUser)
  .use(requireAdmin)
  .get(handleGetOnePrice)
  .delete(handleDeletePrice)
  .patch(handlePatchPrice);
