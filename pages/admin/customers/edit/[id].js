import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../../../styles/EditProduct.module.css";
import LayoutAdmin from "../../../../components/LayoutAdmin";

const EditCustomer = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get(`/api/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch(console.error);
  }, [id]);

  const handlePatchCustomer = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/users/${id}`, {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        address: user.address,
      })
      .then(() => router.push("/admin/customers"))
      .catch(console.error);
  };

  return (
    <LayoutAdmin>
      <div className={styles.pageEdit}>
        <div className={styles.formPopup}>
          <h1 className={styles.titlePopupProducts}>Modifier un client</h1>
          <form
            className={styles.formPopUpAddProducts}
            onSubmit={handlePatchCustomer}
          >
            <div className={styles.inputLign}>
              <div className={styles.productsName}>
                <label htmlFor="nom" className={styles.labelPopUp}>
                  Nom / Prénom
                </label>
                <input
                  className={styles.inputPopUp}
                  id="nom"
                  type="text"
                  value={user.firstname || ""}
                  onChange={(e) =>
                    setUser({ ...user, firstname: e.target.value })
                  }
                  data-cy="modify-product-name"
                ></input>
              </div>
            </div>
            <div className={styles.inputLign}>
              <div className={styles.productsQuantity}>
                <label htmlFor="email" className={styles.labelPopUp}>
                  Email
                </label>
                <input
                  className={styles.inputPopUp}
                  id="email"
                  type="text"
                  value={user.email || ""}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                ></input>
              </div>
              <div className={styles.productsPrice}>
                <label htmlFor="adresse" className={styles.labelPopUp}>
                  Adresse
                </label>
                <input
                  className={styles.inputPopUp}
                  id="adresse"
                  type="text"
                  value={user.address || ""}
                  onChange={(e) =>
                    setUser({ ...user, address: e.target.value })
                  }
                ></input>
              </div>
            </div>
            <div className={styles.btnPopupDiv}>
              <button type="submit" className={styles.buttonPopUp}>
                Modifier
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default EditCustomer;
