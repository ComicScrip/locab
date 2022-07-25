import { useState, useEffect } from "react";
import axios from "axios";
import { Widget } from "@uploadcare/react-widget";
import styles from "../styles/AddProductsPopUp.module.css";
import { useQueryClient } from "react-query";

function AddProductsPopUp({ show, setShow }) {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [caution, setCaution] = useState("");
  const [priceCategoryId, setPriceCategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const queryClient = useQueryClient();
  const [priceCategories, setPriceCategories] = useState([]);

  const buttonName = () => ({
    buttons: {
      choose: {
        files: {
          one: "+",
        },
      },
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const priceCatNumber = parseInt(priceCategoryId);
    const priceCaution = parseInt(caution);

    axios
      .post(`/api/products`, {
        name,
        brand,
        caution: priceCaution,
        description,
        priceCategoryId: priceCatNumber,
        pictures: productUrl === "" ? "/logo/logo_rose.webp" : productUrl,
      })
      .then(() => {
        setName("");
        setBrand("");
        setCaution("");
        setDescription("");
        setPriceCategoryId("");
      })
      .then(() => {
        setShow(false);
        queryClient.invalidateQueries("products");
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
        setPriceCategoryId(data[0]?.id);
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
              <div className={styles.productsName}>
                <label htmlFor="nom" className={styles.labelPopUp}>
                  Nom
                </label>
                <input
                  className={styles.inputPopUp}
                  id="nom"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  data-cy="add_product_name"
                ></input>
              </div>
              <div className={styles.productsMark}>
                <label htmlFor="brand" className={styles.labelPopUp}>
                  Marque
                </label>
                <input
                  className={styles.inputPopUp}
                  id="brand"
                  type="text"
                  required
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  data-cy="add_product_brand"
                ></input>
              </div>
            </div>
            <div className={styles.inputLign}>
              <div className={styles.productsQuantity}>
                <label htmlFor="caution" className={styles.labelPopUp}>
                  Caution
                </label>
                <input
                  className={styles.inputPopUp}
                  id="caution"
                  type="text"
                  required
                  value={caution}
                  onChange={(e) => setCaution(e.target.value)}
                  data-cy="add_product_caution"
                ></input>
              </div>
              <div className={styles.productsPrice}>
                <label htmlFor="price" className={styles.labelPopUp}>
                  Catégorie de prix
                </label>
                <select
                  className={styles.inputPopUp}
                  id="price"
                  type="text"
                  required
                  value={priceCategoryId}
                  onChange={(e) => setPriceCategoryId(e.target.value)}
                  data-cy="add_product_price_category"
                >
                  {priceCategories.map((price) => (
                    <option key={price.id} value={price.id}>
                      {price.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.productsDescription}>
              <label htmlFor="description" className={styles.labelPopUp}>
                Description
              </label>
              <textarea
                className={(styles.inputPopUp, styles.descriptionTextArea)}
                id="description"
                type="textarea"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                data-cy="add_product_description"
              ></textarea>
            </div>
            <div className={styles.labelPopUp}>Photos</div>
            <div className={styles.btnPopupDiv}>
              <label htmlFor="product">
                <Widget
                  publicKey={process.env.NEXT_PUBLIC_UPLOADCARE_KEY}
                  localeTranslations={buttonName()}
                  crop="1:1"
                  onChange={(file) => {
                    setProductUrl(file.cdnUrl);
                  }}
                  data-cy="add_product_picture"
                />
              </label>
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

export default AddProductsPopUp;
