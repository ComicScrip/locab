const db = require("../db");

module.exports.findAllOrders = (currentUser) => {
  const currentUserId = currentUser.id;
  // let { date = "" } = req.query;

  const d = new Date();
  const lastMonth = d.setMonth(d.getMonth() - 1);
  // const last3Months = d.setMonth(d.getMonth() - 3);
  // const last6Months = d.setMonth(d.getMonth() - 6);

  const lastMonthNewFormat = new Date(lastMonth);
  // const last3MonthshNewFormat = new Date(last3Months);
  // const last6MonthsNewFormat = new Date(last6Months);

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
      orderDate: {
        lte: lastMonthNewFormat,
      },
      custocustomerId: currentUserId,
    },
  });
};
