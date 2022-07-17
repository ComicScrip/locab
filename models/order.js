const db = require("../db");

module.exports.findAllOrders = ({ customerId, limitDatefilter, search }) => {
  return db.order.findMany({
    include: {
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
      items: {
        include: {
          productSamples: {
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
      items: {
        include: {
          productSamples: {
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
  itemsWithSamples,
  deliveryPhoneNumber,
  deliveryFirstName,
  deliveryLastName,
  deliveryStreet,
  deliveryZip,
  deliveryCity,
  deliveryArrivalTime,
  billingFirstname,
  billingLastname,
  billingStreet,
  billingZip,
  billingCity,
  billingPhoneNumber,
  billingEmail,
}) => {
  console.log("samples", itemsWithSamples);
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
      items: {
        create: itemsWithSamples.map(({ quantity, samples, product }) => ({
          quantity,
          productName: product.name,
          productSamples: {
            connect: samples.map((sample) => ({
              id: sample.id,
            })),
          },
          unitPrice: 30,
        })),
      },
      deliveryPhoneNumber,
      deliveryFirstName,
      deliveryLastName,
      deliveryStreet,
      deliveryZip,
      deliveryCity,
      deliveryArrivalTime,
      billingFirstname,
      billingLastname,
      billingStreet,
      billingZip,
      billingCity,
      billingPhoneNumber,
      billingEmail,
    },
  });
};
