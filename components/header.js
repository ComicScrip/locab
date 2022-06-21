import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/headerfooter/navbar.module.css";
import { useTranslation } from "next-i18next";

const Navbar = () => {
  const onSelectChange = (e) => {
    const locale = e.target.value;
    router.push(router.asPath, router.asPath, {
      locale,
      scroll: false,
    });
  };
  const { t } = useTranslation("header");
  const [showLinks, setshowLinks] = useState(false);
  const handleShowLinks = () => {
    setshowLinks(!showLinks);
  };
  const router = useRouter();

  const currentRoute = router.pathname;
  return (
    <nav
      className={`${styles.navbar} ${showLinks ? styles.show_nav : "hidden"}`}
    >
      <div className={styles.logocontainer}>
        <Link href="/" className={styles.logo}>
          <a>
            <img
              src="/logo/logo.webp"
              className={styles.logo_img}
              alt="logo_principal"
            />
          </a>
        </Link>
        <Link href="/" className={styles.logo2}>
          <a>
            <img
              src="/logo/logoText.webp"
              className={styles.logo_imtextg}
              alt="logo"
            />
          </a>
        </Link>
      </div>
      <ul className={styles.items}>
        <li className={styles.navbar_item}>
          <Link href="/" className={styles.navbarlink}>
            <a
              className={
                currentRoute === "/" ? styles.active : styles.non_active
              }
            >
              {t("accueil")}
            </a>
          </Link>
        </li>
        <li className={styles.navbar_item} style={{ display: "none" }}>
          <Link href="/aboutUs" className={styles.navbarlink}>
            <a
              style={{ display: "none" }}
              className={
                currentRoute === "/aboutUs" ? styles.active : styles.non_active
              }
            >
              {t("quisommesnous")}
            </a>
          </Link>
        </li>
        <li
          className={`${styles.navbar_item} ${styles.none}`}
          style={{ display: "none" }}
        >
          <Link href="/blog" className={styles.navbarlink}>
            <a
              style={{ display: "none" }}
              className={
                currentRoute === "/blog" ? styles.active : styles.non_active
              }
            >
              Blog
            </a>
          </Link>
        </li>
        <li className={styles.navbar_item} style={{ display: "none" }}>
          <Link href="/contact" className={styles.navbarlink}>
            <a
              style={{ display: "none" }}
              className={
                currentRoute === "/contact" ? styles.active : styles.non_active
              }
            >
              Contact
            </a>
          </Link>
        </li>
        <li className={styles.navbar_item}>
          <Link href="/reservation" className={styles.navbarlink}>
            <a>
              <button className={styles.reservationButton}>Reservation</button>
            </a>
          </Link>
        </li>
        <li className={styles.navbar_item}>
          <div className={`${styles.navbar_item} ${styles.login}`}>
            <Link href="/signup">
              <a className={styles.log}>{t("seconnecter")}</a>
            </Link>
          </div>
          <select
            name="languages"
            id="language-select"
            value={router.locale}
            label="Languages"
            onChange={onSelectChange}
            data-cy="translate-button"
          >
            {router.locales.map((language, index) => (
              <option value={language} key={index}>
                {language === "en" ? "🇬🇧" : language === "fr" ? "🇫🇷" : null}
              </option>
            ))}
          </select>
        </li>
      </ul>
      <div className={styles.divlogoIcon1}>
        <Link href="/" className={styles.linklogotransparent}>
          <a>
            <img
              className={styles.logo_icon}
              src="/logo/logo_transparent.webp"
              alt="logo_transparent"
            />
          </a>
        </Link>
      </div>
      <div className={styles.divlogoIcon}>
        <Link href="/">
          <a>
            <img
              src="/logo/icon_logo.webp"
              className={styles.logo_icon}
              alt="logo_icon"
            />
          </a>
        </Link>
      </div>
      <div className={styles.btnBurger}>
        <span className={styles.burger_Line} onClick={handleShowLinks} />
      </div>
    </nav>
  );
};
export default Navbar;
