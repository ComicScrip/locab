const db = require("../db");

async function seed() {
  await db.user.deleteMany();
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
