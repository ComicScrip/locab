import axios from "axios";
import { useContext, useEffect } from "react";
import createPersistedState from "use-persisted-state";
import { CurrentUserContext } from "../contexts/currentUserContext";
import { getProductPrice } from "../utils/getProductPrice";
import useSearch from "./useSearch";

const useCartItems = createPersistedState("cartItems");

const useCart = () => {
  const { nbDays } = useSearch();
  const { currentUserProfile } = useContext(CurrentUserContext);

  const [cartItems, setCartItems] = useCartItems([]);

  useEffect(() => {
    if (currentUserProfile) {
      axios.get("/api/cartItems", (res) => setCartItems(res.data));
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

  const total = cartItems.reduce(
    (acc, cur) =>
      acc + getProductPrice(nbDays, cur.product.priceCategory) * cur.quantity,
    0
  );

  return {
    cartItems,
    addProduct,
    deleteProduct,
    updateProductQuantity,
    productExistsInCart,
    deposit,
    total,
  };
};

export default useCart;
