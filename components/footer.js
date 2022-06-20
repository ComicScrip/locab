import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import styles from "../styles/headerfooter/footer.module.css";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <div className={styles.mainContainerFooter}>
      <div className={styles.containerFooter}>
        <div className={styles.logo}>
          <div className={styles.imgLogo}>
            <img
              src="/logo/logo-blanc-4.webp"
              alt="logo"
              width={110}
              height={100}
            />
          </div>
          <p className={styles.logoText}>{t("bougerlegerbebe")}</p>
        </div>
        <div className={styles.sectionFooter}>
          <h4 className={styles.footerTitle}>{t("liensutiles")}</h4>
          <div className={styles.links}>
            <Link href="/reservation">
              <a>{t("reservation")}</a>
            </Link>
            {/* <div className={styles.grise}>
              <div href="../pages/pagesFooter/mentionlegale">
                <a>{t("mentionslegales")}</a>
              </div>
            </div> */}
            {/* <div className={styles.grise}>
              <div href="/cgps">
                <a>{t("cg")}</a>
              </div>
            </div> */}
            {/* <div className={styles.grise}>
              <div href="/pconfidentialite">
                <a>{t("politiqueconfidentialite")}</a>
              </div>
            </div> */}
          </div>
        </div>
        <div className={styles.sectionFooter}>
          <h4 className={styles.footerTitle}>{t("moncompte")}</h4>
          <div className={styles.links}>
            {/* <div className={styles.grise}>
              <div href="#">
                <a>{t("commande")}</a>
              </div>
            </div> */}
            {/* <div className={styles.grise}>
              <div href="#">
                <a>{t("infoperso")}</a>
              </div>
            </div>
            <div className={styles.grise}>
              <div href="#">
                <a>Newsletter</a>
              </div>
            </div> */}
          </div>
        </div>
        <div className={styles.sectionFooter}>
          <h4 className={styles.footerTitle}>{t("nouscontacter")}</h4>
          <div className={styles.footerContact}>&#9990; +33 6 26 85 90 46 </div>
          <div className={styles.footerContact}>&#9993; contact@loca-b.fr</div>
          <div className={styles.socialsicons}>
            <div className={styles.image}>
              <div className={styles.icons}>
                <Link href="https://www.facebook.com/locabofficiel">
                  <a target="_blank">
                    <img
                      src="/icons/facebook.webp"
                      alt="facebook"
                      width={40}
                      height={40}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.icons}>
              <Link href="https://www.instagram.com/loca_b_officiel/">
                <a target="_blank">
                  <img
                    src="/icons/instagram.webp"
                    alt="instagram"
                    width={40}
                    height={40}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.icons}>
              <Link href="https://www.linkedin.com/company/locabofficiel/">
                <a target="_blank">
                  <img
                    src="/icons/linkedin.webp"
                    alt="linkedin"
                    width={40}
                    height={40}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.icons}>
              <Link href="/">
                <a target="_blank">
                  <img
                    src="/icons/whatsapp.webp"
                    alt="Whatsapp"
                    width={40}
                    height={40}
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
