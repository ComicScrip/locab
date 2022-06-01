import styles from "../styles/Welcome.module.css";

export default function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Bienvenue</h2>
        <h3>Le paiement est sécurisé</h3>
      </div>
      <div className={styles.containerbloc}>
        <div className={styles.bloc1}>
          <h3>Je suis déjà inscrit</h3>
          <form className={styles.inscrit}>
            <label htmlFor="email" className={styles.email}>
              Adresse mail
            </label>
            <input
              className={styles.textarea}
              id="email"
              type="email"
              required
            />
            <label htmlFor="password" className={styles.password}>
              Mot de passe
            </label>
            <input
              className={styles.textarea}
              id="password"
              type="password"
              required
            />
            <button type="submit" className={styles.button}>
              SE CONNECTER
            </button>
          </form>
        </div>
        <div className={styles.bloc2}>
          <h3>Je comande sans inscription</h3>
          <form className={styles.inscrit}>
            <label htmlFor="email" className={styles.email}>
              Adresse mail
            </label>
            <input
              className={styles.textarea}
              id="email"
              type="email"
              required
            />
            <button type="submit" className={styles.button}>
              SE CONNECTER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
