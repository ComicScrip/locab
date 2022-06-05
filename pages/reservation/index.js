/* eslint-disable prettier/prettier */
import ResProduct from "../../components/ResProduct";
import styles from "../../styles/Reservation.module.css";
import Layout from "../../components/Layout";
import { useState } from "react";

const productsList = [
  {
    id: 1,
    name: "Poussette",
    category: "poussette",
    price: 20,
    isAvailable: true,
  },
  {
    id: 2,
    name: "Poussette",
    category: "poussette",
    price: 30,
    isAvailable: true,
  },
  {
    id: 3,
    name: "Poussette",
    category: "poussette",
    price: 10,
    isAvailable: true,
  },
  {
    id: 4,
    name: "Poussette",
    category: "poussette",
    price: 25,
    isAvailable: true,
  },
  {
    id: 5,
    name: "Lit à barreaux",
    category: "lit_barreaux",
    price: 12,
    isAvailable: false,
  },
  {
    id: 6,
    name: "Lit à barreaux",
    category: "lit_barreaux",
    price: 12,
    isAvailable: true,
  },
];

export default function ReservationPage() {
  const [searchValue, setSearchValue] = useState("");
  const [showAvailable, setShowAvailable] = useState(true);

  const handleCheckAvailability = () => {
    setShowAvailable(!showAvailable);
  };

  return (
    <Layout>
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

        {productsList
          .filter((product) =>
            product.isAvailable ? productsList : showAvailable
          )
          .filter((product) => product.category.includes(searchValue))
          .map((product) => (
            <ResProduct product={product} key={product.id} id={product.id} />
          ))}
      </div>
    </Layout>
  );
}
