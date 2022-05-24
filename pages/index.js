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
        <div className={styles.firstparagraphe}>
          <h1 className={styles.title}>Voyagez léger</h1>
          <h2 className={styles.title2}>avec bébé</h2>
          <p>
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
        <div className={styles.secondparagraphe}>
          <h3>Comment ça marche ?</h3>
          <div className={styles.homesearch}>
            <Image
              src="/image/search.png"
              width={68}
              height={68}
              alt="search"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              bibendum ligula at volutpat mollis. Fusce finibus mi et massa
              varius.{" "}
            </p>
          </div>
          <div className={styles.homestroller}>
            <Image
              src="/image/stroller.png"
              width={68}
              height={68}
              alt="stroller"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              bibendum ligula at volutpat mollis. Fusce finibus mi et massa
              varius.{" "}
            </p>
          </div>
          <div className={styles.homeorder}>
            <Image
              src="/image/shopping.png"
              width={68}
              height={68}
              alt="order"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              bibendum ligula at volutpat mollis. Fusce finibus mi et massa
              varius.{" "}
            </p>
          </div>
          <div className={styles.homeship}>
            <Image src="/image/shipped.png" width={68} height={68} alt="ship" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              bibendum ligula at volutpat mollis. Fusce finibus mi et massa
              varius.{" "}
            </p>
          </div>
        </div>
        <div className={styles.thirdparagraphe}>
          <h3>Pourquoi Loca-b ?</h3>
          <p>
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
            width={517}
            height={518}
            alt="couple"
          />
        </div>
      </main>
    </div>
  );
}
