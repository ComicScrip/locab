import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import styles from "../../styles/Moncompte.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";
import { BsArrowLeft } from "react-icons/bs";

export default function MonCompte() {
  // const { t } = useTranslation("moncompte");

  return (
    <Layout>
      <Banner />
      <div className={styles.mainContainerInformationTitle}>
        <h1>Mes informations personnelles</h1>
      </div>
      <div className={styles.monCptContainerPara}>
        <BsArrowLeft />
        <p>retour au compte</p>
      </div>
      <div className={styles.mainInputContainer}>
        <div className={styles.inputContainer}>
          <label className={styles.labelStyle}>
            Prénom
            <input type="text" className={styles.inputCptStyle} />
          </label>
          <label className={styles.labelStyle}>
            Nom
            <input type="text" className={styles.inputCptStyle} />
          </label>
        </div>
        <div className={styles.testC}>
          <label className={styles.labelStyle}>
            Adresse
            <input className={styles.inputCptThird} type="text" />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.labelStyle}>
            Code postal
            <input type="text" />
          </label>
          <label className={styles.labelStyle}>
            Ville
            <input type="text" />
          </label>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.labelStyle}>
            Numéro de téléphone
            <input type="text" />
          </label>
          <label className={styles.labelStyle}>
            Adresse mail
            <input type="mail" />
          </label>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "banner",
        "cart",
        "header",
        "home",
        "connection",
        "profile",
        "common",
        "signIn",
        "footer",
        "reservation",
      ])),
    },
  };
}
