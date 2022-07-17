import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import useSearch from "../hooks/useSearch";
import dayjs from "dayjs";

export default function Home() {
  const { t } = useTranslation("home");
  const {
    params: { city, fromDate },
    setCity,
    queryString,
    setFromDate,
  } = useSearch();

  return (
    <Layout pageTitle="Location de poussette | Location de matériel de puériculture">
      <div className={styles.container}>
        <div className={styles.firstParagraphe}>
          <div className={styles.titleandtextHome}>
            <h1 className={styles.title}>{t("voyagezleger")}</h1>
            <h2 className={styles.title2}>{t("avecbébé")}</h2>
            <p className={styles.textFirst}>{t("activityDescription")}</p>
            <div>
              <form className={styles.choixHome}>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  name="destination"
                  id="location"
                  data-cy="searchWhere"
                  placeholder="Où allez-vous ?"
                  className={styles.whereHome}
                  required
                >
                  <option value="">{t("ouallezvous")}</option>
                  <option value="Lyon">Lyon</option>
                  <option value="Bordeaux">Bordeaux</option>
                </select>

                <input
                  className={styles.whenHome}
                  type="date"
                  min={dayjs().format("YYYY-MM-DD")}
                  placeholder={t("quand")}
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                ></input>
                <Link href={`/reservation?${queryString}`}>
                  <button
                    className={styles.buttonHome}
                    type="submit"
                    data-cy="searchBtnHomePage"
                  >
                    {t("jecherche")} !
                  </button>
                </Link>
              </form>
            </div>
          </div>

          <div className={styles.designHome}>
            {" "}
            <img
              src="/image/design1.webp"
              alt="design"
              height="70%"
              width="70%"
            />
          </div>
        </div>
        <div className={styles.secondParagraphe}>
          <h3 className={styles.title3}>{t("commentcamarche")}</h3>
          <div className={styles.logoHome}>
            <div className={styles.homeSearch}>
              <div className={styles.imageContainer}>
                <img
                  src="/image/Group-1.webp"
                  alt="search"
                  width="90px"
                  height="90px"
                />
              </div>

              <h4 className={styles.title4}>{t("recherche")}</h4>
              <p className={styles.paragraphHome}>{t("rechercheTexte")} </p>
            </div>
            <div className={styles.homeStroller}>
              <div className={styles.imageContainer}>
                {" "}
                <img
                  src="/image/Group-3.webp"
                  alt="stroller"
                  width="90px"
                  height="90px"
                />
              </div>

              <h4 className={styles.title4}>{t("choix")}</h4>
              <p className={styles.paragraphHome}>{t("choixTexte")} </p>
            </div>
            <div className={styles.homeOrder}>
              <div className={styles.imageContainer}>
                <img
                  src="/image/Group-5.webp"
                  alt="order"
                  width="90px"
                  height="90px"
                />
              </div>

              <h4 className={styles.title4}>{t("commande")}</h4>
              <p className={styles.paragraphHome}>{t("commandeTexte")} </p>
            </div>
            <div className={styles.homeShip}>
              <div className={styles.imageContainer}>
                {" "}
                <img
                  src="/image/Group-4.webp"
                  alt="ship"
                  width="90px"
                  height="90px"
                />
              </div>

              <h4 className={styles.title4}>{t("livraison")}</h4>
              <p className={styles.paragraphHome}>{t("livraisonTexte")} </p>
            </div>
          </div>
        </div>
        <div className={styles.thirdParagrapheContainer}>
          <div className={styles.thirdParagraphe}>
            <div className={styles.thirdTextTitle}>
              <h3 className={styles.thirdTitleHome}>{t("pourquoiLocab")}</h3>
              <p>{t("pourquoiLocabTexte")}</p>
              <p>{t("pourquoiLocabTexte2")}</p>
              <p>{t("pourquoiLocabTexte3")}</p>
            </div>
            <div className={styles.imgCouple}>
              <img
                className={styles.imgcpl}
                src="/image/couple.webp"
                alt="couple"
                height="200"
                width="200"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "banner",
        "cart",
        "header",
        "home",
        "connection",
        "profile",
        "common",
        "signIn",
        "footer",
        "reservation",
      ])),
    },
  };
}
