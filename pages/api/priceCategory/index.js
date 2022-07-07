import base from "../../../middlewares/common";
import {
  getPriceCategory,
  createPrice,
  searchPrice,
} from "../../../models/priceCategory";

async function handleGetPriceCatgory(req, res) {
  res.send(await getPriceCategory());
}

async function handlePostPrice(req, res) {
  const {
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
  } = req.body;
  return res.status(201).send(
    await createPrice({
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
    })
  );
}

async function handleGetPrice(req, res) {
  res.send(await searchPrice({ search: req.query.search }));
}

export default base()
  .get(handleGetPriceCatgory)
  .post(handlePostPrice)
  .get(handleGetPrice);
