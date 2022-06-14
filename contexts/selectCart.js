import { createContext, useState } from "react";
import data from "../components/data";

export const SelectCartContext = createContext();

export const SelectCartProvider = ({ children }) => {
  const { products } = data;

  const [productList, setProductList] = useState([]);

  const onAdd = (product) => {
    const exist = productList.find((x) => x.id === product.id);
    if (!exist) {
      setProductList([...productList, { ...product, quantity: 1 }]);
    } else {
      setProductList(productList.filter((x) => x.id !== product.id));
    }
  };

  const onUpdate = (id, newQuantity) => {
    let quantity = parseInt(newQuantity, 10);
    if (isNaN(quantity)) {
      quantity = 0;
    }
    setProductList((prevList) =>
      prevList.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const onValidate = (id, newQuantity) => {
    if (newQuantity === "") {
      setProductList((prevList) =>
        prevList.map((product) =>
          product.id === id ? { ...product, quantity: 1 } : product
        )
      );
    }
  };

  const onDelete = (id) => {
    setProductList((prevList) =>
      prevList.filter((product) => product.id !== id)
    );
  };

  return (
    <SelectCartContext.Provider
      value={{
        products,
        productList,
        setProductList,
        onAdd,
        onUpdate,
        onValidate,
        onDelete,
      }}
    >
      {children}
    </SelectCartContext.Provider>
  );
};
