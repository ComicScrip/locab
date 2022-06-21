import base from "../../../middlewares/common";

import { createProduct, findAllProducts } from "../../../models/product";

async function handlePostProduct(req, res) {
  const { id, name, brand, description, priceCategoryId } = await createProduct(
    {
      name: req.body.name,
      brand: req.body.brand,
      description: req.body.description,
      priceCategoryId: req.body.priceCategoryId,
    }
  );
  res.status(201).send({
    id,
    name,
    brand,
    description,
    priceCategoryId,
  });
}

async function handleGetProduct(req, res) {
  res.send(await findAllProducts());
}

export default base().post(handlePostProduct).get(handleGetProduct);
