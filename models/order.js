const db = require("../db");
const Joi = require("joi");

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

module.exports.validateUserOrder = (data, forUpdate = false) =>
  Joi.object({
    deliveryPhoneNumber: Joi.string()
      .max(50)
      .presence(forUpdate ? "optional" : "optional"),
    deliveryFirstName: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "optional"),
    deliveryLastName: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "optional"),
    deliveryStreet: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "optional"),
    deliveryZip: Joi.string()
      .max(10)
      .presence(forUpdate ? "optional" : "optional"),
    deliveryCity: Joi.string()
      .max(60)
      .presence(forUpdate ? "optional" : "optional"),
    deliveryArrivalTime: Joi.string()
      .max(100)
      .presence(forUpdate ? "optional" : "optional"),
    comment: Joi.string()
      .max(500)
      .presence(forUpdate ? "optional" : "optional"),
    billingFirstname: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    billingLastname: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    billingStreet: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    billingZip: Joi.string()
      .max(10)
      .presence(forUpdate ? "optional" : "required"),
    billingCity: Joi.string()
      .max(60)
      .presence(forUpdate ? "optional" : "required"),
    billingPhoneNumber: Joi.string()
      .max(50)
      .presence(forUpdate ? "optional" : "required"),
    billingEmail: Joi.string()
      .email()
      .max(100)
      .presence(forUpdate ? "optional" : "required"),
    startDate: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    endDate: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    orderCity: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    cartItems: Joi.array().presence(forUpdate ? "optional" : "required"),
  }).validate(data, { abortEarly: false }).error;

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
  city,
  customerId,
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
      city,
      customerId,
    },
  });
};

module.exports.findOneOrderEmail = ({
  billingEmail,
  starDateFormat,
  endDateFormat,
}) => {
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
          phone: true,
          email: true,
        },
      },
    },
    where: {
      AND: [
        { billingEmail },
        { startDate: starDateFormat },
        { endDate: endDateFormat },
      ],
    },
  });
};
