const {
  deleteOneUser,
  patchOneUser,
  getOneUser,
} = require("../../../models/user");
import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";

const handleGet = async (req, res) => {
  const user = await getOneUser(req.query.id);
  return res.status(200).send(user);
};
async function handleDelete(req, res) {
  await deleteOneUser(req.query.id);
  return res.status(204).send();
}
const handlePatch = async (req, res) => {
  const userToPatch = await patchOneUser(req.query.id, req.body);
  return res.status(200).send(userToPatch);
};

export default base()
  .get(requireCurrentUser, handleGet)
  .delete(handleDelete, requireCurrentUser)
  .patch(handlePatch, requireCurrentUser);
