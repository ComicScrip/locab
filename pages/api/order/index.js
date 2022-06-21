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
    ordernumber,
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
  } = await createOrder({
    deliveryPhoneNumber: req.body.deliveryPhoneNumber,
    deliveryFirstName: req.body.deliveryFirstName,
    deliveryLastName: req.body.deliveryLastName,
    deliveryStreet: req.body.deliveryCity,
    deliveryZip: req.body.deliveryZip,
    deliveryCity: req.body.deliveryCity,
    deliveryArrivalTime: req.body.arrivalTime,
    comment: req.body.comment,
    ordernumber: req.body.ordernumber,
    startDate: req.body.startDate,
    startTime: req.body.startTime,
    endDate: req.body.endDate,
    orderDate: req.body.orderDate,
    paymentType: req.body.paymentType,
    paidPrice: req.body.paidPrice,
    premiseId: req.body.premiseId,
    delegateParentId: req.body.delegateParentId,
    partnerId: req.body.partnerId,
    products: req.body.products,
    status: req.body.status,
    customerId: req.body.customerId,
  });
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
    ordernumber,
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
export default base().post(handlePost).get(requireCurrentUser, handleGet);
