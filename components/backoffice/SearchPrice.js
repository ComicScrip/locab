import axios from "axios";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import styles from "../../styles/BackProduits.module.css";
import PriceRow from "./PriceRow";
import { useQuery } from "react-query";
import AddPricePopUp from "./AddPricePopUp";

export default function SearchPrice() {
  const [searchValue, setSearchValue] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => {
    setShowPopup(true);
  };

  const { data: priceList = [] } = useQuery(
    ["price", { search: searchValue }],
    () => {
      return axios
        .get(`/api/priceCategory?search=${searchValue}`)
        .then((response) => response.data);
    }
  );

  return (
    <div className={styles.searchProductsMainContainer}>
      <div className={styles.searchProductsContainer}>
        <section className={styles.searchAddProductsContainer}>
          <input
            className={styles.searchProductsBar}
            type="text"
            placeholder="Recherche"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            data-cy="input-search-back-price"
          />
          <BsPlusCircle
            onClick={handleClick}
            data-cy="add_price_button_add"
            className={styles.addProductsButton}
          />
          <AddPricePopUp show={showPopup} setShow={setShowPopup} />
        </section>
        <section className={styles.tableProductsContainer}>
          <table className={styles.tableProducts}>
            <thead>
              <tr className={styles.line}>
                <th>Prix</th>
                <th>Prix pour 1 jour</th>
                <th>Prix pour 16 jours</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={styles.tBody}>
              {priceList.map((backProduct) => (
                <PriceRow
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
