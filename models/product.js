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

module.exports.getOneProduct = (id) => {
  return db.product.findUnique({
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
