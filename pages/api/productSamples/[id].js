import base from "../../../middlewares/common";
import {
  deleteOneProductSample,
  findOneProductSample,
  patchOneProductSample,
} from "../../../models/productSample";

import requireCurrentUser from "../../../middlewares/requireCurrentUser";
import requireAdmin from "../../../middlewares/requireAdmin";

async function handleDelete(req, res) {
  await deleteOneProductSample(req.query.id);
  return res.status(204).send();
}

const handleGetOneSample = async (req, res) => {
  const productSample = await findOneProductSample(req.query.id);
  return res.status(200).send(productSample);
};

const handlePatch = async (req, res) => {
  const producSampletToPatch = await patchOneProductSample(
    req.query.id,
    req.body
  );
  return res.status(200).send(producSampletToPatch);
};

export default base()
  .use(requireCurrentUser, requireAdmin)
  .delete(handleDelete)
  .get(handleGetOneSample)
  .patch(handlePatch);
