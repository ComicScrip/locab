import styles from "../styles/ProfileOrders.module.css";
import { useTranslation } from "next-i18next";

export default function OrdersCard({ order }) {
  const { t } = useTranslation("profileOrders");

  return (
    <div className={styles.cardContainer}>
      <p className={styles.orderTitleCard}>
        {t("commande")} n°<b>{order.orderNumber}</b>{" "}
        <span className={styles.orderDurationCard}>
          {t("du")} {order.startDate} {t("au")} {order.endDate}
        </span>
      </p>
      <section className={styles.infoContainer}>
        <div>
          <p>
            <b>{t("datecommande")}</b> : {order.orderDate}
          </p>
          <p>
            <b>{t("modepaiement")}</b> : {order.paymentType}
          </p>
        </div>
        <div>
          <p>
            <b>{t("total")}</b> : {order.paidPrice}€
          </p>
          <p>
            <b>{t("statut")}</b> : {order.status}
          </p>
        </div>
        <div>
          <p>
            <b>{t("adresse")}</b> :{" "}
            {order.deliveryStreet
              ? `${order.deliveryStreet}, ${order.deliveryZip} ${order.deliveryCity}`
              : `${order.customer.address}, ${order.customer.zip} ${order.customer.city}`}
          </p>
        </div>
      </section>
      <section className={styles.productsImages}>
        <img
          src={order.products.productSample.product.pictures.url}
          width="200"
          height="150"
          alt="poussette"
        />
        <img
          src="/image/products/Poussette-YOYO-Nacelle.jpg"
          width="200"
          height="150"
          alt="poussette"
        />
      </section>
      <p className={styles.facture}>Télécharger la facture</p>
    </div>
  );
}
