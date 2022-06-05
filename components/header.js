/* eslint-disable prettier/prettier */
import React from "react";
import Link from "next/link";
import styles from "../styles/headerfooter/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a> Accueil </a>
      </Link>
      <Link href="aboutUs">
        <a> Qui sommes-nous ? </a>
      </Link>
      <Link href="blog">
        <a> Blog</a>
      </Link>
      <Link href="contact">
        <a> Contact </a>
      </Link>
      <Link href="Reservation">
        <button> Reservation </button>
      </Link>
    </nav>
  );
};

export default Navbar;

// RiShoppingBasket2Line
