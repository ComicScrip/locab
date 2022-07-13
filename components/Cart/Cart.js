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
import Link from "next/link";

export default function Cart() {
  const { t } = useTranslation("cart");

  const { selectProducts, onUpdate, onValidate, onDelete } =
    useContext(SelectCartContext);
  const cartTotal = selectProducts.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  let depositArray = [];
  let deposit = 0;
  for (let i = 0; i < selectProducts.length; i++) {
    depositArray.push(selectProducts[i].caution);
  }
  if (depositArray.length > 0) {
    deposit = Math.max(...depositArray);
  }

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
                src={product.pictures[0].url}
                height="35px"
                width="35px"
                alt={product.name}
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
                onChange={(event) =>
                  onUpdate(
                    product.id,
                    product.productSamples[0].id,
                    event.target.value
                  )
                }
                onBlur={(e) =>
                  onValidate(
                    product.id,
                    product.productSamples[0].id,
                    e.target.value
                  )
                }
              />
            </div>
            <IconButton
              aria-label="delete"
              onClick={() => onDelete(product.id, product.productSamples[0].id)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        );
      })}
      <div className={styles.totalContainer}>
        <div className={styles.totalInfoContainer}>
          <h3>Total</h3>
          <p>
            {t("du")} XX/XX {t("au")} XX/XX
          </p>
        </div>
        <h2>{cartTotal}€</h2>
      </div>
      <div className={styles.cautionContainer}>
        <p>{t("montantdelacaution")}</p>
        <Tooltip title={t("textinfo")}>
          <IconButton>
            <ErrorIcon />
          </IconButton>
        </Tooltip>
        <p>{deposit}</p>
      </div>

      <div className={styles.validerContainer}>
        <Link href="/commande">
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
              opacity: "0.4",
            }}
          >
            {t("validermonpanier")}
          </Button>
        </Link>
      </div>
    </div>
  );
}
