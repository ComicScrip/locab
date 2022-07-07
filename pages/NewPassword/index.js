import React from "react";
import Head from "next/head";
import Link from "next/link";
//import toast, { Toaster } from "react-hot-toast";
import Layout from "../../components/Layout";
import styles from "../../styles/mdp.module.css";
import Banner from "../../components/Banner";
import SearchForm from "../../components/SearchForm";
//import { useState } from "react";
//import axios from "axios";
//import { useRouter } from "next/dist/client/router";

export default function ResetPasswordPage() {
  // const router = useRouter();
  // const [email, setEmail] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("");
  // const [resetEmailSent, setResetEmailSent] = useState(false);

  // const sendResetPasswordEmail = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("/api/users/reset-password-email", { email })
  //     .then(() => {
  //       setResetEmailSent(true);
  //     })
  //     .catch(() => {
  //       toast.error("email Not Found");
  //     });
  // };
  return (
    <Layout>
      <Head>
        <title>Modifier son mot de passe</title>
        <meta
          name="Modifier son mot de passe"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Toaster position="bottom-center" /> */}
        <div className={styles.SearchForm}>
          <SearchForm />
          <Banner />
        </div>
        <div className={styles.compte}>
          <p>
            <Link href="/signup">
              <a>
                <span> &larr;</span>Retour au compte
              </a>
            </Link>
          </p>
        </div>
        <h4 className={styles.title}>Modifier votre mot de passe </h4>
        <div className={styles.containerGlobal}>
          <div className={styles.forms}>
            <form>
              <div>
                <label className={styles.label}>Nouveau mot de passe</label>
                <input
                  type="password"
                  name="nouveaumotdepasse"
                  id="nouveaumotdepasse"
                  required
                />
              </div>
              <div>
                <label className={styles.label}>
                  Confirmez votre mot de passe
                </label>
                <input
                  type="password"
                  name="confirmepassword"
                  id="confirmepassword"
                  required
                />
              </div>
              <button className={styles.button}>Valider</button>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}
