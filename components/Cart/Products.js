import ResProduct from "./ResProduct";
import styles from "../../styles/Reservation.module.css";
import { useState, useContext } from "react";
import { SelectCartContext } from "../../contexts/selectCartContext";

export default function Products() {
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
          placeholder="Poussette, lit à barreaux, chaise haute..."
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
          Afficher les produits indisponibles
        </label>
      </section>

      {products
        .filter((product) => (product.isAvailable ? products : showAvailable))
        .filter((product) => product.category.includes(searchValue))
        .filter((product) =>
          product.category.includes(searchValue.toLowerCase())
        )
        .map((product) => (
          <ResProduct product={product} key={product.id} id={product.id} />
        ))}
    </div>
  );
}
