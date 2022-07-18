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
import useSearch from "../../hooks/useSearch";
import useCart from "../../hooks/useCart";
import OrderCart from "../../components/Cart/OrderCart";
import { useToasts } from "react-toast-notifications";
import SearchForm from "../../components/SearchForm";
import { signIn } from "next-auth/react";
import { CurrentUserContext } from "../../contexts/currentUserContext";

export default function Commande() {
  const { t } = useTranslation("order");
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

  /* PARTIE LIVRAISON */

  const createOrder = (e) => {
    e.preventDefault();
    axios
      .post("/api/orders", {
        deliveryPhoneNumber: phonePartner,
        deliveryFirstName: partnerFirstName,
        deliveryLastName: partnerLastName,
        deliveryStreet: partnerAddress,
        deliveryZip: partnerZip,
        deliveryCity: partnerCity,
        deliveryArrivalTime: userHourArrived,
        comment: userCommentary,
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
          addToast(
            "impossible de passer la commande, certains items de votre panier ne sont malheureusement plus en stock",
            {
              appearance: "error",
            }
          );
        }
      });
  };

  const styleDefault = {
    color: "#000000",
  };

  const setStyle = {
    color: "#ACACAC",
  };

  return (
    <Layout>
      <SearchForm />
      <Banner />
      {confirmed ? (
        <p style={{ maxWidth: 1200, margin: "auto", padding: 50 }}>
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
                    <p>
                      Vous pouvez vous connecter pour saisir les informations
                      suivantes automatiquement et gagner du temps.
                    </p>
                    <p>
                      En vous connectant, vous pourrez également retrouver votre
                      réservation dans votre espace client.
                    </p>
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
                      SE CONNECTER
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
                      }}
                    >
                      <div className={styles.formemail}>
                        <label htmlFor="email" className={styles.email}>
                          {t("email")}
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
                      <div className={styles.formpassword}>
                        <label htmlFor="adress" className={styles.password}>
                          {t("Numérodetelephone")}
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
                  <h2
                    onClick={() => setOpenSection("delivery")}
                    style={openSection === "delivery" ? styleDefault : setStyle}
                  >
                    {openSection === "payment" ? (
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
                            required
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
                              required
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
                            required
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
                            type="time"
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
                    onClick={() => setOpenSection("payment")}
                    style={openSection === "payment" ? styleDefault : setStyle}
                  >
                    {t("Paiement")}
                  </h2>
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
                          onClick={createOrder}
                        >
                          {t("confirmcommand")}
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <OrderCart />
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
      ])),
    },
  };
}
