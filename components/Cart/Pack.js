import styles from "../../styles/Pack.module.css";
import { useTranslation } from "next-i18next";

function Pack() {
  const { t } = useTranslation("cart");

  return (
    <div className={styles.fullContainerPack}>
      <div className={styles.firstContainerPack}>
        <div className={styles.firstComponentPack}>
          <h4 className={styles.setupMargin}>{t("packlegerete")}</h4>
        </div>
        <div className={styles.secondComponentPack}>
          <h4 className={styles.setupMargin}>X€/jour</h4>
          <p className={styles.setupPara}>A partir de 3 objets</p>
        </div>
      </div>
      <div className={styles.secondContainerPack}>
        <div className={styles.firstComponentPack}>
          <h4 className={styles.setupMargin}>{t("packconfort")}</h4>
        </div>
        <div className={styles.secondComponentPack}>
          <h4 className={styles.setupMargin}>X€/jour</h4>
          <p className={styles.setupPara}>A partir de 5 objets</p>
        </div>
      </div>
      <div className={styles.thirdContainerPack}>
        <div className={styles.firstComponentPack}>
          <h4 className={styles.setupMargin}>{t("packillimite")}</h4>
        </div>
        <div className={styles.secondComponentPack}>
          <h4 className={styles.setupMargin}>X€/jour</h4>
          <p className={styles.setupPara}>A partir de 10 objets</p>
        </div>
      </div>
    </div>
  );
}

export default Pack;
