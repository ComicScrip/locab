import Link from "next/link";
import Banner from "../../../components/Banner";
import Layout from "../../../components/Layout";
import styles from "../../../styles/ProfileOrders.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { signIn } from "next-auth/react";
import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/currentUserContext";
import OrdersCard from "../../../components/OrdersCard";

export default function ProfileOrders() {
  const { t } = useTranslation("profileOrders");
  const { currentUserProfile } = useContext(CurrentUserContext);

  if (currentUserProfile) {
    return (
      <Layout pageTitle="Mes commandes | Location de matériel de puériculture">
        <Banner />
        <div className={styles.commandsMainContainer}>
          <section className={styles.titleSectionContainer}>
            <Link href="/profile" style={{ cursor: "pointer" }}>
              <a>← Retour au compte</a>
            </Link>

            <div className={styles.titleMesCommandesContainer}>
              <h1 className={styles.title}>Mes commandes</h1>
            </div>
          </section>
          <select name="orderDate" id="orderDate" className={styles.selectDate}>
            <option value="last6months">6 derniers mois</option>
            <option value="last2months">3 derniers mois</option>
            <option value="lastmonth">Dernier mois</option>
          </select>
          <OrdersCard />
          <OrdersCard />
        </div>
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
        "profileOrders",
      ])),
    },
  };
}
