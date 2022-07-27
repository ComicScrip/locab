const db = require("../db");

module.exports.createProduct = ({
  name,
  brand,
  caution,
  description,
  priceCategoryId,
  pictures,
}) => {
  return db.product.create({
    data: {
      name,
      brand,
      caution,
      description,
      priceCategoryId,
      pictures: {
        create: [
          {
            url: pictures,
          },
        ],
      },
    },
  });
};

module.exports.findAllProducts = () => db.product.findMany();

module.exports.deleteOneProduct = (id) => {
  return db.product.delete({
    where: {
      id: parseInt(id, 10),
    },
  });
};

module.exports.searchProducts = ({ search }) =>
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
    where: { name: { contains: search } },
  });

module.exports.getOneProduct = (id) => {
  return db.product.findUnique({
    include: {
      pictures: {
        select: {
          url: true,
        },
      },
      priceCategory: true,
    },
    where: { id: parseInt(id, 10) },
  });
};

module.exports.patchOneProduct = async (id, data) => {
  await db.productPicture.deleteMany({
    where: { productId: parseInt(id, 10) },
  });
  await db.productPicture.create({
    data: { url: data.picture, product: { connect: { id: parseInt(id, 10) } } },
  });
  return await db.product.update({
    where: { id: parseInt(id, 10) },
    data: {
      name: data.name,
      brand: data.brand,
      caution: data.caution,
      description: data.description,
      priceCategoryId: data.priceCategoryId,
    },
  });
};

module.exports.deleteDB = async () => {
  return await db.product.deleteMany();
};

module.exports.findAllProductsAvailable = ({
  city,
  fromDate,
  toDate,
  productNameContains,
}) =>
  db.product.findMany({
    where: {
      name: {
        contains: productNameContains,
      },
      productSamples: {
        some: {
          premise: {
            city: city,
          },
          OR: [
            {
              unavailabilityStart: null,
            },
            {
              AND: [
                {
                  unavailabilityStart: {
                    gt: new Date(fromDate),
                  },
                },
                {
                  unavailabilityStart: {
                    gt: new Date(toDate),
                  },
                },
              ],
            },
            {
              unavailabilityEnd: {
                lt: new Date(fromDate),
              },
            },
          ],
        },
      },
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

module.exports.findAllProductsUnavailable = ({
  city,
  toDate,
  fromDate,
  productNameContains,
}) =>
  db.product.findMany({
    where: {
      name: {
        contains: productNameContains,
      },
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
        {
          NOT: {
            productSamples: {
              every: {
                OR: [
                  {
                    AND: [
                      {
                        unavailabilityStart: {
                          gt: new Date(fromDate),
                        },
                      },
                      {
                        unavailabilityStart: {
                          gt: new Date(toDate),
                        },
                      },
                    ],
                  },
                  {
                    unavailabilityEnd: {
                      lt: new Date(fromDate),
                    },
                  },
                ],
              },
            },
          },
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

module.exports.countProductSamples = ({ city, productId, fromDate, toDate }) =>
  db.productSample.count({
    where: {
      AND: [
        {
          productId: parseInt(productId, 10),
        },
        {
          premise: {
            city: city,
          },
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
                    gt: new Date(fromDate),
                  },
                },
                {
                  unavailabilityStart: {
                    gt: new Date(toDate),
                  },
                },
              ],
            },
            {
              unavailabilityEnd: {
                lt: new Date(fromDate),
              },
            },
          ],
        },
      ],
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
