import Cart from "../../components/Cart/Cart";
import Layout from "../../components/Layout";
import Products from "../../components/Cart/Products";
import styles from "../../styles/Reservation.module.css";
import { AiFillLock } from "react-icons/ai";
import Pack from "../../components/Cart/Pack";
import Banner from "../../components/Banner";
import SearchForm from "../../components/SearchForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import useSearch from "../../hooks/useSearch";

function SearchPage() {
  const { t } = useTranslation("reservation");
  const { params } = useSearch();

  return (
    <Layout pageTitle={t("title")}>
      <SearchForm />
      {params.city ? (
        <>
          <Banner />
          <div className={styles.main_title}>
            <h1>{t("dequoiavezvousbesoin")}</h1>
          </div>
          <div className={styles.paiement_container}>
            <div className={styles.trait_gauche}></div>
            <p className={styles.paiementSecurColor}>
              <AiFillLock
                style={{
                  color: "#66c65e",
                  verticalAlign: "middle",
                  marginTop: "-4px",
                }}
              />{" "}
              {t("paiementsecurise")}
            </p>
            <div className={styles.trait_droit}></div>
          </div>
          <div className={styles.main_container}>
            <Products />
            <div className={styles.panier_style}>
              <Cart />
              <div style={{ opacity: 0.6 }}>
                <Pack className={styles.packStyle} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.AlertLocationContainer}>
          <div className={styles.AlertLocation}>{t("selectALocation")}</div>
        </div>
      )}
    </Layout>
  );
}

export default SearchPage;

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
