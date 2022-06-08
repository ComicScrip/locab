import base from "../../../middlewares/common";

import {
  createUser,
  emailAlreadyExists,
  findAllUsers,
  validateUser,
} from "../../../models/user";
import requireAdmin from "../../../middlewares/requireAdmin";

async function handlePost(req, res) {
  const validationErrors = validateUser(req.body);
  if (validationErrors) return res.status(422).send(validationErrors);
  const alreadyExists = await emailAlreadyExists(req.body.email);
  if (alreadyExists) return res.status(409).send("email already taken");
  const { id, name, email, hashedPassword } = await createUser({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  });

  res.status(201).send({ id, name, email, hashedPassword });
}

async function handleGet(req, res) {
  console.log(req.currentUser);
  res.send(await findAllUsers());
}

export default base().post(handlePost).get(requireAdmin, handleGet);
