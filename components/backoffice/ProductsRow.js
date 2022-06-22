// import Image from "next/image";
//import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/BackProduits.module.css";

export default function ProductsRow({ backProduct }) {
  // const [products, setProducts] = useState([]);

  // const fetchProductList = () => {
  //   axios
  //     .get(`/api/products`)
  //     .then((res) => setProducts(res.data))
  //     .catch((err) => console.error(err));
  // };

  // useEffect(() => {
  //   fetchProductList();
  // }, []);

  const handleDelete = async (id) => {
    console.log("totototototo", id);
    return await axios
      .delete(`/api/products/${id}`)
      .then(() => alert("OKKKKKKKKKK"));
  };

  return (
    <tr className={styles.line}>
      <td>
        {/* <Image
          src={backProduct.picture}
          height={"70px"}
          width={"70px"}
          alt="poussette logo"
        /> */}
      </td>
      <td>{backProduct.name}</td>
      <td>{backProduct.priceCategoryId}</td>
      {/* <td>{backProduct.stock}</td> */}
      <td>{backProduct.brand}</td>
      <td>
        <div>
          <div className={styles.modifyButton}>Modifier</div>
          <div className={styles.suppButton}>
            <button onClick={() => handleDelete(backProduct.id)}>
              Supprimer
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}
