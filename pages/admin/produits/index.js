import NavProducts from "../../../components/backoffice/NavProducts";
import SearchProducts from "../../../components/backoffice/SearchProducts";
import styles from "../../../styles/BackProduits.module.css";
import LayoutAdmin from "../../../components/LayoutAdmin";

function Products() {
  return (
    <div className={styles.positionLayoutAdmin}>
      <LayoutAdmin>
        <section className={styles.productsMainContainer}>
          <div className={styles.productsContainer}>
            <NavProducts />
            <SearchProducts />
          </div>
        </section>
      </LayoutAdmin>
    </div>
  );
}

export default Products;
