import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";
import ValidateDelete from "../ValidateDelete";
import styles from "../../styles/BackProduits.module.css";
import { useQueryClient } from "react-query";
import dayjs from "dayjs";

export default function OrderRow({ order }) {
  const { addToast } = useToasts();
  const [deleteContainer, setDeleteContainer] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  const notifySuccess = () => {
    addToast("Le produit a bien été supprimé", {
      appearance: "success",
    });
  };
  const id = order.id;

  const handleDelete = async () => {
    return await axios
      .delete(`/api/orders/${id}`)
      .then(() => router.push("/admin/reservations"))
      .then(() => notifySuccess())
      .then(() => setDeleteContainer(!deleteContainer))
      .then(() => queryClient.invalidateQueries("orders"))
      .catch((err) => console.error(err.response.status));
  };

  const orderStartDateOld = order.startDate;
  const orderStartDateNewFormat = dayjs(orderStartDateOld).format("DD/MM/YY");
  const orderEndDateOld = order.endDate;
  const orderEndDateNewFormat = dayjs(orderEndDateOld).format("DD/MM/YY");

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
        <td>{order.orderNumber}</td>
        <td>{order.city || order.billingCity}</td>
        <td>{order.billingLastname}</td>
        <td>{orderStartDateNewFormat}</td>
        <td>{orderEndDateNewFormat}</td>
        <td>{order.paidPrice}</td>
        <td>
          <div>
            <Link
              className={styles.modifyButton}
              href={`/admin/reservations/${id}`}
            >
              <a data-cy="detailLink">Voir</a>
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
