import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import styles from "../../styles/ContactUs.module.css";
import Banner from "../../components/Banner";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

export default function Contact() {
  const { t } = useTranslation("contact");

  return (
    <Layout pageTitle={t("title")}>
      <Banner />
      <section className={styles.mainContainer}>
        <h1>{t("nouscontacter")}</h1>
        <article className={styles.contactInfo}>
          <BsTelephoneFill style={{ marginRight: "10px" }} size={30} />
          +33 6 26 85 90 46
        </article>
        <article className={styles.contactInfo}>
          <IoMail style={{ marginRight: "10px" }} size={30} />
          contact@loca-b.fr
        </article>
        <div className={styles.icons}>
          <Link href="https://www.instagram.com/loca_b_officiel/">
            <a>
              <Image
                src="/icons/instagram.webp"
                alt="instagram"
                width={40}
                height={40}
              />
            </a>
          </Link>
          <Link href="https://www.facebook.com/locabofficiel">
            <a>
              <Image
                src="/icons/facebook.webp"
                alt="facebook"
                width={40}
                height={40}
              />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/company/locabofficiel/">
            <a>
              <Image
                src="/icons/linkedin.webp"
                alt="linkedin"
                width={40}
                height={40}
              />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Image
                src="/icons/whatsapp.webp"
                alt="Whatsapp"
                width={40}
                height={40}
              />
            </a>
          </Link>
        </div>
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
        "contact",
      ])),
    },
  };
}
