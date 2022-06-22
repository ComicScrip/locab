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
          width="47w"
          height="36"
        />
        <div className={styles.divpara}>
          <p className={styles.paragraphe}>{t("unpaiementsimplesecurise")}</p>
        </div>
      </div>
      <div>
        <img
          src="/icons/washing-hands-1.webp"
          alt="facebook"
          width="42w"
          height="39"
        />
        <div className={styles.divpara}>
          <p className={styles.paragraphe}>{t("protocolenettoyagerenforce")}</p>
        </div>
      </div>
      <div>
        <img
          src="/icons/rating-1.webp"
          alt="facebook"
          width="44w"
          height="45"
        />
        <div className={styles.divpara}>
          <p className={styles.paragraphe}>{t("uneequipesympaetaecoute")}</p>
        </div>
      </div>
      <div>
        <img
          src="/icons/thumb.webp"
          alt="satisfaction"
          width="47w"
          height="44"
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
