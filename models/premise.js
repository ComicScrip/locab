const db = require("../db");

module.exports.findAllPremise = async () => {
  return await db.premise.findMany();
};

module.exports.deletePremise = async () => {
  return await db.premise.deleteMany();
};
