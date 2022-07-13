import Link from "next/link";
import styles from "../../styles/BackCustomers.module.css";
import { useRouter } from "next/router";

export default function NavCustomers() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <nav className={styles.searchCustomersNav}>
        <Link href="/admin/customers">
          <a
            className={
              currentRoute === "/admin/customers"
                ? styles.searchActive
                : styles.searchNonActive
            }
            data-cy="backCustomersNavButton"
          >
            Clients
          </a>
        </Link>
      </nav>
    </>
  );
}
