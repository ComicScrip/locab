import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../../../styles/EditUser.module.css";
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
        zip: user.zip,
        city: user.city,
        phone: user.city,
      })
      .then(() => router.push("/admin/customers"))
      .catch(console.error);
  };

  return (
    <LayoutAdmin>
      <div className={styles.pageEdit}>
        <div className={styles.formPopup}>
          <h1 className={styles.titlePopupUser}>Modifier un client</h1>
          <form
            className={styles.formPopUpAddUser}
            onSubmit={handlePatchCustomer}
          >
            <div className={styles.inputLign}>
              <div className={styles.userName}>
                <label htmlFor="nom" className={styles.labelPopUp}>
                  Prénom
                </label>
                <input
                  className={styles.inputPopUp}
                  id="firstname"
                  type="text"
                  value={user.firstname || ""}
                  onChange={(e) =>
                    setUser({ ...user, firstname: e.target.value })
                  }
                  data-cy="modify-customer-firstname"
                ></input>
              </div>
              <div className={styles.userName}>
                <label htmlFor="nom" className={styles.labelPopUp}>
                  Nom
                </label>
                <input
                  className={styles.inputPopUp}
                  id="Nom"
                  type="text"
                  value={user.lastname || ""}
                  onChange={(e) =>
                    setUser({ ...user, lastname: e.target.value })
                  }
                  data-cy="modify-customer-lastname"
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
            </div>
            <div className={styles.productsPrice}>
              <label htmlFor="adresse" className={styles.labelPopUp}>
                Telephone
              </label>
              <input
                className={styles.inputPopUp}
                id="phone"
                type="tel"
                value={user.phone || ""}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
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
                onChange={(e) => setUser({ ...user, address: e.target.value })}
              ></input>
            </div>

            <div className={styles.productsPrice}>
              <label htmlFor="adresse" className={styles.labelPopUp}>
                Ville
              </label>
              <input
                className={styles.inputPopUp}
                id="ville"
                type="text"
                value={user.city || ""}
                onChange={(e) => setUser({ ...user, city: e.target.value })}
              ></input>
            </div>
            <div className={styles.productsPrice}>
              <label htmlFor="adresse" className={styles.labelPopUp}>
                Code postal
              </label>
              <input
                className={styles.inputPopUp}
                id="zip"
                type="text"
                value={user.zip || ""}
                onChange={(e) => setUser({ ...user, zip: e.target.value })}
              ></input>
            </div>

            <div className={styles.btnPopupDiv}>
              <button
                type="submit"
                className={styles.buttonPopUp}
                data-cy="modify-customer-button"
              >
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
