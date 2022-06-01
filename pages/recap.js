import Head from "next/head";
import styles from "../styles/Home.module.css";
import Welcome from "../components/welcome";

export default function Recap() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loca-b</title>
        <meta name="description" content="Locab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Welcome />
    </div>
  );
}
