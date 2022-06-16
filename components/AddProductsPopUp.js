import styles from "../styles/AddProductsPopUp.module.css";

function AddProductsPopUp() {
  return (
    <div>
      <h1>Ajouter un produit</h1>
      <form className={styles.formPopUpAddProducts}>
        <div>
          <label></label>
          <input className={styles.inputPopUp}></input>
        </div>
        <div>
          <label></label>
          <input className={styles.inputPopUp}></input>
        </div>
        <div>
          <label></label>
          <input className={styles.inputPopUp}></input>
        </div>
        <div>
          <label></label>
          <input className={styles.inputPopUp}></input>
        </div>
        <div>
          <label></label>
          <textarea className={styles.inputPopUp}></textarea>
        </div>
      </form>
    </div>
  );
}

export default AddProductsPopUp;
