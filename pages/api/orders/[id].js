import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";
import { findOneOrder } from "../../../models/order";

async function handleGet(req, res) {
  let customerId;
  if (req.currentUser.role !== "admin") customerId = req.currentUser.id;
  const id = req.query.id;

  res.send(await findOneOrder({ id, customerId }));
}

export default base()
  .use(requireCurrentUser)
  .get(requireCurrentUser, handleGet);
