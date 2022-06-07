import React from "react";
import Button from "@mui/material/Button";
import styles from "../styles/Panier.module.css";
import ErrorIcon from "@mui/icons-material/Error";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function R_panier({ productList, onModifie }) {
  const cartTotal = productList.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainTitle}>
        <h2>Votre panier</h2>
      </div>
      {productList.length === 0 && (
        <div className={styles.emptyShop}>Votre panier est vide</div>
      )}
      {productList.map((product) => {
        return (
          <div key={product.id} className={styles.input_container}>
            <div className={styles.name_style}>{product.name}</div>
            <div className={styles.input_style}>
              <input
                className={styles.input}
                size="1"
                type="quantity"
                min="1"
                value={product.quantity}
                onChange={(event) => onModifie(product.id, event.target.value)}
              />
            </div>
          </div>
        );
      })}
      <div className={styles.totalContainer}>
        <div className={styles.totalInfoContainer}>
          <h3>Total</h3>
          <p>du XX/XX au XX/XX</p>
        </div>
        <h2>{cartTotal}€</h2>
      </div>
      <div className={styles.cautionContainer}>
        <p>Montant de la caution</p>
        <Tooltip title="Une empreinte sera faite sur votre carte au moment du paiement. Vous ne serez pas débité">
          <IconButton>
            <ErrorIcon />
          </IconButton>
        </Tooltip>
        <p>XX€</p>
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
