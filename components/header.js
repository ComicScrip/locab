/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from "../public/logo/logo.png";
import LogoText from "../public/logo/logoText.png";
import LogoTransparent from "../public/logo/logo_transparent.png";
import LogoIcon from "../public/logo/icon_logo.png";
import styles from "../styles/headerfooter/navbar.module.css";

const Navbar = () => {
  const [showLinks, setshowLinks] = useState(false);

  const getActiveLinkStyle = ({ isActive }) => ({
    color: isActive ? "#ebc575" : "#626262",
  });

  const handleShowLinks = () => {
    setshowLinks(!showLinks);
  };

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
        <Link href="/" style={getActiveLinkStyle}>
          <a> Accueil </a>
        </Link>
        <Link href="aboutUs" style={getActiveLinkStyle}>
          <a> Qui sommes-nous ? </a>
        </Link>
        <Link href="blog" style={getActiveLinkStyle}>
          <a>Blog</a>
        </Link>
        <Link href="contact" style={getActiveLinkStyle}>
          <a>Contact</a>
        </Link>
        <Link href="reservation">
          <a>
            <button className={styles.reservationButton}>Réservation</button>
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
            />
          </a>
        </Link>
      </div>
      <button
        type="button"
        className={styles.btnBurger}
        onClick={handleShowLinks}
      >
        <span className="Burger_Line towLine" />
      </button>
    </nav>
  );
};
export default Navbar;

// RiShoppingBasket2Line
