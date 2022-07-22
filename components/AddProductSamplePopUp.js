import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/AddProductsPopUp.module.css";
import { useQueryClient } from "react-query";

function AddProductSamplePopUp({ show, setShow }) {
  const queryClient = useQueryClient();

  const [reference, setReference] = useState("");
  const [condition, setCondition] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [comment, setComment] = useState("");

  const [productsList, setProductsList] = useState([]);
  const [productId, setProductId] = useState("");
  const [premiseList, setPremiseList] = useState([]);
  const [premiseId, setPremiseId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const productIdNumber = parseInt(productId, 10);
    const premiseIdNumber = parseInt(premiseId, 10);
    const purchaseDateNewFormat = new Date(purchaseDate);
    axios
      .post(`/api/productSamples`, {
        referenceNumber: reference,
        productId: productIdNumber,
        condition,
        dateOfPurchase: purchaseDateNewFormat,
        comment,
        premiseId: premiseIdNumber,
      })
      .then(() => {
        setReference("");
        setProductId("");
        setPremiseId("");
        setCondition("");
        setPurchaseDate("");
        setComment("");
      })
      .then(() => {
        setShow(false);
        queryClient.invalidateQueries("productSamples");
      })
      .catch((err) => {
        console.error(err);
      }, []);
  };

  useEffect(() => {
    axios
      .get(`/api/products`)
      .then((response) => response.data)
      .then((data) => {
        setProductsList(data);
        setProductId(data[0]?.id);
      });

    axios
      .get(`/api/premise`)
      .then((response) => response.data)
      .then((data) => {
        setPremiseList(data);
        setPremiseId(data[0]?.id);
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
          <h1 className={styles.titlePopupProducts}>Ajouter un exemplaire</h1>
          <form
            className={styles.formPopUpAddProducts}
            onSubmit={handleSubmit}
            data-cy="add_reference_form"
          >
            <div className={styles.inputLign}>
              <div className={styles.productsName}>
                <label htmlFor="reference" className={styles.labelPopUp}>
                  Référence
                </label>
                <input
                  className={styles.inputPopUp}
                  id="reference"
                  type="text"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  data-cy="add_reference_reference"
                  required
                ></input>
              </div>
              <div className={styles.productsMark}>
                <label htmlFor="product" className={styles.labelPopUp}>
                  Produit
                </label>
                <select
                  className={styles.inputPopUp}
                  id="product"
                  type="text"
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                  data-cy="add_reference_product"
                  required
                >
                  <option value="" selected disabled>
                    Produit
                  </option>
                  {productsList.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.inputLign}>
              <div className={styles.productsQuantity}>
                <label htmlFor="condition" className={styles.labelPopUp}>
                  Etat
                </label>
                <input
                  className={styles.inputPopUp}
                  id="condition"
                  type="text"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  data-cy="add_reference_condition"
                  required
                ></input>
              </div>
              <div className={styles.productsPrice}>
                <label htmlFor="purchasedate" className={styles.labelPopUp}>
                  Date d'achat
                </label>
                <input
                  className={styles.inputPopUp}
                  id="purchasedate"
                  type="date"
                  value={purchaseDate}
                  onChange={(e) => setPurchaseDate(e.target.value)}
                  data-cy="add_reference_purchatedate"
                  required
                ></input>
              </div>
            </div>

            <div className={styles.inputLign}>
              <div className={styles.referencePremise}>
                <label htmlFor="premise" className={styles.labelPopUp}>
                  Lieu
                </label>
                <select
                  className={styles.inputPopUp}
                  id="premise"
                  type="text"
                  value={premiseId}
                  onChange={(e) => setPremiseId(e.target.value)}
                  data-cy="add_reference_premise"
                  required
                >
                  <option value="" selected disabled>
                    Lieu
                  </option>
                  {premiseList.map((premise) => (
                    <option key={premise.id} value={premise.id}>
                      {premise.name} - {premise.city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.productsDescription}>
              <label htmlFor="comment" className={styles.labelPopUp}>
                Commentaires
              </label>
              <textarea
                className={(styles.inputPopUp, styles.descriptionTextArea)}
                id="comment"
                type="textarea"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                data-cy="add_reference_comment"
              ></textarea>
            </div>

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

export default AddProductSamplePopUp;
