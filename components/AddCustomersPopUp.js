import { useState } from "react";
import axios from "axios";
import styles from "../styles/AddProductsPopUp.module.css";
import { useQueryClient } from "react-query";

function AddCustomersPopUp({ show, setShow }) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const queryClient = useQueryClient();

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <h1 className={styles.titlePopupProducts}>Ajouter un client</h1>
          <form className={styles.formPopUpAddProducts} onSubmit={handleSubmit}>
            <div className={styles.inputLign}>
              <div className={styles.productsName}>
                <label htmlFor="nom" className={styles.labelPopUp}>
                  Nom
                </label>
                <input
                  className={styles.inputPopUp}
                  id="nom"
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
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
                ></input>
              </div>
              <div className={styles.productsMark}>
                <label htmlFor="email" className={styles.labelPopUp}>
                  Email
                </label>
                <input
                  className={styles.inputPopUp}
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                ></input>
              </div>
            </div>
            <div className={styles.inputLign}>
              <div className={styles.productsQuantity}>
                <label htmlFor="city" className={styles.labelPopUp}>
                  Ville
                </label>
                <input
                  className={styles.inputPopUp}
                  id="ville"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
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
                ></input>
                <label htmlFor="zip" className={styles.labelPopUp}>
                  Code postal
                </label>
                <input
                  className={styles.inputPopUp}
                  id="zip"
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="password" className={styles.labelPopUp}>
                  Mot de passe
                </label>
                <input
                  className={styles.inputPopUp}
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
            </div>

            <div className={styles.btnPopupDiv}>
              <button type="submit" className={styles.buttonPopUp}>
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