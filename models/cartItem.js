const db = require("../db");

module.exports.createCartItem = ({ customerId, quantity, productId }) => {
  return db.cartItems.create({
    data: {
      customerId,
      quantity,
      productId,
    },
  });
};

module.exports.deleteCartItem = (productId) => {
  return db.cartItems.deleteMany({
    where: {
      productId: parseInt(productId, 10),
    },
  });
};

module.exports.patchCartItem = async (productId, data) => {
  return await db.cartItems
    .updateMany({
      where: { productId: parseInt(productId, 10) },
      data: {
        quantity: data.quantity,
      },
    })
    .catch(() => false);
};

module.exports.findCartItems = ({ customerId }) =>
  db.cartItems.findMany({
    where: { customerId: customerId },
    include: {
      product: {
        include: {
          pictures: true,
          priceCategory: true,
        },
      },
    },
  });
