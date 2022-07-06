import Layout from "../../../components/Layout";
import Banner from "../../../components/Banner";
import styles from "../../../styles/Moncompte.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CurrentUserContext } from "../../../contexts/currentUserContext";
import { useTranslation } from "next-i18next";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useContext, useState, useCallback } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function MonCompte() {
  const { t } = useTranslation("profile");
  const { status } = useSession();

  // const { updateUser, setUpdateUser } = useContext(CurrentUserContext);
  const { currentUserProfile, updateProfileOnAPI } =
    useContext(CurrentUserContext);
  // const id = currentUserProfile?.id;

  // useEffect(() => {
  //   id &&
  //     axios
  //       .get(`/api/users/${id}`)
  //       .then((res) => setUpdateUser(res.data))
  //       .catch((err) => {
  //         console.error(err.response.data);
  //       });
  // }, [id, setUpdateUser]);

  // const handlePatch = (e) => {
  //   e.preventDefault();
  //   axios.patch(`/api/profile/`, {
  //     id: updateUser.id,
  //     firstname: updateUser.firstname,
  //     lastname: updateUser.lastname,
  //     email: updateUser.email,
  //     address: updateUser.address,
  //     city: updateUser.city,
  //     phone: updateUser.phone,
  //     zip: updateUser.zip,
  //   });
  //   toast("Vos modifications ont bien été prises en compte", {
  //     theme: "light",
  //     type: "success",
  //   });
  // };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append("firstname", firstName);
      data.append("lastname", lastName);
      data.append("address", address);
      data.append("city", city);
      data.append("phonenumber", phone);
      data.append("zip", zip);
      data.append("email", email);
      updateProfileOnAPI(data, () => {
        toast.success("Vos modifications ont bien été prises en compte");
      });
    },
    [firstName, lastName, address, city, phone, zip, email, updateProfileOnAPI]
  );

  useEffect(() => {
    console.log(currentUserProfile);
    if (currentUserProfile) {
      setFirstName(currentUserProfile.firstname || "");
      setLastName(currentUserProfile.lastname || "");
      setEmail(currentUserProfile.email || "");
      setAdress(currentUserProfile.address || "");
      setCity(currentUserProfile.city || "");
      setPhone(currentUserProfile.phone || "");
      setZip(currentUserProfile.zip || "");
    }
  }, [currentUserProfile]);

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  return (
    <Layout>
      <Banner />
      <div className={styles.titleParaContainerUpdPers}>
        {" "}
        <Link href="/signup" title="signup">
          <a className={styles.linkParaStyle}>
            <BsArrowLeft
              style={{
                verticalAlign: "middle",
              }}
            />{" "}
            {t("retourcompte")}
          </a>
        </Link>
        <div className={styles.titleMediaQ}>
          {" "}
          <h1 className={styles.titleUpd}>{t("mesinfoperso")}</h1>
        </div>
      </div>

      <div className={styles.updRegisterForm}>
        <form onSubmit={handleSubmit} className={styles.formStyle}>
          <div className={styles.inpNameLastName}>
            <label className={styles.labelStyle} htmlFor="firstName">
              {t("prenom")}
              <input
                className={styles.inputUpdatePersInfo}
                name="firstname"
                type="text"
                id="firstName"
                data-cy="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
            <label className={styles.labelStyle} htmlFor="name">
              {t("nom")}
              <input
                className={styles.inputUpdatePersInfo}
                name="lastname"
                type="text"
                id="name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
          </div>
          <label className={styles.labelStyle} htmlFor="adresse">
            {t("adresse")}
            <input
              className={styles.bigInputUpdPersInfo}
              name="address"
              type="text"
              id="adresse"
              data-cy="address"
              value={address}
              onChange={(e) => setAdress(e.target.value)}
              required
            />
          </label>
          <div className={styles.codeVille}>
            <label className={styles.labelStyle} htmlFor="codePostal">
              {t("cp")}
              <input
                className={styles.inputUpdatePersInfo}
                name="zip"
                type="text"
                id="codePostal"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </label>
            <label className={styles.labelStyle} htmlFor="ville">
              {t("ville")}
              <input
                className={styles.inputUpdatePersInfo}
                name="city"
                type="text"
                id="ville"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </label>
          </div>
          <div className={styles.codeVille}>
            <label className={styles.labelStyle} htmlFor="telephone">
              {t("Numérodetelephone")}
              <input
                className={styles.bigInputUpdPersInfo}
                name="phone"
                type="tel"
                id="telephone"
                value={phone}
                data-cy="phone"
                placeholder="06 00 00 00 00"
                pattern="[+]?[0-9]*$"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
            <label className={styles.labelStyle} htmlFor="email">
              {t("adressemail")}
              <input
                className={styles.bigInputUpdPersInfo}
                name="email"
                type="email"
                value={email}
                id="email"
                data-cy="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <button
            className={styles.btnValidateUpd}
            type="submit"
            id="validate-btn"
            data-cy="validate-btn"
          >
            {t("valider")}
          </button>
          <ToastContainer />
        </form>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "banner",
        "header",
        "common",
        "profile",
        "footer",
      ])),
    },
  };
}
