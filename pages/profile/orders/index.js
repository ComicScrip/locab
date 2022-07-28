import Link from "next/link";
import Banner from "../../../components/Banner";
import Layout from "../../../components/Layout";
import styles from "../../../styles/ProfileOrders.module.css";

import axios from "axios";
import { useRouter } from "next/router";
import qs from "query-string";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { signIn } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../../contexts/currentUserContext";

import OrdersCard from "../../../components/OrdersCard";

export default function ProfileOrders() {
  const { t } = useTranslation("profileOrders");
  const { currentUserProfile } = useContext(CurrentUserContext);

  const [orderDescription, setOrderDescription] = useState([]);

  const router = useRouter();
  const { date = "" } = router.query;

  const setSearchParams = (newSearch) => {
    const queryString = qs.stringify(newSearch);
    router.push(`/profile/orders${queryString ? "?" : ""}${queryString}`);
  };

  useEffect(() => {
    const queryString = qs.stringify(router.query);

    axios
      .get(`/api/orders${queryString ? "?" : ""}${queryString}`)
      .then((res) => setOrderDescription(res.data))
      .catch(console.error);
  }, [router.query]);

  if (currentUserProfile) {
    return (
      <Layout pageTitle={t("title")}>
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
            value={date}
            onChange={(e) => setSearchParams({ date: e.target.value })}
          >
            <option value="last6months">{t("6mois")}</option>
            <option value="last3months">{t("3mois")}</option>
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
    <Layout pageTitle={t("title")}>
      <Banner />
      <h1 className={styles.titleMainContent}>{t("connectezvous")}</h1>
      <button
        type="button"
        className={styles.connexionBtn}
        onClick={() => signIn()}
        data-cy="connexionBtn"
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
