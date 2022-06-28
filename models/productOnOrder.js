const db = require("../db");

module.exports.findProductOnOrderById = (id = "") =>
  db.productOnOrder.findUnique({ where: { id } }).catch(() => null);
