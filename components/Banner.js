import Image from "next/image";
import styles from "../styles/Banner.module.css";

export default function Banner() {
  return (
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
        <Image src="/icons/rating.png" alt="facebook" width={34} height={34} />
        <div className={styles.divpara}>
          <p className={styles.paragraphe}>
            Une équipe sympa <br />
            et à l'écoute
          </p>
        </div>
      </div>
      <div>
        <Image
          src="/icons/thumb.png"
          alt="satisfaction"
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
  );
}
