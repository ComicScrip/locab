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
          <Image
            src="/image/design1.png"
            alt="design"
            width={710}
            height={692}
          />
        </div>
        <div></div>
      </main>
    </div>
  );
}
