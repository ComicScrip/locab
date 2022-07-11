import styles from "../../styles/BackProduits.module.css";
import ValidateDelete from "../ValidateDelete";

import axios from "axios";
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
    addToast("Le produit a bien été supprimé", {
      appearance: "success",
    });
  };
  const id = backReference.id;

  const handleDelete = async () => {
    return await axios
      .delete(`/api/productSample/${id}`)
      .then(() => router.push("/admin/references"))
      .then(() => notifySuccess())
      .then(() => setDeleteContainer(!deleteContainer))
      .then(() => queryClient.invalidateQueries("productSample"))
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
      <td>{backReference.premise.name}</td>
      <td>{backReference.premise.city}</td>
      <td>{backReference.condition}</td>
      <td>
        <ul>
          <li className={styles.modifyButton}>Modifier</li>
          <button
            className={styles.suppButton}
            onClick={() => setDeleteContainer(!deleteContainer)}
            data-cy="add_product_button_delete"
          >
            Supprimer
          </button>
        </ul>
      </td>
    </tr>
  );
}
