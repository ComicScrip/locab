import styles from "../../styles/BackReservations.module.css";

export default function OrderDetails({ orderDetails }) {
  const imagesProducts = orderDetails.products.map(
    (product) => product.productSample.product.pictures
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
            {orderDetails.deliveryFirstName || orderDetails.customer.firstname}
          </div>
          <div>
            <b>Nom</b>
            <br />
            {orderDetails.deliveryLastName || orderDetails.customer.lastname}
          </div>
          <div className={styles.infoFullWidth}>
            <b>Adresse</b>
            <br />
            {orderDetails.deliveryStreet || orderDetails.customer.address}
          </div>
          <div>
            <b>Ville</b>
            <br />
            {orderDetails.deliveryCity || orderDetails.customer.city}
          </div>
          <div>
            <b>Code postal</b>
            <br />
            {orderDetails.deliveryZip || orderDetails.customer.zip}
          </div>
          <div>
            <b>Adresse mail</b>
            <br />
            {orderDetails.customer.email}
          </div>
          <div>
            <b>N° de téléphone</b>
            <br />
            {orderDetails.customer.phone}
          </div>
          <div>
            <b>Mode de paiement</b>
            <br />
            {orderDetails.paymentType}
          </div>
          <div>
            <b>Statut</b>
            <br />
            {orderDetails.status}
          </div>
        </article>
        <div className={styles.infoDetail}>
          <h3 className={styles.infoTitle}>Information de livraison</h3>
          <div>
            <b>Prénom</b>
            <br />
            {orderDetails.customer.firstname}
          </div>
          <div>
            <b>Nom</b>
            <br />
            {orderDetails.customer.lastname}
          </div>
          <div className={styles.infoFullWidth}>
            <b>Adresse</b>
            <br />
            {orderDetails.customer.address}
          </div>
          <div>
            <b>Ville</b>
            <br />
            {orderDetails.customer.city}
          </div>
          <div>
            <b>Code postal</b>
            <br />
            {orderDetails.customer.zip}
          </div>
          <div>
            <b>Adresse mail</b>
            <br />
            {orderDetails.customer.email}
          </div>
          <div>
            <b>N° de téléphone</b>
            <br />
            {orderDetails.customer.phone}
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
