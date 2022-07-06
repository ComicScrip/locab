import styles from "../styles/ValidateDelete.module.css";
import valideIcon from "../public/icons/valide.png";
import annuleIcon from "../public/icons/annule.png";
import Image from "next/image";

export default function ValidateDelete({
  type,
  message,
  handleDelete,
  deleteContainer,
  setDeleteContainer,
}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.deleteContainer}>
        <p>Etes-vous certain de vouloir supprimer {type}?</p>
        <div className={styles.validationBtns}>
          <button
            onClick={() => {
              setDeleteContainer(!deleteContainer);
            }}
          >
            <Image
              src={annuleIcon}
              width={90}
              height={90}
              alt="logo-annulation"
            />
          </button>
          <button onClick={handleDelete}>
            <Image
              src={valideIcon}
              width={90}
              height={90}
              alt="logo-validation"
              data-cy="add_product_button_delete_confirmation"
            />
          </button>
        </div>
        <div className={styles.messageContainer}>
          nota :<div className={styles.messageInfo}>{message}</div>
        </div>
      </div>
    </div>
  );
}
