import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import qs from "query-string";
import { useSession } from "next-auth/react";

export const SelectCartContext = createContext();

export const SelectCartProvider = ({ children }) => {
  const [selectProducts, setSelectProducts] = useState([]);
  const [productList, setProductList] = useState([]);
  const [customerId, setCustomerId] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const router = useRouter();
  const { city = "", showUnavailable = true } = router.query;

  const { status } = useSession();

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`/api/products?${qs.stringify(router.query)}`, {
        signal: controller.signal,
      })
      .then((response) => response.data)
      .then((data) => {
        setProductList(data);
      });
  }, [router.query]);

  useEffect(() => {
    if (status === "authenticated") {
      axios
        .get(`/api/currentUserProfile`)
        .then((response) => response.data)
        .then((data) => {
          setCustomerId(data);
        });
    }
  }, [status]);

  useEffect(() => {
    if (selectProducts.length > 0) {
      axios
        .get(`/api/cartItems`)
        .then((response) => response.data)
        .then((data) => {
          setCartItems(data);
        });
    }
  }, [selectProducts.length]);

  const setSearchParams = (newSearch) => {
    const queryString = qs.stringify(
      { ...router.query, ...newSearch },
      { skipEmptyString: true }
    );
    router.push(`/reservation${queryString ? "?" : ""}${queryString}`);
  };

  const onAdd = (product) => {
    const exist = selectProducts.find((x) => x.id === product.id);
    const cartItemToDelete = cartItems.find(
      (x) => x.productSampleId === product.productSamples[0].id
    );

    if (!exist) {
      axios
        .post(`/api/cartItems`, {
          customerId: customerId.id,
          quantity: 1,
          productSampleId: product.productSamples[0].id,
        })
        .catch((err) => {
          console.error(err);
        }, []);

      setSelectProducts([...selectProducts, { ...product, quantity: 1 }]);
    } else {
      const id = Object.values(cartItemToDelete).at(0);

      axios
        .delete(`/api/cartItems/${id}`)
        .catch((err) => console.error(err.response.status));

      setSelectProducts(selectProducts.filter((x) => x.id !== product.id));
    }
  };

  const onUpdate = (productId, productSampleId, newQuantity) => {
    const cartItemToDelete = cartItems.find(
      (x) => x.productSampleId === productSampleId
    );
    const id = Object.values(cartItemToDelete).at(0);

    let quantity = parseInt(newQuantity, 10);
    if (isNaN(quantity)) {
      quantity = 0;
    }

    axios
      .patch(`/api/cartItems/${id}`, {
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
    const cartItemToDelete = cartItems.find(
      (x) => x.productSampleId === productSampleId
    );
    const id = Object.values(cartItemToDelete).at(0);

    if (newQuantity === "") {
      axios
        .patch(`/api/cartItems/${id}`, {
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
    const cartItemToDelete = cartItems.find(
      (x) => x.productSampleId === productSampleId
    );
    const id = Object.values(cartItemToDelete).at(0);

    axios
      .delete(`/api/cartItems/${id}`)
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
