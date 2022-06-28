const db = require("../db");

module.exports.findAllProductsDescriptions = () =>
  db.product.findMany({
    include: {
      priceCategory: {
        select: {
          name: true,
        },
      },
      productSamples: {
        select: {
          referenceNumber: true,
        },
      },
      pictures: {
        select: {
          url: true,
        },
      },
    },
  });
