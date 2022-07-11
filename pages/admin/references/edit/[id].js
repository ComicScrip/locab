import LayoutAdmin from "../../../../components/LayoutAdmin";
import styles from "../../../../styles/EditProductSample.module.css";

const EditProductSample = () => {
  return (
    <LayoutAdmin pageTitle="Back-office | Editer une référence">
      <div className={styles.mainContainer}>
        <a>← Retour aux référénces</a>
        Valider Référence Produit Date d'achat Etat Dernière date de commande
        Ville Réservations Commentaires
      </div>
    </LayoutAdmin>
  );
};

export default EditProductSample;
