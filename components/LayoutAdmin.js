import Head from "next/head";
import { useSession, signIn } from "next-auth/react";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/currentUserContext";
import styles from "../styles/LayoutAdmin.module.css";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillEuroCircle } from "react-icons/ai";
import { IoCube } from "react-icons/io5";
import { MdLocalPostOffice } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { RiUserFill } from "react-icons/ri";
import { RiUserVoiceFill } from "react-icons/ri";
import { ImHome } from "react-icons/im";
import { FaPercentage } from "react-icons/fa";

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
              <li className={styles.eltNavBack}>
                <FaCalendarAlt className={styles.icon} /> Réservation
              </li>
              <li className={styles.eltNavBack}>
                <IoCube className={styles.icon} /> Produits
              </li>
              <li className={styles.eltNavBack}>
                <AiFillEuroCircle className={styles.icon} />
                Prix
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
              <li className={styles.eltNavBack}>
                <RiUserSettingsFill className={styles.icon} />
                Clients
              </li>
              <li className={styles.eltNavBack}>
                <MdLocalPostOffice className={styles.icon} />
                Messagerie
              </li>
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
