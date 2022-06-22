import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";
import { findAllOrders } from "../../../models/order";

async function handleGet(req, res) {
  res.send(await findAllOrders(req.currentUser));
}
export default base()
  .use(requireCurrentUser)
  .get(requireCurrentUser, handleGet);
