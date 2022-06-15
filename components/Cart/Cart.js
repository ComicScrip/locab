import { useContext } from "react";
import Button from "@mui/material/Button";
import styles from "../../styles/Panier.module.css";
import ErrorIcon from "@mui/icons-material/Error";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import { SelectCartContext } from "../../contexts/selectCartContext";
import { useTranslation } from "next-i18next";

export default function Cart() {
  const { t } = useTranslation("cart");

  const { selectProducts, onUpdate, onValidate, onDelete } =
    useContext(SelectCartContext);
  const cartTotal = selectProducts.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainTitle}>
        <h2>{t("votrepanier")}</h2>
      </div>
      {selectProducts.length === 0 && (
        <div className={styles.emptyShop}>{t("votrepanierestvide")}</div>
      )}
      {selectProducts.map((product) => {
        return (
          <div key={product.id} className={styles.input_container}>
            <div className={styles.name_style}>
              <Image
                src={product.picture}
                height="35px"
                width="35px"
                alt="poussette logo"
              />

              {product.name}
            </div>
            <div className={styles.input_style}>
              <input
                className={styles.input}
                size="1"
                type="number"
                min="0"
                value={product.quantity || ""}
                onChange={(event) => onUpdate(product.id, event.target.value)}
                onBlur={(e) => onValidate(product.id, e.target.value)}
              />
            </div>
            <IconButton
              aria-label="delete"
              onClick={() => onDelete(product.id)}
            >
              <DeleteIcon />
            </IconButton>
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
        <p>{t("montantdelacaution")}</p>
        <Tooltip title="Une empreinte sera faite sur votre carte au moment du paiement. Vous ne serez pas débité">
          <IconButton>
            <ErrorIcon />
          </IconButton>
        </Tooltip>
        <p>XX€</p>
      </div>

      <div className={styles.validerContainer}>
        <Button
          //onClick={() => alert("Commande enregistrée")}
          variant="contained"
          style={{
            backgroundColor: "#D28F71",
            borderRadius: "8px",
            width: "100%",
            color: "white",
            fontWeight: "bold",
            fontSize: "13pt",
            padding: "15px 0px",
            opacity: "0.4",
          }}
        >
          {t("validermonpanier")}
        </Button>
      </div>
    </div>
  );
}
