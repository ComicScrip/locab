import React from "react";
import Link from "next/link";
import styles from "../styles/headerfooter/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a> Accueil </a>
      </Link>
      <Link href="panier">
        <a> Panier </a>
      </Link>
      <Link href="commandes">
        <a> Commandes </a>
      </Link>
      <Link href="contact">
        <a> Contact </a>
      </Link>
    </nav>
  );
};

export default Navbar;
