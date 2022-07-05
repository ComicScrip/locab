import { useContext } from "react";
import styles from "../../styles/Reservation.module.css";
import Image from "next/image";
import { SelectCartContext } from "../../contexts/selectCartContext";
import { useTranslation } from "next-i18next";

export default function ResProduct({ product }) {
  const { t } = useTranslation("cart");

  const { selectProducts, onAdd } = useContext(SelectCartContext);

  const existInCart = selectProducts.find((x) => x.id === product.id);

  const handleClickProduct = () => {
    if (product.productSamples.length > 0) {
      onAdd(product);
    }
  };

  return (
    <div
      className={
        product.productSamples.length > 0
          ? styles.productWrapper
          : styles.productWrapperNotAvailable
      }
      onClick={handleClickProduct}
      style={
        existInCart && product.productSamples.length > 0
          ? { borderColor: "#96C0C0" }
          : { borderColor: "#ededed" }
      }
    >
      <Image
        src={product.pictures[0].url}
        height={"70px"}
        width={"70px"}
        alt={product.name}
      />
      <p style={{ textAlign: "center", margin: "20px 0px 0px 0px" }}>
        <span style={{ fontWeight: "bold" }}>{product.name}</span>
        <br />
        {product.priceCategoryId}€/{t("jour")}
      </p>
    </div>
  );
}
