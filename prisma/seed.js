const db = require("../db");

async function seed() {
  await db.user.deleteMany();
  await db.user.create({
    data: {
      name: "admin",
      email: "admin@website.com",
      hashedPassword: "OkCool",
      role: "admin",
    },
  });
}

seed();

module.exports = seed;
