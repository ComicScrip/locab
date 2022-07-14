import base from "../../../middlewares/common";
import { getProductOnOrder } from "../../../models/productOnOrder";

async function handleGet(req, res) {
  res.send(getProductOnOrder(req.body));
}

export default base().get(handleGet);
