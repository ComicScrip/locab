import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";
import {
  createOrder,
  findAllOrders,
  findOneOrderEmail,
  validateUserOrder,
} from "../../../models/order";
import {
  findAvailableInCity,
  patchOneProductSample,
} from "../../../models/productSample";
import dayjs from "dayjs";
import { getProductPrice } from "../../../utils/getProductPrice";
import extractCurrentUser from "../../../middlewares/extractCurrentUser";
import { getOneProduct } from "../../../models/product";

import mailer from "../../../mailer";

const duration = require("dayjs/plugin/duration");
dayjs.extend(duration);

async function handlePost(req, res) {
  const validationErrors = validateUserOrder(req.body);
  if (validationErrors) return res.status(422).send(validationErrors);

  const {
    cartItems,
    startDate,
    endDate,
    orderCity,
    billingFirstname,
    billingLastname,
    billingStreet,
    billingZip,
    billingCity,
    billingPhoneNumber,
    billingEmail,
    deliveryPhoneNumber,
    deliveryFirstName,
    deliveryLastName,
    deliveryStreet,
    deliveryZip,
    deliveryCity,
    deliveryArrivalTime,
  } = req.body;

  if (!cartItems?.length) return res.status(422).send("no cart items");

  const nbDays = dayjs.duration(dayjs(endDate).diff(startDate)).asDays() + 1;

  if (isNaN(nbDays) || nbDays < 1)
    return res.status(422).send("incorrect dates range");

  const deposists = [];
  const outOfStockProducts = [];
  const itemsWithSamples = await Promise.all(
    cartItems.map(async (item) => {
      const samples = await findAvailableInCity({
        city: orderCity,
        startDate,
        endDate,
        productId: item.productId,
        quantity: item.quantity,
      });

      if (
        isNaN(item.quantity) ||
        item.quantity < 1 ||
        samples.length !== item.quantity
      )
        return outOfStockProducts.push({
          productId: item.productId,
          missingQuantity: item.quantity - samples.length,
        });

      // making sure the client does not send an incorrect product

      const product = await getOneProduct(item.productId);
      deposists.push(product.caution);

      return {
        ...item,
        unitPrice: getProductPrice(nbDays, product.priceCategory),
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
  const deposit = Math.max(...[0, ...deposists]);

  const total = itemsWithSamples.reduce(
    (acc, item) => acc + Number((item.unitPrice * item.quantity).toFixed(2)),
    0
  );

  console.log({ deposit, total, deposists });

  await createOrder({
    ...req.body,
    customerId: req.currentUser?.id,
    paymentType: "CB",
    paidPrice: deposit + total,
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

  const starDateFormat = new Date(startDate);
  const endDateFormat = new Date(endDate);
  const orderRetrieved = await findOneOrderEmail({
    billingEmail,
    starDateFormat,
    endDateFormat,
  });

  const orderNumber = orderRetrieved[0].orderNumber;
  const orderDateOldFormat = orderRetrieved[0].orderDate;
  const orderDate = dayjs(orderDateOldFormat).format("YYYY-MM-DD");
  const paidPrice = orderRetrieved[0].paidPrice;

  const mailBody = `Bonjour ${billingFirstname}, Merci pour votre commande n°${orderNumber} ! 

  DATE DE COMMANDE : ${orderDate}.

  DU : ${startDate} AU ${endDate}.

  ADRESSE DE FACTURATION : ${billingFirstname}, ${billingLastname},
  ${billingStreet},
  ${billingZip},
  ${billingCity},
  ${billingPhoneNumber}.

  ADRESSE DE LIVRAISON : ${
    deliveryFirstName === undefined ? billingFirstname : deliveryFirstName
  }, 
  ${deliveryLastName === undefined ? billingLastname : deliveryLastName}, 
  ${deliveryStreet === undefined ? billingStreet : deliveryStreet},
  ${deliveryZip === undefined ? billingZip : deliveryZip},
  ${deliveryCity === undefined ? billingCity : deliveryCity},
   ${
     deliveryPhoneNumber === undefined
       ? billingPhoneNumber
       : deliveryPhoneNumber
   }.
   
   HEURE D'ARRIVEE : 
   ${deliveryArrivalTime === undefined ? "---" : deliveryArrivalTime}.

  PRODUITS : ${cartItems.map((item) => item.product.name)} * ${cartItems.map(
    (item) => item.quantity
  )}.

  TOTAL : ${paidPrice}€.
  
  A bientôt !
  L'équipe Loca-B
`;

  mailer.sendMail({
    from: process.env.MAILER_FROM,
    to: billingEmail,
    subject: `LOCA-B : Commande n°${orderNumber}`,
    text: mailBody,
    html: mailBody,
  });

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
export default base()
  .get(requireCurrentUser, handleGet)
  .post(extractCurrentUser, handlePost);
