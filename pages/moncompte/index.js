import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import styles from "../../styles/Moncompte.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import { useTranslation } from "next-i18next";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useContext, useState, useEffect, useCallback } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function MonCompte() {
  const { t } = useTranslation("signIn");
  const { status } = useSession();
  const { currentUserProfile, updateProfileOnAPI } =
    useContext(CurrentUserContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cp, setCp] = useState("");

  useEffect(() => {
    if (currentUserProfile) {
      setFirstName(currentUserProfile.firstName || "");
      setLastName(currentUserProfile.lastName || "");
      setEmail(currentUserProfile.email);
      setAddress(currentUserProfile.address);
      setCity(currentUserProfile.city);
      setPhoneNumber(currentUserProfile.phoneNumber);
      setCp(currentUserProfile.cp);
    }
  }, [currentUserProfile]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append("firstname", firstName);
      data.append("lastname", lastName);
      data.append("address", address);
      data.append("city", city);
      data.append("phonenumber", phoneNumber);
      data.append("cp", cp);
      data.append("email", email);
      updateProfileOnAPI(data, () => {
        toast.success("profileSaved");
      });
    },
    [
      firstName,
      lastName,
      address,
      city,
      phoneNumber,
      cp,
      email,
      updateProfileOnAPI,
    ]
  );

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
        <h1 className={styles.titleUpd}>{t("mesinfoperso")}</h1>
      </div>

      <div className={styles.updRegisterForm}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inpNameLastName}>
            <label className={styles.labelStyle} htmlFor="firstName">
              {t("prenom")}
              <input
                className={styles.inputUpdatePersInfo}
                type="text"
                id="firstName"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label className={styles.labelStyle} htmlFor="name">
              {t("nom")}
              <input
                className={styles.inputUpdatePersInfo}
                type="text"
                id="name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>
          <label className={styles.labelStyle} htmlFor="adresse">
            {t("adresse")}
            <input
              className={styles.bigInputUpdPersInfo}
              type="text"
              id="adresse"
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <div className={styles.codeVille}>
            <label className={styles.labelStyle} htmlFor="codePostal">
              {t("cp")}
              <input
                className={styles.inputUpdatePersInfo}
                type="text"
                id="codePostal"
                onChange={(e) => setCp(e.target.value)}
              />
            </label>
            <label className={styles.labelStyle} htmlFor="ville">
              {t("ville")}
              <input
                className={styles.inputUpdatePersInfo}
                type="text"
                id="ville"
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.codeVille}>
            <label className={styles.labelStyle} htmlFor="telephone">
              {t("Numérodetelephone")}
              <input
                className={styles.bigInputUpdPersInfo}
                type="text"
                id="telephone"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>
            <label className={styles.labelStyle} htmlFor="email">
              {t("adressemail")}
              <input
                className={styles.bigInputUpdPersInfo}
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <button
            className={styles.btnValidateUpd}
            type="submit"
            id="validate-btn"
          >
            {t("valider")}
          </button>
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
        "signIn",
        "footer",
      ])),
    },
  };
}
