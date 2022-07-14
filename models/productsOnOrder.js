const db = require("../db");

module.exports.createProductOnOrders = ({
  orderId,
  quantity,
  productSampleId,
}) => {
  return db.productOnOrder.create({
    data: {
      orderId,
      quantity,
      productSampleId,
    },
  });
};

module.exports.findProductsOnOrder = () => db.productOnOrder.findMany();
