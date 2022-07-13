import { useState } from "react";
import axios from "axios";
import styles from "../../styles/AddPricePopUp.module.css";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/priceCategory`, {
        ...formInfos,
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

  return (
    <div className={`${styles.popup} ${show ? styles.active : ""} `}>
      <div className={`${styles.popup__content} ${show ? styles.active : ""}`}>
        {show && (
          <span onClick={() => setShow(false)} className={styles.popup__close}>
            &times;
          </span>
        )}
        <div className={styles.formPopup}>
          <h1 className={styles.titlePopupProducts}>Ajouter un prix</h1>
          <form
            className={styles.formPopUpAddProducts}
            onSubmit={handleSubmit}
            data-cy="add_price_form"
          >
            <div className={styles.productsPrice}>
              <div className={styles.priceName}>
                <label htmlFor="price" className={styles.labelPopUp}>
                  Prix
                </label>
                <input
                  className={styles.inputPopUp}
                  id=""
                  type="text"
                  value={formInfos.name}
                  onChange={(e) =>
                    setFormInfos((oldInfo) => ({
                      ...oldInfo,
                      name: e.target.value,
                    }))
                  }
                  data-cy="add_price_price"
                ></input>
              </div>
            </div>
            <div className={styles.inputLign}>
              <div className={styles.productsMark}>
                <label htmlFor="oneday" className={styles.labelPopUp}>
                  1j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="brand"
                  type="text"
                  value={formInfos.oneDay}
                  onChange={(e) =>
                    setFormInfos((oldInfo) => ({
                      ...oldInfo,
                      oneDay: e.target.value,
                    }))
                  }
                  data-cy="add_price_one_day"
                ></input>
              </div>

              <div className={styles.productsMark}>
                <label htmlFor="twodays" className={styles.labelPopUp}>
                  2j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="brand"
                  type="text"
                  value={formInfos.twoDays}
                  onChange={(e) =>
                    setFormInfos((oldInfo) => ({
                      ...oldInfo,
                      twoDays: e.target.value,
                    }))
                  }
                  data-cy="add_price_two_days"
                ></input>
              </div>

              <div className={styles.productsMark}>
                <label htmlFor="threedays" className={styles.labelPopUp}>
                  3j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="brand"
                  type="text"
                  value={formInfos.threeDays}
                  onChange={(e) =>
                    setFormInfos((oldInfo) => ({
                      ...oldInfo,
                      threeDays: e.target.value,
                    }))
                  }
                  data-cy="add_price_three_days"
                ></input>
              </div>
              <div className={styles.productsMark}>
                <label htmlFor="fourdays" className={styles.labelPopUp}>
                  4j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="brand"
                  type="text"
                  value={formInfos.fourDays}
                  onChange={(e) =>
                    setFormInfos((oldInfo) => ({
                      ...oldInfo,
                      fourDays: e.target.value,
                    }))
                  }
                  data-cy="add_price_four_days"
                ></input>
              </div>
              <div className={styles.productsMark}>
                <label htmlFor="fivedays" className={styles.labelPopUp}>
                  5j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="brand"
                  type="text"
                  value={formInfos.fiveDays}
                  onChange={(e) =>
                    setFormInfos((oldInfo) => ({
                      ...oldInfo,
                      fiveDays: e.target.value,
                    }))
                  }
                  data-cy="add_price_five_days"
                ></input>
              </div>

              <div className={styles.productsMark}>
                <label htmlFor="sixdays" className={styles.labelPopUp}>
                  6j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="brand"
                  type="text"
                  value={formInfos.sixDays}
                  onChange={(e) =>
                    setFormInfos((oldInfo) => ({
                      ...oldInfo,
                      sixDays: e.target.value,
                    }))
                  }
                  data-cy="add_price_six_days"
                ></input>
              </div>

              <div className={styles.productsMark}>
                <label htmlFor="sevendays" className={styles.labelPopUp}>
                  7j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="brand"
                  type="text"
                  value={formInfos.sevenDays}
                  onChange={(e) =>
                    setFormInfos((oldInfo) => ({
                      ...oldInfo,
                      sevenDays: e.target.value,
                    }))
                  }
                  data-cy="add_price_seven_days"
                ></input>
              </div>

              <div className={styles.productsMark}>
                <label htmlFor="eightdays" className={styles.labelPopUp}>
                  8j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="brand"
                  type="text"
                  value={formInfos.eightDays}
                  onChange={(e) =>
                    setFormInfos((oldInfo) => ({
                      ...oldInfo,
                      eightDays: e.target.value,
                    }))
                  }
                  data-cy="add_price_eight_days"
                ></input>
              </div>
            </div>

            <div className={styles.inputLign}>
              <div className={styles.productsMark}>
                <label htmlFor="ninedays" className={styles.labelPopUp}>
                  9j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="brand"
                  type="text"
                  value={formInfos.neinDays}
                  onChange={(e) =>
                    setFormInfos((oldInfo) => ({
                      ...oldInfo,
                      nineDays: e.target.value,
                    }))
                  }
                  data-cy="add_price_nine_days"
                ></input>
              </div>

              <div className={styles.productsMark}>
                <label htmlFor="tendays" className={styles.labelPopUp}>
                  10j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="brand"
                  type="text"
                  value={formInfos.tenDays}
                  onChange={(e) =>
                    setFormInfos((oldInfo) => ({
                      ...oldInfo,
                      tenDays: e.target.value,
                    }))
                  }
                  data-cy="add_price_ten_days"
                ></input>
              </div>

              <div className={styles.productsMark}>
                <label htmlFor="elevendays" className={styles.labelPopUp}>
                  11j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="brand"
                  type="text"
                  value={formInfos.elevenDays}
                  onChange={(e) =>
                    setFormInfos((oldInfo) => ({
                      ...oldInfo,
                      elevenDays: e.target.value,
                    }))
                  }
                  data-cy="add_price_eleven_days"
                ></input>
              </div>

              <div className={styles.productsMark}>
                <label htmlFor="twelvedays" className={styles.labelPopUp}>
                  12j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="brand"
                  type="text"
                  value={formInfos.twelveDays}
                  onChange={(e) =>
                    setFormInfos((oldInfo) => ({
                      ...oldInfo,
                      twelveDays: e.target.value,
                    }))
                  }
                  data-cy="add_price_twelve_days"
                ></input>
              </div>

              <div className={styles.productsMark}>
                <label htmlFor="thirteendays" className={styles.labelPopUp}>
                  13j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="brand"
                  type="text"
                  value={formInfos.thirteenDays}
                  onChange={(e) =>
                    setFormInfos((oldInfo) => ({
                      ...oldInfo,
                      thirteenDays: e.target.value,
                    }))
                  }
                  data-cy="add_price_thirteen_days"
                ></input>
              </div>

              <div className={styles.productsMark}>
                <label htmlFor="fourteendays" className={styles.labelPopUp}>
                  14j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="brand"
                  type="text"
                  value={formInfos.fourteenDays}
                  onChange={(e) =>
                    setFormInfos((oldInfo) => ({
                      ...oldInfo,
                      fourteenDays: e.target.value,
                    }))
                  }
                  data-cy="add_price_fourteen_days"
                ></input>
              </div>
              <div className={styles.productsMark}>
                <label htmlFor="fifteendays" className={styles.labelPopUp}>
                  15j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="brand"
                  type="text"
                  value={formInfos.fifteenDays}
                  onChange={(e) =>
                    setFormInfos((oldInfo) => ({
                      ...oldInfo,
                      fifteenDays: e.target.value,
                    }))
                  }
                  data-cy="add_price_fifteen_days"
                ></input>
              </div>

              <div className={styles.productsMark}>
                <label htmlFor="sixteendays" className={styles.labelPopUp}>
                  16j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="brand"
                  type="text"
                  value={formInfos.sixteenDays}
                  onChange={(e) =>
                    setFormInfos((oldInfo) => ({
                      ...oldInfo,
                      sixteenDays: e.target.value,
                    }))
                  }
                  data-cy="add_price_sixteen_days"
                ></input>
              </div>
            </div>

            <div className={styles.btnPopupDiv}>
              <button
                type="submit"
                className={styles.buttonPopUp}
                data-cy="add_price_button"
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
