import styles from "../styles/SearchForm.module.css";
import { BiMap } from "react-icons/bi";
import { IoMdTime } from "react-icons/io";

export default function SearchForm() {
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
    </div>
  );
}
