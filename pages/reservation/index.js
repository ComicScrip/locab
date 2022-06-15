import Cart from "../../components/Cart/Cart";
import Layout from "../../components/Layout";
import Products from "../../components/Cart/Products";
import styles from "../../styles/Reservation.module.css";
import { AiFillLock } from "react-icons/ai";
import Pack from "../../components/Cart/Pack";

function Panier() {
  return (
    <Layout>
      <div className={styles.main_title}>
        <h1>De quoi avez-vous besoin ?</h1>
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

export default Panier;
