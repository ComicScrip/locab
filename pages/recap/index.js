import Head from "next/head";
import { GiPadlock } from "react-icons/gi";
import { BsPaypal } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import styles from "../../styles/Welcome.module.css";
/* import Welcome from "../../components/recap/welcome"; */
/* import Informations from "../..//components/recap/Informations"; */
/* import Livraison from "../../components/recap/livraison"; */
import { useState } from "react";

export default function Recap() {
  /* PARTIE WELCOME */

  const [showWelcome, setShowWelcome] = useState(true);
  const [activeInformations, setActiveInformations] = useState(false);
  const [activeLivraison, setActiveLivraison] = useState(false);
  const [activePayment, setActivePayment] = useState(false);

  /* PARTIE BIENVENUE */

  const HandleSubmitWelcome = (e) => {
    e.preventDefault();
    setShowWelcome(!showWelcome);
    setActiveInformations(!activeInformations);
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
  };

  const OpenLivraison = (e) => {
    e.preventDefault();
    setActiveLivraison(!activeLivraison);
  };

  // PARTIE PAIEMENT

  const HandleSubmitPayment = (e) => {
    e.preventDefault();
    setActivePayment(!activePayment);
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
              <form className={styles.inscrit}>
                <div className={styles.formemail}>
                  <label htmlFor="email" className={styles.email}>
                    Adresse mail
                  </label>
                  <input
                    className={styles.textarea}
                    id="email"
                    type="email"
                    required
                  />
                </div>
                <div className={styles.formpassword}>
                  <label htmlFor="password" className={styles.password}>
                    Mot de passe
                  </label>
                  <input
                    className={styles.textarea}
                    id="password"
                    type="password"
                    required
                  />
                </div>
                <div className={styles.formbutton}>
                  <button
                    type="submit"
                    className={styles.button}
                    onClick={HandleSubmitWelcome}
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
                    <button
                      type="submit"
                      className={styles.button}
                      onClick={HandleSubmitWelcome}
                    >
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
                  <input className={styles.textarea} id="email" type="email" />
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
                    <input className={styles.textarea} id="city" type="city" />
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
                      <label htmlFor="codepostale" className={styles.password}>
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
  );
}
