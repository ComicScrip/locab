const db = require("../db");

async function seed() {
  await db.thing.deleteMany();
  await db.user.create({
    data: {
      name: "admin",
      email: "admin@website.com",
      role: "admin",
      hashedPassword: "OkCool",
    },
  });
}

seed();

module.exports = seed;
