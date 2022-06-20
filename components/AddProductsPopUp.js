import { useState } from "react";
// import axios from "axios";
// import swal from "sweetalert2";
import { Widget } from "@uploadcare/react-widget";
import styles from "../styles/AddProductsPopUp.module.css";

function AddProductsPopUp({ show, setShow }) {
  const [name, setName] = useState("");
  const [mark, setMark] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [productUrl, setProductUrl] = useState("");

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
    // axios
    //   .post(`/api/products`, {
    //     name,
    //     mark,
    //     quantity,
    //     price,
    //     description,
    //   })
    //   .then(() => {
    //     setName("");
    //     setMark("");
    //     setQuantity("");
    //     setPrice("");
    //     setDescription("");
    //   })
    //   .then(() => {
    //     swal("Produit ajouté");
    //     setShow(false);
    //   });
  };

  return (
    <div className={`${styles.popup} ${show ? styles.active : ""} `}>
      <style jsx>{`
        .uploadcare--widget__button_type_open,
        .uploadcare--widget__button,
        .uploadcare--widget__button_type_open:hover {
          color: black;
          background-color: white;
        }
      `}</style>
      <div className={`${styles.popup__content} ${show ? styles.active : ""}`}>
        {show && (
          <span onClick={() => setShow(false)} className={styles.popup__close}>
            &times;
          </span>
        )}
        <div className={styles.formPopup}>
          <h1 className={styles.titlePopupProducts}>Ajouter un produit</h1>
          <form className={styles.formPopUpAddProducts} onSubmit={handleSubmit}>
            <div className={styles.inputLign}>
              <div className={styles.productsName}>
                <label htmlFor="nom" className={styles.labelPopUp}>
                  Nom
                </label>
                <input
                  className={styles.inputPopUp}
                  id="nom"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className={styles.productsMark}>
                <label htmlFor="mark" className={styles.labelPopUp}>
                  Marque
                </label>
                <input
                  className={styles.inputPopUp}
                  id="mark"
                  type="text"
                  value={mark}
                  onChange={(e) => setMark(e.target.value)}
                ></input>
              </div>
            </div>
            <div className={styles.inputLign}>
              <div className={styles.productsQuantity}>
                <label htmlFor="quantity" className={styles.labelPopUp}>
                  Quantité
                </label>
                <input
                  className={styles.inputPopUp}
                  id="quantity"
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                ></input>
              </div>
              <div className={styles.productsPrice}>
                <label htmlFor="price" className={styles.labelPopUp}>
                  Catégorie de prix
                </label>
                <input
                  className={styles.inputPopUp}
                  id="price"
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.labelPopUp}>Photos</div>
            <div className={styles.btnPopupDiv}>
              <label htmlFor="product">
                <Widget
                  publicKey={process.env.NEXT_PUBLIC_UPLOADCARE_KEY}
                  className={styles.buttonPlus}
                  id="product"
                  name="product"
                  tabs="file"
                  localeTranslations={buttonName()}
                  value={productUrl}
                  onChange={({ file }) => {
                    setProductUrl(file);
                  }}
                />
              </label>
              <button type="submit" className={styles.buttonPopUp}>
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
