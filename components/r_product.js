import styles from "../styles/Reservation.module.css";
import Image from "next/image";

export default function ResProduct({ product }) {
  return (
    <div className={styles.productWrapper}>
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
