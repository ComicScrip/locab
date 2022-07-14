import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import qs from "query-string";

export const SelectCartContext = createContext();

export const SelectCartProvider = ({ children }) => {
  const [selectProducts, setSelectProducts] = useState([]);
  const [productList, setProductList] = useState([]);

  const router = useRouter();
  const { city = "", showUnavailable = true } = router.query;

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(
        `/api/productsFront?${qs.stringify(
          router.query
        )}&from=2022-05-21&to=2022-05-24`,
        {
          signal: controller.signal,
        }
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
      axios.post(`/api/cartItems?productId=${product.id}`).catch((err) => {
        console.error(err);
      }, []);

      setSelectProducts([...selectProducts, { ...product, quantity: 1 }]);
    } else {
      axios
        .delete(`/api/cartItems/${product.productSamples[0].id}`)
        .catch((err) => console.error(err.response.status));

      setSelectProducts(selectProducts.filter((x) => x.id !== product.id));
    }
  };

  const onUpdate = (productId, productSampleId, newQuantity) => {
    let quantity = parseInt(newQuantity, 10);
    if (isNaN(quantity)) {
      quantity = 0;
    }

    axios
      .patch(`/api/cartItems/${productSampleId}`, {
        quantity: quantity,
      })
      .catch(console.error);

    setSelectProducts((prevList) =>
      prevList.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  };

  const onValidate = (productId, productSampleId, newQuantity) => {
    if (newQuantity === "") {
      axios
        .patch(`/api/cartItems/${productSampleId}`, {
          quantity: 1,
        })
        .catch(console.error);

      setSelectProducts((prevList) =>
        prevList.map((product) =>
          product.id === productId ? { ...product, quantity: 1 } : product
        )
      );
    }
  };

  const onDelete = (productId, productSampleId) => {
    axios
      .delete(`/api/cartItems/${productSampleId}`)
      .catch((err) => console.error(err.response.status));

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
