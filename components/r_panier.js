import Image from "next/image";
import styles from "../styles/Panier.module.css";

const r_panier = (products) => {
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
        <input className={styles.inputStyle} type="quantity" />
      </div>
    </>
  );
};

export default r_panier;
