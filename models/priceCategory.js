const db = require("../db");

module.exports.getPriceCategory = async () => {
  return await db.priceCategory.findMany();
};

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
      oneDay: parseFloat(oneDay, 10),
      twoDays: parseFloat(twoDays, 10),
      threeDays: parseFloat(threeDays, 10),
      fourDays: parseFloat(fourDays, 10),
      fiveDays: parseFloat(fiveDays, 10),
      sixDays: parseFloat(sixDays, 10),
      sevenDays: parseFloat(sevenDays, 10),
      eightDays: parseFloat(eightDays, 10),
      nineDays: parseFloat(nineDays, 10),
      tenDays: parseFloat(tenDays, 10),
      elevenDays: parseFloat(elevenDays, 10),
      twelveDays: parseFloat(twelveDays, 10),
      thirteenDays: parseFloat(thirteenDays, 10),
      fourteenDays: parseFloat(fourteenDays, 10),
      fifteenDays: parseFloat(fifteenDays, 10),
      sixteenDays: parseFloat(sixteenDays, 10),
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
      name: data.name,
      oneDay: parseFloat(data.oneDay, 10),
      twoDays: parseFloat(data.twoDays, 10),
      threeDays: parseFloat(data.threeDays, 10),
      fourDays: parseFloat(data.fourDays, 10),
      fiveDays: parseFloat(data.fiveDays, 10),
      sixDays: parseFloat(data.sixDays, 10),
      sevenDays: parseFloat(data.sevenDays, 10),
      eightDays: parseFloat(data.eightDays, 10),
      nineDays: parseFloat(data.nineDays, 10),
      tenDays: parseFloat(data.tenDays, 10),
      elevenDays: parseFloat(data.elevenDays, 10),
      twelveDays: parseFloat(data.twelveDays, 10),
      thirteenDays: parseFloat(data.thirteenDays, 10),
      fourteenDays: parseFloat(data.fourteenDays, 10),
      fifteenDays: parseFloat(data.fifteenDays, 10),
      sixteenDays: parseFloat(data.sixteenDays, 10),
    },
  });
};

module.exports.deleteDB = async () => {
  return await db.priceCategory.deleteMany();
};
