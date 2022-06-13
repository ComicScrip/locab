import styles from "../styles/SignUp.module.css";

export default function SignIn({ csrfToken }) {
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
        <button className={styles.btnInscrSignUp} type="submit">
          SE CONNECTER
        </button>
      </form>
    </div>
  );
}
