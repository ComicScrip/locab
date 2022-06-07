import Head from "next/head";
import styles from "../styles/Home.module.css";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loca-b</title>
        <meta name="description" content="Locab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={() => signIn()}>Log in</button>
        <div className={styles.firstParagraphe}>
          <div className={styles.titleandtextHome}>
            <h1 className={styles.title}>Voyagez léger</h1>
            <h2 className={styles.title2}>avec bébé</h2>
            <p className={styles.textFirst}>
              Matériel de puériculture en location. Livré, installé et récupéré
              directement sur votre lieu de séjour.{" "}
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
                {" "}
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
                {" "}
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
                varius.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.thirdParagraphe}>
          <div className={styles.thirdTextTitle}>
            <h3 className={styles.thirdTitleHome}>Pourquoi Loca-b ?</h3>
            <p className={styles.thirdParagrapheText}>
              Nous c’est Débora et Antoine, on est un couple franco-brésilien et
              ensemble depuis plus de 15 ans et les heureux parents de deux
              jeunes enfants. C’est lors de notre premier déplacement avec notre
              aîné que nous avons compris : plus les bébés sont petits, plus ils
              prennent de la place ! Comme c’est souvent le cas pour les jeunes
              parents, nous sommes partis en vacances avec les 3/4 de la maison
              dans la voiture : poussette, nacelle, lit, baignoire, couches,
              transat, et bien évidemment, l’indispensable pour un bébé de 45
              jours, un parc d’1m² ! À ce moment-là, on n’avait pas encore bien
              compris qu’un bébé de 45 jours ne bouge pas tellement ! Et pour
              notre enfant, nous voulions le meilleur, le plus confortable et le
              plus spacieux ! Et c’est là, après 8h de route avec le petit, dans
              une voiture bien remplie que nous nous sommes posé la question qui
              allait changer notre vie : il n’existe pas un service de location
              pour tout ça ? On ne le savait pas encore, mais Loca-b était né !
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
  );
}
