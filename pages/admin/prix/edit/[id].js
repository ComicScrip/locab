import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../../../styles/EditPrice.module.css";
import LayoutAdmin from "../../../../components/LayoutAdmin";

const EditPrice = () => {
  const router = useRouter();
  const { id } = router.query;
  const [price, setPrice] = useState("");

  useEffect(() => {
    axios
      .get(`/api/priceCategory/${id}`)
      .then((res) => {
        setPrice(res.data);
      })
      .catch(console.error);
  }, [id]);

  const handlePatchPrice = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/priceCategory/${id}`, {
        name: price.name,
        oneDay: price.oneDay,
        twoDays: price.twoDays,
        threeDays: price.threeDays,
        fourDays: price.fourDays,
        fiveDays: price.fiveDays,
        sixDays: price.sixDays,
        sevenDays: price.sevenDays,
        eightDays: price.eightDays,
        nineDays: price.nineDays,
        tenDays: price.tenDays,
        elevenDays: price.elevenDays,
        twelveDays: price.twelveDays,
        thirteenDays: price.thirteenDays,
        fourteenDays: price.fourteenDays,
        fifteenDays: price.fifteenDays,
        sixteenDays: price.sixteenDays,
      })
      .then(() => router.push("/admin/prix"))
      .catch(console.error);
  };

  return (
    <LayoutAdmin>
      <div className={styles.pageEdit}>
        <div className={styles.formPopup}>
          <h1 className={styles.titlePopupProducts}>Modifier un prix</h1>
          <form
            className={styles.formPopUpAddProducts}
            onSubmit={handlePatchPrice}
          >
            <div className={styles.inputLign}>
              <div className={styles.productsName}>
                <label htmlFor="nom" className={styles.labelPopUp}>
                  Prix
                </label>
                <input
                  className={styles.inputPopUp}
                  id="nom"
                  type="text"
                  value={price.name || ""}
                  onChange={(e) => setPrice({ ...price, name: e.target.value })}
                  data-cy="modify-price-name"
                ></input>
              </div>
            </div>
            <div className={styles.inputLign}>
              <div className={styles.productsName}>
                <label htmlFor="oneDay" className={styles.labelPopUp}>
                  1j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="oneDay"
                  type="text"
                  value={price.oneDay || ""}
                  onChange={(e) =>
                    setPrice({ ...price, oneDay: e.target.value })
                  }
                  data-cy="modify-price-1j"
                ></input>
              </div>
              <div className={styles.productsName}>
                <label htmlFor="twoDays" className={styles.labelPopUp}>
                  2j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="twoDays"
                  type="text"
                  value={price.twoDays || ""}
                  onChange={(e) =>
                    setPrice({ ...price, twoDays: e.target.value })
                  }
                  data-cy="modify-price-2j"
                ></input>
              </div>
              <div className={styles.productsName}>
                <label htmlFor="threeDays" className={styles.labelPopUp}>
                  3j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="threeDays"
                  type="text"
                  value={price.threeDays || ""}
                  onChange={(e) =>
                    setPrice({ ...price, threeDays: e.target.value })
                  }
                  data-cy="modify-price-3j"
                ></input>
              </div>
              <div className={styles.productsName}>
                <label htmlFor="fourDays" className={styles.labelPopUp}>
                  4j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="fourDays"
                  type="text"
                  value={price.fourDays || ""}
                  onChange={(e) =>
                    setPrice({ ...price, fourDays: e.target.value })
                  }
                  data-cy="modify-price-4j"
                ></input>
              </div>
              <div className={styles.productsName}>
                <label htmlFor="fiveDays" className={styles.labelPopUp}>
                  5j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="fiveDays"
                  type="text"
                  value={price.fiveDays || ""}
                  onChange={(e) =>
                    setPrice({ ...price, fiveDays: e.target.value })
                  }
                  data-cy="modify-price-5j"
                ></input>
              </div>
              <div className={styles.productsName}>
                <label htmlFor="sixDays" className={styles.labelPopUp}>
                  6j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="sixDays"
                  type="text"
                  value={price.sixDays || ""}
                  onChange={(e) =>
                    setPrice({ ...price, sixDays: e.target.value })
                  }
                  data-cy="modify-price-6j"
                ></input>
              </div>
              <div className={styles.productsName}>
                <label htmlFor="sevenDays" className={styles.labelPopUp}>
                  7j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="sevenDays"
                  type="text"
                  value={price.sevenDays || ""}
                  onChange={(e) =>
                    setPrice({ ...price, sevenDays: e.target.value })
                  }
                  data-cy="modify-price-7j"
                ></input>
              </div>
              <div className={styles.productsName}>
                <label htmlFor="eightDays" className={styles.labelPopUp}>
                  8j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="eightDays"
                  type="text"
                  value={price.eightDays || ""}
                  onChange={(e) =>
                    setPrice({ ...price, eightDays: e.target.value })
                  }
                  data-cy="modify-price-8j"
                ></input>
              </div>
            </div>
            <div className={styles.inputLign}>
              <div className={styles.productsName}>
                <label htmlFor="nineDays" className={styles.labelPopUp}>
                  9j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="nineDays"
                  type="text"
                  value={price.nineDays || ""}
                  onChange={(e) =>
                    setPrice({ ...price, nineDays: e.target.value })
                  }
                  data-cy="modify-price-9j"
                ></input>
              </div>
              <div className={styles.productsName}>
                <label htmlFor="tenDays" className={styles.labelPopUp}>
                  10j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="tenDays"
                  type="text"
                  value={price.tenDays || ""}
                  onChange={(e) =>
                    setPrice({ ...price, tenDays: e.target.value })
                  }
                  data-cy="modify-price-10j"
                ></input>
              </div>
              <div className={styles.productsName}>
                <label htmlFor="elevenDays" className={styles.labelPopUp}>
                  11j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="elevenDays"
                  type="text"
                  value={price.elevenDays || ""}
                  onChange={(e) =>
                    setPrice({ ...price, elevenDays: e.target.value })
                  }
                  data-cy="modify-price-11j"
                ></input>
              </div>
              <div className={styles.productsName}>
                <label htmlFor="twelveDays" className={styles.labelPopUp}>
                  12j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="twelveDays"
                  type="text"
                  value={price.twelveDays || ""}
                  onChange={(e) =>
                    setPrice({ ...price, twelveDays: e.target.value })
                  }
                  data-cy="modify-price-12j"
                ></input>
              </div>
              <div className={styles.productsName}>
                <label htmlFor="thirteenDays" className={styles.labelPopUp}>
                  13j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="thirteenDays"
                  type="text"
                  value={price.thirteenDays || ""}
                  onChange={(e) =>
                    setPrice({ ...price, thirteenDays: e.target.value })
                  }
                  data-cy="modify-price-13j"
                ></input>
              </div>
              <div className={styles.productsName}>
                <label htmlFor="fourteenDays" className={styles.labelPopUp}>
                  14j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="fourteenDays"
                  type="text"
                  value={price.fourteenDays || ""}
                  onChange={(e) =>
                    setPrice({ ...price, fourteenDays: e.target.value })
                  }
                  data-cy="modify-price-14j"
                ></input>
              </div>
              <div className={styles.productsName}>
                <label htmlFor="fifteenDays" className={styles.labelPopUp}>
                  15j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="fifteenDays"
                  type="text"
                  value={price.fifteenDays || ""}
                  onChange={(e) =>
                    setPrice({ ...price, fifteenDays: e.target.value })
                  }
                  data-cy="modify-price-15j"
                ></input>
              </div>
              <div className={styles.productsName}>
                <label htmlFor="sixteenDays" className={styles.labelPopUp}>
                  16j
                </label>
                <input
                  className={styles.inputPopUp}
                  id="sixteenDays"
                  type="text"
                  value={price.sixteenDays || ""}
                  onChange={(e) =>
                    setPrice({ ...price, sixteenDays: e.target.value })
                  }
                  data-cy="modify-price-16j"
                ></input>
              </div>
            </div>
            <div className={styles.btnPopupDiv}>
              <button
                type="submit"
                className={styles.buttonPopUp}
                data-cy="modify-price-button"
              >
                Modifier
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default EditPrice;
