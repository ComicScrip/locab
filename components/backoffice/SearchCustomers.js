import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import styles from "../../styles/BackCustomers.module.css";
import CustomersRow from "./CustomersRow";
import dataBackCustomers from "./dataBackCustomers";

export default function SearchProducts() {
  const { backCustomers } = dataBackCustomers;
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.searchCustomersMainContainer}>
      <div className={styles.searchCustomersContainer}>
        <section className={styles.searchAddCustomersContainer}>
          <input
            className={styles.searchCustomersBar}
            type="text"
            placeholder="Nom Prénom"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <BsPlusCircle className={styles.addCustomersButton} />
        </section>
        <section className={styles.tableCustomersContainer}>
          <table className={styles.tableCustomers}>
            <thead>
              <tr>
                <th></th>
                <th>Nom Prénom</th>
                <th>Adresse mail </th>
                <th>Adresse</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {backCustomers
                .filter((backCustomer) =>
                  backCustomer.firstname
                    .toUpperCase()
                    .includes(searchValue.toUpperCase())
                )
                .map((backCustomer) => (
                  <CustomersRow
                    backCustomer={backCustomer}
                    key={backCustomer.id}
                    id={backCustomer.id}
                  />
                ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
