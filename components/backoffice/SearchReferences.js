import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import styles from "../../styles/BackProduits.module.css";
import ResBackReferences from "./ResBackReferences";
import dataBackReferences from "./dataBackReferences";

export default function SearchReferences() {
  const { backReferences } = dataBackReferences;
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
                <th>Nom</th>
                <th>Parent relais</th>
                <th>Ville</th>
                <th>Etat</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {backReferences
                .filter((backReference) =>
                  backReference.references
                    .toUpperCase()
                    .includes(searchValue.toUpperCase())
                )
                .map((backReference) => (
                  <ResBackReferences
                    backReference={backReference}
                    key={backReference.id}
                    id={backReference.id}
                  />
                ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
