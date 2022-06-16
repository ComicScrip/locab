import NavProducts from "../../../components/backoffice/NavProducts";
import SearchProducts from "../../../components/backoffice/SearchProducts";
import styles from "../../../styles/BackProduits.module.css";

function Products() {
  return (
    <section className={styles.productsMainContainer}>
      <div className={styles.productsContainer}>
        <NavProducts />
        <SearchProducts />
      </div>
    </section>
  );
}

export default Products;
