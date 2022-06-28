import Layout from "../../../components/Layout";
import Banner from "../../../components/Banner";
import styles from "../../../styles/Moncompte.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CurrentUserContext } from "../../../contexts/currentUserContext";
import { useTranslation } from "next-i18next";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function MonCompte() {
  const { t } = useTranslation("signIn");
  const { status } = useSession();

  const { currentUserProfile, updateUser, setUpdateUser } =
    useContext(CurrentUserContext);
  const id = currentUserProfile?.id;

  useEffect(() => {
    id &&
      axios
        .get(`/api/users/${id}`)
        .then((res) => setUpdateUser(res.data))
        .catch((err) => {
          console.error(err.response.data);
        });
  }, [id, setUpdateUser]);

  const handlePatch = (e) => {
    e.preventDefault();
    axios.patch(`/api/users/${id}`, {
      id: updateUser.id,
      firstname: updateUser.firstname,
      lastname: updateUser.lastname,
      email: updateUser.email,
      address: updateUser.address,
      city: updateUser.city,
      phone: updateUser.phone,
      zip: updateUser.zip,
    });
    toast("Vos modifications ont bien été prises en comptes", {
      theme: "light",
      type: "success",
    });
  };

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
        <form onSubmit={handlePatch} className={styles.formStyle}>
          <div className={styles.inpNameLastName}>
            <label className={styles.labelStyle} htmlFor="firstName">
              {t("prenom")}
              <input
                className={styles.inputUpdatePersInfo}
                name="firstname"
                type="text"
                id="firstName"
                value={updateUser.firstname || ""}
                onChange={(e) =>
                  setUpdateUser({ ...updateUser, firstname: e.target.value })
                }
              />
            </label>
            <label className={styles.labelStyle} htmlFor="name">
              {t("nom")}
              <input
                className={styles.inputUpdatePersInfo}
                name="lastname"
                type="text"
                id="name"
                value={updateUser.lastname || ""}
                onChange={(e) =>
                  setUpdateUser({ ...updateUser, lastname: e.target.value })
                }
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
              value={updateUser.address || ""}
              onChange={(e) =>
                setUpdateUser({ ...updateUser, address: e.target.value })
              }
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
                value={updateUser.zip || ""}
                onChange={(e) =>
                  setUpdateUser({ ...updateUser, zip: e.target.value })
                }
              />
            </label>
            <label className={styles.labelStyle} htmlFor="ville">
              {t("ville")}
              <input
                className={styles.inputUpdatePersInfo}
                name="city"
                type="text"
                id="ville"
                value={updateUser.city || ""}
                onChange={(e) =>
                  setUpdateUser({ ...updateUser, city: e.target.value })
                }
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
                data-cy="phone"
                value={updateUser.phone || ""}
                onChange={(e) =>
                  setUpdateUser({ ...updateUser, phone: e.target.value })
                }
              />
            </label>
            <label className={styles.labelStyle} htmlFor="email">
              {t("adressemail")}
              <input
                className={styles.bigInputUpdPersInfo}
                name="email"
                type="email"
                id="email"
                data-cy="email"
                value={updateUser.email || ""}
                onChange={(e) =>
                  setUpdateUser({ ...updateUser, email: e.target.value })
                }
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
        </form>
        <ToastContainer />
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
        "signIn",
        "footer",
      ])),
    },
  };
}
