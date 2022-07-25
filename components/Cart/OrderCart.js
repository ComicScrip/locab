import { useEffect, useState } from "react";

import { useTranslation } from "next-i18next";
import useCart from "../../hooks/useCart";
import useSearch from "../../hooks/useSearch";
import { getProductPrice } from "../../utils/getProductPrice";

export default function OrderCart() {
  const { t } = useTranslation("cart");

  const { cartItems, deposit, total } = useCart();

  const { nbDays } = useSearch();

  const [onClient, setOnClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") setOnClient(true);
  }, []);

  if (!onClient) return null;

  return (
    <div
      style={{
        width: 300,
        marginRight: 20,
        marginLeft: 10,
      }}
    >
      <div
        style={{ border: "1px solid #B9B9B9", marginTop: 32, borderRadius: 10 }}
      >
        <p
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: 10,
            paddingLeft: 20,
            margin: 0,
            fontWeight: "bold",
            backgroundColor: "#D28F71",
            color: "white",
          }}
        >
          {t("yourcart")}
        </p>
        <div style={{ padding: 20 }}>
          {cartItems.map((ci) => {
            const pricePerDay = getProductPrice(
              nbDays,
              ci.product.priceCategory
            );
            return (
              <div style={{ display: "flex" }} key={ci.productId}>
                <div
                  style={{
                    width: 200,
                    padding: 10,

                    borderRight: "1px solid #B9B9B9",
                    borderBottom: "1px solid #B9B9B9",
                  }}
                >
                  <div>
                    {ci.product.name}
                    {ci.quantity !== 1 ? ` X${ci.quantity}` : ""}
                  </div>
                  <div style={{ fontSize: 12 }}>
                    {pricePerDay}€/{t("p/u")}
                  </div>
                </div>
                <div
                  style={{
                    padding: 10,
                    width: 100,
                    fontWeight: 900,
                    borderBottom: "1px solid #B9B9B9",
                  }}
                >
                  {Number(ci.quantity * pricePerDay * nbDays).toFixed(2)}€
                </div>
              </div>
            );
          })}
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: 200,
                padding: 10,
                borderRight: "1px solid #B9B9B9",
              }}
            >
              <div>Total</div>
              <div style={{ fontSize: 12 }}>
                {t("caution")} {deposit}€
              </div>
            </div>
            <div
              style={{
                padding: 10,
                width: 100,
                fontWeight: 900,
              }}
            >
              {Number(total).toFixed(2)}€
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
