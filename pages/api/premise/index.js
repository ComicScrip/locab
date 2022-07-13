import base from "../../../middlewares/common";
import { findAllPremise } from "../../../models/premise";

async function handleGet(req, res) {
  res.send(await findAllPremise());
}

export default base().get(handleGet);
