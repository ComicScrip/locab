import styles from "../styles/ProfileOrders.module.css";

export default function OrdersCard() {
  return (
    <div className={styles.cardContainer}>
      <p className={styles.orderTitleCard}>
        Commande <b>n°ZRT123</b>{" "}
        <span className={styles.orderDurationCard}>
          du 12/02/21 au 20/02/21
        </span>
      </p>
      <section className={styles.infoContainer}>
        <div>
          <p>
            <b>Date de commande</b> : 20/01/21
          </p>
          <p>
            <b>Mode de paiement</b> : Carte bancaire
          </p>
        </div>
        <div>
          <p>
            <b>Total</b> : 50€
          </p>
          <p>
            <b>Statut</b> : Terminé
          </p>
        </div>
        <div>
          <p>
            <b>Adresse de livraison</b> : 10 avenue du général de Gaulle, 69002
            Lyon
          </p>
        </div>
      </section>
      <section className={styles.productsImages}>
        <img src="/image/products/Chancelière.jpg" width="200" height="150" />
        <img
          src="/image/products/Poussette-YOYO-Nacelle.jpg"
          width="200"
          height="150"
        />
      </section>
      <p className={styles.facture}>Télécharger la facture</p>
    </div>
  );
}
