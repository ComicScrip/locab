import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";
import ValidateDelete from "../ValidateDelete";
import styles from "../../styles/BackProduits.module.css";
import { useQueryClient } from "react-query";

export default function PriceRow({ backProduct }) {
  const { addToast } = useToasts();
  const [deleteContainer, setDeleteContainer] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  const notifySuccess = () => {
    addToast("Le prix a bien été supprimé", {
      appearance: "success",
    });
  };
  const id = backProduct.id;

  const handleDelete = async () => {
    return await axios
      .delete(`/api/priceCategory/${id}`)
      .then(() => router.push("/admin/prix"))
      .then(() => notifySuccess())
      .then(() => setDeleteContainer(!deleteContainer))
      .then(() => queryClient.invalidateQueries("price"))
      .catch((err) => console.error(err.response.status));
  };

  return (
    <>
      {deleteContainer ? (
        <ValidateDelete
          deleteContainer={deleteContainer}
          setDeleteContainer={setDeleteContainer}
          type={"ce prix"}
          message={"Cette action est irréversible et supprimera le prix"}
          handleDelete={handleDelete}
        />
      ) : null}

      <tr className={styles.line}>
        <td>{backProduct.name}</td>
        <td>{backProduct.oneDay}</td>
        <td>{backProduct.sixteenDays}</td>
        <td>
          <div>
            <Link
              className={styles.modifyButton}
              href={`/admin/prix/edit/${id}`}
            >
              <a>Modifier</a>
            </Link>
            <div>
              <button
                className={styles.suppButton}
                onClick={() => setDeleteContainer(!deleteContainer)}
                data-cy="add_price_button_delete"
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
