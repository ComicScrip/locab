import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import Logo from "../../public/logo.png";

export default function footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div>
          <h5>Liens utiles</h5>
          <div className={styles.links}>
            <Link href="/reservation">
              <a>Réservation</a>
            </Link>
            <div>
              <Link href="/mentionlegale">
                <a>Mentions légales</a>
              </Link>
            </div>
            <div>
              <Link href="/cgps">
                <a>CGPS</a>
              </Link>
            </div>
            <div>
              <Link href="/pconfidentialite">
                <a>Politique de confidentialité</a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h5>Mon compte</h5>
          <div>
            <Link href="/commandes">
              <a>Commandes</a>
            </Link>
          </div>
          <div>
            <Link href="/Mes informations">
              <a>Mes informations personnelles</a>
            </Link>
          </div>
          <div>
            <Link href="/newsletter">
              <a>Newsletter</a>
            </Link>
          </div>
        </div>
        <div>
          <h5>Nous contacter</h5>
          <div>&#9990; +33 6 26 85 90 46 </div>
          <div>&#9993; contact@loca-b.fr</div>

          <div className={styles.icons}>
            <div className={styles.image}>
              <Link href="">
                <a>
                  <Image
                    src="/icons/facebook.png"
                    alt="facebook"
                    width={10}
                    height={10}
                    className={styles.img_icon}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.image}>
              <Link href="">
                <a>
                  <Image
                    src="/icons/instagram.png"
                    alt="instagram"
                    width={10}
                    height={10}
                    className={styles.img_icon}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.image}>
              <Link href="">
                <a>
                  <Image
                    src="/icons/linkedin.png"
                    alt="linkedin"
                    width={10}
                    height={10}
                    className={styles.img_icon}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.image}>
              <Link href="">
                <a>
                  <Image
                    src="/icons/whatsapp.png"
                    alt="Whatsapp"
                    width={10}
                    height={10}
                    className={styles.img_icon}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.logo}>
        <Image className={styles.img} src={Logo} alt="logo" />
        <p className={styles.logoText}>Bouger leger avec bébé</p>
      </div>
    </div>
  );
}
