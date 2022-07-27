const dayjs = require("dayjs");
const db = require("../../db");

async function prepareReservation() {
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

  const lit = await db.product.create({
    data: {
      name: "Berceau",
      brand: "Ceauber",
      caution: 300,
      description: "Un lit pratique pour les parents et douillet pour bébé",
      priceCategoryId: cat_b.id,
    },
  });

  const lyonPremise = await db.premise.create({
    data: {
      name: "Dépot 1",
      address: "140 rue delandine",
      zip: "69002",
      city: "Lyon",
      premiseType: "Privé",
    },
  });

  const deauvillePremise = await db.premise.create({
    data: {
      name: "Dépot 2",
      address: "140 rue antoine",
      zip: "69002",
      city: "Deauville",
      premiseType: "Public",
    },
  });

  await db.premise.create({
    data: {
      name: "Dépot 3",
      address: "139 rue delandine",
      zip: "69002",
      city: "Lyon",
      premiseType: "Privé",
    },
  });

  const chanceliereInLyon = await db.productSample.create({
    data: {
      referenceNumber: "CH-001",
      dateOfPurchase: new Date("2022-05-21T00:00:00"),
      condition: "Neuf",
      productId: chanceliere.id,
      premiseId: lyonPremise.id,
    },
  });

  const chanceliereInLyonBis = await db.productSample.create({
    data: {
      referenceNumber: "CH-002",
      dateOfPurchase: new Date("2022-04-23T00:00:00"),
      condition: "OK",
      productId: chanceliere.id,
      premiseId: lyonPremise.id,
    },
  });

  const pousetteInLyon = await db.productSample.create({
    data: {
      referenceNumber: "CH-005",
      dateOfPurchase: new Date("2022-04-23T00:00:00"),
      condition: "OK",
      productId: poussette.id,
      premiseId: lyonPremise.id,
    },
  });

  const nidAngeInLyon = await db.productSample.create({
    data: {
      referenceNumber: "CH-005",
      dateOfPurchase: new Date("2022-04-23T00:00:00"),
      condition: "OK",
      productId: nidAnge.id,
      premiseId: lyonPremise.id,
    },
  });

  const unavailableBerceauInLyon = await db.productSample.create({
    data: {
      referenceNumber: "CH-0056",
      dateOfPurchase: new Date("2022-04-23T00:00:00"),
      condition: "OK",
      productId: lit.id,
      premiseId: lyonPremise.id,
      unavailabilityEnd: dayjs().add(3, "months").toDate(),
      unavailabilityStart: dayjs().subtract(3, "months").toDate(),
    },
  });

  const poussetteInBordeaux = await db.productSample.create({
    data: {
      referenceNumber: "CH-001",
      dateOfPurchase: new Date("2022-04-23T00:00:00"),
      condition: "Comme neuf",
      productId: poussette.id,
      premiseId: deauvillePremise.id,
    },
  });

  const chanceliereInBordeaux = await db.productSample.create({
    data: {
      referenceNumber: "CH-003",
      dateOfPurchase: new Date("2022-05-21T00:00:00"),
      condition: "Neuf",
      productId: chanceliere.id,
      premiseId: deauvillePremise.id,
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
      {
        url: "/image/products/nidange.webp",
        productId: nidAnge.id,
      },
      {
        url: "/image/products/lit.jpeg",
        productId: lit.id,
      },
    ],
  });
  return Promise.resolve({
    deauvillePremise,
    lyonPremise,
    chanceliereInBordeaux,
    chanceliereInLyon,
    chanceliereInLyonBis,
    poussetteInBordeaux,
    nidAngeInLyon,
    pousetteInLyon,
    unavailableBerceauInLyon,
    chanceliere,
    poussette,
    cat_a,
    cat_b,
  });
}

module.exports = prepareReservation;
