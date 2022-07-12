import { useState } from "react";
import axios from "axios";
import styles from "../styles/AddCustomer.module.css";
import { useQueryClient } from "react-query";
import { passwordStrength } from "check-password-strength";

function AddCustomersPopUp({ show, setShow }) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const queryClient = useQueryClient();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (["Too weak", "Weak"].includes(passwordStrength(password).value))
      return setError(
        "Votre mot de passe doit contenir au moins une majuscule, une minuscule, un caractère spécial et un chiffre"
      );
    axios
      .post(`/api/users`, {
        firstname,
        lastname,
        city,
        password,
        phone,
        zip,
        email,
        address,
      })
      .then(() => {
        setFirstName("");
        setLastName("");
        setCity("");
        setPassword("");
        setPhone("");
        setZip("");
        setEmail("");
        setAddress("");
        setError("");
      })
      .then(() => {
        setShow(false);
        queryClient.invalidateQueries("users");
      })
      .catch((err) => {
        console.error(err);
      }, []);
  };

  return (
    <div className={`${styles.popup} ${show ? styles.active : ""} `}>
      <div className={`${styles.popup__content} ${show ? styles.active : ""}`}>
        {show && (
          <span onClick={() => setShow(false)} className={styles.popup__close}>
            &times;
          </span>
        )}
        <div className={styles.formPopup}>
          <h1 className={styles.titlePopupCustomers}>Ajouter un client</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.customerDuoLabel}>
              <label htmlFor="nom" className={styles.labelPopUp}>
                Nom
              </label>
              <input
                className={styles.inputPopUp}
                id="nom"
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                data-cy="add_customer_lastname"
              ></input>
              <label htmlFor="prénom" className={styles.labelPopUp}>
                Prénom
              </label>
              <input
                className={styles.inputPopUp}
                id="prénom"
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                data-cy="add_customer_firstname"
              ></input>
            </div>
            <div className={styles.customerDuoLabel}>
              <label htmlFor="email" className={styles.labelPopUp}>
                Email
              </label>
              <input
                className={styles.inputPopUp}
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-cy="add_customer_email"
              ></input>
              <label htmlFor="telephone" className={styles.labelPopUp}>
                Téléphone
              </label>
              <input
                className={styles.inputPopUp}
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                data-cy="add_customer_phone"
              ></input>
            </div>
            <div className={styles.customerDuoLabel}>
              <label htmlFor="city" className={styles.labelPopUp}>
                Ville
              </label>
              <input
                className={styles.inputPopUp}
                id="ville"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                data-cy="add_customer_city"
              ></input>
              <label htmlFor="adresse" className={styles.labelPopUp}>
                Adresse
              </label>
              <input
                className={styles.inputPopUp}
                id="caution"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                data-cy="add_customer_address"
              ></input>
            </div>
            <div>
              <label htmlFor="zip" className={styles.labelPopUp}>
                Code postal
              </label>
              <input
                className={styles.inputPopUp}
                id="zip"
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                data-cy="add_customer_zip"
              ></input>

              <label htmlFor="password" className={styles.labelPopUp}>
                Mot de passe
              </label>
              <input
                className={styles.inputPopUp}
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                data-cy="add_customer_password"
              ></input>
              <p style={{ color: "#D28F71", textAlign: "center" }}>{error}</p>
            </div>
            <div className={styles.btnPopupDiv}>
              <button
                type="submit"
                className={styles.buttonPopUp}
                data-cy="add_customer_button"
              >
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCustomersPopUp;
