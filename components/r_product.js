import styles from "../styles/Reservation.module.css";
import Image from "next/image";
import { useState } from "react";

export default function ResProduct({ product }) {
  const [addedCart, setAddedCart] = useState(false);

  const handleClickProduct = () => {
    setAddedCart(!addedCart);
  };

  return (
    <div
      className={styles.productWrapper}
      onClick={handleClickProduct}
      style={
        addedCart ? { borderColor: "#96C0C0" } : { borderColor: "#ededed" }
      }
    >
      <Image
        src="/image/r_baby-stroller.png"
        height={70}
        width={70}
        alt="poussette logo"
      />
      <p style={{ textAlign: "center", margin: "20px 0px 0px 0px" }}>
        <span style={{ fontWeight: "bold" }}>{product.name}</span>
        <br />
        {product.price}€/jour
      </p>
    </div>
  );
}
