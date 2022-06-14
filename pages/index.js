import Head from "next/head";
import styles from "../styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function Home() {
  const { t } = useTranslation("home");
  const router = useRouter();
  const onSelectChange = (e) => {
    const locale = e.target.value;
    router.push(router.asPath, router.asPath, {
      locale,
      scroll: false,
    });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Loca-b</title>
        <meta name="description" content="Locab" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="font"></link>
      </Head>
      <select
        name="languages"
        id="language-select"
        onChange={onSelectChange}
        value={router.locale}
      >
        {router.locales.map((language, index) => (
          <option value={language} key={index}>
            {language === "en" ? "🇬🇧" : language === "fr" ? "🇫🇷" : null}
          </option>
        ))}
      </select>
      <main className={styles.main}>
        <div className={styles.firstParagraphe}>
          <div className={styles.titleandtextHome}>
            <h1 className={styles.title}>{t("voyagezleger")}</h1>
            <h2 className={styles.title2}>{t("avecbébé")}</h2>
            <p className={styles.textFirst}>{t("activityDescription")}</p>
            <div>
              <form className={styles.choixHome}>
                <input
                  className={styles.whereHome}
                  type="text"
                  placeholder={t("ouallezvous")}
                ></input>
                <input
                  className={styles.whenHome}
                  type="text"
                  placeholder={t("quand")}
                ></input>
                <button className={styles.buttonHome} type="submit">
                  {t("jecherche")} !
                </button>
              </form>
            </div>
          </div>

          <div className={styles.designHome}>
            {" "}
            <img
              src="/image/design1.webp"
              alt="design"
              height="500vh"
              width="500vh"
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
              <p className={styles.paragraphHome}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                bibendum ligula at volutpat mollis. Fusce finibus mi et massa
                varius.{" "}
              </p>
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
              <p className={styles.paragraphHome}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                bibendum ligula at volutpat mollis. Fusce finibus mi et massa
                varius.{" "}
              </p>
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
              <p className={styles.paragraphHome}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                bibendum ligula at volutpat mollis. Fusce finibus mi et massa
                varius.{" "}
              </p>
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
              <p className={styles.paragraphHome}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                bibendum ligula at volutpat mollis. Fusce finibus mi et massa
                varius.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.thirdParagraphe}>
          <div className={styles.thirdTextTitle}>
            <h3 className={styles.thirdTitleHome}>{t("pourquoiLocab")}</h3>
            <p className={styles.thirdParagrapheText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              luctus accumsan purus, nec tempor magna pharetra quis. Integer
              eget commodo urna, eget blandit elit. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Vestibulum eu vehicula justo, sit amet sodales enim. Pellentesque
              sem neque, porttitor eget lobortis vel, elementum eget arcu. Nam
              tellus risus, pulvinar eget metus vel, lacinia bibendum orci.
              Interdum et malesuada fames ac.{" "}
            </p>
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
      </main>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "order",
        "header",
        "home",
        "connection",
        "profile",
        "common",
      ])),
    },
  };
}
