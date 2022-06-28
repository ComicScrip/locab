const db = require("../db");

module.exports.getProductOnOrder = async (id) => {
  db.productOnOrder.findUnique({ where: { id } }).catch(() => null);
};
