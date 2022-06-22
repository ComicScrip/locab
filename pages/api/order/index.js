import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";

import { createOrder, findOrders } from "../../../models/order";

async function handlePost(req, res) {
  const {
    id,
    deliveryPhoneNumber,
    deliveryFirstName,
    deliveryLastName,
    deliveryStreet,
    deliveryZip,
    deliveryCity,
    deliveryArrivalTime,
    comment,
    orderNumber,
    startDate,
    startTime,
    endDate,
    orderDate,
    paymentType,
    paidPrice,
    premiseId,
    delegateParentId,
    partnerId,
    products,
    status,
    customerId,
  } = await createOrder(req.body);
  res.status(201).send({
    id,
    deliveryPhoneNumber,
    deliveryFirstName,
    deliveryLastName,
    deliveryStreet,
    deliveryZip,
    deliveryCity,
    deliveryArrivalTime,
    comment,
    orderNumber,
    startDate,
    startTime,
    endDate,
    orderDate,
    paymentType,
    paidPrice,
    premiseId,
    delegateParentId,
    partnerId,
    products,
    status,
    customerId,
  });
}

async function handleGet(req, res) {
  res.send(await findOrders());
}
export default base().use(requireCurrentUser).post(handlePost).get(handleGet);
