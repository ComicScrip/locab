import Head from "next/head";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/currentUserContext";

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
          <nav>
            <Link href="/admin">
              <a>Réservation</a>
            </Link>
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
