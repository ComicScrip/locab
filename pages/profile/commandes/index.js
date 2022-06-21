import Banner from "../../../components/Banner";
import Layout from "../../../components/Layout";
import styles from "../../../styles/ProfileCommandes.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { signIn } from "next-auth/react";
import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/currentUserContext";

export default function ProfileCommandes() {
  const { t } = useTranslation("profileCommandes");
  const { currentUserProfile } = useContext(CurrentUserContext);

  if (currentUserProfile) {
    return (
      <Layout pageTitle="Mes commandes | Location de matériel de puériculture">
        <Banner />
        <div>Mes commandes</div>
      </Layout>
    );
  }

  return (
    <Layout pageTitle="Mes commandes | Location de matériel de puériculture">
      <Banner />
      <h1 className={styles.titleMainContent}>{t("connectezvous")}</h1>
      <button
        type="button"
        className={styles.connexionBtn}
        onClick={() => signIn()}
      >
        {t("seconnecter")}
      </button>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "banner",
        "header",
        "profile",
        "common",
        "footer",
        "profileCommandes",
      ])),
    },
  };
}
