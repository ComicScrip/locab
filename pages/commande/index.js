import styles from "../../styles/Welcome.module.css";
import axios from "axios";
import { GiPadlock } from "react-icons/gi";
import { BsPaypal } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";

export default function Commande() {
  const [activeInformations, setActiveInformations] = useState(true);
  const [activeLivraison, setActiveLivraison] = useState(false);
  const [activePayment, setActivePayment] = useState(false);

  const [checkedInformations, setCheckedInformations] = useState(false);
  const [checkedLivraison, setCheckedLivraison] = useState(false);
  const [checkedPayment, setCheckedPayment] = useState(false);

  const [userMail, setUserMail] = useState("");
  const [userFirstname, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userZip, setUserZip] = useState("");
  const [userCity, setUserCity] = useState("");

  const [error, setError] = useState("");

  /* PARTIE INFORMATIONS */

  const HandleSubmitInformations = (e) => {
    e.preventDefault();
    setActiveInformations(!activeInformations);
    setActiveLivraison(!activeLivraison);
    setCheckedInformations(!checkedInformations);

    axios
      .post("/api/users", {
        firstname: userFirstname,
        lastname: userLastName,
        address: userAddress,
        zip: userZip,
        city: userCity,
        phone: "0102030405",
        email: userMail,
        password: "Toto123/",
      })
      .then(() => {
        setUserFirstName("");
        setUserLastName("");
        setUserAddress("");
        setUserCity("");
        setUserMail("");
        setUserZip("");
      })
      .catch((err) => {
        if (err.response && err.response.status === 409)
          setError("Email déjà utilisé");
      });
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

  // CHANGEMENT DE STYLE SUR LES TITRES //

  const styleDefault = {
    color: "#000000",
  };

  const setStyle = {
    color: "#ACACAC",
  };

  return (
    <Layout>
      <Banner />
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
                    onChange={(e) => setUserMail(e.target.value)}
                    value={userMail}
                    data-cy="infos_email"
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
                      onChange={(e) => setUserFirstName(e.target.value)}
                      value={userFirstname}
                      data-cy="infos_firstname"
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
                      onChange={(e) => setUserLastName(e.target.value)}
                      value={userLastName}
                      data-cy="infos_lastname"
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
                    onChange={(e) => setUserAddress(e.target.value)}
                    value={userAddress}
                    data-cy="infos_address"
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
                      onChange={(e) => setUserZip(e.target.value)}
                      value={userZip}
                      data-cy="infos_zip"
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
                      onChange={(e) => setUserCity(e.target.value)}
                      value={userCity}
                      data-cy="infos_city"
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
                  <p style={{ color: "#D28F71", textAlign: "center" }}>
                    {error}
                  </p>
                  <button
                    className={styles.button2}
                    type="submit"
                    onClick={HandleSubmitInformations}
                    data-cy="infos_submit_button"
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
    </Layout>
  );
}
