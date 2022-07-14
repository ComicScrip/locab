import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";

import { createOrder, findOrders } from "../../../models/order";
import { findAllCartItems } from "../../../models/cartItem";
import { createProductOnOrders } from "../../../models/productsOnOrder";

async function handlePost(req, res) {
  const {
    deliveryPhoneNumber,
    deliveryFirstName,
    deliveryLastName,
    deliveryStreet,
    deliveryZip,
    deliveryCity,
    deliveryArrivalTime,
    comment,
    startDate,
    endDate,
    orderDate,
    premiseId,
    delegateParentId,
    partnerId,
  } = await createOrder(req.body);

  const start = new Date(startDate);
  const end = new Date(endDate);

  const orderNumber = () => {
    return Math.floor((1 + Math.random()) * 0x10000000000)
      .toString(16)
      .substring(1)
      .toUpperCase();
  };
  res.status(201).send({
    deliveryPhoneNumber,
    deliveryFirstName,
    deliveryLastName,
    deliveryStreet,
    deliveryZip,
    deliveryCity,
    deliveryArrivalTime,
    comment,
    orderNumber: orderNumber(),
    startDate: start,
    endDate: end,
    orderDate,
    paymentType: "carte bleue",
    paidPrice: 100,
    premiseId,
    delegateParentId,
    partnerId,
    products: productsOnOrder(),
    customerId: req.currentUser.id,
  });

  const productsOnOrder = async () => {
    const cartItems = await findAllCartItems();
    const order = await findOrders();
    return res.status(201).send(
      await cartItems.map((item) => {
        createProductOnOrders({
          orderId: order.id,
          quantity: item.quantity,
          productSampleId: item.productSampleId,
        });
      })
    );
  };
}

async function handleGet(req, res) {
  res.send(await findOrders());
}
export default base().use(requireCurrentUser).post(handlePost).get(handleGet);
