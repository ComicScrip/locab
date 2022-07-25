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

  const { currentUserProfile, updateProfileOnAPI } =
    useContext(CurrentUserContext);

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
      updateProfileOnAPI(
        {
          firstname: firstName,
          lastname: lastName,
          address,
          city,
          phone,
          email,
          zip,
        },
        () => {
          toast.success(t("TOASTprofil"));
        }
      );
    },
    [
      firstName,
      lastName,
      address,
      city,
      phone,
      zip,
      email,
      updateProfileOnAPI,
      t,
    ]
  );

  useEffect(() => {
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
    <Layout pageTitle={t("title")}>
      <Banner />
      <div className={styles.titleParaContainerUpdPers}>
        {" "}
        <Link href="/profile" title="profile">
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
