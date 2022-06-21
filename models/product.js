const db = require("../db");
// const Joi = require("joi");

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
