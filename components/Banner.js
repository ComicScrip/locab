import styles from "../styles/Banner.module.css";
import { useTranslation } from "next-i18next";

export default function Banner() {
  const { t } = useTranslation("banner");

  return (
    <div className={styles.iconshead}>
      <div>
        <img
          src="/icons/credit-card-1.webp"
          alt="facebook"
          width="25%"
          height="25%"
        />
        <div className={styles.divpara}>
          <p className={styles.paragraphe}>{t("unpaiementsimplesecurise")}</p>
        </div>
      </div>
      <div>
        <img
          src="/icons/washing-hands-1.webp"
          alt="facebook"
          width="25%"
          height="25%"
        />
        <div className={styles.divpara}>
          <p className={styles.paragraphe}>{t("protocolenettoyagerenforce")}</p>
        </div>
      </div>
      <div>
        <img
          src="/icons/rating-1.webp"
          alt="facebook"
          width="25%"
          height="25%"
        />
        <div className={styles.divpara}>
          <p className={styles.paragraphe}>{t("uneequipesympaetaecoute")}</p>
        </div>
      </div>
      <div>
        <img
          src="/icons/thumb.webp"
          alt="satisfaction"
          width="25%"
          height="25%"
        />
        <div className={styles.divpara}>
          <p className={styles.paragraphe}>
            {t("votresatisfactionestnotrepriorité")}
          </p>
        </div>
      </div>
    </div>
  );
}
