import base from "../../../middlewares/common";
import {
  deleteOneProductSample,
  findOneProductSample,
} from "../../../models/productSample";

async function handleDelete(req, res) {
  await deleteOneProductSample(req.query.id);
  return res.status(204).send();
}

const handleGetOneSample = async (req, res) => {
  const product = await findOneProductSample(req.query.id);
  return res.status(200).send(product);
};

export default base().delete(handleDelete).get(handleGetOneSample);
