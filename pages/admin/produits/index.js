import { useEffect, useState } from "react";
import axios from "axios";
import NavProducts from "../../../components/backoffice/NavProducts";
import SearchProducts from "../../../components/backoffice/SearchProducts";
import styles from "../../../styles/BackProduits.module.css";
import LayoutAdmin from "../../../components/LayoutAdmin";

function Products() {
  const [productList, setProductList] = useState("");

  useEffect(() => {
    axios
      .get(`/api/products`)
      .then((response) => response.data)
      .then((data) => {
        setProductList(data);
      });
  }, []);

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
