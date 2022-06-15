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
  await db.priceCategory.create({
    data: {
      name: "cat_a",
      price: "",
      oneDay: 36,
      twoDays: 36,
      threeDays: 45,
      fourDays: 50,
      fiveDays: 55,
      sixDays: 60,
      sevenDays: 64,
      eightDays: 68,
      nineDays: 70,
      tenDays: 72,
      elevenDays: 74,
      twelveDays: 76,
      thirteenDays: 78,
      fourteenDays: 80,
      fifteenDays: 84,
      sixteenDays: 88,
    },
  });
  await db.priceCategory.create({
    data: {
      name: "cat_b",
      price: "",
      oneDay: 30,
      twoDays: 30,
      threeDays: 34,
      fourDays: 38,
      fiveDays: 42,
      sixDays: 44,
      sevenDays: 46,
      eightDays: 47,
      nineDays: 48,
      tenDays: 49,
      elevenDays: 50,
      twelveDays: 51,
      thirteenDays: 52,
      fourteenDays: 54,
      fifteenDays: 56,
      sixteenDays: 56,
    },
  });
  await db.reference.create({
    data: {
      referenceNumber: "",
      dateOfPurchase: "",
      comment: "",
      premiseId: "",
      productId: "t",
      condition: "",
    },
  });
}

seed();

module.exports = seed;
