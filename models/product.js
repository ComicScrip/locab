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
    },
    where: { id: parseInt(id, 10) },
  });
};

module.exports.patchOneProduct = async (id, data) => {
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
