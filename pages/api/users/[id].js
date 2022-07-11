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
  const productToPatch = await patchOneUser(req.query.id, req.body);
  return res.status(200).send(productToPatch);
};

export default base()
  .use(requireCurrentUser)
  .get(handleGet)
  .delete(handleDelete)
  .patch(handlePatch);
