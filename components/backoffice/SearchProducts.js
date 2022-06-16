import { BsPlusCircle } from "react-icons/bs";
import styles from "../../styles/BackProduits.module.css";

export default function SearchProducts() {
  return (
    <div className={styles.searchProductsMainContainer}>
      <div className={styles.searchProductsContainer}>
        <section className={styles.searchAddProductsContainer}>
          <input
            className={styles.searchProductsBar}
            type="text"
            placeholder="Poussette, lit à barreaux..."
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
              <tr className={styles.line}>
                <td></td>
                <td>Chaise haute</td>
                <td>3</td>
                <td>100</td>
                <td>Chicco</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
