import styles from "../styles/SearchForm.module.css";

export default function SearchForm() {
  return (
    <div className={styles.containerGlobal}>
      <div className={styles.forms}>
        <div className={styles.divlocation}>
          <input
            type="text"
            name="destination"
            id="location"
            placeholder="Où allez-vous ?"
            style={{ textIndent: 17 + "px" }}
            className={styles.locationInput}
            required
          />
        </div>
        <div className={styles.divwatch1}>
          <input
            type="text"
            name="destination"
            placeholder="Arrivée"
            style={{ textIndent: 17 + "px" }}
            className={styles.watch1Input}
            required
          />
        </div>
        <div className={styles.divwatch2}>
          <input
            type="text"
            name="departure"
            id="departure"
            placeholder="Départ"
            style={{ textIndent: 17 + "px" }}
            className={styles.watch2Input}
            required
          />
        </div>
        <button className={styles.button}>Je cherche !</button>
      </div>
    </div>
  );
}
