import SearchPrice from "../../../components/backoffice/SearchPrice";
import styles from "../../../styles/BackProduits.module.css";
import LayoutAdmin from "../../../components/LayoutAdmin";

function Products() {
  return (
    <LayoutAdmin>
      <section className={styles.productsMainContainer}>
        <div className={styles.productsContainer}>
          <div className={styles.searchProductsNav}>Prix</div>
          <SearchPrice />
        </div>
      </section>
    </LayoutAdmin>
  );
}

export default Products;
