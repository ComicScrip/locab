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
      phone: "01 23 45 67 78",
      role: "admin",
      city: "plage",
      zip: "12345",
    },
  });
  await db.user.create({
    data: {
      firstname: "toto",
      lastname: "hallaplaje",
      email: "admin@locab.com",
      hashedPassword: await hashPassword("localoca"),
      address: "rue de la plage",
      phone: "01 23 45 67 78",
      role: "visitor",
      city: "plage",
      zip: "12345",
    },
  });
  await db.priceCategory.create({
    data: {
      name: "cat_a",
      price: "",
      oneDay: 36,
      twoDays: 18,
      threeDays: 15,
      fourDays: 12.5,
      fiveDays: 11,
      sixDays: 10,
      sevenDays: 9.14,
      eightDays: 8.5,
      nineDays: 7.78,
      tenDays: 7.2,
      elevenDays: 6.73,
      twelveDays: 6.33,
      thirteenDays: 6,
      fourteenDays: 5.71,
      fifteenDays: 5.6,
      sixteenDays: 5.5,
    },
  });
  await db.priceCategory.create({
    data: {
      name: "cat_b",
      price: "",
      oneDay: 30,
      twoDays: 15,
      threeDays: 11.33,
      fourDays: 9.5,
      fiveDays: 8.4,
      sixDays: 7.33,
      sevenDays: 6.57,
      eightDays: 5.88,
      nineDays: 5.33,
      tenDays: 4.9,
      elevenDays: 4.55,
      twelveDays: 4.25,
      thirteenDays: 4,
      fourteenDays: 3.86,
      fifteenDays: 3.73,
      sixteenDays: 3.5,
    },
  });
  await db.order.create({
    data: {
      orderNumber: "cat_b",
      startDate: "2022-06-16",
      startTime: "17:00:00",
      endDate: "2022-06-26",
      orderDate: "2022-06-15",
      paymentType: "Paypal",
      paidPrice: 42,
      comment: "",
      premiseId: 46,
      premise: 47,
      delegateParentId: "",
      delegateParent: "",
      partnerId: 50,
      partner: 51,
      product: 52,
      status: 54,
      customerId: 56,
      customer: 56,
    },
  });
  await db.productOnOrder.create({
    data: {
      product: "",
      productId: "",
      order: "",
      orderId: "",
      quantity: "",
    },
  });
  await db.reference.create({
    data: {
      referenceNumber: "",
      dateOfPurchase: "",
      comment: "",
      premiseId: "",
      productId: "",
      condition: "",
    },
  });
  await db.product.create({
    data: {
      code: "",
      name: "",
      brand: "",
      quantity: "",
      description: "t",
      priceCategoryId: "",
      priceCategory: "",
      reference: "",
      referenceId: "",
      orders: "",
      pictures: "",
      cartItems: "",
    },
  });
  await db.productPicture.create({
    data: {
      url: "",
      productId: "",
      product: "",
    },
  });
  await db.premise.create({
    data: {
      address: "140 rue delandine",
      zip: "69002",
      city: "Lyon",
      premiseType: "Privé",
      orders: "",
      reference: "",
      referenceId: "",
    },
  });
}

seed();

module.exports = seed;
