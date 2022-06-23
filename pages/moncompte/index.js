import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import styles from "../../styles/Moncompte.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

export default function MonCompte() {
  const { t } = useTranslation("signIn");

  return (
    <Layout>
      <Banner />
      <div className={styles.titleParaContainerUpdPers}>
        {" "}
        <Link href="/admin" title="admin">
          <a className={styles.linkParaStyle}>
            <BsArrowLeft
              style={{
                verticalAlign: "middle",
              }}
            />{" "}
            {t("retourcompte")}
          </a>
        </Link>
        <h1 className={styles.titleUpd}>{t("mesinfoperso")}</h1>
      </div>

      <div className={styles.updRegisterForm}>
        <form>
          <div className={styles.inpNameLastName}>
            <label className={styles.labelStyle}>
              {t("prenom")}
              <input
                className={styles.inputUpdatePersInfo}
                type="text"
                id="firstName"
              />
            </label>
            <label className={styles.labelStyle}>
              {t("nom")}
              <input
                className={styles.inputUpdatePersInfo}
                type="text"
                id="name"
              />
            </label>
          </div>
          <label className={styles.labelStyle}>
            {t("adresse")}
            <input
              className={styles.bigInputUpdPersInfo}
              type="text"
              id="adresse"
            />
          </label>
          <div className={styles.codeVille}>
            <label className={styles.labelStyle}>
              {t("cp")}
              <input
                className={styles.inputUpdatePersInfo}
                type="text"
                id="codePostal"
              />
            </label>
            <label className={styles.labelStyle}>
              {t("ville")}
              <input
                className={styles.inputUpdatePersInfo}
                type="text"
                id="ville"
              />
            </label>
          </div>
          <div className={styles.codeVille}>
            <label className={styles.labelStyle}>
              {t("Numérodetelephone")}
              <input
                className={styles.bigInputUpdPersInfo}
                type="text"
                id="telephone"
              />
            </label>
            <label className={styles.labelStyle}>
              {t("adressemail")}
              <input
                className={styles.bigInputUpdPersInfo}
                type="email"
                id="email"
              />
            </label>
          </div>
          <button
            className={styles.btnValidateUpd}
            type="submit"
            id="validate-btn"
          >
            Valider
          </button>
        </form>
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
