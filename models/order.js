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
    },
  });
};

module.exports.findOrders = () => db.order.findMany();
module.exports.findAllOrders = ({ customerId, limitDatefilter }) => {
  return db.order.findMany({
    include: {
      premise: {
        select: {
          address: true,
        },
      },
      delegateParent: {
        select: {
          lastname: true,
          firstname: true,
        },
      },
      partner: {
        select: {
          company: true,
        },
      },
      products: {
        include: {
          productSample: {
            include: {
              product: {
                include: {
                  pictures: {
                    select: {
                      url: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
      customer: {
        select: {
          lastname: true,
          firstname: true,
          address: true,
          zip: true,
          city: true,
        },
      },
    },
    orderBy: { orderDate: "desc" },
    where: {
      customerId,
      orderDate: {
        gte: limitDatefilter,
      },
    },
  });
};
