import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a> Acceuil </a>
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
