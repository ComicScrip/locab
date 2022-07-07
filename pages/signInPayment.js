import styles from "../styles/Welcome.module.css";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function SignInPayment({ csrfToken }) {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const HandleSubmitWelcome = (e) => {
    e.preventDefault();
    signIn("credentials", {
      username: "admin@locab.com",
      password: "locablocab",
      callbackUrl: `${window.location.origin}/commande`,
    });
    setMail("");
    setPassword("");
  };

  const HandleSubmitIncription = (e) => {
    e.preventDefault();
    router.push("/signup");
  };

  const HandleSubmitWithoutInscription = (e) => {
    e.preventDefault();
    router.push("/commande");
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.ligne}>
            <hr className={styles.hr} />
          </div>
          <div className={styles.h2}>
            <h2>Bienvenue</h2>
          </div>
          <div className={styles.ligne}>
            <hr className={styles.hr} />
          </div>
        </div>

        <h3 className={styles.h3}>Identification</h3>
        <div className={styles.containerbloc}>
          <div className={styles.bloc1}>
            <h3>Je suis déjà inscrit</h3>
            <form
              className={styles.inscrit}
              method="post"
              action="/api/auth/callback/credentials"
              data-cy="signin_form"
            >
              <div className={styles.formemail}>
                <input
                  id="csrfToken"
                  name="csrfToken"
                  type="hidden"
                  defaultValue={csrfToken}
                />
                <label htmlFor="email" className={styles.email}>
                  Adresse mail
                </label>
                <input
                  className={styles.textarea}
                  type="text"
                  id="email"
                  name="username"
                  data-cy="signin_email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formpassword}>
                <label htmlFor="password" className={styles.password}>
                  Mot de passe
                </label>
                <input
                  className={styles.textarea}
                  type="password"
                  id="password"
                  name="password"
                  data-cy="signin_password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <p className={styles.forgotpassword}>mot de passe oublié</p>

              <div className={styles.formbutton}>
                <button
                  type="button"
                  data-cy="signin_button"
                  className={styles.button}
                  onClick={HandleSubmitWelcome}
                >
                  SE CONNECTER
                </button>
              </div>
            </form>
          </div>
          <div className={styles.bloc2}>
            <h3>Je commande sans inscription</h3>
            <div className={styles.div2}>
              <button
                type="submit"
                className={styles.button}
                data-cy="continue_button"
                onClick={HandleSubmitWithoutInscription}
              >
                CONTINUER
              </button>
            </div>

            <h3>Pas encore inscrit ?</h3>
            <div>
              <button
                type="submit"
                className={styles.button}
                data-cy="continue_button_incription"
                onClick={HandleSubmitIncription}
              >
                INSCRIPTION
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const getCsrfTokenAndSetCookies = async ({ res, query }) => {
  // to make it work on Vercel
  let baseUrl = process.env.NEXTAUTH_URL || `https://${process.env.VERCEL_URL}`;
  // capturing the callback url if any, which should include the current domain for security ?
  const callbackUrlIsPresent = typeof query?.callbackUrl === "string";
  const callbackUrlIsValid =
    callbackUrlIsPresent && query?.callbackUrl.startsWith(baseUrl);
  const host = callbackUrlIsValid ? query?.callbackUrl : baseUrl;
  const redirectURL = encodeURIComponent(host);
  // getting both the csrf form token and (next-auth.csrf-token cookie + next-auth.callback-url cookie)
  const csrfUrl = `${baseUrl}/api/auth/csrf?callbackUrl=${redirectURL}`;
  const csrfResponse = await fetch(csrfUrl);
  const { csrfToken } = await csrfResponse.json();
  const { headers } = csrfResponse;
  // placing the cookies
  const [csrfCookie, redirectCookie] = headers.get("set-cookie").split(",");
  res.setHeader("set-cookie", [csrfCookie, redirectCookie]);
  // placing form csrf token
  return csrfToken;
};

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfTokenAndSetCookies(context),
    },
  };
}
