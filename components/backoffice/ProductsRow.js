import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";
import ValidateDelete from "../ValidateDelete";
import styles from "../../styles/BackProduits.module.css";
import { useQueryClient } from "react-query";

export default function ProductsRow({ backProduct }) {
  const { addToast } = useToasts();
  const [deleteContainer, setDeleteContainer] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();

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
      .then(() => queryClient.invalidateQueries("products"))
      .catch((err) => console.error(err.response.status));
  };

  return (
    <>
      {deleteContainer ? (
        <ValidateDelete
          deleteContainer={deleteContainer}
          setDeleteContainer={setDeleteContainer}
          type={"ce produit"}
          message={"Cette action est irréversible et supprimera le produit"}
          handleDelete={handleDelete}
        />
      ) : null}

      <tr className={styles.line}>
        <td>
          <Image
            src={backProduct.pictures[0].url}
            height={"70px"}
            width={"70px"}
            alt="poussette logo"
          />
        </td>
        <td>{backProduct.name}</td>
        <td>{backProduct.priceCategory.name}</td>
        <td>{backProduct.brand}</td>
        <td>
          <div>
            <Link
              className={styles.modifyButton}
              href={`/admin/produits/edit/${id}`}
            >
              <a>Modifier</a>
            </Link>
            <div>
              <button
                className={styles.suppButton}
                onClick={() => setDeleteContainer(!deleteContainer)}
                data-cy="add_product_button_delete"
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
