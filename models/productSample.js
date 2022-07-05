const db = require("../db");

module.exports.findAllProductSamples = () => db.productSample.findMany();
