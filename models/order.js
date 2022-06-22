const db = require("../db");

module.exports.findAllOrders = () =>
  db.order.findMany({
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
      products: {},
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
  });
