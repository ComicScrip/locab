import axios from "axios";
import { useContext, useEffect } from "react";
import createPersistedState from "use-persisted-state";
import { CurrentUserContext } from "../contexts/currentUserContext";
import { getProductPrice } from "../utils/getProductPrice";
import useSearch from "./useSearch";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useTranslation } from "next-i18next";

const useCartItems = createPersistedState("cartItems");

const useCart = () => {
  const { t } = useTranslation("reservation");

  const {
    nbDays,
    params: { city, fromDate, toDate },
  } = useSearch();

  const { currentUserProfile } = useContext(CurrentUserContext);

  let [cartItems, setCartItems] = useCartItems([]);
  if (cartItems === null) cartItems = []; // bypass strange bug in cypress...

  useEffect(() => {
    if (currentUserProfile) {
      axios
        .get("/api/cartItems")
        .then((res) => setCartItems(res.data))
        .catch(console.error);
    }
  }, [currentUserProfile, setCartItems]);

  const productExistsInCart = (productId) =>
    cartItems.find((ci) => ci.productId === productId);

  const addProduct = (product) => {
    if (currentUserProfile) {
      axios.post(`/api/cartItems?productId=${product.id}`).catch((err) => {
        console.error(err);
      }, []);
    }

    setCartItems([
      ...cartItems,
      { product, productId: product.id, quantity: 1 },
    ]);
  };

  const updateProductQuantity = (productId, newQuantity) => {
    if (newQuantity) {
      axios
        .get(
          `/api/productSamplesStock?productId=${productId}&city=${city}&fromDate=${fromDate}&toDate=${toDate}`
        )
        .then((res) => {
          if (res.data < newQuantity) {
            setCartItems((prevList) =>
              prevList.map((ci) =>
                ci.productId === productId ? { ...ci, quantity: res.data } : ci
              )
            );
            toast.success(t("erreurStock"));
          }
        });
    }

    let quantity = parseInt(newQuantity, 10);
    if (isNaN(quantity)) {
      quantity = 1;
    }

    if (currentUserProfile) {
      axios
        .patch(`/api/cartItems/${productId}`, {
          quantity: quantity,
        })
        .catch(console.error);
    }

    setCartItems((prevList) =>
      prevList.map((ci) =>
        ci.productId === productId ? { ...ci, quantity } : ci
      )
    );
  };

  const deleteProduct = (productId) => {
    if (currentUserProfile) {
      axios
        .delete(`/api/cartItems/${productId}`)
        .catch((err) => console.error(err.response.status));
    }

    setCartItems((prevList) =>
      prevList.filter((ci) => ci.productId !== productId)
    );
  };

  const deposit = Math.max(
    ...[0, ...cartItems.map((ci) => ci.product.caution)]
  );

  const total = Number(
    cartItems
      .reduce(
        (acc, cur) =>
          acc +
          nbDays *
            getProductPrice(nbDays, cur.product.priceCategory) *
            cur.quantity,
        0
      )
      .toFixed(2)
  );

  return {
    cartItems,
    addProduct,
    deleteProduct,
    updateProductQuantity,
    productExistsInCart,
    deposit,
    setCartItems,
    total,
  };
};

export default useCart;
