import base from "../../../middlewares/common";
import { deleteOneProductSample } from "../../../models/productSample";

async function handleDelete(req, res) {
  await deleteOneProductSample(req.query.id);
  return res.status(204).send();
}

export default base().delete(handleDelete);
