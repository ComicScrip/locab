const db = require("../db");
const Joi = require("joi");
const argon2 = require("argon2");

module.exports.emailAlreadyExists = (email) =>
  db.customer.findFirst({ where: { email } }).then((customer) => !!customer);

module.exports.findByEmail = (email = "") =>
  db.customer.findUnique({ where: { email } });

module.exports.validateCustomer = (data, forUpdate = false) =>
  Joi.object({
    name: Joi.string()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    email: Joi.string()
      .email()
      .max(255)
      .presence(forUpdate ? "optional" : "required"),
    password: Joi.string()
      .min(8)
      .max(100)
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

module.exports.getSafeAttributes = (customer) => ({
  ...customer,
  hashedPassword: undefined,
});

module.exports.createCustomer = async ({ name, email, password }) => {
  const hashedPassword = await hashPassword(password);
  return db.customer.create({
    data: { name, email, hashedPassword },
  });
};

module.exports.deleteCustomerByEmail = async (email) => {
  return await db.customer.delete({ where: { email } });
};

module.exports.deleteDB = async () => {
  return await db.customer.deleteMany();
};

module.exports.findAllCustomers = () => db.customer.findMany();
