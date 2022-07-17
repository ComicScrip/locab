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

  const visitor = await db.user.create({
    data: {
      firstname: "jane",
      lastname: "doe",
      email: "jane.doe@gmail.com",
      hashedPassword: await hashPassword("locablocab"),
      address: "rue de la plage",
      phone: "01 23 45 67 78",
      role: "visitor",
      city: "Lyon",
      zip: "69000",
    },
  });

  await db.priceCategory.deleteMany();
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

  const cat_b = await db.priceCategory.create({
    data: {
      name: "cat_b",
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

  await db.product.deleteMany();
  const chanceliere = await db.product.create({
    data: {
      name: "Chancelière",
      brand: "Chicco",
      caution: 200,
      description: "Une chancelière",
      priceCategoryId: cat_b.id,
    },
  });

  const poussette = await db.product.create({
    data: {
      name: "Poussette",
      brand: "Yoyo",
      caution: 400,
      description: "Une poussette marque Yoyo",
      priceCategoryId: cat_a.id,
    },
  });

  const nidAnge = await db.product.create({
    data: {
      name: "Nid d'ange",
      brand: "Ange",
      caution: 200,
      description: "Un nid d'ange marque ange",
      priceCategoryId: cat_a.id,
    },
  });

  await db.premise.deleteMany();
  const premise_01 = await db.premise.create({
    data: {
      name: "Dépot 1",
      address: "140 rue delandine",
      zip: "69002",
      city: "Lyon",
      premiseType: "Privé",
    },
  });

  const premise_02 = await db.premise.create({
    data: {
      name: "Dépot 2",
      address: "140 rue antoine",
      zip: "69002",
      city: "Bordeaux",
      premiseType: "Public",
    },
  });

  await db.productSample.deleteMany();
  const sample_01 = await db.productSample.create({
    data: {
      referenceNumber: "CH-001",
      dateOfPurchase: new Date("2022-05-21T00:00:00"),
      condition: "Neuf",
      productId: chanceliere.id,
      premiseId: premise_01.id,
    },
  });

  const sample_01_bis = await db.productSample.create({
    data: {
      referenceNumber: "CH-003",
      dateOfPurchase: new Date("2022-04-23T00:00:00"),
      condition: "OK",
      productId: chanceliere.id,
      premiseId: premise_01.id,
    },
  });

  const sample_02 = await db.productSample.create({
    data: {
      referenceNumber: "CH-002",
      dateOfPurchase: new Date("2022-04-23T00:00:00"),
      condition: "Comme neuf",
      productId: poussette.id,
      premiseId: premise_02.id,
    },
  });

  await db.productSample.create({
    data: {
      referenceNumber: "CH-003",
      dateOfPurchase: new Date("2022-05-21T00:00:00"),
      condition: "Neuf",
      productId: chanceliere.id,
      premiseId: premise_01.id,
    },
  });

  await db.productPicture.deleteMany();
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
      {
        url: "/image/products/Poussette-YOYO-Nacelle.jpg",
        productId: nidAnge.id,
      },
    ],
  });

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
                id: sample_01.id,
              },
            },
            unitPrice: 30,
          },
          {
            quantity: 1,
            productName: poussette.name,
            productSamples: {
              connect: {
                id: sample_02.id,
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
                  id: sample_01.id,
                },
                {
                  id: sample_01_bis.id,
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
