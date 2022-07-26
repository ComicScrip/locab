import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

import LayoutAdmin from "../../../components/LayoutAdmin";
import styles from "../../../styles/BackReservations.module.css";
import OrderRow from "../../../components/backoffice/OrderRow";

export default function Reservations() {
  const [searchValue, setSearchValue] = useState("");

  const { data: ordersList = [] } = useQuery(
    ["orders", { search: searchValue }],
    () => {
      return axios
        .get(`/api/orders?search=${searchValue}`)
        .then((response) => response.data)
        .catch(console.error);
    }
  );

  return (
    <LayoutAdmin pageTitle="Back-office | Réservations">
      <div className={styles.globalContainer}>
        <h1 className={styles.reservationTitle}>Réservations</h1>
        <section className={styles.searchAddOrdersContainer}>
          <input
            className={styles.searchOrdersBar}
            type="text"
            placeholder="Recherche"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            data-cy="searchBar"
          />
        </section>

        <section className={styles.tableOrdersContainer}>
          <table className={styles.tableOrders}>
            <thead>
              <tr>
                <th>N° de commande</th>
                <th>Ville</th>
                <th>Nom</th>
                <th>Début de location</th>
                <th>Fin de location</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {ordersList.map((order) => (
                <OrderRow order={order} key={order.id} id={order.id} />
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </LayoutAdmin>
  );
}
