import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";
import { getOneUser } from "../../../models/user";

const handleGet = async (req, res) => {
  const user = await getOneUser(req.query.id);
  return res.status(200).send(user);
};

export default base().use(requireCurrentUser).get(handleGet);
