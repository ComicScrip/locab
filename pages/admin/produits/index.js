import NavProducts from "../../../components/backoffice/NavProducts";
import SearchProducts from "../../../components/backoffice/SearchProducts";
import styles from "../../../styles/BackProduits.module.css";
import LayoutAdmin from "../../../components/LayoutAdmin";

function Products() {
  return (
    <LayoutAdmin pageTitle="Back-office | Produits">
      <section className={styles.productsMainContainer}>
        <div className={styles.productsContainer}>
          <NavProducts />
          <SearchProducts />
        </div>
      </section>
    </LayoutAdmin>
  );
}

export default Products;
