import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Aboutus.module.css";
import Banner from "../../components/Banner";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function AboutUS() {
  const { t } = useTranslation("aboutus");

  return (
    <Layout pageTitle="Qui sommes-nous ? | Location de matériel de puériculture">
      <Banner />
      <section className={styles.mainContainer}>
        <h1>{t("quisommesnous")}</h1>
        <p>{t("aProposParagrapheUn")}</p>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "banner",
        "footer",
        "header",
        "cart",
        "home",
        "connection",
        "profile",
        "common",
        "reservation",
        "aboutus",
      ])),
    },
  };
}
