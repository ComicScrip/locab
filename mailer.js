const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport(
  process.env.CI === "true"
    ? {
        host: "localhost",
        port: 45,
        secure: false,
        ignoreTLS: true,
      }
    : {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      }
);
module.exports = transporter;
// CONTACT_FORM_RECIPIENT=admin@website.com