const prepareReservation = require("../cypress/plugins/prepareReservation");
const db = require("../db");
const { hashPassword } = require("../models/user");

async function seed() {
  await db.order.deleteMany();
  await db.productSample.deleteMany();
  await db.product.deleteMany();
  await db.priceCategory.deleteMany();
  await db.premise.deleteMany();
  await db.user.deleteMany();

  await db.user.create({
    data: {
      firstname: "admin",
      lastname: "admin",
      email: "admin@locab.fr",
      hashedPassword: await hashPassword("w5kYjujGPq@r9E!esx"),
      address: "test",
      phone: "01 23 45 67 78",
      role: "admin",
      city: "plage",
      zip: "12345",
    },
  });

  const visitor = await db.user.create({
    data: {
      firstname: "toto",
      lastname: "hallaplaje",
      email: "visitor@locab.com",
      hashedPassword: await hashPassword("locablocab"),
      address: "rue de la plage",
      phone: "01 23 45 67 78",
      role: "visitor",
      city: "Lyon",
      zip: "69000",
    },
  });

  const {
    chanceliere,
    chanceliereInLyon,
    poussette,
    pousetteInLyon,
    chanceliereInLyonBis,
  } = await prepareReservation();

  await db.order.deleteMany();
  await db.order.create({
    data: {
      city: "Lyon",
      items: {
        create: [
          {
            quantity: 1,
            productName: chanceliere.name,
            productSamples: {
              connect: {
                id: chanceliereInLyon.id,
              },
            },
            unitPrice: 30,
          },
          {
            quantity: 1,
            productName: poussette.name,
            productSamples: {
              connect: {
                id: pousetteInLyon.id,
              },
            },
            unitPrice: 60,
          },
        ],
      },
      billingCity: visitor.city,
      billingEmail: visitor.email,
      billingFirstname: visitor.firstname,
      billingLastname: visitor.lastname,
      billingPhoneNumber: visitor.phone,
      billingStreet: visitor.address,
      billingZip: visitor.zip,
      orderNumber: "ZRT123",
      startDate: new Date("2022-06-16T00:00:00"),
      startTime: new Date("2022-06-17T00:00:00"),
      endDate: new Date("2022-06-26T00:00:00"),
      orderDate: new Date("2022-06-15T00:00:00"),
      paymentType: "Paypal",
      paidPrice: 67,
      status: "Terminé",
      customerId: visitor.id,
    },
  });

  await db.order.create({
    data: {
      city: "Lyon",
      items: {
        create: [
          {
            quantity: 2,
            productName: chanceliere.name,
            productSamples: {
              connect: [
                {
                  id: chanceliereInLyon.id,
                },
                {
                  id: chanceliereInLyonBis.id,
                },
              ],
            },
            unitPrice: 30,
          },
        ],
      },
      billingCity: visitor.city,
      billingEmail: visitor.email,
      billingFirstname: visitor.firstname,
      billingLastname: visitor.lastname,
      billingPhoneNumber: visitor.phone,
      billingStreet: visitor.address,
      billingZip: visitor.zip,
      orderNumber: "R54363",
      startDate: new Date("2022-06-16T00:00:00"),
      startTime: new Date("2022-06-17T00:00:00"),
      endDate: new Date("2022-06-26T00:00:00"),
      orderDate: new Date("2022-06-15T00:00:00"),
      paymentType: "Carte bleue",
      paidPrice: 234,
      status: "Terminé",
      customerId: visitor.id,
    },
  });

  await db.cartItems.deleteMany();
}

seed();

module.exports = seed;
