import styles from "../../styles/Welcome.module.css";

export default function Welcome() {
  return (
    <div className={styles.container}>
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
              <button type="submit" className={styles.button}>
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
    </div>
  );
}
