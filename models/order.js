const db = require("../db");

module.exports.createOrder = async ({
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
}) => {
  return db.order.create({
    data: {
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
    },
  });
};

module.exports.findOrders = () => db.order.findMany();
