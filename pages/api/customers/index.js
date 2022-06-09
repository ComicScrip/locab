import base from "../../../middlewares/common";

import {
  createCustomer,
  emailAlreadyExists,
  findAllCustomers,
  validateUser,
} from "../../../models/customer";
import requireAdmin from "../../../middlewares/requireAdmin";

async function handlePost(req, res) {
  const validationErrors = validateUser(req.body);
  if (validationErrors) return res.status(422).send(validationErrors);
  const alreadyExists = await emailAlreadyExists(req.body.email);
  if (alreadyExists) return res.status(409).send("email déja utilisé");
  const {
    id,
    lastname,
    firstname,
    address,
    zip,
    city,
    email,
    hashedPassword,
    phone,
  } = await createCustomer({
    email: req.body.email,
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    address: req.body.address,
    zip: req.body.zip,
    city: req.body.city,
    password: req.body.password,
    phone: req.body.phone,
  });

  res.status(201).send({
    id,
    lastname,
    firstname,
    address,
    zip,
    city,
    email,
    hashedPassword,
    phone,
  });
}

async function handleGet(req, res) {
  console.log(req.currentCustomer);
  res.send(await findAllCustomers());
}

export default base().post(handlePost).get(requireAdmin, handleGet);
