import styles from "../../styles/BackProduits.module.css";
import ValidateDelete from "../ValidateDelete";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";
import { useQueryClient } from "react-query";

export default function ReferencesRow({ backReference }) {
  const [deleteContainer, setDeleteContainer] = useState(false);
  const router = useRouter();
  const { addToast } = useToasts();
  const queryClient = useQueryClient();

  const notifySuccess = () => {
    addToast("La référence a bien été supprimé", {
      appearance: "success",
    });
  };
  const id = backReference.id;

  const handleDelete = async () => {
    return await axios
      .delete(`/api/productSamples/${id}`)
      .then(() => router.push("/admin/references"))
      .then(() => notifySuccess())
      .then(() => setDeleteContainer(!deleteContainer))
      .then(() => queryClient.invalidateQueries("productSamples"))
      .catch((err) => console.error(err.response.status));
  };

  return (
    <tr className={styles.line}>
      {deleteContainer ? (
        <ValidateDelete
          deleteContainer={deleteContainer}
          setDeleteContainer={setDeleteContainer}
          type={"ce produit"}
          message={"Cette action est irréversible et supprimera le produit"}
          handleDelete={handleDelete}
        />
      ) : null}

      <td>{backReference.referenceNumber}</td>
      <td>{backReference.product.name}</td>
      <td>{backReference.premise.name}</td>
      <td>{backReference.premise.city}</td>
      <td>{backReference.condition}</td>
      <td>
        <div>
          <Link
            className={styles.modifyButton}
            href={`/admin/references/edit/${id}`}
          >
            <a data-cy="modify_button">Modifier</a>
          </Link>
        </div>
        <div>
          <button
            className={styles.suppButton}
            onClick={() => setDeleteContainer(!deleteContainer)}
            data-cy="add_product_button_delete"
          >
            Supprimer
          </button>
        </div>
      </td>
    </tr>
  );
}
