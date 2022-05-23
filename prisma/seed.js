const db = require("../db");

async function seed() {
  await db.thing.deleteMany();
  await db.thing.create({ data: { name: "something" } });
}

seed();

module.exports = seed;
