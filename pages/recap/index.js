import Head from "next/head";
import { GiPadlock } from "react-icons/gi";
import styles from "../../styles/Welcome.module.css";
/* import Welcome from "../../components/recap/welcome"; */
/* import Informations from "../..//components/recap/Informations"; */
/* import Livraison from "../../components/recap/livraison"; */
import { useState } from "react";

export default function Recap() {
  const [active, setActive] = useState(false);
  const [close, setClose] = useState(true);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setActive(!active);
    setClose(!close);
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
          <h2>Bienvenue</h2>
        </div>
        <div className={styles.ligne}>
          <hr className={styles.hr} />
        </div>
      </div>
      {close && (
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
                    onClick={HandleSubmit}
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
          <h2>Informations</h2>
        </div>
        <div className={styles.ligne}>
          <hr className={styles.hr} />
        </div>
      </div>

      {active && (
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
                    required
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
                      required
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
                    type="submit"
                    className={styles.button2}
                    onSubmit={HandleSubmit}
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
            <h2>Livraison</h2>
          </div>
          <div className={styles.ligne}>
            <hr className={styles.hr} />
          </div>
        </div>
        <h3 className={styles.h3}>Renseignez-nous sur votre lieu de séjour</h3>
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
                <button type="submit" className={styles.button2}>
                  CONTINUER VERS LE PAIEMENT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* <Welcome />
      <Informations
        active={active}
        setActive={setActive}
        HandleSubmit={HandleSubmit}
      />
      {active && <Livraison />} */
