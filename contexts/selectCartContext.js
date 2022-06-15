import { createContext, useState } from "react";
import data from "../components/Cart/data";

export const SelectCartContext = createContext();

export const SelectCartProvider = ({ children }) => {
  const { products } = data;

  const [selectProducts, setSelectProducts] = useState([]);

  const onAdd = (product) => {
    const exist = selectProducts.find((x) => x.id === product.id);
    if (!exist) {
      setSelectProducts([...selectProducts, { ...product, quantity: 1 }]);
    } else {
      setSelectProducts(selectProducts.filter((x) => x.id !== product.id));
    }
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
        products,
        selectProducts,
        setSelectProducts,
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
