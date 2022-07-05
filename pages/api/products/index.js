import base from "../../../middlewares/common";

import {
  createProduct,
  findAllProductsDescriptions,
} from "../../../models/product";

async function handlePostProduct(req, res) {
  const { name, brand, caution, description, priceCategoryId, pictures } =
    req.body;
  return res.status(201).send(
    await createProduct({
      name,
      brand,
      caution,
      description,
      priceCategoryId,
      pictures,
    })
  );
}

async function handleGetProduct(req, res) {
  res.send(await findAllProductsDescriptions());
}

export default base().post(handlePostProduct).get(handleGetProduct);
