import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loca-b</title>
        <meta name="description" content="Locab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.firstParagraphe}>
          <h1 className={styles.title}>Voyagez léger</h1>
          <h2 className={styles.title2}>avec bébé</h2>
          <p className={styles.textfirst}>
            Matériel de puériculture en location. Livré, installé et récupéré
            directement sur votre lieu de séjour.{" "}
          </p>
          <div className={styles.designhome}>
            {" "}
            <Image
              src="/image/design1.png"
              alt="design"
              width={710}
              height={692}
            />
          </div>
        </div>
        <div className={styles.secondParagraphe}>
          <h3 className={styles.title3}>Comment ça marche ?</h3>
          <div className={styles.logohome}>
            <div className={styles.homesearch}>
              <div className={styles.imageContainer}>
                <img
                  src="/image/search.png"
                  alt="search"
                  className={styles.homeimage + " " + styles.searchimage}
                />
              </div>

              <h4 className={styles.title4}>Recherche</h4>
              <p className={styles.paragraphhome}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                bibendum ligula at volutpat mollis. Fusce finibus mi et massa
                varius.{" "}
              </p>
            </div>
            <div className={styles.homestroller}>
              <div className={styles.imageContainer}>
                {" "}
                <img
                  src="/image/stroller.png"
                  alt="stroller"
                  className={styles.homeimage + " " + styles.strollerimage}
                />
              </div>

              <h4 className={styles.title4}>Choix</h4>
              <p className={styles.paragraphhome}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                bibendum ligula at volutpat mollis. Fusce finibus mi et massa
                varius.{" "}
              </p>
            </div>
            <div className={styles.homeorder}>
              <div className={styles.imageContainer}>
                <img
                  src="/image/shopping.png"
                  alt="order"
                  className={styles.homeimage + " " + styles.orderimage}
                />
              </div>

              <h4 className={styles.title4}>Commande</h4>
              <p className={styles.paragraphhome}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                bibendum ligula at volutpat mollis. Fusce finibus mi et massa
                varius.{" "}
              </p>
            </div>
            <div className={styles.homeship}>
              <div className={styles.imageContainer}>
                {" "}
                <img
                  src="/image/shipped.png"
                  alt="ship"
                  className={styles.homeimage + " " + styles.shipimage}
                />
              </div>

              <h4 className={styles.title4}>Livraison</h4>
              <p className={styles.paragraphhome}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                bibendum ligula at volutpat mollis. Fusce finibus mi et massa
                varius.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.thirdparagraphe}>
          <h3 className={styles.thirdtitlehome}>Pourquoi Loca-b ?</h3>
          <p className={styles.thirdparagraphetext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            luctus accumsan purus, nec tempor magna pharetra quis. Integer eget
            commodo urna, eget blandit elit. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Vestibulum eu vehicula justo, sit amet sodales enim. Pellentesque
            sem neque, porttitor eget lobortis vel, elementum eget arcu. Nam
            tellus risus, pulvinar eget metus vel, lacinia bibendum orci.
            Interdum et malesuada fames ac.{" "}
          </p>
          <Image
            src="/image/couple.png"
            width={215}
            height={216}
            alt="couple"
            className={styles.imgcouple}
          />
        </div>
      </main>
    </div>
  );
}
