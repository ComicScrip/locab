import { useState } from "react";
import R_panier from "../../components/R_panier";
import Products from "../../components/Products";
import data from "../../components/data";
import styles from "../../styles/Reservation.module.css";
import { AiFillLock } from "react-icons/ai";
import Pack from "../../components/Pack";

function Panier() {
  const { products } = data;
  const [productList, setProductList] = useState([]);

  const onAdd = (product) => {
    const exist = productList.find((x) => x.id === product.id);
    if (!exist) {
      setProductList([...productList, { ...product, quantity: 1 }]);
    }
  };

  const onRemove = (product) => {
    setProductList(productList.filter((x) => x.id !== product.id));
  };

  const onUpdate = (id, newQuantity) => {
    let quantity = parseInt(newQuantity, 10);
    if (isNaN(quantity)) {
      quantity = 0;
    }
    setProductList((prevList) =>
      prevList.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const onValidate = (id, newQuantity) => {
    if (newQuantity === "" || newQuantity === "0") {
      setProductList((prevList) =>
        prevList.map((product) =>
          product.id === id ? { ...product, quantity: 1 } : product
        )
      );
    }
  };

  return (
    <>
      <div className={styles.main_title}>
        <h1>De quoi avez-vous besoin ?</h1>
      </div>
      <div className={styles.paiement_container}>
        <div className={styles.trait_gauche}></div>
        <p className={styles.paiementSecurColor}>
          <AiFillLock
            style={{
              color: "#66c65e",
              verticalAlign: "middle",
              marginTop: "-4px",
            }}
          />{" "}
          Paiement sécurisé
        </p>
        <div className={styles.trait_droit}></div>
      </div>
      <div className={styles.main_container}>
        <Products products={products} onAdd={onAdd} onRemove={onRemove} />
        <div className={styles.panier_style}>
          <R_panier
            productList={productList}
            onUpdate={onUpdate}
            onValidate={onValidate}
          />
          <Pack />
        </div>
      </div>
    </>
  );
}

export default Panier;
