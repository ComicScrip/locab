/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <div className={styles.container}>
        <Head>
          <title>Loca-b</title>
          <meta name="description" content="Locab" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.firstParagraphe}>
            <div className={styles.titleandtextHome}>
              <h1 className={styles.title}>Voyagez léger</h1>
              <h2 className={styles.title2}>avec bébé</h2>
              <p className={styles.textFirst}>
                Matériel de puériculture en location. Livré, installé et
                récupéré directement sur votre lieu de séjour.{" "}
              </p>
              <div>
                <form className={styles.choixHome}>
                  <input
                    className={styles.whereHome}
                    type="text"
                    placeHolder="Où allez-vous ?"
                  ></input>
                  <input
                    className={styles.whenHome}
                    type="text"
                    placeHolder="Quand ?"
                  ></input>
                  <button className={styles.buttonHome} type="submit">
                    JE CHERCHE !
                  </button>
                </form>
              </div>
            </div>

            <div className={styles.designHome}>
              {" "}
              <img
                src="/image/design1.png"
                alt="design"
                className={styles.bebeHomeImage}
              />
            </div>
          </div>
          <div className={styles.secondParagraphe}>
            <h3 className={styles.title3}>Comment ça marche ?</h3>
            <div className={styles.logoHome}>
              <div className={styles.homeSearch}>
                <div className={styles.imageContainer}>
                  <img
                    src="/image/search.png"
                    alt="search"
                    className={styles.homeImage + " " + styles.searchImage}
                  />
                </div>

                <h4 className={styles.title4}>Recherche</h4>
                <p className={styles.paragraphHome}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  bibendum ligula at volutpat mollis. Fusce finibus mi et massa
                  varius.{" "}
                </p>
              </div>
              <div className={styles.homeStroller}>
                <div className={styles.imageContainer}>
                  <img
                    src="/image/stroller.png"
                    alt="stroller"
                    className={styles.homeImage + " " + styles.strollerImage}
                  />
                </div>

                <h4 className={styles.title4}>Choix</h4>
                <p className={styles.paragraphHome}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  bibendum ligula at volutpat mollis. Fusce finibus mi et massa
                  varius.{" "}
                </p>
              </div>
              <div className={styles.homeOrder}>
                <div className={styles.imageContainer}>
                  <img
                    src="/image/shopping.png"
                    alt="order"
                    className={styles.homeImage + " " + styles.orderImage}
                  />
                </div>

                <h4 className={styles.title4}>Commande</h4>
                <p className={styles.paragraphHome}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  bibendum ligula at volutpat mollis. Fusce finibus mi et massa
                  varius.{" "}
                </p>
              </div>
              <div className={styles.homeShip}>
                <div className={styles.imageContainer}>
                  <img
                    src="/image/shipped.png"
                    alt="ship"
                    className={styles.homeImage + " " + styles.shipImage}
                  />
                </div>

                <h4 className={styles.title4}>Livraison</h4>
                <p className={styles.paragraphHome}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  bibendum ligula at volutpat mollis. Fusce finibus mi et massa
                  varius.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.thirdParagraphe}>
            <div className={styles.thirdTextTitle}>
              <h3 className={styles.thirdTitleHome}>Pourquoi Loca-b ?</h3>
              <p className={styles.thirdParagrapheText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                luctus accumsan purus, nec tempor magna pharetra quis. Integer
                eget commodo urna, eget blandit elit. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Vestibulum eu vehicula justo, sit amet sodales enim.
                Pellentesque sem neque, porttitor eget lobortis vel, elementum
                eget arcu. Nam tellus risus, pulvinar eget metus vel, lacinia
                bibendum orci. Interdum et malesuada fames ac.{" "}
              </p>
            </div>
            <div>
              <img
                src="/image/couple.png"
                alt="couple"
                className={styles.imgCouple}
              />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
