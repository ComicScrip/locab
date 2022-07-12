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

module.exports.deleteCartItem = (id) => {
  return db.cartItems.delete({
    where: {
      id: parseInt(id, 10),
    },
  });
};

module.exports.patchCartItem = async (id, data) => {
  return await db.cartItems
    .update({
      where: { id: parseInt(id, 10) },
      data: {
        quantity: data.quantity,
      },
    })
    .catch(() => false);
};

module.exports.findAllCartItems = () => db.cartItems.findMany();
