const db = require("../db");

module.exports.createCartItem = ({ customerId, quantity, productSampleId }) => {
  return db.cartItems.create({
    data: {
      customerId,
      quantity,
      productSampleId,
    },
  });
};

module.exports.deleteCartItem = (productSampleId) => {
  return db.cartItems.deleteMany({
    where: {
      productSampleId: parseInt(productSampleId, 10),
    },
  });
};

module.exports.patchCartItem = async (productSampleId, data) => {
  return await db.cartItems
    .updateMany({
      where: { productSampleId: parseInt(productSampleId, 10) },
      data: {
        quantity: data.quantity,
      },
    })
    .catch(() => false);
};

module.exports.findAllCartItems = () => db.cartItems.findMany();
