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
  });
