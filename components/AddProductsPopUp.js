import { useState } from "react";
import styles from "../styles/AddProductsPopUp.module.css";

function AddProductsPopUp({ show, setShow }) {
  const [name, setName] = useState("");
  const [mark, setMark] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`${styles.popup} ${show ? styles.active : ""} `}>
      <div className={`${styles.popup__content} ${show ? styles.active : ""}`}>
        {show && (
          <span onClick={() => setShow(false)} className={styles.popup__close}>
            &times;
          </span>
        )}
        <h1>Ajouter un produit</h1>
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
              className={styles.inputPopUp}
              id="description"
              type="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>Photos</div>
          <button type="submit" className={styles.buttonPopUp}>
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProductsPopUp;
