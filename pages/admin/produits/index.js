import { useEffect, useState } from "react";
import axios from "axios";
import NavProducts from "../../../components/backoffice/NavProducts";
import SearchProducts from "../../../components/backoffice/SearchProducts";
import styles from "../../../styles/BackProduits.module.css";
import LayoutAdmin from "../../../components/LayoutAdmin";

function Products() {
  const [product, setProduct] = useState("");

  useEffect(() => {
    axios
      .get(`/api/products`)
      .then((response) => response.data)
      .then((data) => {
        setProduct(data);
      });
  }, []);
  console.log(product);

  return (
    <LayoutAdmin>
      <section className={styles.productsMainContainer}>
        <div className={styles.productsContainer}>
          <NavProducts />
          <SearchProducts backProducts={product} />
        </div>
      </section>
    </LayoutAdmin>
  );
}

export default Products;
