const db = require("../db");

module.exports.createProduct = ({
  name,
  brand,
  description,
  priceCategoryId,
}) => {
  return db.product.create({
    data: {
      name,
      brand,
      description,
      priceCategoryId,
    },
  });
};

module.exports.findAllProducts = () => db.product.findMany();

module.exports.deleteOneProduct = (id) => {
  console.log("tatatatatat", id);
  return db.product.delete({
    where: {
      id: parseInt(id, 10),
    },
  });
};
