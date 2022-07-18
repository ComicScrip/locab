import ResProduct from "./ResProduct";
import styles from "../../styles/Reservation.module.css";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import axios from "axios";
import useSearch from "../../hooks/useSearch";

export default function Products() {
  const { t } = useTranslation("cart");

  const { queryString, params, setProductNameContains, toggleShowUnavailable } =
    useSearch();

  const [productList, setProductList] = useState([]);

  const router = useRouter();

  useEffect(() => {
    router.push(`/reservation?${queryString}`, undefined, { scroll: false });
    axios
      .get(`/api/productsFront?${queryString}`)
      .then((response) => response.data)
      .then((data) => {
        setProductList(data);
      });
  }, [queryString]);

  return (
    <div className={styles.mainWrapper}>
      <section className={styles.searchContainer}>
        <input
          data-cy="searchBar"
          value={params.productNameContains}
          type="text"
          placeholder={t("inputSeach")}
          onChange={(event) => setProductNameContains(event.target.value)}
          className={styles.searchBar}
        />
      </section>
      <section className={styles.productNotAvailable}>
        <label htmlFor="availability" style={{ cursor: "pointer" }}>
          <input
            data-cy="availabilityBtn"
            type="checkbox"
            onClick={() => toggleShowUnavailable()}
            id="availability"
            defaultChecked={params.showUnavailable}
          />
          {t("afficherlesproduitsindisponibles")}
        </label>
      </section>

      {productList.map((product) => (
        <ResProduct
          product={product}
          key={product.id}
          id={product.id}
          data-cy="availabilityBtn"
        />
      ))}
    </div>
  );
}
