const db = require("../db");

module.exports.findAllPremise = async () => {
  return await db.premise.findMany();
};

module.exports.deleteDB = async () => {
  return await db.premise.deleteMany();
};
