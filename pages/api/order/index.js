import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";

import { createOrder, findOrders } from "../../../models/order";

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
    products,
  } = await createOrder(req.body);

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
    startDate,
    endDate,
    orderDate,
    paymentType: "carte bleue",
    paidPrice: 100,
    premiseId,
    delegateParentId,
    partnerId,
    products,
    customerId: req.currentUser.id,
  });
}

async function handleGet(req, res) {
  res.send(await findOrders());
}
export default base().use(requireCurrentUser).post(handlePost).get(handleGet);
