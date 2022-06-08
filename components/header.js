/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../public/logo/logo.png";
import LogoText from "../public/logo/logoText.png";
import LogoTransparent from "../public/logo/logo_transparent.png";
import LogoIcon from "../public/logo/icon_logo.png";
import styles from "../styles/headerfooter/navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className={styles.navbar}>
      <div className={styles.logocontainer}>
        <Link href="/" className={styles.logo}>
          <a>
            <Image
              src={Logo}
              className={styles.logo_img}
              alt="logo_principal"
            />
          </a>
        </Link>
        <Link href="/" className={styles.logo2}>
          <a>
            <Image src={LogoText} className={styles.logo_imtextg} alt="logo" />
          </a>
        </Link>
      </div>

      {/* Debut navbar a */}
      <ul className={styles.items}>
        <Link href="/" className={styles.navbar__link}>
          <a className={currentRoute === "/" ? "active" : "non-active"}>
            Accueil
          </a>
        </Link>
        <Link href="aboutUs" className={styles.navbar__link}>
          <a className={currentRoute === "/aboutUs" ? "active" : "non-active"}>
            Qui sommes-nous ?
          </a>
        </Link>
        <Link href="blog" className={styles.navbar__link}>
          <a className={currentRoute === "/blog" ? "active" : "non-active"}>
            Blog
          </a>
        </Link>
        <Link href="contact" className={styles.navbar__link}>
          <a className={currentRoute === "/contact" ? "active" : "non-active"}>
            Contact
          </a>
        </Link>
        <Link href="reservation" className={styles.navbar__link}>
          <a>
            <button className={styles.reservationButton}>Reservation</button>
          </a>
        </Link>
      </ul>
      {/* Fin navbar a */}
      <div className={styles.divlogoIcon1}>
        <Link href="/" className={styles.linklogotransparent}>
          <a>
            <Image
              src={LogoTransparent}
              className={styles.logo_transparent}
              alt="logoTransparent"
            />
          </a>
        </Link>
      </div>
      <div className={styles.divlogoIcon}>
        <Link href="/">
          <a>
            <Image
              src={LogoIcon}
              className={styles.logo_icon}
              alt="logo_icon"
              height={48}
              width={48}
            />
          </a>
        </Link>
      </div>
      <button type="button" className={styles.btnBurger}>
        <span className="Burger_Line towLine" />
      </button>
      <style jsx>{`
        .non-active {
          color: #626262 !important;
        }
        .active {
          color: #ebc575 !important;
        }
      `}</style>
    </nav>
  );
};
export default Navbar;

// RiShoppingBasket2Line
