import styles from "../../styles/BackProduits.module.css";

export default function ReferencesRow({ backReference }) {
  return (
    <tr className={styles.line}>
      <td>{backReference.referenceNumber}</td>
      <td>{backReference.delegateParentId}</td>
      <td>{backReference.premiseId}</td>
      <td>{backReference.condition}</td>
      <td>
        <ul>
          <li className={styles.modifyButton}>Modifier</li>
          <li className={styles.suppButton}>Supprimer</li>
        </ul>
      </td>
    </tr>
  );
}
