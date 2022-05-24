import R_panier from "../components/r_panier";
import styles from "../styles/Panier.module.css";
import { AiFillInfoCircle } from "react-icons/ai";
import Button from "@mui/material/Button";

const productList = [
  {
    id: "1",
    name: "poussette",
    prix: 7,
  },
  {
    id: "2",
    name: "baignoire",
    prix: 9,
  },
  {
    id: "3",
    name: "siege auto",
    prix: 10,
  },
  {
    id: "4",
    name: "bavoir",
    prix: 3,
  },
];

function panier() {
  const prixTotalCalcul = [];
  for (let i = 0; i < productList.length; i++) {
    let prixProduitDansLePanier = productList[i].prix;
    prixTotalCalcul.push(prixProduitDansLePanier);
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const prixTotal = prixTotalCalcul.reduce(reducer, 0);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.mainTitle}>
          <h1>Votre panier</h1>
        </div>
        {productList.map((products) => (
          <R_panier
            name={products.name}
            prix={products.prix}
            products={products}
            key={products.id}
            id={products.id}
          />
        ))}
        <div className={styles.totalContainer}>
          <div className={styles.totalInfoContainer}>
            <h3>Total</h3>
            <p>du XX/XX au XX/XX</p>
          </div>
          <h2>{prixTotal}€</h2>
        </div>
        <div className={styles.cautionContainer}>
          <p>
            Montant de la caution &nbsp;
            <AiFillInfoCircle
              style={{ verticalAlign: "middle", cursor: "pointer" }}
            />
          </p>
          <p>X€</p>
        </div>
        <div className={styles.validerContainer}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#D28F71",
              borderRadius: "8px",
              width: "100%",
              color: "white",
              fontWeight: "bold",
              fontSize: "13pt",
              padding: "15px 0px",
            }}
          >
            valider votre panier
          </Button>
        </div>
      </div>
    </>
  );
}

export default panier;
