import styles from "../../styles/BackReservations.module.css";

export default function OrderDetails({ orderDetails }) {
  const imagesProducts = orderDetails.items.map(
    (item) => item.productSamples[0]?.product?.pictures
  );

  return (
    <>
      <section className={styles.productsContainer}>
        {imagesProducts.map((image) => (
          <img
            src={image[0].url}
            width="200"
            height="150"
            alt="poussette"
            key={image[0].url}
          />
        ))}
      </section>
      <section className={styles.infoContainer}>
        <article className={styles.infoDetail}>
          <h3 className={styles.infoTitle}>Information de facturation</h3>
          <div>
            <b>Prénom</b>
            <br />
            {orderDetails.billingFirstname}
          </div>
          <div>
            <b>Nom</b>
            <br />
            {orderDetails.billingLastname}
          </div>
          <div className={styles.infoFullWidth}>
            <b>Adresse</b>
            <br />
            {orderDetails.billingStreet}
          </div>
          <div>
            <b>Ville</b>
            <br />
            {orderDetails.billingCity}
          </div>
          <div>
            <b>Code postal</b>
            <br />
            {orderDetails.billingZip}
          </div>
          <div>
            <b>Adresse mail</b>
            <br />
            {orderDetails.billingEmail}
          </div>
          <div>
            <b>N° de téléphone</b>
            <br />
            {orderDetails.billingPhoneNumber}
          </div>
          <div>
            <b>Mode de paiement</b>
            <br />
            {orderDetails.paymentType}
          </div>
          <div>
            <b>Statut</b>
            <br />
            {orderDetails.status === "pending"
              ? "En cours"
              : orderDetails.status}
          </div>
        </article>
        <div className={styles.infoDetail}>
          <h3 className={styles.infoTitle}>Information de livraison</h3>
          <div>
            <b>Prénom</b>
            <br />
            {orderDetails.deliveryFirstName || "---"}
          </div>
          <div>
            <b>Nom</b>
            <br />
            {orderDetails.deliveryLastName || "---"}
          </div>
          <div className={styles.infoFullWidth}>
            <b>Adresse</b>
            <br />
            {orderDetails.deliveryStreet || "---"}
          </div>
          <div>
            <b>Ville</b>
            <br />
            {orderDetails.deliveryCity || "---"}
          </div>
          <div>
            <b>Code postal</b>
            <br />
            {orderDetails.deliveryZip || "---"}
          </div>
          <div>
            <b>N° de téléphone</b>
            <br />
            {orderDetails.deliveryPhoneNumber || "---"}
          </div>
          <div>
            <b>Partenaire</b>
            <br />
            {orderDetails.partner || "---"}
          </div>
          <div>
            <b>Heure d'arrivée</b>
            <br />
            {orderDetails.deliveryArrivalTime || "---"}
          </div>
        </div>
      </section>
    </>
  );
}
