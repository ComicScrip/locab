import base from "../../../middlewares/common";
import requireCurrentUser from "../../../middlewares/requireCurrentUser";
import { findAllOrders } from "../../../models/order";

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
export default base().use(requireCurrentUser).get(handleGet);
