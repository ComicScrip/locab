import styles from "../styles/SignUp.module.css";

export default function SignIn({ csrfToken }) {
  return (
    <div>
      <h1 className={styles.titleSignUp}>Je suis déja inscrit</h1>
      <form
        className={styles.formSignUp}
        method="post"
        action="/api/auth/callback/credentials"
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
            data-cy="email"
            required
          />
        </label>
        <label htmlFor="password">
          Mot de passe{" "}
          <input
            className={styles.inputGrandSignUp}
            type="text"
            id="password"
            data-cy="password"
            required
          />
        </label>
        <button className={styles.btnInscrSignUp} type="submit">
          SE CONNECTER
        </button>
      </form>
    </div>
  );
}
