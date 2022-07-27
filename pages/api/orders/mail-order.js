import base from "../../../middlewares/common";
import mailer from "../../../mailer";

async function handlePost(req, res) {
  try {
    const {
      deliveryPhoneNumber,
      deliveryFirstName,
      deliveryLastName,
      deliveryStreet,
      deliveryZip,
      deliveryCity,
      deliveryArrivalTime,
      startDate,
      endDate,
      orderCity,
      billingFirstname,
      billingLastname,
      billingStreet,
      billingZip,
      billingCity,
      billingPhoneNumber,
      billingEmail,
      cartItems,
    } = req.body;

    const mailBody = `Voici un récapitulatif de votre commande : 
    adresse mail, dates, contenu, nom, adresse de livraison etc, montant payé
    
    `;
    await mailer.sendMail({
      deliveryPhoneNumber,
      deliveryFirstName,
      deliveryLastName,
      deliveryStreet,
      deliveryZip,
      deliveryCity,
      deliveryArrivalTime,
      startDate,
      endDate,
      orderCity,
      billingFirstname,
      billingLastname,
      billingStreet,
      billingZip,
      billingCity,
      billingPhoneNumber,
      billingEmail,
      cartItems,

      from: process.env.MAILER_FROM,
      to: billingEmail,
      subject: "Réinitialisez votre mot de passe",
      text: mailBody,
      html: mailBody,
    });
    res.send("Order mail sent");
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
}
export default base().post(handlePost);
