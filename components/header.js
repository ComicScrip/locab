/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo/logo.png";
import LogoText from "../public/logo/logoText.png";
import styles from "../styles/headerfooter/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logocontainer}>
        <Link href="/" className={styles.logo}>
          <a>
            <Image src={Logo} className={styles.logo_img} alt="logo" />
          </a>
        </Link>
        <Link href="/" className={styles.logo}>
          <a>
            <Image src={LogoText} className={styles.logo_imtextg} alt="logo" />
          </a>
        </Link>
      </div>
      <ul className={styles.items}>
        <Link href="/">
          <a> Accueil </a>
        </Link>
        <Link href="aboutUs">
          <a> Qui sommes-nous ? </a>
        </Link>
        <Link href="blog">
          <a>Blog</a>
        </Link>
        <Link href="contact">
          <a>Contact</a>
        </Link>
        <Link href="reservation">
          <a>
            {" "}
            <button className={styles.reservationButton}>
              {" "}
              Réservation{" "}
            </button>{" "}
          </a>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

// RiShoppingBasket2Line
