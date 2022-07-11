const db = require("../db");

module.exports.findAllReferences = ({ search }) => {
  return db.productSample.findMany({
    include: {
      product: {
        select: {
          name: true,
          brand: true,
          caution: true,
          description: true,
          priceCategory: {
            select: {
              name: true,
            },
          },
          pictures: {
            select: {
              url: true,
            },
          },
        },
      },
      premise: {
        select: {
          name: true,
          address: true,
          zip: true,
          city: true,
          premiseType: true,
        },
      },
      orders: {
        select: {
          order: {
            select: {
              orderNumber: true,
            },
          },
        },
      },
    },
    orderBy: { referenceNumber: "asc" },
    where: { referenceNumber: { contains: search } },
  });
};

module.exports.createProductSample = ({
  referenceNumber,
  productId,
  condition,
  dateOfPurchase,
  comment,
  premiseId,
}) => {
  return db.productSample.create({
    data: {
      referenceNumber,
      productId,
      condition,
      dateOfPurchase,
      comment,
      premiseId,
    },
  });
};
