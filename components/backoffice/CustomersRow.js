import styles from "../../styles/BackCustomers.module.css";

export default function CustomersRow({ backCustomer }) {
  return (
    <tr className={styles.line}>
      <td>{backCustomer.firstname}</td>
      <td>{backCustomer.email}</td>
      <td>{backCustomer.address}</td>
      <td>
        <ul>
          <li className={styles.modifyBtn}>Modifier</li>
          <li className={styles.suppBtn}>Supprimer</li>
        </ul>
      </td>
    </tr>
  );
}
