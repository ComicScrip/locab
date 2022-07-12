import base from "../../../middlewares/common";
import {
  getPriceCategory,
  createPrice,
  searchPrice,
} from "../../../models/priceCategory";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";
import requireAdmin from "../../../middlewares/requireAdmin";

async function handleGetPriceCatgory(req, res) {
  res.send(await getPriceCategory());
}

async function handleGetPrice(req, res) {
  res.send(await searchPrice({ search: req.query.search }));
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

export default base()
  .use(requireCurrentUser)
  .use(requireAdmin)
  .get(handleGetPriceCatgory)
  .post(handlePostPrice)
  .get(handleGetPrice);
