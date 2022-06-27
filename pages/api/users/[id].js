import base from "../../../middlewares/common";
import { patchOneUser, getOneUser } from "../../../models/user";

const handleGet = async (req, res) => {
  const user = await getOneUser(req.query.id);
  return res.status(201).send(user);
};

const handlePatch = async (req, res) => {
  const userToPatch = await patchOneUser(req.body);
  return res.status(201).send(userToPatch);
};

export default base().get(handleGet).patch(handlePatch);
