import { useState } from "react";
import styles from "../styles/AddProductsPopUp.module.css";

function AddProductsPopUp() {
  const [name, setName] = useState("");
  const [mark, setMark] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Ajouter un produit</h1>
      <form className={styles.formPopUpAddProducts} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom</label>
          <input
            className={styles.inputPopUp}
            id="nom"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="mark">Marque</label>
          <input
            className={styles.inputPopUp}
            id="mark"
            type="text"
            value={mark}
            onChange={(e) => setMark(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="quantity">Quantité</label>
          <input
            className={styles.inputPopUp}
            id="quantity"
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="price">Catégorie de prix</label>
          <input
            className={styles.inputPopUp}
            id="price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="description">Description</label>
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
  );
}

export default AddProductsPopUp;
