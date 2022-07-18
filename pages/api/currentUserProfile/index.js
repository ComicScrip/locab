import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";
import { getSafeAttributes } from "../../../models/user";
import { patchOneUser } from "../../../models/user";

async function handleGet(req, res) {
  res.send(getSafeAttributes(req.currentUser));
}
const handlePatch = async (req, res) => {
  console.log("data", req.body);
  const userToPatch = await patchOneUser(req.currentUser.id, req.body);
  return res.status(200).send(userToPatch);
};

export default base().use(requireCurrentUser).get(handleGet).patch(handlePatch);
