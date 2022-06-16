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
import { signIn } from "next-auth/react";
import { useTranslation } from "next-i18next";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

const Navbar = () => {
  const { t } = useTranslation("header");

  const [showLinks, setshowLinks] = useState(false);
  const handleShowLinks = () => {
    setshowLinks(!showLinks);
  };
  const router = useRouter();
  const onSelectChange = (e) => {
    const locale = e.target.value;
    router.push(router.asPath, router.asPath, {
      locale,
      scroll: false,
    });
  };
  const currentRoute = router.pathname;
  return (
    <nav
      className={`${styles.navbar} ${showLinks ? styles.show_nav : "hidden"}`}
    >
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
      <ul className={styles.items}>
        <li className={styles.navbar_item} onClick={handleShowLinks}>
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
        <li className={styles.navbar_item} onClick={handleShowLinks}>
          <Link href="/aboutUs" className={styles.navbarlink}>
            <a
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
          onClick={handleShowLinks}
        >
          <Link href="/blog" className={styles.navbarlink}>
            <a
              className={
                currentRoute === "/blog" ? styles.active : styles.non_active
              }
            >
              Blog
            </a>
          </Link>
        </li>
        <li className={styles.navbar_item} onClick={handleShowLinks}>
          <Link href="/contact" className={styles.navbarlink}>
            <a
              className={
                currentRoute === "/contact" ? styles.active : styles.non_active
              }
            >
              Contact
            </a>
          </Link>
        </li>
        <li className={styles.navbar_item} onClick={handleShowLinks}>
          <Link href="/reservation" className={styles.navbarlink}>
            <a>
              <button className={styles.reservationButton}>Reservation</button>
            </a>
          </Link>
        </li>
        <li className={styles.navbar_item} onClick={handleShowLinks}>
          <div className={`${styles.navbar_item} ${styles.login}`}>
            <a>
              <button className={styles.log} onClick={() => signIn()}>
                {t("seconnecter")}
              </button>
            </a>
          </div>
          <Box sx={{ minWidth: 90 }}>
            <FormControl fullWidth>
              <InputLabel>{t("langage")}</InputLabel>
              <Select
                id="languages"
                value={router.locale}
                label="Languages"
                onChange={onSelectChange}
              >
                {router.locales.map((language, index) => (
                  <MenuItem value={language} key={index}>
                    {language === "en" ? "🇬🇧" : language === "fr" ? "🇫🇷" : null}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </li>
      </ul>
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
      <div className={styles.btnBurger}>
        <span className={styles.burger_Line} onClick={handleShowLinks} />
      </div>
    </nav>
  );
};
export default Navbar;
