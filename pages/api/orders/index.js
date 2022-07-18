import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";
import { createOrder, findAllOrders } from "../../../models/order";
import {
  findAvailableInCity,
  patchOneProductSample,
} from "../../../models/productSample";
import dayjs from "dayjs";
import { getProductPrice } from "../../../utils/getProductPrice";
import { getOnePrice } from "../../../models/priceCategory";

async function handlePost(req, res) {
  const { cartItems, startDate, endDate, orderCity } = req.body;

  if (!cartItems?.length) return res.status(422).send("no cart items");

  const nbDays = dayjs.duration(dayjs(endDate).diff(startDate)).asDays() + 1;

  if (isNaN(nbDays) || nbDays < 1)
    return res.status(422).send("incorrect dates range");

  const outOfStockProducts = [];
  const itemsWithSamples = await Promise.all(
    cartItems.map(async (item) => {
      const samples = await findAvailableInCity({
        city: orderCity,
        startDate,
        productId: item.productId,
        quantity: item.quantity,
      });

      if (samples.length !== item.quantity)
        return outOfStockProducts.push({
          productId: item.productId,
          missingQuantity: item.quantity - samples.length,
        });

      // making sure the client does not send an incorrect price category
      const priceCategory = await getOnePrice(item.product.priceCategoryId);
      return {
        ...item,
        unitPrice: getProductPrice(nbDays, priceCategory),
        samples,
      };
    })
  );

  if (outOfStockProducts.length !== 0)
    return res.status(422).send({
      message: "some products you ordered are out of stock",
      code: "OUT_OF_STOCK",
      details: outOfStockProducts,
    });

  // TODO later : charge customer credit card before creating a new order

  await createOrder({
    ...req.body,
    customerId: 2,
    paymentType: "CB",
    paidPrice: 200,
    itemsWithSamples,
    city: orderCity,
  });

  // updating the product samples unavailabilities
  await Promise.all(
    itemsWithSamples.map(({ samples }) =>
      Promise.all(
        samples.map((sample) =>
          patchOneProductSample(sample.id, {
            unavailabilityStart: new Date(startDate),
            unavailabilityEnd: new Date(endDate),
          })
        )
      )
    )
  );

  res.send("your order is confirmed");
}

async function handleGet(req, res) {
  let customerId;
  if (req.currentUser.role !== "admin") customerId = req.currentUser.id;

  let search = req.query.search;
  let { date = "" } = req.query;
  let limitDatefilter;

  const d = new Date();
  const lastMonth = d.setMonth(d.getMonth() - 1);
  const last3Months = d.setMonth(d.getMonth() - 3);
  const last6Months = d.setMonth(d.getMonth() - 6);

  const lastMonthNewFormat = new Date(lastMonth);
  const last3MonthshNewFormat = new Date(last3Months);
  const last6MonthsNewFormat = new Date(last6Months);

  if (date === "lastmonth") limitDatefilter = lastMonthNewFormat;
  if (date === "last3months") limitDatefilter = last3MonthshNewFormat;
  if (date === "last6months") limitDatefilter = last6MonthsNewFormat;

  res.send(await findAllOrders({ customerId, limitDatefilter, search }));
}
export default base().get(requireCurrentUser, handleGet).post(handlePost);
