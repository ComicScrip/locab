import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import SignIn from "../../components/SignIn";
import { useContext } from "react";
import { signOut } from "next-auth/react";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import styles from "../../styles/SignUp.module.css";
import { passwordStrength } from "check-password-strength";

export default function SignUpPage({ csrfToken }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    if (["Too Weak", "Weak"].includes(passwordStrength(password).value))
      return setError(
        "Votre mot de passe doit contenir au moins une majuscune, une minuscule, un caractère spécial et un chiffre"
      );
    e.preventDefault();
    axios.post("/api/users", { name, email, password }).then(() => {
      toast.success("Merci pour votre inscription !");
      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
    });
  };
  const { currentUserProfile } = useContext(CurrentUserContext);

  return (
    <>
      {currentUserProfile ? (
        `Vous êtes connectés en tant que ${currentUserProfile.name}`
      ) : (
        <div>
          <div>
            <Toaster />
          </div>
          <SignIn csrfToken={csrfToken} />
          <div className={styles.inscRegisterForm}>
            <h1 className={styles.titleSignUp}>Je souhaite m&lsquo;inscire</h1>
            <form className={styles.formSignUp} onSubmit={handleSubmit}>
              <label htmlFor="name">
                Nom
                <input
                  className={styles.inputPetitSignUp}
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  data-cy="name"
                  required
                />
              </label>
              <label htmlFor="email">
                Adresse mail
                <input
                  className={styles.inputGrandSignUp}
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-cy="email"
                  required
                />
              </label>
              <label htmlFor="password">
                Mot de passe{" "}
                <input
                  className={styles.inputGrandSignUp}
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  data-cy="password"
                  required
                />
              </label>
              <label htmlFor="passwordConfirmation">
                Confirmez votre mot de passe
                <input
                  className={styles.inputGrandSignUp}
                  type="password"
                  id="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  data-cy="passwordConfirmation"
                  required
                />
              </label>
              <p>{error}</p>
              <button
                className={styles.btnInscrSignUp}
                type="submit"
                id="credentials-login-btn"
              >
                S&lsquo;INSCRIRE
              </button>
            </form>
          </div>
        </div>
      )}
      {currentUserProfile && (
        <button
          className={styles.btnInscrSignUp}
          type="submit"
          id="credentials-login-btn"
          onClick={() => signOut()}
        >
          SE DECONNECTER
        </button>
      )}
    </>
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
