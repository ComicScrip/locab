import NavProducts from "../../../components/backoffice/NavProducts";
import SearchReferences from "../../../components/backoffice/SearchReferences";
import styles from "../../../styles/BackProduits.module.css";
import LayoutAdmin from "../../../components/LayoutAdmin";

function References() {
  return (
    <LayoutAdmin pageTitle="Back-office | Références">
      <section className={styles.productsMainContainer}>
        <div className={styles.productsContainer}>
          <NavProducts />
          <SearchReferences />
        </div>
      </section>
    </LayoutAdmin>
  );
}

export default References;
