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

module.exports.patchCartItem = async (data) => {
  return await db.cartItem
    .update({
      where: { id: data.id },
      data: {
        quantity: data.quantity,
      },
    })
    .catch(() => false);
};

module.exports.getCartItem = (id) => {
  return db.cartItem.findUnique({
    where: { id: parseInt(id, 10) },
  });
};
