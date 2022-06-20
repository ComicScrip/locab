import Cart from "../../components/Cart/Cart";
import Layout from "../../components/Layout";
import Products from "../../components/Cart/Products";
import styles from "../../styles/Reservation.module.css";
import { AiFillLock } from "react-icons/ai";
import Pack from "../../components/Cart/Pack";
import Banner from "../../components/Banner";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function SearchPage() {
  const { t } = useTranslation("reservation");

  return (
    <Layout>
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
          Paiement sécurisé
        </p>
        <div className={styles.trait_droit}></div>
      </div>
      <div className={styles.main_container}>
        <Products />
        <div className={styles.panier_style}>
          <Cart />
          <Pack className={styles.packStyle} />
        </div>
      </div>
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
