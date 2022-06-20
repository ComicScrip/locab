import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "../../styles/Aboutus.module.css";
import Banner from "../../components/Banner";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function AboutUs() {
  const { t } = useTranslation("aboutus");

  return (
    <Layout pageTitle="Qui sommes-nous ? | Location de matériel de puériculture">
      <Banner />
      <div className={styles.mainContainer}>
        <section className={styles.aProposContainer}>
          <h1 className={styles.mainTitle}>{t("quisommesnous")}</h1>
          <p>{t("aPropos1stParagraph")}</p>
        </section>
        <section className={styles.geneseContainer}>
          <article className={styles.polaroidContainer}>
            <Image
              alt="Photo de Débora et Antoine"
              src="/image/aboutus/about.webp"
              width={400}
              height={470}
            />
            <h3 className={styles.polaroidTitle}>{t("parentsheureux")}</h3>
          </article>
          <article className={styles.geneseDescriptionContainer}>
            <h2 className={styles.titleDesc}>{t("genese")}</h2>
            <p>{t("genese1stParagraph")}</p>

            <p>{t("genese2ndParagraph")}</p>

            <p>{t("genese3rdParagraph")}</p>

            <p>{t("genese4thParagraph")}</p>

            <p>{t("genese5thParagraph")}</p>
          </article>
        </section>
        <section className={styles.teamContainer}>
          <h2 className={styles.titleDesc}>L'équipe Loca-b</h2>
          <article className={styles.teamPolaroidWrapper}>
            <div className={styles.polaroidContainer}>
              <Image
                alt="Photo de Débora"
                src="/image/aboutus/debora.webp"
                width={300}
                height={380}
              />
              <div className={styles.nameContainer}>
                <h3 className={styles.polaroidTitle}>Débora</h3>
                <Image
                  alt="Image du drapeau brésilien"
                  src="/image/aboutus/brazil.webp"
                  width={30}
                  height={20}
                />
              </div>
              <h4 className={styles.poloroidSubTitle}>Co-fondratrice</h4>
              <p>
                “Moi, Débora, je suis brésilienne. J’ai quitté mon pays à l’âge
                de 24 ans pour découvrir le monde, découvrir une nouvelle langue
                et une nouvelle culture. Et c’est à Dublin que j’ai posé mes
                valises (sans savoir que ce voyage allait changer ma vie). C’est
                là-bas, le jour même de mon arrivée, que je rencontrais Antoine,
                mon futur mari et le papa de mes merveilleux enfants. “
              </p>
            </div>
            <div className={styles.polaroidContainer}>
              <Image
                alt="Photo d'Antoine"
                src="/image/aboutus/antoine.webp"
                width={300}
                height={380}
              />
              <div className={styles.nameContainer}>
                <h3 className={styles.polaroidTitle}>Antoine</h3>
                <Image
                  alt="Image du drapeau français"
                  src="/image/aboutus/france.webp"
                  width={30}
                  height={20}
                />
              </div>
              <h4 className={styles.poloroidSubTitle}>Co-fondateur</h4>
              <p>
                “Moi, Antoine, je suis aussi parti de Paris de mon côté pour
                découvrir de nouvelles choses et vivre de nouvelles aventures.
                Ensemble, nous avons passé 2 années en Irlande, 4 ans au Brésil
                et en 2011 nous sommes arrivés avec nos valises en France, plus
                précisément à Lyon.“
              </p>
            </div>
            <div className={styles.polaroidContainer}>
              <Image
                alt="Photo de Mathis"
                src="/image/aboutus/mathis.webp"
                width={300}
                height={380}
              />
              <div className={styles.nameContainer}>
                <h3 className={styles.polaroidTitle}>Mathis</h3>
                <Image
                  alt="Image du drapeau français"
                  src="/image/aboutus/france.webp"
                  width={30}
                  height={20}
                />
              </div>
              <h4 className={styles.poloroidSubTitle}>Responsable digital</h4>
              <p>
                “Moi, Mathis, je suis arrivé à Loca-b en décembre 2021 au tout
                début de l’aventure. Après quelques années à chercher dans quel
                domaine je souhaitais m’orienter, j’ai finalement décidé d’être
                dans le digital. A Loca-b, je m’occupe de tout ce qui est
                numérique et plus précisement la partie web et graphisme.“
              </p>
            </div>
          </article>
        </section>
        <section className={styles.moreAboutLocaBContainer}>
          <article className={styles.moreAboutDescription}>
            <h2 className={styles.titleDesc}>
              Loca-b, location de matériel de puériculture
            </h2>
            <p>
              Loca-b est un service de location de matériel de puériculture clé
              en main. Nous nous occupons de toute la logistique (livraison,
              installation, réparation, nettoyage et entretien) pour que les
              parents puissent profiter de leur séjour en toute tranquillité.
            </p>

            <p>
              Voyager léger, éviter des achats non nécessaires et proposer du
              matériel de qualité et confortable pendant les vacances pour nos
              enfants est possible ! Des déplacements simplifiés et surtout plus
              légers, c’est une réalité ! Une vie plus simple et plus
              responsable pour les parents, une charge mentale moins importante
              pour le départ en vacances, c’est ce qui nous anime pour
              développer ce joli projet et vous le proposer. On vous l’assure,
              c’est plus simple que vous ne le croyez !{" "}
            </p>

            <p>
              Nous travaillons avec du matériel de qualité, connu et reconnu des
              parents, et aujourd’hui nous proposons de nombreux équipements
              comme les poussettes YOYO, lit à barreaux, siège-auto ou encore
              chaise haute que vous pouvez retrouver sur notre site.
            </p>
            <button type="button" className={styles.reserveBtn}>
              <Link href="/reservation">
                <a>Je réserve</a>
              </Link>
            </button>
          </article>
          <div className={styles.polaroidContainer}>
            <Image
              alt="Photo d'une maman avec son enfant dans une poussette"
              src="/image/aboutus/voyager.webp"
              width={450}
              height={470}
            />
            <h3 className={styles.polaroidTitle}>Voyagez léger avec bébé !</h3>
          </div>
        </section>
        <section className={styles.serviceContainer}>
          <h2 className={styles.titleDesc}>
            Un service de location de matériel de puériculture de proximité
          </h2>
          <p>
            Loca-b a été pensé comme un service de proximité, à des prix
            accessibles et un service client irréprochable. Nous sommes
            disponibles 7 jours sur 7 et nous sommes sur place, sur votre lieu
            de séjour. Pas de point relais ou de déplacement contraignant pour
            aller chercher un lit pour son bébé !
          </p>

          <p>
            Pour le moment, nous sommes présents à Lyon, et en Normandie à
            Deauville, Trouville, Cabourg et Honfleur.
          </p>

          <p> D’autres destinations sont à venir…</p>

          <div className={styles.destinationsContainer}>
            <article className={styles.pictureDestinationLyon}>
              <h4 className={styles.destinationName}>Lyon</h4>
            </article>
            <article className={styles.pictureDestinationNormandie}>
              <h4 className={styles.destinationName}>Normandie</h4>
            </article>
            <article>
              <div className={styles.pictureDestinationVendee}></div>
              <h4 className={styles.destinationNameVenir}>A venir</h4>
            </article>
            <article>
              <div className={styles.pictureDestinationAvignon}></div>
              <h4 className={styles.destinationNameVenir}>A venir</h4>
            </article>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "banner",
        "footer",
        "header",
        "cart",
        "home",
        "connection",
        "profile",
        "common",
        "reservation",
        "aboutus",
      ])),
    },
  };
}
