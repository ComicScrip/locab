import Image from "next/image";
import styles from "../../styles/BackProduits.module.css";

export default function ProductsRow({ backProduct }) {
  return (
    <tr className={styles.line}>
      <td>
        <Image
          src={backProduct.picture}
          height={"70px"}
          width={"70px"}
          alt="poussette logo"
        />
      </td>
      <td>{backProduct.name}</td>
      <td>{backProduct.priceCategoryId}</td>
      <td>{backProduct.stock}</td>
      <td>{backProduct.brand}</td>
      <td>
        <ul>
          <li className={styles.modifyButton}>Modifier</li>
          <li className={styles.suppButton}>Supprimer</li>
        </ul>
      </td>
    </tr>
  );
}
