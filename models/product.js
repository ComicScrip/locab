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
      pictures: {
        select: {
          url: true,
        },
      },
    },
  });
