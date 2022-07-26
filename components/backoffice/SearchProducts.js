import axios from "axios";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import styles from "../../styles/BackProduits.module.css";
import ProductsRow from "./ProductsRow";
import { useQuery } from "react-query";

import AddProductsPopUp from "../../components/AddProductsPopUp";

export default function SearchProducts() {
  const [searchValue, setSearchValue] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => {
    setShowPopup(true);
  };
  const { data: productList = [] } = useQuery(
    ["products", { search: searchValue }],
    () => {
      return axios
        .get(`/api/products?search=${searchValue}`)
        .then((response) => response.data)
        .catch(console.error);
    }
  );

  return (
    <div className={styles.searchProductsMainContainer}>
      <div className={styles.searchProductsContainer}>
        <section className={styles.searchAddProductsContainer}>
          <input
            className={styles.searchProductsBar}
            type="text"
            placeholder="Poussette, lit à barreaux..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            data-cy="input-search-back-product"
          />
          <BsPlusCircle
            onClick={handleClick}
            data-cy="add_product_button_add"
            className={styles.addProductsButton}
          />
          <AddProductsPopUp show={showPopup} setShow={setShowPopup} />
        </section>
        <section className={styles.tableProductsContainer}>
          <table className={styles.tableProducts}>
            <thead>
              <tr className={styles.line}>
                <th></th>
                <th>Nom</th>
                <th>Catégorie de prix</th>
                <th>Marque</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={styles.tBody}>
              {productList.map((backProduct) => (
                <ProductsRow
                  backProduct={backProduct}
                  key={backProduct.id}
                  id={backProduct.id}
                />
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
