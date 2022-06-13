const db = require("../db");
const { hashPassword } = require("../models/user");

async function seed() {
  await db.user.deleteMany();
  await db.user.create({
    data: {
      firstname: "admin",
      lastname: "admin",
      email: "admin@locab.com",
      hashedPassword: await hashPassword("locablocab"),
      address: "test",
      phone: "test",
      role: "admin",
      city: "test",
      zip: "test",
    },
  });
}

seed();

module.exports = seed;
