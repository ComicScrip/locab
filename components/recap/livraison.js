import styles from "../../styles/Welcome.module.css";

export default function Livraison() {
  return (
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
  );
}
