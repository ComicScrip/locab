import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo/logo_blanc.svg";
import styles from "../styles/headerfooter/footer.module.css";

export default function footer() {
  return (
    <div className={styles.mainContainerFooter}>
      <div className={styles.containerFooter}>
        <div className={styles.logo}>
          <div className={styles.imgLogo}>
            <Image src={Logo} alt="logo" />
          </div>
          <p className={styles.logoText}>Bouger léger avec bébé</p>
        </div>
        <div className={styles.sectionFooter}>
          <h4 className={styles.footerTitle}>Liens utiles</h4>
          <div className={styles.links}>
            <Link href="/reservation">
              <a>Réservation</a>
            </Link>
            <div className={styles.grise}>
              <div href="../pages/pagesFooter/mentionlegale">
                <a>Mentions légales</a>
              </div>
            </div>
            <div className={styles.grise}>
              <div href="/cgps">
                <a>Conditions générales de prestation de service</a>
              </div>
            </div>
            <div className={styles.grise}>
              <div href="/pconfidentialite">
                <a>Politique de confidentialité</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionFooter}>
          <h4 className={styles.footerTitle}>Mon compte</h4>
          <div className={styles.links}>
            <div className={styles.grise}>
              <div href="#">
                <a>Commandes</a>
              </div>
            </div>
            <div className={styles.grise}>
              <div href="#">
                <a>Mes informations personnelles</a>
              </div>
            </div>
            <div className={styles.grise}>
              <div href="#">
                <a>Newsletter</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionFooter}>
          <h4 className={styles.footerTitle}>Nous contacter</h4>
          <div className={styles.footerContact}>&#9990; +33 6 26 85 90 46 </div>
          <div className={styles.footerContact}>&#9993; contact@loca-b.fr</div>
          <div className={styles.socialsicons}>
            <div className={styles.image}>
              <div className={styles.icons}>
                <Link href="/">
                  <a>
                    <Image
                      src="/icons/facebook.webp"
                      alt="facebook"
                      width={20}
                      height={20}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.icons}>
              <Link href="/">
                <a>
                  <Image
                    src="/icons/instagram.webp"
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.icons}>
              <Link href="/">
                <a>
                  <Image
                    src="/icons/linkedin.webp"
                    alt="linkedin"
                    width={20}
                    height={20}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.icons}>
              <Link href="/">
                <a>
                  <Image
                    src="/icons/whatsapp.webp"
                    alt="Whatsapp"
                    width={20}
                    height={20}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
