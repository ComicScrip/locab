import styles from "../styles/Reservation.module.css";
import Image from "next/image";
import { useState } from "react";

export default function ResProduct({ product, onAdd, onRemove }) {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleClickProduct = () => {
    setAddedToCart(!addedToCart);
    if (product.isAvailable) {
      if (addedToCart === false) {
        onAdd(product);
      } else {
        onRemove(product);
      }
    }
  };

  return (
    <div
      className={
        product.isAvailable
          ? styles.productWrapper
          : styles.productWrapperNotAvailable
      }
      onClick={handleClickProduct}
      style={
        addedToCart && product.isAvailable
          ? { borderColor: "#96C0C0" }
          : { borderColor: "#ededed" }
      }
    >
      <Image
        src={product.picture}
        height={"70px"}
        width={"70px"}
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
