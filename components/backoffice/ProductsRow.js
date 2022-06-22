// import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";
import ValidateDelete from "../ValidateDelete";
import styles from "../../styles/BackProduits.module.css";

export default function ProductsRow({ backProduct }) {
  const { addToast } = useToasts();
  const [deleteContainer, setDeleteContainer] = useState(false);
  const router = useRouter();

  const notifySuccess = () => {
    addToast("Le produit a bien été supprimé", {
      appearance: "success",
    });
  };
  const id = backProduct.id;

  const handleDelete = async () => {
    return await axios
      .delete(`/api/products/${id}`)
      .then(() => router.push("/admin/produits"))
      .then(() => notifySuccess())
      .then(() => setDeleteContainer(!deleteContainer))
      .catch((err) => console.error(err.response.status));
  };

  return (
    <>
      {deleteContainer ? (
        <ValidateDelete
          deleteContainer={deleteContainer}
          setDeleteContainer={setDeleteContainer}
          type={"ce produit"}
          message={"cette action est irréversible et supprimera le produit"}
          handleDelete={handleDelete}
        />
      ) : null}

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
            <div>
              <button
                className={styles.suppButton}
                onClick={() => setDeleteContainer(!deleteContainer)}
              >
                Supprimer
              </button>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
