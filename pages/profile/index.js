import Link from "next/link";
import styles from "../../styles/Moncompte.module.css";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import { useContext } from "react";
import { signIn } from "next-auth/react";

export default function MonCompte() {
  const { t } = useTranslation("profile");

  const { currentUserProfile } = useContext(CurrentUserContext);

  return (
    <Layout>
      <Banner />
      {currentUserProfile ? (
        <>
          <div className={styles.title}>
            <h2>{t("moncompte")}</h2>
          </div>
          <div className={styles.compte}>
            <div className={styles.partie1}>
              <div className={styles.icon1}>
                <Link href="/profile/orders" rel="preload">
                  <img
                    style={{ cursor: "pointer" }}
                    src="/image/clipboard.png"
                    alt="design"
                    height="129vh"
                    width="129vh"
                    className={styles.clipboard}
                  />
                </Link>
              </div>
              <p className={styles.text1}>{t("mescommandes")}</p>
            </div>
            <div className={styles.partie2}>
              <div className={styles.icon2}>
                <Link href="/profile/infoperso" rel="preload">
                  <img
                    style={{ cursor: "pointer" }}
                    src="/image/user.png"
                    alt="design"
                    height="129vh"
                    width="129vh"
                    className={styles.user}
                  />
                </Link>
              </div>
              <p className={styles.text2}>{t("infosperso")}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.container}>
            <h1 className={styles.titleMainContent}>{t("connexion")}</h1>
            <button
              type="button"
              className={styles.connexionBtn}
              onClick={() => signIn()}
              data-cy="connexionBtn"
            >
              {t("connexion")}
            </button>
          </div>
        </>
      )}
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
