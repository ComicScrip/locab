import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";
import { patchOneUser, getOneUser } from "../../../models/user";

const handleGet = async (req, res) => {
  const user = await getOneUser(req.query.id);
  return res.status(200).send(user);
};

const handlePatch = async (req, res) => {
  const userToPatch = await patchOneUser(req.currentUser.id, req.body);
  return res.status(200).send(userToPatch);
};

export default base().use(requireCurrentUser).get(handleGet).patch(handlePatch);
