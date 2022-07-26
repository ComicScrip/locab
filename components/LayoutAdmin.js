import Head from "next/head";
import { useSession, signIn } from "next-auth/react";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/currentUserContext";
import styles from "../styles/LayoutAdmin.module.css";
import { FaCalendarAlt, FaPercentage } from "react-icons/fa";
import { AiFillEuroCircle } from "react-icons/ai";
import { IoCube } from "react-icons/io5";
import { MdLocalPostOffice } from "react-icons/md";
import {
  RiUserSettingsFill,
  RiUserFill,
  RiUserVoiceFill,
} from "react-icons/ri";
import Button from "@mui/material/Button";
import { ImHome } from "react-icons/im";
import Link from "next/link";

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
              src="/image/logo_blanc.webp"
              alt="logo"
              className={styles.logoBackOffice}
              width={"150"}
              height={"140"}
            />

            <ul className={styles.listeNavBack}>
              <li className={`${styles.eltNavBack} ${styles.eltNavBackActif}`}>
                <Link href="/admin/reservations">
                  <a>
                    <FaCalendarAlt className={styles.icon} /> Réservation
                  </a>
                </Link>
              </li>
              <li className={`${styles.eltNavBack} ${styles.eltNavBackActif}`}>
                <Link href="/admin/produits">
                  <a>
                    <IoCube className={styles.icon} /> Produits
                  </a>
                </Link>
              </li>
              <li className={`${styles.eltNavBack} ${styles.eltNavBackActif}`}>
                <Link href="/admin/prix">
                  <a>
                    <AiFillEuroCircle className={styles.icon} />
                    Prix
                  </a>
                </Link>
              </li>
              <li className={styles.eltNavBack}>
                <FaPercentage className={styles.icon} />
                Promotion
              </li>
              <li className={styles.eltNavBack}>
                <RiUserVoiceFill className={styles.icon} />
                Ambassadeurs
              </li>
              <li className={styles.eltNavBack}>
                <ImHome className={styles.icon} />
                Partenaires
              </li>
              <li className={styles.eltNavBack}>
                <RiUserFill className={styles.icon} />
                Utilisateurs
              </li>
              <li className={`${styles.eltNavBack} ${styles.eltNavBackActif}`}>
                <Link href="/admin/customers">
                  <a>
                    <RiUserSettingsFill className={styles.icon} />
                    Clients
                  </a>
                </Link>
              </li>
              <li className={styles.eltNavBack}>
                <MdLocalPostOffice className={styles.icon} />
                Messagerie
              </li>
            </ul>
            <div className={styles.divBkHomePage}>
              {" "}
              <Button
                variant="contained"
                href="/"
                className={styles.bkHomePage}
                style={{
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Retour à la page d'accueil
              </Button>
            </div>
          </nav>
        </header>
        <main style={{ marginLeft: "15rem" }}>{children}</main>
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
            Vous devez vous identifier en tant qu'admin pour accéder au back
            office
          </p>

          <button onClick={() => signIn()} data-cy="admin_logInBtn">
            Log in
          </button>
        </>
      )}
    </div>
  );
}
