import dayjs from "dayjs";
import Link from "next/link";
import useSearch from "../hooks/useSearch";
import styles from "../styles/SearchForm.module.css";

export default function SearchForm() {
  const { params, setCity, queryString, setFromDate, setToDate } = useSearch();
  return (
    <div className={styles.containerGlobal}>
      <div className={styles.forms}>
        <div className={styles.divlocation}>
          <div className={styles.locationInput}>
            <select
              value={params.city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              data-cy="selectWhere"
              name="destination"
              id="location"
              placeholder="Où allez-vous ?"
              style={{ textIndent: 17 + "px", width: 200 }}
              required
            >
              <option value="">Où allez-vous ?</option>
              <option value="Lyon">Lyon</option>
              <option value="Bordeaux">Bordeaux</option>
            </select>
          </div>
        </div>
        <div className={styles.divwatch1}>
          <input
            value={params.fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            type="date"
            min={dayjs().format("YYYY-MM-DD")}
            name="destination"
            placeholder="Arrivée"
            style={{ textIndent: 17 + "px" }}
            className={styles.watch1Input}
            required
          />
        </div>
        <div className={styles.divwatch2}>
          <input
            value={params.toDate}
            onChange={(e) => setToDate(e.target.value)}
            type="date"
            min={params.fromDate}
            name="departure"
            id="departure"
            placeholder="Départ"
            style={{ textIndent: 17 + "px" }}
            className={styles.watch2Input}
            required
          />
        </div>
        <Link href={`/reservation?${queryString}`}>
          <button className={styles.button}>Je cherche !</button>
        </Link>
      </div>
    </div>
  );
}
