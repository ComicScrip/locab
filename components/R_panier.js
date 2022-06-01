import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Panier.module.css";

const R_panier = (products) => {
  const [quantity, setQuantity] = useState();
  console.log(quantity);

  return (
    <>
      <div className={styles.fullContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.strollerStyle}>
            <Image
              src="/image/baby-stroller.png"
              alt="poussette image"
              height={40}
              width={40}
            />
          </div>
          <div className={styles.rentInformations}>
            <h3>{products.name}</h3>
            <p>{products.prix}€/jour</p>
          </div>
        </div>
        <input
          className={styles.inputStyle}
          type="quantity"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />
      </div>
    </>
  );
};

export default R_panier;
