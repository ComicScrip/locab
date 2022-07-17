import styles from "../../styles/Reservation.module.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import useCart from "../../hooks/useCart";
import { getProductPrice } from "../../utils/getProductPrice";
import useSearch from "../../hooks/useSearch";

export default function ResProduct({ product }) {
  const { t } = useTranslation("cart");

  const { addProduct, productExistsInCart, deleteProduct } = useCart();
  const { nbDays } = useSearch();

  const existsInCart = productExistsInCart(product.id);

  const handleClickProduct = () => {
    if (!product.unavailable) {
      if (existsInCart) deleteProduct(product.id);
      else addProduct(product);
    }
  };

  const price = getProductPrice(nbDays, product.priceCategory);

  return (
    <div
      className={
        !product.unavailable
          ? styles.productWrapper
          : styles.productWrapperNotAvailable
      }
      onClick={handleClickProduct}
      style={
        existsInCart && !product.unavailable
          ? { borderColor: "#96C0C0" }
          : { borderColor: "#ededed" }
      }
      data-cy={`addProductToCartClick-${product.id}`}
    >
      <Image
        src={product.pictures[0]?.url}
        height={"70px"}
        width={"70px"}
        alt={product.name}
      />
      <p
        style={{ textAlign: "center", margin: "20px 0px 0px 0px" }}
        data-cy={product.unavailable ? "unavailableItem" : ""}
      >
        <span style={{ fontWeight: "bold" }}>{product.name}</span>
        <br />
        {price}€/{t("jour")}
      </p>
    </div>
  );
}
