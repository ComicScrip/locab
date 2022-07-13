import styles from "../styles/SignUp.module.css";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
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
            id="signin_email"
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
            id="signin_password"
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
        <Link href="/SendEmailMdp" className={styles.logo}>
          <a>
            <p className={styles.forgetPassWord}>{t("motdepasseoublié")}</p>
          </a>
        </Link>

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
