import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";
import { findProductOnOrderById } from "../../../models/productOnOrder";

async function handleGet(req, res) {
  const { id, order, orderId, quantity, productSample, productSampleId } =
    await findProductOnOrderById(req.body);
  res
    .status(201)
    .send({ id, order, orderId, quantity, productSample, productSampleId });
}

export default base()
  .use(requireCurrentUser)
  .get(handleGet)
  .find(findProductOnOrderById);
