const db = require("../db");

module.exports.createPrice = ({
  name,
  oneDay,
  twoDays,
  threeDays,
  fourDays,
  fiveDays,
  sixDays,
  sevenDays,
  eightDays,
  nineDays,
  tenDays,
  elevenDays,
  twelveDays,
  thirteenDays,
  fourteenDays,
  fifteenDays,
  sixteenDays,
}) => {
  return db.priceCategory.create({
    data: {
      name,
      oneDay,
      twoDays,
      threeDays,
      fourDays,
      fiveDays,
      sixDays,
      sevenDays,
      eightDays,
      nineDays,
      tenDays,
      elevenDays,
      twelveDays,
      thirteenDays,
      fourteenDays,
      fifteenDays,
      sixteenDays,
    },
  });
};

module.exports.findAllPrices = () => db.priceCategory.findMany();

module.exports.deleteOnePrice = (id) => {
  return db.priceCategory.delete({
    where: {
      id: parseInt(id, 10),
    },
  });
};

module.exports.searchPrice = ({ search }) =>
  db.priceCategory.findMany({
    where: { name: { contains: search } },
  });

module.exports.getOnePrice = (id) => {
  return db.priceCategory.findUnique({
    where: { id: parseInt(id, 10) },
  });
};

module.exports.patchOnePrice = async (id, data) => {
  return await db.priceCategory.update({
    where: { id: parseInt(id, 10) },
    data: {
      name: data.oneDay,
      oneDay: data.oneDay,
      twoDays: data.twoDays,
      threeDays: data.threeDays,
      fourDays: data.fourDays,
      fiveDays: data.fiveDays,
      sixDays: data.sixDays,
      sevenDays: data.sevenDays,
      eightDays: data.eightDays,
      nineDays: data.nineDays,
      tenDays: data.tenDays,
      elevenDays: data.elevenDays,
      twelveDays: data.twelveDays,
      thirteenDays: data.thirteenDays,
      fourteenDays: data.fourteenDays,
      fifteenDays: data.fifteenDays,
      sixteenDays: data.sixteenDays,
    },
  });
};

module.exports.deletePriceDB = async () => {
  return await db.priceCategory.deleteMany();
};
