import base from "../../../middlewares/common";

import {
  createUser,
  emailAlreadyExists,
  findAllUsers,
  validateUser,
} from "../../../models/user";

async function handlePost(req, res) {
  const validationErrors = validateUser(req.body);
  if (validationErrors) return res.status(422).send(validationErrors);
  const alreadyExists = await emailAlreadyExists(req.body.email);
  if (alreadyExists) return res.status(409).send("email déja utilisé");

  const {
    id,
    firstName,
    lastName,
    address,
    zip,
    city,
    phone,
    hashedPassword,
    email,
  } = await createUser({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    zip: req.body.zip,
    city: req.body.city,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
  });

  res.status(201).send({
    id,
    lastName,
    firstName,
    address,
    zip,
    city,
    email,
    hashedPassword,
    phone,
  });
}

async function handleGet(req, res) {
  res.send(await findAllUsers());
}

export default base().post(handlePost).get(handleGet);
