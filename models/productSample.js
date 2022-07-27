const db = require("../db");

module.exports.findAllProductSample = ({ search }) => {
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
      orderItems: {
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
    where: {
      OR: [
        { referenceNumber: { contains: search } },
        { product: { name: { contains: search } } },
      ],
    },
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

module.exports.deleteOneProductSample = (id) => {
  return db.productSample.delete({
    where: {
      id: parseInt(id, 10),
    },
  });
};

module.exports.findOneProductSample = (id) => {
  return db.productSample.findUnique({
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
      orderItems: {
        select: {
          order: {
            select: {
              orderNumber: true,
              id: true,
            },
          },
        },
      },
    },
    where: { id: parseInt(id, 10) },
  });
};

module.exports.patchOneProductSample = async (id, data) => {
  return await db.productSample.update({
    where: { id: parseInt(id, 10) },
    data,
  });
};

module.exports.findAvailableInCity = ({
  city,
  startDate,
  quantity = 1,
  productId,
  endDate,
}) => {
  return db.productSample.findMany({
    where: {
      AND: [
        {
          premise: {
            city,
          },
          productId,
        },
        {
          OR: [
            {
              unavailabilityStart: null,
            },
            {
              AND: [
                {
                  unavailabilityStart: {
                    gt: new Date(startDate),
                  },
                },
                {
                  unavailabilityStart: {
                    gt: new Date(endDate),
                  },
                },
              ],
            },
            {
              unavailabilityEnd: {
                lt: new Date(startDate),
              },
            },
          ],
        },
      ],
    },
    take: quantity,
  });
};
