const db = require("../db");

module.exports.findAllOrders = ({ customerId, limitDatefilter, search }) => {
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
      OR: [
        { orderNumber: { contains: search } },
        { customer: { lastname: { contains: search } } },
      ],
      orderDate: {
        gte: limitDatefilter,
      },
    },
  });
};

module.exports.findOneOrder = ({ customerId, id }) => {
  return db.order.findUnique({
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
          phone: true,
          email: true,
        },
      },
    },
    where: {
      customerId,
      id: parseInt(id, 10),
    },
  });
};

module.exports.deleteOneOrder = (id) => {
  return db.order.delete({
    where: {
      id: parseInt(id, 10),
    },
  });
};

module.exports.createOrder = ({
  startDate,
  endDate,
  paymentType,
  paidPrice,
  comment,
  products,
  customerId,
  deliveryPhoneNumber,
  deliveryFirstName,
  deliveryLastName,
  deliveryStreet,
  deliveryZip,
  deliveryCity,
  deliveryArrivalTime,
}) => {
  const orderNumber = Math.floor((1 + Math.random()) * 0x10000000000)
    .toString(16)
    .substring(1)
    .toUpperCase();
  return db.order.create({
    data: {
      orderNumber,
      startDate: new Date(startDate),
      startTime: new Date(startDate),
      endDate: new Date(endDate),
      paymentType,
      paidPrice,
      comment,
      products,

      deliveryPhoneNumber,
      deliveryFirstName,
      deliveryLastName,
      deliveryStreet,
      deliveryZip,
      deliveryCity,
      deliveryArrivalTime,
      customerId,
    },
  });
};
