import ResProduct from "../components/r_product";
import styles from "../styles/Reservation.module.css";

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
    name: "Poussette",
    category: "poussette",
    price: 12,
  },
];

export default function ReservationPage() {
  return (
    <div className={styles.mainWrapper}>
      {productsList.map((product) => (
        <ResProduct key={product.id} product={product} />
      ))}
    </div>
  );
}
