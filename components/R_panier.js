import React from "react";
import Button from "@mui/material/Button";
import { AiFillInfoCircle } from "react-icons/ai";
import styles from "../styles/Panier.module.css";
import { useState } from "react";

export default function R_panier({ cartItems }) {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainTitle}>
        <h2>Votre panier</h2>
      </div>
      {cartItems.length === 0 && (
        <div className={styles.emptyShop}>Votre panier est vide</div>
      )}
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>
            <input
              type="quantity"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
              min="1"
            />
          </div>
          <div>
            {quantity} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      <div className={styles.totalContainer}>
        <div className={styles.totalInfoContainer}>
          <h3>Total</h3>
          <p>du XX/XX au XX/XX</p>
        </div>
        <h2>{totalPrice.toFixed(2)}€</h2>
      </div>
      <div className={styles.cautionContainer}>
        <p>
          Montant de la caution
          <AiFillInfoCircle
            style={{
              verticalAlign: "middle",
              cursor: "pointer",
              marginBottom: "3px",
            }}
          />
        </p>
        <p>X€</p>
      </div>

      <div className={styles.validerContainer}>
        <Button
          onClick={() => alert("Commande enregistrée")}
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
