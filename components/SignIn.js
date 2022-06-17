import styles from "../styles/SignUp.module.css";
import { useRouter } from "next/dist/client/router";
import { useTranslation } from "next-i18next";

export default function SignIn({ csrfToken }) {
  const { query } = useRouter();
  const { t } = useTranslation("signIn");

  return (
    <div>
      <h1 className={styles.titleSignUp}>{t("jesuisdejainscrit")}</h1>
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
          {t("adressemail")}
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
          {t("motdepasse")}{" "}
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
            {t("idpasbon")}
          </p>
        )}
        <button
          className={styles.btnInscrSignUp}
          type="submit"
          data-cy="signin_button"
        >
          {t("seconnecter")}
        </button>
      </form>
    </div>
  );
}
