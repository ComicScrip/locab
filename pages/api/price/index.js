import base from "../../../middlewares/common";
import { createPrice, searchPrice } from "../../../models/price";

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

export default base().post(handlePostPrice).get(handleGetPrice);
