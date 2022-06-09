/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Logo from "../public/logo/logo.png";
import LogoText from "../public/logo/logoText.png";
import LogoTransparent from "../public/logo/logo_transparent.png";
import LogoIcon from "../public/logo/icon_logo.png";
import styles from "../styles/headerfooter/navbar.module.css";

const Navbar = () => {
  const [showLinks, setshowLinks] = useState(false);

  const handleShowLinks = () => {
    setshowLinks(!showLinks);
  };
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
        <Link href="/" className={styles.navbarlink}>
          <a className={currentRoute === "/" ? "active" : "non-active"}>
            Accueil
          </a>
        </Link>
        <Link href="aboutUs" className={styles.navbarlink}>
          <a className={currentRoute === "/aboutUs" ? "active" : "non-active"}>
            Qui sommes-nous ?
          </a>
        </Link>
        <Link href="blog" className={styles.navbarlink}>
          <a className={currentRoute === "/blog" ? "active" : "non-active"}>
            Blog
          </a>
        </Link>
        <Link href="contact" className={styles.navbarlink}>
          <a className={currentRoute === "/contact" ? "active" : "non-active"}>
            Contact
          </a>
        </Link>
        <Link href="reservation" className={styles.navbarlink}>
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
      <div className={styles.btnBurger} onClick={handleShowLinks}>
        <span className={styles.Burger_Line} />
      </div>
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

// RiShoppingBasket2Line style={towLine}
