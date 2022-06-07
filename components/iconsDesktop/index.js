/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React from "react";
import Image from "next/image";
import { IoMdTime } from "react-icons/io";
import { BiMap } from "react-icons/bi";
import styles from "../../styles/iconsDesktop.module.css";

export default function iconDesktop() {
  const style0 = {
    position: "absolute",
    color: "#D28F71",
    padding: "1px",
    marginLeft: "388px",
    marginTop: "18px",
  };
  const style1 = {
    position: "absolute",
    color: "#D28F71",
    padding: "1px",
    marginLeft: "10px",
    marginTop: "5px",
  };
  const style2 = {
    position: "absolute",
    color: "#D28F71",
    padding: "1px",
    marginLeft: "10px",
    marginTop: "5px",
  };
  return (
    <div className={styles.containerGlobal}>
      <BiMap style={style0} />
      <div className={styles.forms}>
        <div>
          <input
            type="text"
            name="destination"
            id="destination"
            // &#xf043; &#xf017;
            placeholder="Où allez-vous ?"
            className={style0}
          />
          <IoMdTime style={style2} />
          <input
            type="date"
            name="destination"
            id="destination"
            placeholder="Arrivée"
            className={style1}
          />
          <IoMdTime style={style1} />
          <input
            type="date"
            name="departure"
            id="departure"
            placeholder="Départ"
            className={style2}
            // placeholder=" &#xf017;  <i class="fa-thin fa-clock"></i> Départ   <i class="fa-thin fa-location-dot"></i>"
          />
          <button className={styles.button}>Je cherche !</button>
        </div>
      </div>
      <div className={styles.iconshead}>
        <div>
          <Image
            src="/icons/credit-card.png"
            alt="facebook"
            width={34}
            height={34}
          />
          <div className={styles.divpara}>
            <p className={styles.paragraphe}>
              Un paiement simple <br />
              et sécurisé
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/icons/washing-hands.png"
            alt="facebook"
            width={34}
            height={34}
          />
          <div className={styles.divpara}>
            <p className={styles.paragraphe}>
              Protocole nettoyage <br />
              renforcé
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/icons/rating.png"
            alt="facebook"
            width={34}
            height={34}
          />
          <div className={styles.divpara}>
            <p className={styles.paragraphe}>
              Une équipe sympa <br />
              et à l'écoute
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/icons/washing-hands.png"
            alt="facebook"
            width={34}
            height={34}
          />
          <div className={styles.divpara}>
            <p className={styles.paragraphe}>
              Votre satisfaction <br />
              est notre priorité
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
