import ResProduct from "./ResProduct";
import styles from "../../styles/Reservation.module.css";
import { useState, useContext } from "react";
import { SelectCartContext } from "../../contexts/selectCartContext";
import { useTranslation } from "next-i18next";

export default function Products() {
  const { t } = useTranslation("cart");

  const { products } = useContext(SelectCartContext);
  const [searchValue, setSearchValue] = useState("");
  const [showAvailable, setShowAvailable] = useState(true);

  const handleCheckAvailability = () => {
    setShowAvailable(!showAvailable);
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

      {products
        .filter((product) => (product.isAvailable ? products : showAvailable))
        .filter((product) =>
          product.name.toUpperCase().includes(searchValue.toUpperCase())
        )
        .filter((product) =>
          product.category.includes(searchValue.toLowerCase())
        )
        .map((product) => (
          <ResProduct product={product} key={product.id} id={product.id} />
        ))}
    </div>
  );
}
