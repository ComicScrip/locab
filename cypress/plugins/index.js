/// <reference types="cypress" />
const User = require("../../models/user");
const db = require("../../db");
const { hashPassword } = require("../../models/user");
const Product = require("../../models/product");
const Premise = require("../../models/premise");

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
async function createOrderSample() {
  const visitor = await db.user.create({
    data: {
      firstname: "tata",
      lastname: "hallaplaje",
      email: "tata@locab.com",
      hashedPassword: await hashPassword("locablocab"),
      address: "rue de la plage",
      phone: "01 23 45 67 78",
      role: "visitor",
      city: "plage",
      zip: "12345",
    },
  });
  const cat_a = await db.priceCategory.create({
    data: {
      name: "cat_a",
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
  const chanceliere = await db.product.create({
    data: {
      name: "Chancelière",
      brand: "Chicco",
      caution: 20,
      description: "Une chancelière",
      priceCategoryId: cat_a.id,
    },
  });
  const poussette = await db.product.create({
    data: {
      name: "Poussette",
      brand: "Yoyo",
      caution: 20,
      description: "Une poussette marque Yoyo",
      priceCategoryId: cat_a.id,
    },
  });
  const premise_01 = await db.premise.create({
    data: {
      name: "Ursule",
      address: "140 rue delandine",
      zip: "69002",
      city: "Lyon",
      premiseType: "Privé",
    },
  });

  const sample_01 = await db.productSample.create({
    data: {
      referenceNumber: "CH-001",
      dateOfPurchase: new Date("2022-05-21T00:00:00"),
      condition: "Neuf",
      lastDateOrder: new Date("2022-05-21T00:00:00"),
      productId: chanceliere.id,
      premiseId: premise_01.id,
    },
  });
  const sample_02 = await db.productSample.create({
    data: {
      referenceNumber: "CH-002",
      dateOfPurchase: new Date("2022-04-23 00:00:00"),
      condition: "Comme neuf",
      lastDateOrder: new Date("2022-05-21T00:00:00"),
      productId: poussette.id,
      premiseId: premise_01.id,
    },
  });
  await db.productPicture.createMany({
    data: [
      {
        url: "/image/products/Chancelière.jpg",
        productId: chanceliere.id,
      },
      {
        url: "/image/products/Poussette-YOYO-Nacelle.jpg",
        productId: poussette.id,
      },
    ],
  });
  await db.order.create({
    data: {
      products: {
        create: [
          {
            quantity: 1,
            productSampleId: sample_01.id,
          },
          {
            quantity: 1,
            productSampleId: sample_02.id,
          },
        ],
      },
      orderNumber: "ART123",
      startDate: new Date("2022-06-16T00:00:00"),
      startTime: new Date("2022-06-17T00:00:00"),
      endDate: new Date("2022-06-26T00:00:00"),
      orderDate: new Date("2022-06-15T00:00:00"),
      paymentType: "Paypal",
      paidPrice: 67,
      premiseId: premise_01.id,
      status: "Terminé",
      customerId: visitor.id,
    },
  });
  await db.order.create({
    data: {
      products: {
        create: [
          {
            quantity: 3,
            productSampleId: sample_01.id,
          },
          {
            quantity: 10,
            productSampleId: sample_02.id,
          },
        ],
      },
      orderNumber: "A54363",
      startDate: new Date("2022-06-16T00:00:00"),
      startTime: new Date("2022-06-17T00:00:00"),
      endDate: new Date("2022-06-26T00:00:00"),
      orderDate: new Date("2022-04-15T00:00:00"),
      paymentType: "Carte bleue",
      paidPrice: 234,
      premiseId: premise_01.id,
      status: "Terminé",
      customerId: visitor.id,
    },
  });
  return db.order.create({
    data: {
      products: {
        create: [
          {
            quantity: 3,
            productSampleId: sample_01.id,
          },
          {
            quantity: 10,
            productSampleId: sample_02.id,
          },
        ],
      },
      orderNumber: "A366UL",
      startDate: new Date("2022-06-16T00:00:00"),
      startTime: new Date("2022-06-17T00:00:00"),
      endDate: new Date("2022-06-26T00:00:00"),
      orderDate: new Date("2022-02-15T00:00:00"),
      paymentType: "Carte bleue",
      paidPrice: 314,
      premiseId: premise_01.id,
      status: "Terminé",
      customerId: visitor.id,
    },
  });
}

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on("task", {
    deleteUserByEmail: User.deleteUserByEmail,
    // resetDB: User.deleteDB, products.deleteDb;
    resetDB: async () => {
      await User.deleteDB();
      await Product.deleteDB();
      await Premise.deleteDB();
      return Promise.resolve("ok");
    },

    createUser: User.createUser,
    createTestProduct: async () => {
      const cat_a = await db.priceCategory.create({
        data: {
          name: "cat_a",
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
      return db.product.create({
        data: {
          name: "Chancelière",
          brand: "Chicco",
          caution: 200,
          pictures: {
            create: [
              {
                url: "/image/products/lit.jpeg",
              },
            ],
          },
          description: "Une chancelière",
          priceCategoryId: cat_a.id,
        },
      });
    },

    findUserByEmail: User.findByEmail,
    createOrderSample: createOrderSample,
    createTestPriceCategory: async () => {
      const cat_a = await db.priceCategory.create({
        data: {
          name: "cat_a",
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
      return cat_a;
    },
  });
  return config;
};
