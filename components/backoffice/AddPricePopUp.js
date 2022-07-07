import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/AddProductsPopUp.module.css";
import { useQueryClient } from "react-query";

function AddPricePopUp({ show, setShow }) {
  const queryClient = useQueryClient();

  const defaultState = {
    name: "",
    oneDay: "",
    twoDays: "",
    threeDays: "",
    fourDays: "",
    fiveDays: "",
    sixDays: "",
    sevenDays: "",
    eightDays: "",
    nineDays: "",
    tenDays: "",
    elevenDays: "",
    twelveDays: "",
    thirteenDays: "",
    fourteenDays: "",
    fifteenDays: "",
    sixteenDays: "",
  };

  const [formInfos, setFormInfos] = useState(defaultState);
  const [priceCategories, setPriceCategories] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/priceCategory`, {
        formInfos,
      })
      .then(() => {
        setFormInfos(defaultState);
      })
      .then(() => {
        setShow(false);
        queryClient.invalidateQueries("price");
      })
      .catch((err) => {
        console.error(err);
      }, []);
  };

  useEffect(() => {
    axios
      .get(`/api/priceCategory`)
      .then((response) => response.data)
      .then((data) => {
        setPriceCategories(data);
        //   setPriceCategoryId(data[0]?.id);
      });
  }, []);

  return (
    <div className={`${styles.popup} ${show ? styles.active : ""} `}>
      <div className={`${styles.popup__content} ${show ? styles.active : ""}`}>
        {show && (
          <span onClick={() => setShow(false)} className={styles.popup__close}>
            &times;
          </span>
        )}
        <div className={styles.formPopup}>
          <h1 className={styles.titlePopupProducts}>Ajouter un produit</h1>
          <form
            className={styles.formPopUpAddProducts}
            onSubmit={handleSubmit}
            data-cy="add_product_form"
          >
            <div className={styles.inputLign}>
              <div className={styles.productsPrice}>
                <label htmlFor="price" className={styles.labelPopUp}>
                  Nom
                </label>
                <select
                  className={styles.inputPopUp}
                  id="price"
                  type="text"
                  value={formInfos.name}
                  onChange={(e) => setFormInfos.name(e.target.value)}
                  data-cy="add_price_name"
                >
                  {priceCategories.map((price) => (
                    <option key={price.id} value={price.id}>
                      {price.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.productsMark}>
                <label htmlFor="oneday" className={styles.labelPopUp}>
                  1j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="brand"
                  type="text"
                  value={formInfos.oneDay}
                  onChange={(e) => setFormInfos.oneDay(e.target.value)}
                  data-cy="add_price_one_day"
                ></input>
              </div>
            </div>

            <div className={styles.labelPopUp}>Photos</div>
            <div className={styles.btnPopupDiv}>
              <button
                type="submit"
                className={styles.buttonPopUp}
                data-cy="add_product_button"
              >
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPricePopUp;
