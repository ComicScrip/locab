import { useContext } from "react";
import styles from "../../styles/Reservation.module.css";
import Image from "next/image";
import { SelectCartContext } from "../../contexts/selectCartContext";

export default function ResProduct({ product }) {
  const { selectProducts, onAdd } = useContext(SelectCartContext);

  const existInCart = selectProducts.find((x) => x.id === product.id);

  const handleClickProduct = () => {
    if (product.isAvailable) {
      onAdd(product);
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
        existInCart && product.isAvailable
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
