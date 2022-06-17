import styles from "../../styles/BackProduits.module.css";

export default function ResBackReferences({ backReference }) {
  return (
    <tr className={styles.line}>
      <td>{backReference.references}</td>
      <td>{backReference.parent}</td>
      <td>{backReference.city}</td>
      <td>{backReference.etat}</td>
      <td>
        <ul>
          <li>Modifier</li>
          <li className={styles.suppButton}>Supprimer</li>
        </ul>
      </td>
    </tr>
  );
}
