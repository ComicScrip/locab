import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";
import requireAdmin from "../../../middlewares/requireAdmin";
import { patchOneUser, getOneUser } from "../../../models/user";

const handleGet = async (req, res) => {
  const user = await getOneUser(req.query.id);
  return res.status(201).send(user);
};

const handlePatch = async (req, res) => {
  const userToPatch = await patchOneUser(req.body);
  return res.status(201).send(userToPatch);
};

export default base()
  .use(requireAdmin)
  .use(requireCurrentUser)
  .get(handleGet)
  .patch(handlePatch);
