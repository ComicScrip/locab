import styles from "../styles/SignUp.module.css";
import { useRouter } from "next/dist/client/router";

export default function SignIn({ csrfToken }) {
  const { query } = useRouter();

  return (
    <div>
      <h1 className={styles.titleSignUp}>Je suis déja inscrit</h1>
      <form
        className={styles.formSignUp}
        method="post"
        action="/api/auth/callback/credentials"
        data-cy="signin_form"
      >
        <input
          id="csrfToken"
          name="csrfToken"
          type="hidden"
          defaultValue={csrfToken}
        />
        <label htmlFor="email">
          Adresse mail
          <input
            className={styles.inputGrandSignUp}
            type="text"
            id="email"
            name="username"
            data-cy="signin_email"
            required
          />
        </label>
        <label htmlFor="password">
          Mot de passe{" "}
          <input
            className={styles.inputGrandSignUp}
            type="password"
            id="password"
            name="password"
            data-cy="signin_password"
            required
          />
        </label>
        {query.error === "CredentialsSignin" && (
          <p style={{ color: "#D28F71", textAlign: "center" }}>
            Ces identifiants ne corresspondent à aucun utilisateur actif.
          </p>
        )}
        <button
          className={styles.btnInscrSignUp}
          type="submit"
          data-cy="signin_button"
        >
          SE CONNECTER
        </button>
      </form>
    </div>
  );
}
