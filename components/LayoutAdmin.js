import Head from "next/head";
import { useSession, signIn } from "next-auth/react";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/currentUserContext";
import styles from "../styles/LayoutAdmin.module.css";

export default function LayoutAdmin({ children, pageTitle }) {
  const { status } = useSession();
  const { currentUserIsAdmin } = useContext(CurrentUserContext);

  if (currentUserIsAdmin) {
    return (
      <>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <header>
          <nav className={styles.navBackOffice}>
            <img
              src="/image/logo_blanc.png"
              alt="logo"
              className={styles.logoBackOffice}
            />

            <ul className={styles.listeNavBack}>
              <li className={styles.eltNavBack}>Réservation</li>
              <li className={styles.eltNavBack}>Produits</li>
              <li className={styles.eltNavBack}>Prix</li>
              <li className={styles.eltNavBack}>Promotion</li>
              <li className={styles.eltNavBack}>Ambassadeurs</li>
              <li className={styles.eltNavBack}>Partenaires</li>
              <li className={styles.eltNavBack}>Utilisateurs</li>
              <li className={styles.eltNavBack}>Clients</li>
              <li className={styles.eltNavBack}>Messagerie</li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </>
    );
  }

  return (
    <div>
      {status === "loading" ? (
        "Loading account data..."
      ) : (
        <>
          <p>
            Vous devez vous identifier en tant qu&lsquo;admin pour accéder au
            back office
          </p>

          <button onClick={() => signIn()} data-cy="admin_logInBtn">
            Log in
          </button>
        </>
      )}
    </div>
  );
}
