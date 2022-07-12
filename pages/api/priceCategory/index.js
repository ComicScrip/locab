import base from "../../../middlewares/common";
import { getPriceCategory } from "../../../models/priceCategory";

async function handleGetPriceCatgory(req, res) {
  res.send(await getPriceCategory());
}

export default base().get(handleGetPriceCatgory);
