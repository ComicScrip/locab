import base from "../../../middlewares/common";

import { findAllCartItems } from "../../../models/cartItem";
import {
  createProductOnOrders,
  findProductsOnOrder,
} from "../../../models/productsOnOrder";

async function handlePostProductOrder(req, res) {
  const cartItems = await findAllCartItems();
  return res.status(201).send(
    await cartItems.map((item) => {
      createProductOnOrders({
        quantity: item.quantity,
        productSampleId: item.productSampleId,
      });
    })
  );
}

async function handleGetProductsOnOrder(req, res) {
  res.send(await findProductsOnOrder());
}

export default base()
  .post(handlePostProductOrder)
  .get(handleGetProductsOnOrder);
