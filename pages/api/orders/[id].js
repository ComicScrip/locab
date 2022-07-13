import base from "../../../middlewares/common";
import requireAdmin from "../../../middlewares/requireAdmin";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";
import { findOneOrder, deleteOneOrder } from "../../../models/order";

async function handleGet(req, res) {
  let customerId;
  if (req.currentUser.role !== "admin") customerId = req.currentUser.id;
  const id = req.query.id;

  res.send(await findOneOrder({ id, customerId }));
}

async function handleDelete(req, res) {
  await deleteOneOrder(req.query.id);
  return res.status(204).send();
}

export default base()
  .use(requireCurrentUser)
  .get(handleGet)
  .delete(requireAdmin, handleDelete);
