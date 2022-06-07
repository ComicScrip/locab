import styles from "../../styles/Welcome.module.css";
import { useState } from "react";

export default function Informations() {
  const [active, setActive] = useState(false);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setActive(!active);
  };
  return (
    <div className={styles.container}>
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
      </div>
    </div>
  );
}
