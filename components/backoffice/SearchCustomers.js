import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import styles from "../../styles/BackCustomers.module.css";
import CustomersRow from "./CustomersRow";
import { useQuery } from "react-query";
import axios from "axios";
import AddCustomersPopUp from "../../components/AddCustomersPopUp";

export default function SearchCustomers() {
  const [searchValue, setSearchValue] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };
  const { data: userList = [] } = useQuery(
    ["users", { search: searchValue }],
    () => {
      return axios
        .get(`/api/users?search=${searchValue}`)
        .then((response) => response.data);
    }
  );

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
            data-cy="input-search-back-customer"
          />
          <BsPlusCircle
            onClick={handleClick}
            data-cy="add_customer_button_add"
            className={styles.addCustomersButton}
          />
          <AddCustomersPopUp show={showPopup} setShow={setShowPopup} />
        </section>
        <section className={styles.tableCustomersContainer}>
          <table className={styles.tableCustomers}>
            <thead>
              <tr>
                <th>PRENOM</th>
                <th>NOM</th>
                <th>ADRESSE MAIL</th>
                <th>TELEPHONE</th>
                <th>ADRESSE POSTALE</th>
                <th>VILLE</th>
                <th>CODE POSTAL</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((backCustomer) => (
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
