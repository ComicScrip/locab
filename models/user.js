const db = require("../db");
const Joi = require("joi");
const argon2 = require("argon2");

module.exports.emailAlreadyExists = (email) =>
  db.user.findFirst({ where: { email } }).then((user) => !!user);

module.exports.findByEmail = (email = "") =>
  db.user.findUnique({ where: { email } }).catch(() => null);

module.exports.findById = (id) =>
  db.user.findUnique({ where: { id } }).catch(() => null);

module.exports.validateUser = (data, forUpdate = false) =>
  Joi.object({
    firstname: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    lastname: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    address: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    zip: Joi.string()
      .max(10)
      .presence(forUpdate ? "optional" : "required"),
    city: Joi.string()
      .max(60)
      .presence(forUpdate ? "optional" : "required"),
    email: Joi.string()
      .email()
      .max(100)
      .presence(forUpdate ? "optional" : "required"),
    phone: Joi.string()
      .max(50)
      .presence(forUpdate ? "optional" : "required"),
    password: Joi.string()
      .min(8)
      .max(50)
      .presence(forUpdate ? "optional" : "required"),
  }).validate(data, { abortEarly: false }).error;

const hashingOptions = {
  memoryCost: 2 ** 16,
  timeCost: 5,
  type: argon2.argon2id,
};

const hashPassword = (plainPassword) =>
  argon2.hash(plainPassword, hashingOptions);

module.exports.hashPassword = hashPassword;

const verifyPassword = (plainPassword, hashedPassword) =>
  argon2.verify(hashedPassword, plainPassword, hashingOptions);

module.exports.verifyPassword = verifyPassword;

module.exports.getSafeAttributes = (user) => ({
  ...user,
  hashedPassword: undefined,
});

module.exports.createUser = async ({
  firstname,
  lastname,
  address,
  zip,
  city,
  phone,
  email,
  password,
  role,
}) => {
  const hashedPassword = await hashPassword(password);
  return db.user.create({
    data: {
      firstname,
      lastname,
      address,
      zip,
      city,
      phone,
      email,
      hashedPassword,
      role,
    },
  });
};

module.exports.deleteUserByEmail = async (email) => {
  return await db.user.delete({ where: { email } }).catch(() => false);
};

module.exports.deleteDB = async () => {
  return await db.user.deleteMany();
};

module.exports.findAllUsers = ({ search }) =>
  db.user.findMany({
    where: {
      OR: [
        { lastname: { contains: search } },
        { firstname: { contains: search } },
      ],
    },
  });
module.exports.updateUser = async (id, data) => {
  return db.user.update({ where: { id: parseInt(id, 10) }, data });
};

module.exports.getOneUser = (id) => {
  return db.user.findUnique({
    where: { id: parseInt(id, 10) },
  });
};

module.exports.deleteOneUser = (id) => {
  return db.user.delete({
    where: {
      id: parseInt(id, 10),
    },
  });
};

module.exports.patchOneUser = async (id, data) => {
  return await db.user
    .update({
      where: { id: parseInt(id, 10) },
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        address: data.address,
        zip: data.zip,
        city: data.city,
        phone: data.phone,
        email: data.email,
      },
    })
    .catch(() => false);
};
