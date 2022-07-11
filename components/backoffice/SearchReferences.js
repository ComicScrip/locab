import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { BsPlusCircle } from "react-icons/bs";
import styles from "../../styles/BackProduits.module.css";
import ReferencesRow from "./ReferencesRow";

import AddReferencePopUp from "../../components/AddReferencePopUp";

export default function SearchReferences() {
  const [searchValue, setSearchValue] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => {
    setShowPopup(true);
  };

  const { data: referencesList = [] } = useQuery(
    ["references", { search: searchValue }],
    () => {
      return axios
        .get(`/api/references?search=${searchValue}`)
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
            placeholder="Référence..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            data-cy="searchBar"
          />
          <BsPlusCircle
            className={styles.addProductsButton}
            onClick={handleClick}
            data-cy="add_product_button_add"
          />

          <AddReferencePopUp show={showPopup} setShow={setShowPopup} />
        </section>
        <section className={styles.tableProductsContainer}>
          <table className={styles.tableProducts}>
            <thead>
              <tr>
                <th>Référence</th>
                <th>Nom du lieu</th>
                <th>Ville</th>
                <th>Etat</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {referencesList.map((backReference) => (
                <ReferencesRow
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
