import { useState } from "react";
import R_panier from "../../components/R_panier";
import Products from "../../components/Products";
import data from "../../components/data";
import styles from "../../styles/Reservation.module.css";

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

  const onModifie = (id, newQuantity) => {
    const quantity = parseInt(newQuantity, 10);
    if (quantity === 0) {
      if (window.confirm("Etes vous sûr de vouloir supprimer cet article ?")) {
        setProductList((prevList) => prevList.filter((p) => p.id !== id));
      }
    } else {
      setProductList((prevList) =>
        prevList.map((product) =>
          product.id === id ? { ...product, quantity } : product
        )
      );
    }
  };
  return (
    <>
      <div className={styles.main_title}>
        <h1>De quoi avez-vous besoin ?</h1>
      </div>
      <div className={styles.main_container}>
        <Products products={products} onAdd={onAdd} onRemove={onRemove} />
        <div className={styles.panier_style}>
          <R_panier productList={productList} onModifie={onModifie} />
        </div>
      </div>
    </>
  );
}

export default Panier;
