import NavCustomers from "../../../components/backoffice/NavCustomers";
import styles from "../../../styles/BackCustomers.module.css";
import LayoutAdmin from "../../../components/LayoutAdmin";
import SearchCustomers from "../../../components/backoffice/SearchCustomers";

function Customers() {
  return (
    <LayoutAdmin>
      <section className={styles.customersMainContainer}>
        <div className={styles.customersContainer}>
          <NavCustomers />
          <SearchCustomers />
        </div>
      </section>
    </LayoutAdmin>
  );
}

export default Customers;
