import styles from "../../styles/Welcome.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import axios from "axios";
import { GiPadlock } from "react-icons/gi";
import { BsPaypal } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import useUserLocation from "../../hooks/useUserLocation";
import useUserStartDate from "../../hooks/useUserStartDate";
import useUserEndDate from "../../hooks/useUserEndDate";
import currentUserContext from "../../contexts/currentUserContext";

export default function Commande() {
  const { t } = useTranslation("signIn");

  const [currentUserProfile] = useContext(currentUserContext);

  // IMPORT DU CONTEXT //

  const [userLocation, setUserLocation] = useUserLocation("");
  const [userStartDate, setUserStartDate] = useUserStartDate("");
  const [userEndDate, setUserEndDate] = useUserEndDate("");

  // FIN CONTEXT //
  const [activeInformations, setActiveInformations] = useState(true);
  const [activeLivraison, setActiveLivraison] = useState(false);
  const [activePayment, setActivePayment] = useState(false);

  const [checkedInformations, setCheckedInformations] = useState(false);
  const [checkedLivraison, setCheckedLivraison] = useState(false);
  const [checkedPayment, setCheckedPayment] = useState(false);

  // FORMULAIRE INFORMATIONS //

  const [userMail, setUserMail] = useState("");
  const [userFirstname, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userZip, setUserZip] = useState("");
  const [userCity, setUserCity] = useState("");

  const [error, setError] = useState("");

  // FORMULAIRE LIVRAISON //

  const [userPartner, setUserPartner] = useState("");
  const [phonePartner, setPhonePartner] = useState("");
  const [partnerFirstName, setPartnerFirstName] = useState("");
  const [partnerLastName, setPartnerLastName] = useState("");
  const [partnerAddress, setPartnerAdress] = useState("");
  const [partnerZip, setPartnerZip] = useState("");
  const [partnerCity, setPartnerCity] = useState("");
  const [userHourArrived, setUserHourArrived] = useState("");
  const [userCommentary, setUserComentary] = useState("");

  /* PARTIE INFORMATIONS */

  const handleSubmitInformations = (e) => {
    e.preventDefault();
    setActiveInformations(!activeInformations);
    setActiveLivraison(!activeLivraison);
    setCheckedInformations(!checkedInformations);
    if (!currentUserProfile) {
      axios
        .post("/api/users", {
          firstname: userFirstname,
          lastname: userLastName,
          address: userAddress,
          zip: userZip,
          city: userCity,
          phone: userPhone,
          email: userMail,
          password: "Toto123/",
        })
        .then((response) => {
          console.log(response);
        })
        .then(() => {
          setUserFirstName("");
          setUserLastName("");
          setUserAddress("");
          setUserCity("");
          setUserMail("");
          setUserZip("");
          setUserPhone("");
        })
        .catch((err) => {
          if (err.response && err.response.status === 409)
            setError("Email déjà utilisé");
        });
    }
  };

  const OpenInformations = (e) => {
    e.preventDefault();
    setActiveInformations(!activeInformations);
  };

  /* PARTIE LIVRAISON */

  const HandleSubmitLivraison = (e) => {
    e.preventDefault();
    setActiveLivraison(!activeLivraison);
    setActivePayment(!activePayment);
    setCheckedLivraison(!checkedLivraison);
    axios
      .post("/api/order", {
        deliveryPhoneNumber: phonePartner,
        deliveryFirstName: partnerFirstName,
        deliveryLastName: partnerLastName,
        deliveryStreet: partnerAddress,
        deliveryZip: partnerZip,
        deliveryCity: partnerCity,
        deliveryArrivalTime: userHourArrived,
        comment: userCommentary,
        startDate: userStartDate,
        endDate: userEndDate,
        orderDate: new Date(),
        premiseId: userLocation,
        delegateParentId: 2,
        partnerId: 5,
      })
      .then(() => {
        setUserPartner("");
        setPhonePartner("");
        setPartnerFirstName("");
        setPartnerLastName("");
        setPartnerAdress("");
        setPartnerZip("");
        setPartnerCity("");
        setUserHourArrived("");
        setUserComentary("");
        setUserLocation("");
        setUserStartDate("");
        setUserEndDate("");
      })
      .catch((err) => {
        if (err.response && err.response.status === 409)
          setError("Email déjà utilisé");
      });
  };

  const OpenLivraison = (e) => {
    e.preventDefault();
    setActiveLivraison(!activeLivraison);
  };

  // PARTIE PAIEMENT

  const HandleSubmitPayment = (e) => {
    e.preventDefault();
    setActivePayment(!activePayment);
    setCheckedPayment(!checkedPayment);
  };

  const OpenPayment = (e) => {
    e.preventDefault();
    setActivePayment(!activePayment);
  };

  // CHANGEMENT DE STYLE SUR LES TITRES //

  const styleDefault = {
    color: "#000000",
  };

  const setStyle = {
    color: "#ACACAC",
  };

  return (
    <Layout>
      <Banner />
      <div className={styles.title}>
        <div className={styles.ligne}>
          <hr className={styles.hr} />
        </div>
        <div className={styles.payment}>
          <h3>
            {" "}
            <GiPadlock className={styles.icon} />
            {t("Paiementsécurisé")}
          </h3>
        </div>
        <div className={styles.ligne}>
          <hr className={styles.hr} />
        </div>
      </div>
      <div className={styles.title}>
        <div className={styles.ligne}>
          <hr className={styles.hr} />
        </div>
        <div className={styles.h2}>
          <h2
            onClick={OpenInformations}
            style={activeInformations ? styleDefault : setStyle}
          >
            {checkedInformations ? (
              <AiOutlineCheck className={styles.check} />
            ) : (
              ""
            )}{" "}
            {t("Informations")}
          </h2>
        </div>
        <div className={styles.ligne}>
          <hr className={styles.hr} />
        </div>
      </div>

      {activeInformations && (
        <>
          <h3 className={styles.h3}>{t("traitementcommande")}</h3>
          <div className={styles.containerbloc}>
            <div className={styles.bloc1}>
              <form className={styles.inscrit}>
                <div className={styles.formemail}>
                  <label htmlFor="email" className={styles.email}>
                    {t("email")}
                  </label>
                  <input
                    className={styles.textarea}
                    id="email"
                    type="email"
                    onChange={(e) => setUserMail(e.target.value)}
                    value={userMail}
                    data-cy="infos_email"
                  />
                </div>
                <div className={styles.name}>
                  <div className={styles.formpassword}>
                    <label htmlFor="name" className={styles.password}>
                      {t("prenom")}
                    </label>
                    <input
                      className={styles.textarea}
                      id="firstname"
                      type="name"
                      onChange={(e) => setUserFirstName(e.target.value)}
                      value={userFirstname}
                      data-cy="infos_firstname"
                    />
                  </div>
                  <div className={styles.formpassword}>
                    <label htmlFor="name" className={styles.password}>
                      {t("nom")}
                    </label>
                    <input
                      className={styles.textarea}
                      id="secondname"
                      type="name"
                      onChange={(e) => setUserLastName(e.target.value)}
                      value={userLastName}
                      data-cy="infos_lastname"
                    />
                  </div>
                </div>
                <div className={styles.formpassword}>
                  <label htmlFor="adress" className={styles.password}>
                    {t("adresse")}
                  </label>
                  <input
                    className={styles.textarea}
                    id="adress"
                    type="adress"
                    onChange={(e) => setUserAddress(e.target.value)}
                    value={userAddress}
                    data-cy="infos_address"
                  />
                </div>
                <div className={styles.formpassword}>
                  <label htmlFor="adress" className={styles.password}>
                    {t("Numérodetelephone")}
                  </label>
                  <input
                    className={styles.textarea}
                    id="phone"
                    type="phone"
                    onChange={(e) => setUserPhone(e.target.value)}
                    value={userPhone}
                    data-cy="infos_phone"
                  />
                </div>
                <div className={styles.name}>
                  <div className={styles.formpassword}>
                    <label htmlFor="codepostale" className={styles.password}>
                      {t("cp")}
                    </label>
                    <input
                      className={styles.textarea}
                      id="codepostal"
                      type="adress"
                      onChange={(e) => setUserZip(e.target.value)}
                      value={userZip}
                      data-cy="infos_zip"
                    />
                  </div>
                  <div className={styles.formpassword}>
                    <label htmlFor="city" className={styles.password}>
                      {t("ville")}
                    </label>
                    <input
                      className={styles.textarea}
                      id="city"
                      type="city"
                      onChange={(e) => setUserCity(e.target.value)}
                      value={userCity}
                      data-cy="infos_city"
                    />
                  </div>
                </div>

                <div className={styles.formbutton}>
                  <p style={{ color: "#D28F71", textAlign: "center" }}>
                    {error}
                  </p>
                  <button
                    className={styles.button2}
                    type="submit"
                    onClick={handleSubmitInformations}
                    data-cy="infos_submit_button"
                  >
                    {t("tolivraison")}
                  </button>
                </div>
              </form>
            </div>
          </div>{" "}
        </>
      )}
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.ligne}>
            <hr className={styles.hr} />
          </div>
          <div className={styles.h2}>
            <h2
              onClick={OpenLivraison}
              style={activeLivraison ? styleDefault : setStyle}
            >
              {checkedLivraison ? (
                <AiOutlineCheck className={styles.check} />
              ) : (
                ""
              )}{" "}
              {t("Livraison")}
            </h2>
          </div>
          <div className={styles.ligne}>
            <hr className={styles.hr} />
          </div>
        </div>
        {activeLivraison && (
          <>
            <h3 className={styles.h3}>{t("lieudesejour")}</h3>
            <div className={styles.containerbloc}>
              <div className={styles.bloc1}>
                <form className={styles.inscrit}>
                  <div className={styles.formemail}>
                    <label htmlFor="partenaire" className={styles.email}>
                      {t("Partenaire")}
                    </label>
                    <input
                      className={styles.textarea}
                      id="partenaire"
                      type="text"
                      required
                      data-cy="partner_name"
                      onChange={(e) => setUserPartner(e.target.value)}
                      value={userPartner}
                    />
                  </div>
                  <div className={styles.formpassword}>
                    <label htmlFor="partenaire" className={styles.password}>
                      {t("hebergeurphone")}
                    </label>
                    <input
                      className={styles.textarea}
                      id="partenaire"
                      type="text"
                      required
                      data-cy="partner_phone"
                      onChange={(e) => setPhonePartner(e.target.value)}
                      value={phonePartner}
                    />
                  </div>
                  <div className={styles.name}>
                    <div className={styles.formpassword}>
                      <label htmlFor="name" className={styles.password}>
                        {t("hebergeurname")}
                      </label>
                      <input
                        className={styles.textarea}
                        id="firstname"
                        type="name"
                        required
                        data-cy="partner_firstname"
                        onChange={(e) => setPartnerFirstName(e.target.value)}
                        value={partnerFirstName}
                      />
                    </div>
                    <div className={styles.formpassword}>
                      <label htmlFor="name" className={styles.password}>
                        {t("hebergeurlastname")}
                      </label>
                      <input
                        className={styles.textarea}
                        id="secondname"
                        type="name"
                        required
                        data-cy="partner_lastname"
                        onChange={(e) => setPartnerLastName(e.target.value)}
                        value={partnerLastName}
                      />
                    </div>
                  </div>
                  <div className={styles.formpassword}>
                    <label htmlFor="adress" className={styles.password}>
                      {t("adresse")}
                    </label>
                    <input
                      className={styles.textarea}
                      id="adress"
                      type="adress"
                      required
                      data-cy="partner_adress"
                      onChange={(e) => setPartnerAdress(e.target.value)}
                      value={partnerAddress}
                    />
                  </div>
                  <div className={styles.name}>
                    <div className={styles.formpassword}>
                      <label htmlFor="codepostale" className={styles.password}>
                        {t("cp")}
                      </label>
                      <input
                        className={styles.textarea}
                        id="zip"
                        type="adress"
                        required
                        data-cy="partner_zip"
                        onChange={(e) => setPartnerZip(e.target.value)}
                        value={partnerZip}
                      />
                    </div>
                    <div className={styles.formpassword}>
                      <label htmlFor="city" className={styles.password}>
                        {t("ville")}
                      </label>
                      <input
                        className={styles.textarea}
                        id="city"
                        type="city"
                        required
                        data-cy="partner_city"
                        onChange={(e) => setPartnerCity(e.target.value)}
                        value={partnerCity}
                      />
                    </div>
                  </div>
                  <div className={styles.formpassword}>
                    <label htmlFor="hour" className={styles.password}>
                      {t("heurearrive")}
                    </label>
                    <input
                      className={styles.textarea}
                      id="time"
                      type="datetime-local"
                      required
                      data-cy="partner_hour"
                      onChange={(e) => setUserHourArrived(e.target.value)}
                      value={userHourArrived}
                    />
                  </div>
                  <div className={styles.formpassword}>
                    <label htmlFor="hour" className={styles.password}>
                      {t("commentaire")}
                    </label>
                    <input
                      className={styles.textarea2}
                      id="commentaire"
                      type="commentaire"
                      data-cy="partner_comments"
                      required
                      onChange={(e) => setUserComentary(e.target.value)}
                      value={userCommentary}
                    />
                  </div>
                  <div className={styles.formbutton}>
                    <button
                      type="submit"
                      data-cy="partner_submit_button"
                      className={styles.button2}
                      onClick={HandleSubmitLivraison}
                    >
                      {t("topayment")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
        <div className={styles.title}>
          <div className={styles.ligne}>
            <hr className={styles.hr} />
          </div>
          <div className={styles.h2}>
            <h2
              onClick={OpenPayment}
              style={activePayment ? styleDefault : setStyle}
            >
              {t("Paiement")}
            </h2>
          </div>
          <div className={styles.ligne}>
            <hr className={styles.hr} />
          </div>
        </div>
        {activePayment && (
          <>
            <h3 className={styles.h3}>
              {" "}
              <GiPadlock />
              {t("moyendepaiement")}
            </h3>
            <div className={styles.paymentparent}>
              <div className={styles.paymentcontainer}>
                <div className={styles.checkbox}>
                  <input
                    name="subscribe"
                    type="checkbox"
                    className={styles.password}
                    data-cy="payment_checkbox_pyapal"
                  />
                  <label htmlFor="city" className={styles.password}>
                    Paypal <BsPaypal />
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    name="subscribe"
                    type="checkbox"
                    className={styles.password}
                    data-cy="payment_checkbox_cb"
                  />
                  <label htmlFor="city" className={styles.password}>
                    {t("cb")} <FaCcVisa /> <FaCcMastercard />
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    name="subscribe"
                    type="checkbox"
                    className={styles.password}
                    data-cy="payment_checkbox_cgv"
                  />
                  <label htmlFor="city" className={styles.password}>
                    {t("cgv")}
                  </label>
                </div>

                <div className={styles.checkbox}>
                  <input
                    name="subscribe"
                    type="checkbox"
                    className={styles.password}
                    data-cy="payment_checkbox_accept"
                  />
                  <label htmlFor="city" className={styles.password}>
                    {t("cgv2")}
                  </label>
                </div>
                <div className={styles.formbutton}>
                  <button
                    type="submit"
                    className={styles.button2}
                    onClick={HandleSubmitPayment}
                  >
                    {t("confirmcommand")}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
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
        "footer",
        "signIn",
      ])),
    },
  };
}
