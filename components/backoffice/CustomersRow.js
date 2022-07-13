import styles from "../../styles/BackCustomers.module.css";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";
import ValidateDelete from "../ValidateDelete";
import { useQueryClient } from "react-query";

export default function CustomersRow({ backCustomer }) {
  const { addToast } = useToasts();
  const [deleteContainer, setDeleteContainer] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  const notifySuccess = () => {
    addToast("Le client a bien été supprimé", {
      appearance: "success",
    });
  };
  const id = backCustomer.id;

  const handleDelete = async () => {
    return await axios
      .delete(`/api/users/${id}`)
      .then(() => router.push("/admin/customers"))
      .then(() => notifySuccess())
      .then(() => setDeleteContainer(!deleteContainer))
      .then(() => queryClient.invalidateQueries("users"))
      .catch((err) => console.error(err.response.status));
  };
  return (
    <>
      {deleteContainer ? (
        <ValidateDelete
          deleteContainer={deleteContainer}
          setDeleteContainer={setDeleteContainer}
          type={"ce client"}
          message={"Cette action est irréversible et supprimera le client"}
          handleDelete={handleDelete}
        />
      ) : null}
      <tr className={styles.line}>
        <td>{backCustomer.firstname}</td>
        <td>{backCustomer.lastname}</td>
        <td>{backCustomer.email}</td>
        <td>{backCustomer.phone}</td>
        <td>{backCustomer.address}</td>
        <td>{backCustomer.city}</td>
        <td>{backCustomer.zip}</td>
        <td>
          <ul>
            <Link
              className={styles.modifyBtn}
              href={`/admin/customers/edit/${id}`}
            >
              <a data-cy="modify_customer_link">Modifier</a>
            </Link>
            <button
              className={styles.suppBtn}
              onClick={() => setDeleteContainer(!deleteContainer)}
              data-cy="add_customer_button_delete"
            >
              Supprimer
            </button>
          </ul>
        </td>
      </tr>
    </>
  );
}
