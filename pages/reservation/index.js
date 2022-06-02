import R_panier from "../../components/R_panier";
import Products from "../../components/Products";
import { useState } from "react";
import data from "../../components/data";
import styles from "../../styles/Reservation.module.css";

function ReservationPage() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  //add products
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (!exist) {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  //remove products
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <>
      <div className={styles.main_title}>
        <h1>De quoi avez-vous besoin ?</h1>
      </div>
      <div className={styles.main_container}>
        <Products products={products} onAdd={onAdd} onRemove={onRemove} />
        <div className={styles.panier_style}>
          <R_panier cartItems={cartItems} />
        </div>
      </div>
    </>
  );
}

export default ReservationPage;
