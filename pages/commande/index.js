import Head from "next/head";
import styles from "../../styles/Welcome.module.css";
import { GiPadlock } from "react-icons/gi";
import { BsPaypal } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";
import Layout from "../../components/Layout";
import { signIn } from "next-auth/react";

export default function Commande({ csrfToken }) {
  /* PARTIE WELCOME */

  const [showWelcome, setShowWelcome] = useState(true);
  const [activeInformations, setActiveInformations] = useState(false);
  const [activeLivraison, setActiveLivraison] = useState(false);
  const [activePayment, setActivePayment] = useState(false);

  const [checkedWelcome, setCheckedWelcome] = useState(false);
  const [checkedInformations, setCheckedInformations] = useState(false);
  const [checkedLivraison, setCheckedLivraison] = useState(false);
  const [checkedPayment, setCheckedPayment] = useState(false);

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  /* PARTIE BIENVENUE */

  const HandleSubmitWelcome = (e) => {
    e.preventDefault();
    setShowWelcome(!showWelcome);
    setActiveInformations(!activeInformations);
    setCheckedWelcome(!checkedWelcome);
    signIn(
      "credentials",
      { username: mail, password: password },
      {
        redirect: false,
      }
    );
    setMail("");
    setPassword("");
  };

  const OpenWelcome = (e) => {
    e.preventDefault();
    setShowWelcome(!showWelcome);
  };

  /* PARTIE INFORMATIONS */

  const HandleSubmitInformations = (e) => {
    e.preventDefault();
    setActiveInformations(!activeInformations);
    setActiveLivraison(!activeLivraison);
    setCheckedInformations(!checkedInformations);
  };

  const OpenInformations = (e) => {
    e.preventDefault();
    setActiveInformations(!activeInformations);
  };

  /* PARTIE LIVRAISON */

  const HandleSubmitLivraison = (e) => {
    e.preventDefault();
    setActiveLivraison(!activeLivraison);
    setActivePayment(!activePayment);
    setCheckedLivraison(!checkedLivraison);
  };

  const OpenLivraison = (e) => {
    e.preventDefault();
    setActiveLivraison(!activeLivraison);
  };

  // PARTIE PAIEMENT

  const HandleSubmitPayment = (e) => {
    e.preventDefault();
    setActivePayment(!activePayment);
    setCheckedPayment(!checkedPayment);
  };

  const OpenPayment = (e) => {
    e.preventDefault();
    setActivePayment(!activePayment);
  };

  const styleDefault = {
    color: "#000000",
  };

  const setStyle = {
    color: "#ACACAC",
  };

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Loca-b</title>
          <meta name="description" content="Locab" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.title}>
          <div className={styles.ligne}>
            <hr className={styles.hr} />
          </div>
          <div className={styles.payment}>
            <h3>
              {" "}
              <GiPadlock className={styles.icon} />
              Paiement sécurisé
            </h3>
          </div>
          <div className={styles.ligne}>
            <hr className={styles.hr} />
          </div>
        </div>

        <div className={styles.title}>
          <div className={styles.ligne}>
            <hr className={styles.hr} />
          </div>
          <div className={styles.h2}>
            <h2
              onClick={OpenWelcome}
              style={showWelcome ? styleDefault : setStyle}
            >
              {checkedWelcome ? (
                <AiOutlineCheck className={styles.check} />
              ) : (
                ""
              )}
              Bienvenue
            </h2>
          </div>
          <div className={styles.ligne}>
            <hr className={styles.hr} />
          </div>
        </div>
        {showWelcome && (
          <>
            <h3 className={styles.h3}>Le paiement est sécurisé</h3>
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

                  <div className={styles.formbutton}>
                    <button
                      type="submit"
                      data-cy="signin_button"
                      className={styles.button}
                      onSubmit={HandleSubmitWelcome}
                    >
                      SE CONNECTER
                    </button>
                  </div>
                </form>
              </div>
              <div className={styles.bloc2}>
                <h3>Je comande sans inscription</h3>
                <form className={styles.inscrit}>
                  <div className={styles.forminscription}>
                    <label htmlFor="email" className={styles.email}>
                      Adresse mail
                    </label>
                    <input
                      className={styles.textarea}
                      id="email"
                      type="email"
                      required
                    />
                    <div className={styles.formbutton}>
                      <button type="submit" className={styles.button}>
                        SE CONNECTER
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
        <div className={styles.title}>
          <div className={styles.ligne}>
            <hr className={styles.hr} />
          </div>
          <div className={styles.h2}>
            <h2
              onClick={OpenInformations}
              style={activeInformations ? styleDefault : setStyle}
            >
              {checkedInformations ? (
                <AiOutlineCheck className={styles.check} />
              ) : (
                ""
              )}{" "}
              Informations
            </h2>
          </div>
          <div className={styles.ligne}>
            <hr className={styles.hr} />
          </div>
        </div>

        {activeInformations && (
          <>
            <h3 className={styles.h3}>
              Indispensable pour que nous puissions traiter votre commande
            </h3>
            <div className={styles.containerbloc}>
              <div className={styles.bloc1}>
                <form className={styles.inscrit}>
                  <div className={styles.formemail}>
                    <label htmlFor="email" className={styles.email}>
                      Adresse mail
                    </label>
                    <input
                      className={styles.textarea}
                      id="email"
                      type="email"
                    />
                  </div>
                  <div className={styles.name}>
                    <div className={styles.formpassword}>
                      <label htmlFor="name" className={styles.password}>
                        Prénom
                      </label>
                      <input
                        className={styles.textarea}
                        id="firstname"
                        type="name"
                      />
                    </div>
                    <div className={styles.formpassword}>
                      <label htmlFor="name" className={styles.password}>
                        Nom
                      </label>
                      <input
                        className={styles.textarea}
                        id="secondname"
                        type="name"
                      />
                    </div>
                  </div>
                  <div className={styles.formpassword}>
                    <label htmlFor="adress" className={styles.password}>
                      Adresse
                    </label>
                    <input
                      className={styles.textarea}
                      id="adress"
                      type="adress"
                    />
                  </div>
                  <div className={styles.name}>
                    <div className={styles.formpassword}>
                      <label htmlFor="codepostale" className={styles.password}>
                        Code postal
                      </label>
                      <input
                        className={styles.textarea}
                        id="codepostal"
                        type="adress"
                      />
                    </div>
                    <div className={styles.formpassword}>
                      <label htmlFor="city" className={styles.password}>
                        Ville
                      </label>
                      <input
                        className={styles.textarea}
                        id="city"
                        type="city"
                      />
                    </div>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      name="subscribe"
                      type="checkbox"
                      className={styles.password}
                    />
                    <label htmlFor="city" className={styles.password}>
                      Je souhaite m&apos;inscrire
                    </label>
                  </div>
                  <div className={styles.formbutton}>
                    <button
                      className={styles.button2}
                      type="submit"
                      onClick={HandleSubmitInformations}
                    >
                      CONTINUER VERS LA LIVRAISON
                    </button>
                  </div>
                </form>
              </div>
            </div>{" "}
          </>
        )}
        <div className={styles.container}>
          <div className={styles.title}>
            <div className={styles.ligne}>
              <hr className={styles.hr} />
            </div>
            <div className={styles.h2}>
              <h2
                onClick={OpenLivraison}
                style={activeLivraison ? styleDefault : setStyle}
              >
                {checkedLivraison ? (
                  <AiOutlineCheck className={styles.check} />
                ) : (
                  ""
                )}{" "}
                Livraison
              </h2>
            </div>
            <div className={styles.ligne}>
              <hr className={styles.hr} />
            </div>
          </div>
          {activeLivraison && (
            <>
              <h3 className={styles.h3}>
                Renseignez-nous sur votre lieu de séjour
              </h3>
              <div className={styles.containerbloc}>
                <div className={styles.bloc1}>
                  <form className={styles.inscrit}>
                    <div className={styles.formemail}>
                      <label htmlFor="partenaire" className={styles.email}>
                        Partenaire
                      </label>
                      <input
                        className={styles.textarea}
                        id="partenaire"
                        type="text"
                        required
                      />
                    </div>
                    <div className={styles.formpassword}>
                      <label htmlFor="partenaire" className={styles.password}>
                        Numéro de téléphone de l&apos;hébergeur
                      </label>
                      <input
                        className={styles.textarea}
                        id="partenaire"
                        type="text"
                        required
                      />
                    </div>
                    <div className={styles.name}>
                      <div className={styles.formpassword}>
                        <label htmlFor="name" className={styles.password}>
                          Prénom de l&apos;hébergeur
                        </label>
                        <input
                          className={styles.textarea}
                          id="firstname"
                          type="name"
                          required
                        />
                      </div>
                      <div className={styles.formpassword}>
                        <label htmlFor="name" className={styles.password}>
                          Nom de l&apos;hébergeur
                        </label>
                        <input
                          className={styles.textarea}
                          id="secondname"
                          type="name"
                          required
                        />
                      </div>
                    </div>
                    <div className={styles.formpassword}>
                      <label htmlFor="adress" className={styles.password}>
                        Adresse
                      </label>
                      <input
                        className={styles.textarea}
                        id="adress"
                        type="adress"
                        required
                      />
                    </div>
                    <div className={styles.name}>
                      <div className={styles.formpassword}>
                        <label
                          htmlFor="codepostale"
                          className={styles.password}
                        >
                          Code postal
                        </label>
                        <input
                          className={styles.textarea}
                          id="codepostal"
                          type="adress"
                          required
                        />
                      </div>
                      <div className={styles.formpassword}>
                        <label htmlFor="city" className={styles.password}>
                          Ville
                        </label>
                        <input
                          className={styles.textarea}
                          id="city"
                          type="city"
                          required
                        />
                      </div>
                    </div>
                    <div className={styles.formpassword}>
                      <label htmlFor="hour" className={styles.password}>
                        Heure d&apos;arrivée
                      </label>
                      <input
                        className={styles.textarea}
                        id="hour"
                        type="hour"
                        required
                      />
                    </div>
                    <div className={styles.formpassword}>
                      <label htmlFor="hour" className={styles.password}>
                        Commentaires
                      </label>
                      <input
                        className={styles.textarea2}
                        id="commentaire"
                        type="commentaire"
                        required
                      />
                    </div>
                    <div className={styles.formbutton}>
                      <button
                        type="submit"
                        className={styles.button2}
                        onClick={HandleSubmitLivraison}
                      >
                        CONTINUER VERS LE PAIEMENT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
          <div className={styles.title}>
            <div className={styles.ligne}>
              <hr className={styles.hr} />
            </div>
            <div className={styles.h2}>
              <h2
                onClick={OpenPayment}
                style={activePayment ? styleDefault : setStyle}
              >
                Paiement
              </h2>
            </div>
            <div className={styles.ligne}>
              <hr className={styles.hr} />
            </div>
          </div>
          {activePayment && (
            <>
              <h3 className={styles.h3}>
                {" "}
                <GiPadlock />
                Choisissez votre moyen de paiement
              </h3>
              <div className={styles.paymentparent}>
                <div className={styles.paymentcontainer}>
                  <div className={styles.checkbox}>
                    <input
                      name="subscribe"
                      type="checkbox"
                      className={styles.password}
                    />
                    <label htmlFor="city" className={styles.password}>
                      Paypal <BsPaypal />
                    </label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      name="subscribe"
                      type="checkbox"
                      className={styles.password}
                    />
                    <label htmlFor="city" className={styles.password}>
                      Carte bancaire <FaCcVisa /> <FaCcMastercard />
                    </label>
                  </div>
                  <div className={styles.checkbox}>
                    <input
                      name="subscribe"
                      type="checkbox"
                      className={styles.password}
                    />
                    <label htmlFor="city" className={styles.password}>
                      J&apos;accepte les conditions générales de prestations de
                      services
                    </label>
                  </div>

                  <div className={styles.checkbox}>
                    <input
                      name="subscribe"
                      type="checkbox"
                      className={styles.password}
                    />
                    <label htmlFor="city" className={styles.password}>
                      J&apos;accepte que l’exécution du service débute dès la
                      confirmation de la commande.
                    </label>
                  </div>
                  <div className={styles.formbutton}>
                    <button
                      type="submit"
                      className={styles.button2}
                      onClick={HandleSubmitPayment}
                    >
                      CONFIRMER LA COMMANDE
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
