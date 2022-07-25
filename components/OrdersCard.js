import styles from "../styles/ProfileOrders.module.css";
import { useTranslation } from "next-i18next";
import dayjs from "dayjs";

export default function OrdersCard({ order }) {
  const { t } = useTranslation("profileOrders");
  const orderStartDateOld = order.startDate;
  const orderStartDateNewFormat = dayjs(orderStartDateOld).format("DD/MM/YY");
  const orderEndDateOld = order.endDate;
  const orderEndDateNewFormat = dayjs(orderEndDateOld).format("DD/MM/YY");
  const orderDateOld = order.orderDate;
  const orderDateNewFormat = dayjs(orderDateOld).format("DD/MM/YY");

  const imagesProducts = order.items.map(
    (item) => item.productSamples[0].product.pictures
  );

  return (
    <div className={styles.cardContainer}>
      <p className={styles.orderTitleCard}>
        {t("commande")} n°<b>{order.orderNumber}</b>{" "}
        <span className={styles.orderDurationCard}>
          {t("du")} {orderStartDateNewFormat} {t("au")} {orderEndDateNewFormat}
        </span>
      </p>
      <section className={styles.infoContainer}>
        <div>
          <p>
            <b>{t("datecommande")}</b> : {orderDateNewFormat}
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
      <p className={styles.facture}>{t("dlfacture")}</p>
    </div>
  );
}
