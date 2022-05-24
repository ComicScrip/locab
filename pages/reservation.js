import ResProduct from "../components/r_product";
import styles from "../styles/Reservation.module.css";
import { useState } from "react";

const productsList = [
  {
    id: 1,
    name: "Poussette",
    category: "poussette",
    price: 20,
  },
  {
    id: 2,
    name: "Poussette",
    category: "poussette",
    price: 30,
  },
  {
    id: 3,
    name: "Poussette",
    category: "poussette",
    price: 10,
  },
  {
    id: 4,
    name: "Poussette",
    category: "poussette",
    price: 25,
  },
  {
    id: 5,
    name: "Lit à barreaux",
    category: "lit_barreaux",
    price: 12,
  },
];

export default function ReservationPage() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.mainWrapper}>
      <section className={styles.searchContainer}>
        <input
          value={searchValue}
          type="text"
          placeholder="Poussette, lit à barreaux, chaise haute..."
          onChange={(event) => setSearchValue(event.target.value)}
          className={styles.searchBar}
        />
      </section>
      <section className={styles.productNotAvailable}>
        <input type="checkbox" />
        Afficher les produits indisponibles
      </section>

      {productsList
        .filter((product) => product.category.includes(searchValue))
        .map((product) => (
          <ResProduct product={product} key={product.id} id={product.id} />
        ))}
    </div>
  );
}
