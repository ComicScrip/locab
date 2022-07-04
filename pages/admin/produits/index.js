import axios from "axios";
import NavProducts from "../../../components/backoffice/NavProducts";
import SearchProducts from "../../../components/backoffice/SearchProducts";
import styles from "../../../styles/BackProduits.module.css";
import LayoutAdmin from "../../../components/LayoutAdmin";
import { useQuery } from "react-query";

function Products() {
  const { data: productList } = useQuery("products", () => {
    return axios.get(`/api/products`).then((response) => response.data);
  });

  return (
    <LayoutAdmin>
      <section className={styles.productsMainContainer}>
        <div className={styles.productsContainer}>
          <NavProducts />
          <SearchProducts backProducts={productList} />
        </div>
      </section>
    </LayoutAdmin>
  );
}

export default Products;
