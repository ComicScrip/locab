import ResProduct from "./ResProduct";
import styles from "../../styles/Reservation.module.css";
import { useState, useContext } from "react";
import { useTranslation } from "next-i18next";
import { SelectCartContext } from "../../contexts/selectCartContext";

export default function Products() {
  const { t } = useTranslation("cart");

  const { productList, showUnavailable, setSearchParams } =
    useContext(SelectCartContext);

  const [searchValue, setSearchValue] = useState("");

  const handleCheckAvailability = () => {
    if (showUnavailable === "true") {
      setSearchParams({ showUnavailable: false });
    } else {
      setSearchParams({ showUnavailable: true });
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <section className={styles.searchContainer}>
        <input
          data-cy="searchBar"
          value={searchValue}
          type="text"
          placeholder={t("inputSeach")}
          onChange={(event) => setSearchValue(event.target.value)}
          className={styles.searchBar}
        />
      </section>
      <section className={styles.productNotAvailable}>
        <label htmlFor="availability" style={{ cursor: "pointer" }}>
          <input
            data-cy="availabilityBtn"
            type="checkbox"
            onClick={() => handleCheckAvailability()}
            id="availability"
            defaultChecked={true}
          />
          {t("afficherlesproduitsindisponibles")}
        </label>
      </section>

      {productList
        .filter((product) =>
          !product.unavailable ? productList : showUnavailable
        )
        .filter((product) =>
          product.name.toUpperCase().includes(searchValue.toUpperCase())
        )
        .map((product) => (
          <ResProduct
            product={product}
            key={product.id}
            id={product.id}
            data-cy="availabilityBtn"
          />
        ))}
    </div>
  );
}
