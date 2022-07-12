import Link from "next/link";
import styles from "../../styles/BackProduits.module.css";
import { useRouter } from "next/router";

export default function NavProducts() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <nav className={styles.searchProductsNav}>
        <Link href="/admin/produits">
          <a
            className={
              currentRoute === "/admin/produits"
                ? styles.searchActive
                : styles.searchNonActive
            }
            data-cy="backProductsNavButton"
          >
            Produits
          </a>
        </Link>
        /
        <Link href="/admin/references">
          <a
            className={
              currentRoute === "/admin/references"
                ? styles.searchActive
                : styles.searchNonActive
            }
            data-cy="backReferencesNavButton"
          >
            Exemplaires
          </a>
        </Link>
      </nav>
    </>
  );
}
