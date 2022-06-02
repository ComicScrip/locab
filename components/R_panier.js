import React from "react";
import Button from "@mui/material/Button";
import { AiFillInfoCircle } from "react-icons/ai";
import styles from "../styles/Panier.module.css";

const productList = [
  {
    id: "1",
    name: "poussette",
    price: 7,
  },
  {
    id: "2",
    name: "baignoire",
    price: 9,
  },
];

export default function R_panier() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainTitle}>
        <h1>Votre panier</h1>
      </div>
      {productList.map((products) => (
        <R_panier
          name={products.name}
          prix={products.prix}
          products={products}
          key={products.id}
          id={products.id}
        />
      ))}
      <div className={styles.totalContainer}>
        <div className={styles.totalInfoContainer}>
          <h3>Total</h3>
          <p>du XX/XX au XX/XX</p>
        </div>
        <h2>Total €</h2>
      </div>
      <div className={styles.cautionContainer}>
        <p>
          Montant de la caution &nbsp;
          <AiFillInfoCircle
            style={{ verticalAlign: "middle", cursor: "pointer" }}
          />
        </p>
        <p>X€</p>
      </div>
      <div className={styles.validerContainer}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#D28F71",
            borderRadius: "8px",
            width: "100%",
            color: "white",
            fontWeight: "bold",
            fontSize: "13pt",
            padding: "15px 0px",
          }}
        >
          Valider votre panier
        </Button>
      </div>
    </div>
  );
}
