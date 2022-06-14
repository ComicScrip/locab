import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";
import { getSafeAttributes } from "../../../models/user";

async function handleGet(req, res) {
  res.send(getSafeAttributes(req.currentUser));
}
export default base().use(requireCurrentUser).get(handleGet);
