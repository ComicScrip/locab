import Link from "next/link";
import Banner from "../../../components/Banner";
import Layout from "../../../components/Layout";
import styles from "../../../styles/ProfileOrders.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { signIn } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../../contexts/currentUserContext";
import OrdersCard from "../../../components/OrdersCard";
import axios from "axios";

export default function ProfileOrders() {
  const { t } = useTranslation("profileOrders");
  const { currentUserProfile } = useContext(CurrentUserContext);

  const [orderDescription, setOrderDescription] = useState([]);

  useEffect(() => {
    axios.get("/api/orders").then((res) => setOrderDescription(res.data));
  }, []);

  if (currentUserProfile) {
    return (
      <Layout pageTitle="Mes commandes | Location de matériel de puériculture">
        <Banner />
        <div className={styles.commandsMainContainer}>
          <section className={styles.titleSectionContainer}>
            <Link href="/profile" style={{ cursor: "pointer" }}>
              <a>← {t("retourcompte")}</a>
            </Link>

            <div className={styles.titleMesCommandesContainer}>
              <h1 className={styles.title}>{t("mescommandes")}</h1>
            </div>
          </section>
          <select
            name="orderDate"
            id="orderDate"
            className={styles.selectDate}
            data-cy="dateSelect"
          >
            <option value="last6months">{t("6mois")}</option>
            <option value="last2months">{t("3mois")}</option>
            <option value="lastmonth">{t("1mois")}</option>
          </select>
          {orderDescription.map((order) => (
            <OrdersCard order={order} key={order.id} />
          ))}
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
