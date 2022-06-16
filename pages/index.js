import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout pageTitle="Location de poussette">
      <div className={styles.container}>
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
                  placeholder="Où allez-vous ?"
                ></input>
                <input
                  className={styles.whenHome}
                  type="text"
                  placeholder="Quand ?"
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
              src="/image/design1.webp"
              alt="design"
              height="500vh"
              width="500vh"
            />
          </div>
        </div>
        <div className={styles.secondParagraphe}>
          <h3 className={styles.title3}>Comment ça marche ?</h3>
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
                  src="/image/Group-3.webp"
                  alt="stroller"
                  width="90px"
                  height="90px"
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
                  src="/image/Group-5.webp"
                  alt="order"
                  width="90px"
                  height="90px"
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
                  src="/image/Group-4.webp"
                  alt="ship"
                  width="90px"
                  height="90px"
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

        <div className={styles.thirdParagrapheContainer}>
          <div className={styles.thirdParagraphe}>
            <div className={styles.thirdTextTitle}>
              <h3 className={styles.thirdTitleHome}>Pourquoi Loca-b ?</h3>
              <p>
                Nous c’est Débora et Antoine, on est un couple franco-brésilien
                et ensemble depuis plus de 15 ans et les heureux parents de deux
                jeunes enfants. C’est lors de notre premier déplacement avec
                notre aîné que nous avons compris : plus les bébés sont petits,
                plus ils prennent de la place !
              </p>
              <p>
                Comme c’est souvent le cas pour les jeunes parents, nous sommes
                partis en vacances avec les 3/4 de la maison dans la voiture :
                poussette, nacelle, lit, baignoire, couches, transat, et bien
                évidemment, l’indispensable pour un bébé de 45 jours, un parc
                d’1m² !
              </p>
              <p>
                À ce moment-là, on n’avait pas encore bien compris qu’un bébé de
                45 jours ne bouge pas tellement ! Et pour notre enfant, nous
                voulions le meilleur, le plus confortable et le plus spacieux !
                Et c’est là, après 8h de route avec le petit, dans une voiture
                bien remplie que nous nous sommes posé la question qui allait
                changer notre vie : il n’existe pas un service de location pour
                tout ça ? On ne le savait pas encore, mais Loca-b était né !
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
        </div>
      </div>
    </Layout>
  );
}
