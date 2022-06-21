import styles from "../styles/ProfileOrders.module.css";
import { useTranslation } from "next-i18next";

export default function OrdersCard() {
  const { t } = useTranslation("profileOrders");
  return (
    <div className={styles.cardContainer}>
      <p className={styles.orderTitleCard}>
        {t("commande")} <b>n°ZRT123</b>{" "}
        <span className={styles.orderDurationCard}>
          {t("du")} 12/02/21 {t("au")} 20/02/21
        </span>
      </p>
      <section className={styles.infoContainer}>
        <div>
          <p>
            <b>{t("datecommande")}</b> : 20/01/21
          </p>
          <p>
            <b>{t("modepaiement")}</b> : Carte bancaire
          </p>
        </div>
        <div>
          <p>
            <b>{t("total")}</b> : 50€
          </p>
          <p>
            <b>{t("statut")}</b> : Terminé
          </p>
        </div>
        <div>
          <p>
            <b>{t("adresse")}</b> : 10 avenue du général de Gaulle, 69002 Lyon
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
