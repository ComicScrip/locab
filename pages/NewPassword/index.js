import React from "react";
import Head from "next/head";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../../components/Layout";
import styles from "../../styles/mdp.module.css";
import Banner from "../../components/Banner";
import SearchForm from "../../components/SearchForm";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("");

  const resetPassword = (e) => {
    e.preventDefault();

    if (newPassword !== newPasswordConfirmation)
      return toast.error('Les deux mots de passe ne correspondent pas !');
    axios
      .post('/api/users/reset-password', {
        email: router.query.email,
        newPassword,
        newPasswordConfirmation,
        resetPasswordToken: router.query.resetPasswordToken,
      })
      .then(() => {
        router.push('/signup');
      })
      .catch(() => {
        toast.error('invalid Token');
      });
  };

  return (
    <Layout pageTitle={'resetPassword'}>
      <Head>
        <title>Modifier son mot de passe</title>
        <meta
          name="Modifier son mot de passe"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Toaster position="bottom-center" />
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
       
            <form onSubmit={resetPassword}>
              <div>
                <label className={styles.label}>Nouveau mot de passe</label>
                {/* {('password')} */}
                <input
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  data-cy='newPassword'
                  id='newPassword'
                  name='newPassword'
                  type='password'
                  required
                  minLength='8'
                />
              </div>
              <div>
                <label className={styles.label}>
                  Confirmez votre mot de passe
                </label>
                {/* {('confirmez votre mot de passe')} */}
                <input
                 value={newPasswordConfirmation}
                 onChange={(e) =>
                   setNewPasswordConfirmation(e.target.value)
                 }
                 data-cy='newPasswordConfirmation'
                 id='newPasswordConfirmation'
                 name='newPasswordConfirmation'
                 type='password'
                 required
                 minLength='8'
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
