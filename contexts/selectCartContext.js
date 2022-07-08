import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import qs from "query-string";

export const SelectCartContext = createContext();

export const SelectCartProvider = ({ children }) => {
  const [productSampleList, setProductSampleList] = useState([]);
  const [selectProducts, setSelectProducts] = useState([]);
  const [productList, setProductList] = useState([]);

  const [customerId, setCustomerId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productSampleId, setProductSampleId] = useState("");

  const router = useRouter();
  const { city = "Lyon", showUnavailable = true } = router.query;

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

  console.log(qs.stringify(router.query));

  const setSearchParams = (newSearch) => {
    const queryString = qs.stringify(
      { ...router.query, ...newSearch },
      { skipEmptyString: true }
    );
    router.push(`/reservation${queryString ? "?" : ""}${queryString}`);
  };

  useEffect(() => {
    axios
      .get(`/api/productSamples`)
      .then((response) => response.data)
      .then((data) => {
        setProductSampleList(data);
      });
  }, []);

  const onAdd = (product) => {
    const exist = selectProducts.find((x) => x.id === product.id);
    if (!exist) {
      setSelectProducts([...selectProducts, { ...product, quantity: 1 }]);
    } else {
      setSelectProducts(selectProducts.filter((x) => x.id !== product.id));
    }

    const existProductSample = productSampleList.find(
      (x) => x.productId === product.id
    );
    const customerIdNumber = parseInt(customerId);
    const quantityNumber = parseInt(quantity);
    const productSampleIdNumber = parseInt(productSampleId);

    if (existProductSample)
      axios
        .post(`/api/cartItems`, {
          customerId: customerIdNumber,
          quantity: quantityNumber,
          productSampleId: productSampleIdNumber,
        })
        .then(() => {
          setCustomerId("");
          setQuantity("");
          setProductSampleId("");
        })
        .catch((err) => {
          console.error(err);
        }, []);
  };

  const onUpdate = (id, newQuantity) => {
    let quantity = parseInt(newQuantity, 10);
    if (isNaN(quantity)) {
      quantity = 0;
    }
    setSelectProducts((prevList) =>
      prevList.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const onValidate = (id, newQuantity) => {
    if (newQuantity === "") {
      setSelectProducts((prevList) =>
        prevList.map((product) =>
          product.id === id ? { ...product, quantity: 1 } : product
        )
      );
    }
  };

  const onDelete = (id) => {
    setSelectProducts((prevList) =>
      prevList.filter((product) => product.id !== id)
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
