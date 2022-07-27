import base from "../../../middlewares/common";
import { findAllCity } from "../../../models/premise";

async function handleGetCity(req, res) {
  const AllCity = (await findAllCity()).map((premise) => premise.city);

  const cityWithoutDouble = AllCity.filter(
    (ele, pos) => AllCity.indexOf(ele) == pos
  );

  res.send(cityWithoutDouble);
}

export default base().get(handleGetCity);
