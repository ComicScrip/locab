import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import styles from "../../styles/Panier.module.css";
import ErrorIcon from "@mui/icons-material/Error";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import useCart from "../../hooks/useCart";
import useSearch from "../../hooks/useSearch";
import dayjs from "dayjs";
import { ToastContainer } from "react-toastify";

export default function Cart() {
  const { t } = useTranslation("cart");

  const { cartItems, updateProductQuantity, deposit, total, deleteProduct } =
    useCart();

  const {
    params: { fromDate, toDate },
  } = useSearch();

  const [onClient, setOnClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") setOnClient(true);
  }, []);

  if (!onClient) return null;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainTitle}>
        <h2>{t("votrepanier")}</h2>
      </div>
      {cartItems.length === 0 ? (
        <div className={styles.emptyShop}>{t("votrepanierestvide")}</div>
      ) : (
        <div>
          {cartItems.map(({ quantity, product }) => {
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
                    value={quantity || ""}
                    onChange={(event) =>
                      updateProductQuantity(product.id, event.target.value)
                    }
                    onBlur={() =>
                      updateProductQuantity(product.id, quantity || 1)
                    }
                  />
                </div>
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteProduct(product.id)}
                  data-cy="deleteProductToCartClick"
                >
                  <DeleteIcon />
                </IconButton>
                <ToastContainer />
              </div>
            );
          })}
          <div className={styles.totalContainer}>
            <div className={styles.totalInfoContainer}>
              <h3>Total</h3>
              <p>
                {t("du")} {dayjs(fromDate).format("DD/MM")} {t("au")}{" "}
                {dayjs(toDate).format("DD/MM")}
              </p>
            </div>
            <h2>{total}€</h2>
          </div>
          <div className={styles.cautionContainer}>
            <p>{t("montantdelacaution")}</p>
            <Tooltip title={t("textinfo")}>
              <IconButton>
                <ErrorIcon />
              </IconButton>
            </Tooltip>
            <p>{deposit}€</p>
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
                }}
              >
                {t("validermonpanier")}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
