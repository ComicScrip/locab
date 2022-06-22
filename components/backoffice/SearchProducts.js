import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import styles from "../../styles/BackProduits.module.css";
import ProductsRow from "./ProductsRow";
import dataBackProducts from "./dataBackProducts";

export default function SearchProducts() {
  const { backProducts } = dataBackProducts;
  const [searchValue, setSearchValue] = useState("");

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
          />
          <BsPlusCircle className={styles.addProductsButton} />
        </section>
        <section className={styles.tableProductsContainer}>
          <table className={styles.tableProducts}>
            <thead>
              <tr>
                <th></th>
                <th>Nom</th>
                <th>Catégorie de prix</th>
                <th>Stock total</th>
                <th>Marque</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {backProducts
                .filter((backProduct) =>
                  backProduct.name
                    .toUpperCase()
                    .includes(searchValue.toUpperCase())
                )
                .map((backProduct) => (
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
