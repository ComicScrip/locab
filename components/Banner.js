import Image from "next/image";
import styles from "../styles/Banner.module.css";
import { useTranslation } from "next-i18next";

export default function Banner() {
  const { t } = useTranslation("banner");

  return (
    <div className={styles.iconshead}>
      <div>
        <Image
          src="/icons/credit-card.png"
          alt="facebook"
          width={34}
          height={34}
        />
        <div className={styles.divpara}>
          <p className={styles.paragraphe}>{t("unpaiementsimplesecurise")}</p>
        </div>
      </div>
      <div>
        <Image
          src="/icons/washing-hands.png"
          alt="facebook"
          width={34}
          height={34}
        />
        <div className={styles.divpara}>
          <p className={styles.paragraphe}>{t("protocolenettoyagerenforce")}</p>
        </div>
      </div>
      <div>
        <Image src="/icons/rating.png" alt="facebook" width={34} height={34} />
        <div className={styles.divpara}>
          <p className={styles.paragraphe}>{t("uneequipesympaetaecoute")}</p>
        </div>
      </div>
      <div>
        <Image
          src="/icons/thumb.png"
          alt="satisfaction"
          width={34}
          height={34}
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
