import styles from "../../styles/Welcome.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import axios from "axios";
import { GiPadlock } from "react-icons/gi";
import { BsPaypal } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import useSearch from "../../hooks/useSearch";
import useCart from "../../hooks/useCart";
import OrderCart from "../../components/Cart/OrderCart";
import { useToasts } from "react-toast-notifications";
import SearchForm from "../../components/SearchForm";
import { signIn } from "next-auth/react";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import Link from "next/link";

export default function Commande() {
  const { t } = useTranslation("order", "reservation");
  const { addToast } = useToasts();

  const {
    params: { toDate, fromDate, city },
  } = useSearch();

  const { cartItems, setCartItems } = useCart();
  const { currentUserProfile } = useContext(CurrentUserContext);

  const [openSection, setOpenSection] = useState("userInfo");
  const [confirmed, setConfimed] = useState(false);

  const [error] = useState("");

  const [userMail, setUserMail] = useState(currentUserProfile?.email || "");
  const [userFirstname, setUserFirstName] = useState(
    currentUserProfile?.firstname || ""
  );
  const [userLastName, setUserLastName] = useState(
    currentUserProfile?.lastname || ""
  );
  const [userAddress, setUserAddress] = useState(
    currentUserProfile?.address || ""
  );
  const [userPhone, setUserPhone] = useState(currentUserProfile?.phone || "");
  const [userZip, setUserZip] = useState(currentUserProfile?.zip || "");
  const [userCity, setUserCity] = useState(currentUserProfile?.city || "");

  const [userPartner, setUserPartner] = useState("");
  const [phonePartner, setPhonePartner] = useState("");
  const [partnerFirstName, setPartnerFirstName] = useState("");
  const [partnerLastName, setPartnerLastName] = useState("");
  const [partnerAddress, setPartnerAdress] = useState("");
  const [partnerZip, setPartnerZip] = useState("");
  const [partnerCity, setPartnerCity] = useState("");
  const [userHourArrived, setUserHourArrived] = useState("");
  const [userCommentary, setUserComentary] = useState("");

  const [formFilled, setFormFilled] = useState(false);
  useEffect(() => {
    if (!formFilled && currentUserProfile) {
      setFormFilled(true);
      setUserMail(currentUserProfile.email);
      setUserFirstName(currentUserProfile.firstname);
      setUserLastName(currentUserProfile.lastname);
      setUserAddress(currentUserProfile.address);
      setUserZip(currentUserProfile.zip);
      setUserCity(currentUserProfile.city);
      setUserPhone(currentUserProfile.phone);
    }
  }, [currentUserProfile, formFilled]);

  /* PARTIE LIVRAISON */

  const [isDisabled, setIsDisabled] = useState(true);

  const createOrder = (e) => {
    e.preventDefault();
    axios
      .post("/api/orders", {
        deliveryPhoneNumber: phonePartner === "" ? undefined : phonePartner,
        deliveryFirstName:
          partnerFirstName === "" ? undefined : partnerFirstName,
        deliveryLastName: partnerLastName === "" ? undefined : partnerLastName,
        deliveryStreet: partnerAddress === "" ? undefined : partnerAddress,
        deliveryZip: partnerZip === "" ? undefined : partnerZip,
        deliveryCity: partnerCity === "" ? undefined : partnerCity,
        deliveryArrivalTime:
          userHourArrived === "" ? undefined : userHourArrived,
        comment: userCommentary === "" ? undefined : userCommentary,
        startDate: fromDate,
        endDate: toDate,
        orderCity: city,
        billingFirstname: userFirstname,
        billingLastname: userLastName,
        billingStreet: userAddress,
        billingZip: userZip,
        billingCity: userCity,
        billingPhoneNumber: userPhone,
        billingEmail: userMail,
        cartItems,
      })
      .then(() => {
        setConfimed(true);
        setCartItems([]);
      })
      .catch((err) => {
        if (err.response?.data?.code === "OUT_OF_STOCK") {
          console.log(err.response?.details);
          // TODO: update cart
          addToast(t("TOAST"), {
            appearance: "error",
          });
        }
      });
  };

  const styleDefault = {
    color: "#000000",
  };

  const setStyle = {
    color: "#ACACAC",
  };

  if (cartItems.length === 0 && !confirmed) {
    return (
      <>
        <Layout>
          <Banner />
          <div className={styles.paniervide}>
            <h3>{t("paniervide")}</h3>
            <p>{t("retourversreservation")}</p>
            <Link href="/reservation">
              <button className={styles.button2}>
                {t("continuerversreservation")}
              </button>
            </Link>
          </div>
        </Layout>
      </>
    );
  }

  return (
    <Layout>
      <SearchForm />
      <Banner />
      {confirmed ? (
        <p
          style={{
            margin: "auto",
            padding: 50,
            textAlign: "center",
          }}
        >
          {t("thanks")}
        </p>
      ) : (
        <div className={styles.orderContainer}>
          <div>
            <div className={styles.title}>
              <div className={styles.ligne}>
                <hr className={styles.hr} />
              </div>
              <div className={styles.payment}>
                <h3>
                  {" "}
                  <GiPadlock className={styles.icon} />
                  {t("securepayment")}
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
                  onClick={() => setOpenSection("userInfo")}
                  style={openSection === "userInfo" ? styleDefault : setStyle}
                >
                  {openSection === "delivery" || openSection === "payment" ? (
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

            {openSection === "userInfo" && (
              <>
                <h3 className={styles.h3}>{t("traitementcommande")}</h3>
                {!currentUserProfile && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <p>{t("vouspouvez")}</p>
                    <p>{t("envousconnectant")}</p>
                    <button
                      type="button"
                      data-cy="signin_button"
                      className={styles.button}
                      onClick={() =>
                        signIn("credentials", {
                          callbackUrl: `${window.location.origin}/commande`,
                        })
                      }
                    >
                      {t("connecter")}
                    </button>
                  </div>
                )}
                <div className={styles.containerbloc}>
                  <div className={styles.bloc1}>
                    <form
                      className={styles.inscrit}
                      onSubmit={(e) => {
                        e.preventDefault();
                        setOpenSection("delivery");
                        setIsDisabled(false);
                      }}
                    >
                      <div className={styles.formemail}>
                        <label htmlFor="email" className={styles.email}>
                          {t("email")}
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          className={styles.textarea}
                          id="email"
                          type="email"
                          required
                          onChange={(e) => setUserMail(e.target.value)}
                          value={userMail}
                          data-cy="infos_email"
                        />
                      </div>
                      <div className={styles.name}>
                        <div className={styles.formpassword}>
                          <label htmlFor="name" className={styles.password}>
                            {t("prenom")}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            className={styles.textarea}
                            id="firstname"
                            type="name"
                            required
                            onChange={(e) => setUserFirstName(e.target.value)}
                            value={userFirstname}
                            data-cy="infos_firstname"
                          />
                        </div>
                        <div className={styles.formpassword}>
                          <label htmlFor="name" className={styles.password}>
                            {t("nom")}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            className={styles.textarea}
                            id="secondname"
                            required
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
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          className={styles.textarea}
                          id="adress"
                          required
                          type="adress"
                          onChange={(e) => setUserAddress(e.target.value)}
                          value={userAddress}
                          data-cy="infos_address"
                        />
                      </div>
                      <div className={styles.name}>
                        <div className={styles.formpassword}>
                          <label
                            htmlFor="codepostale"
                            className={styles.password}
                          >
                            {t("cp")}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            className={styles.textarea}
                            id="codepostal"
                            required
                            type="adress"
                            onChange={(e) => setUserZip(e.target.value)}
                            value={userZip}
                            data-cy="infos_zip"
                          />
                        </div>
                        <div className={styles.formpassword}>
                          <label htmlFor="city" className={styles.password}>
                            {t("ville")}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            className={styles.textarea}
                            id="city"
                            type="city"
                            required
                            onChange={(e) => setUserCity(e.target.value)}
                            value={userCity}
                            data-cy="infos_city"
                          />
                        </div>
                      </div>

                      <div className={styles.formpassword}>
                        <label htmlFor="adress" className={styles.password}>
                          {t("Numérodetelephone")}
                          <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          className={styles.textarea}
                          id="phone"
                          type="phone"
                          required
                          onChange={(e) => setUserPhone(e.target.value)}
                          value={userPhone}
                          data-cy="infos_phone"
                        />
                      </div>

                      <div className={styles.formbutton}>
                        <p style={{ color: "#D28F71", textAlign: "center" }}>
                          {error}
                        </p>
                        <button
                          className={styles.button2}
                          type="submit"
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
                  <button
                    disabled={isDisabled}
                    onClick={() => setOpenSection("delivery")}
                    style={openSection === "delivery" ? styleDefault : setStyle}
                    className={styles.titleForForm}
                  >
                    {openSection === "payment" ? (
                      <AiOutlineCheck className={styles.check} />
                    ) : (
                      ""
                    )}{" "}
                    {t("Livraison")}
                  </button>
                </div>
                <div className={styles.ligne}>
                  <hr className={styles.hr} />
                </div>
              </div>
              {openSection === "delivery" && (
                <>
                  <h3 className={styles.h3}>{t("lieudesejour")}</h3>
                  <div className={styles.containerbloc}>
                    <div className={styles.bloc1}>
                      <form
                        className={styles.inscrit}
                        onSubmit={(e) => {
                          e.preventDefault();
                          setOpenSection("payment");
                        }}
                      >
                        <div className={styles.formemail}>
                          <label htmlFor="partenaire" className={styles.email}>
                            {t("Partenaire")}
                          </label>
                          <input
                            className={styles.textarea}
                            id="partenaire"
                            type="text"
                            data-cy="partner_name"
                            onChange={(e) => setUserPartner(e.target.value)}
                            value={userPartner}
                          />
                        </div>
                        <div className={styles.formpassword}>
                          <label
                            htmlFor="partenaire"
                            className={styles.password}
                          >
                            {t("hebergeurphone")}
                          </label>
                          <input
                            className={styles.textarea}
                            id="partenaire"
                            type="text"
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
                              data-cy="partner_firstname"
                              onChange={(e) =>
                                setPartnerFirstName(e.target.value)
                              }
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
                              data-cy="partner_lastname"
                              onChange={(e) =>
                                setPartnerLastName(e.target.value)
                              }
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
                            data-cy="partner_adress"
                            onChange={(e) => setPartnerAdress(e.target.value)}
                            value={partnerAddress}
                          />
                        </div>
                        <div className={styles.name}>
                          <div className={styles.formpassword}>
                            <label
                              htmlFor="codepostale"
                              className={styles.password}
                            >
                              {t("cp")}
                            </label>
                            <input
                              className={styles.textarea}
                              id="zip"
                              type="adress"
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
                            type="time"
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
                            onChange={(e) => setUserComentary(e.target.value)}
                            value={userCommentary}
                          />
                        </div>
                        <div className={styles.formbutton}>
                          <button
                            type="submit"
                            data-cy="partner_submit_button"
                            className={styles.button2}
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
                  <button
                    disabled={isDisabled}
                    onClick={() => setOpenSection("payment")}
                    style={openSection === "delivery" ? styleDefault : setStyle}
                    className={styles.titleForForm}
                  >
                    {t("Paiement")}
                  </button>
                </div>
                <div className={styles.ligne}>
                  <hr className={styles.hr} />
                </div>
              </div>
              {openSection === "payment" && (
                <>
                  <h3 className={styles.h3}>
                    {" "}
                    <GiPadlock />
                    {t("moyendepaiement")}
                  </h3>
                  <div className={styles.paymentparent}>
                    <form
                      className={styles.paymentcontainer}
                      onSubmit={createOrder}
                    >
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
                          required
                        />
                        <label htmlFor="city" className={styles.password}>
                          {t("cgv")}
                          <span style={{ color: "red" }}>*</span>
                        </label>
                      </div>

                      <div className={styles.checkbox}>
                        <input
                          name="subscribe"
                          type="checkbox"
                          className={styles.password}
                          data-cy="payment_checkbox_accept"
                          required
                        />
                        <label htmlFor="city" className={styles.password}>
                          {t("cgv2")}
                          <span style={{ color: "red" }}>*</span>
                        </label>
                      </div>
                      <div className={styles.formbutton}>
                        <button type="submit" className={styles.button2}>
                          {t("confirmcommand")}
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className={styles.divpanier}>
            <OrderCart />
          </div>
        </div>
      )}
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
        "order",
        "cart",
        "reservation",
      ])),
    },
  };
}
