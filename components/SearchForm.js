import dayjs from "dayjs";
import useSearch from "../hooks/useSearch";
import styles from "../styles/SearchForm.module.css";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchForm() {
  const { t } = useTranslation("reservation");
  const { params, setCity, setFromDate, setToDate } = useSearch();

  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/premiseFront`)
      .then((response) => response.data)
      .then((data) => {
        setCityList(data);
      });
  }, []);

  return (
    <div className={styles.containerGlobal}>
      <div className={styles.forms}>
        <div className={styles.divlocation}>
          <div className={styles.locationInput}>
            <select
              value={params.city ? params.city : t("ouallezvous")}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              data-cy="selectWhere"
              name="destination"
              id="location"
              placeholder={t("ouallezvous")}
              style={{ textIndent: 17 + "px", width: 200, height: 27 }}
              required
            >
              {params.city ? (
                ""
              ) : (
                <option value={t("ouallezvous")}>{t("ouallezvous")}</option>
              )}
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
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
            style={{ textIndent: 17 + "px" }}
            className={styles.watch1Input}
            data-cy="searchFromDate"
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
            style={{ textIndent: 17 + "px" }}
            className={styles.watch2Input}
            required
          />
        </div>
      </div>
    </div>
  );
}
