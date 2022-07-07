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
      orderNumber: { contains: search },
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
