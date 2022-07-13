const db = require("../db");

module.exports.findAllProductsAvailable = ({ city }) =>
  db.product.findMany({
    where: {
      productSamples: {
        some: {
          premise: {
            city: city,
          },
        },
      },
    },
    include: {
      priceCategory: true,
      productSamples: {
        orderBy: { lastDateOrder: "asc" },
        select: {
          id: true,
          orders: {
            include: { order: { select: { startDate: true, endDate: true } } },
          },
        },
      },
      pictures: {
        select: {
          url: true,
        },
      },
    },
  });

module.exports.findAllProductsUnavailable = ({ city }) =>
  db.product.findMany({
    where: {
      OR: [
        {
          productSamples: {
            none: {},
          },
        },
        {
          NOT: [
            {
              productSamples: {
                some: {
                  premise: {
                    city: city,
                  },
                },
              },
            },
          ],
        },
      ],
    },
    include: {
      priceCategory: true,
      pictures: {
        select: {
          url: true,
        },
      },
    },
  });

module.exports.findAllProductSamples = ({ productId }) =>
  db.productSample.findMany({
    where: {
      productId: parseInt(productId, 10),
    },
    orderBy: {
      lastDateOrder: "asc",
    },
    select: {
      id: true,
    },
  });
