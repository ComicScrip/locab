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
