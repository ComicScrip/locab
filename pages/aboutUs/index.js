import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../styles/Aboutus.module.css";
import Banner from "../../components/Banner";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function AboutUs() {
  const { t } = useTranslation("aboutus");

  return (
    <Layout pageTitle={t("title")}>
      <Banner />
      <div className={styles.mainContainer}>
        <section className={styles.aProposContainer}>
          <h1 className={styles.mainTitle}>{t("quisommesnous")}</h1>
          <p>{t("aPropos1stParagraph")}</p>
        </section>
        <section className={styles.geneseContainer}>
          <article className={styles.polaroidContainer}>
            <img
              alt="Photo de Débora et Antoine"
              src="/image/aboutus/about.webp"
              width="100%"
              height="100%"
            />
            <h2 className={styles.polaroidTitle}>{t("parentsheureux")}</h2>
          </article>
          <article className={styles.geneseDescriptionContainer}>
            <h3 className={styles.titleDesc}>{t("genese")}</h3>
            <p>{t("genese1stParagraph")}</p>

            <p>{t("genese2ndParagraph")}</p>

            <p>{t("genese3rdParagraph")}</p>

            <p>{t("genese4thParagraph")}</p>

            <p>{t("genese5thParagraph")}</p>
          </article>
        </section>
        <section className={styles.teamContainer}>
          <h2 className={styles.titleDesc}>{t("equipeTitre")}</h2>
          <article className={styles.teamPolaroidWrapper}>
            <div className={styles.polaroidContainer}>
              <center>
                <img
                  alt="Photo de Débora"
                  src="/image/aboutus/debora.webp"
                  width="300px"
                  height="400px"
                />
              </center>
              <div className={styles.nameContainer}>
                <h3 className={styles.polaroidTitle}>Débora</h3>
                <img
                  alt="Image du drapeau brésilien"
                  src="/image/aboutus/brazil.webp"
                  width={30}
                  height={20}
                />
              </div>
              <h4 className={styles.poloroidSubTitle}>{t("cofondatrice")}</h4>
              <p>“{t("deboraDesc")}“</p>
            </div>
            <div className={styles.polaroidContainer}>
              <center>
                <img
                  alt="Photo d'Antoine"
                  src="/image/aboutus/antoine.webp"
                  width="300px"
                  height="400px"
                />
              </center>
              <div className={styles.nameContainer}>
                <h3 className={styles.polaroidTitle}>Antoine</h3>
                <img
                  alt="Image du drapeau français"
                  src="/image/aboutus/france.webp"
                  width={30}
                  height={20}
                />
              </div>
              <h4 className={styles.poloroidSubTitle}>{t("cofondateur")}</h4>
              <p>“{t("antoineDesc")}“</p>
            </div>
            <div className={styles.polaroidContainer}>
              <center>
                {" "}
                <img
                  alt="Photo de Mathis"
                  src="/image/aboutus/mathis.webp"
                  width="300px"
                  height="400px"
                />
              </center>
              <div className={styles.nameContainer}>
                <h3 className={styles.polaroidTitle}>Mathis</h3>
                <img
                  alt="Image du drapeau français"
                  src="/image/aboutus/france.webp"
                  width={30}
                  height={20}
                />
              </div>
              <h4 className={styles.poloroidSubTitle}>{t("responsable")}</h4>
              <p>“{t("mathisDesc")}“</p>
            </div>
          </article>
        </section>
        <section className={styles.moreAboutLocaBContainer}>
          <article className={styles.moreAboutDescription}>
            <h2 className={styles.titleDesc}>{t("locabLocation")}</h2>
            <p>{t("locab1stParagraph")}</p>

            <p>{t("locab2ndParagraph")}</p>

            <p>{t("locab3rdParagraph")}</p>
            <button type="button" className={styles.reserveBtn}>
              <Link href="/reservation">
                <a>{t("jereserve")}</a>
              </Link>
            </button>
          </article>
          <div className={styles.polaroidContainer}>
            <img
              alt="Photo d'une maman avec son enfant dans une poussette"
              src="/image/aboutus/voyager.webp"
              width="100%"
              height="100%"
            />
            <h3 className={styles.polaroidTitle}>{t("voyagezLeger")}</h3>
          </div>
        </section>
        <section className={styles.serviceContainer}>
          <h2 className={styles.titleDesc}>{t("serviceLocation")}</h2>
          <p>{t("service1stPararaph")}</p>

          <p>{t("service2ndParagraph")}</p>

          <p>{t("service3rdParagraph")}</p>

          <div className={styles.destinationsContainer}>
            <article className={styles.pictureDestinationLyon}>
              <p className={styles.destinationName}>Lyon</p>
            </article>
            <article className={styles.pictureDestinationNormandie}>
              <p className={styles.destinationName}>Normandie</p>
            </article>
            <article>
              <div className={styles.pictureDestinationVendee}></div>
              <p className={styles.destinationNameVenir}>{t("avenir")}</p>
            </article>
            <article>
              <div className={styles.pictureDestinationAvignon}></div>
              <p className={styles.destinationNameVenir}>{t("avenir")}</p>
            </article>
          </div>
        </section>
      </div>
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
