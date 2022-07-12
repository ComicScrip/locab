const db = require("../db");

module.exports.getPriceCategory = async () => {
  return await db.priceCategory.findMany();
};
