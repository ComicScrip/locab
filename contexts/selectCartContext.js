import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import qs from "query-string";
import { CurrentUserContext } from "./currentUserContext";
import useSelectProducts from "../hooks/useSelectProducts";

export const SelectCartContext = createContext();

export const SelectCartProvider = ({ children }) => {
  const [selectProducts, setSelectProducts] = useSelectProducts([]);
  const [productList, setProductList] = useState([]);
  const { currentUserProfile } = useContext(CurrentUserContext);

  const router = useRouter();
  const { city = "", showUnavailable = true } = router.query;

  useEffect(() => {
    axios
      .get(
        `/api/productsFront?${qs.stringify(
          router.query
        )}&from=2022-05-21&to=2022-05-24`
      )
      .then((response) => response.data)
      .then((data) => {
        setProductList(data);
      });
  }, [router.query]);

  const setSearchParams = (newSearch) => {
    const queryString = qs.stringify(
      { ...router.query, ...newSearch },
      { skipEmptyString: true }
    );
    router.push(`/reservation${queryString ? "?" : ""}${queryString}`);
  };

  const onAdd = (product) => {
    const exist = selectProducts.find((x) => x.id === product.id);
    if (!exist) {
      if (currentUserProfile) {
        axios.post(`/api/cartItems?productId=${product.id}`).catch((err) => {
          console.error(err);
        }, []);
      }

      setSelectProducts([...selectProducts, { ...product, quantity: 1 }]);
    } else {
      if (currentUserProfile) {
        axios
          .delete(`/api/cartItems/${product.id}`)
          .catch((err) => console.error(err.response.status));
      }

      setSelectProducts(selectProducts.filter((x) => x.id !== product.id));
    }
  };

  const onUpdate = (productId, newQuantity) => {
    let quantity = parseInt(newQuantity, 10);
    if (isNaN(quantity)) {
      quantity = 0;
    }

    if (currentUserProfile) {
      axios
        .patch(`/api/cartItems/${productId}`, {
          quantity: quantity,
        })
        .catch(console.error);
    }

    setSelectProducts((prevList) =>
      prevList.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  };

  const onValidate = (productId, newQuantity) => {
    if (newQuantity === "") {
      if (currentUserProfile) {
        axios
          .patch(`/api/cartItems/${productId}`, {
            quantity: 1,
          })
          .catch(console.error);
      }

      setSelectProducts((prevList) =>
        prevList.map((product) =>
          product.id === productId ? { ...product, quantity: 1 } : product
        )
      );
    }
  };

  const onDelete = (productId) => {
    if (currentUserProfile) {
      axios
        .delete(`/api/cartItems/${productId}`)
        .catch((err) => console.error(err.response.status));
    }

    setSelectProducts((prevList) =>
      prevList.filter((product) => product.id !== productId)
    );
  };

  return (
    <SelectCartContext.Provider
      value={{
        selectProducts,
        setSelectProducts,
        onAdd,
        onUpdate,
        onValidate,
        onDelete,
        productList,
        setProductList,
        city,
        showUnavailable,
        setSearchParams,
      }}
    >
      {children}
    </SelectCartContext.Provider>
  );
};
