import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../../../styles/EditProduct.module.css";
import LayoutAdmin from "../../../../components/LayoutAdmin";
import Link from "next/link";

const EditProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState("");
  const [priceCategories, setPriceCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch(console.error);
  }, [id]);

  useEffect(() => {
    axios
      .get(`/api/priceCategory`)
      .then((response) => response.data)
      .then((data) => {
        setPriceCategories(data);
      });
  }, []);

  const handlePatchProduct = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/products/${id}`, {
        name: product.name,
        brand: product.brand,
        caution: product.caution,
        description: product.description,
        priceCategoryId: product.priceCategoryId,
      })
      .then(() => router.push("/admin/produits"))
      .catch(console.error);
  };

  return (
    <LayoutAdmin pageTitle="Back-office | Editer un produit">
      <div className={styles.mainContainer}>
        <Link href="/admin/produit">
          <a>← Retour aux produits</a>
        </Link>
        <div className={styles.formPopup}>
          <h1>Modifier un produit</h1>
          <form onSubmit={handlePatchProduct}>
            <div className={styles.btnContainer}>
              <button
                type="submit"
                className={styles.btn}
                data-cy="modify-product-button"
              >
                Valider
              </button>
            </div>
            <div className={styles.productSampleDetailsContainer}>
              <section className={styles.detailsTextContainer}>
                <section className={styles.productContainer}>
                  <div className={styles.productLabelContainer}>
                    <label htmlFor="nom" className={styles.labelPopUp}>
                      Nom
                    </label>
                    <input
                      className={styles.input}
                      id="nom"
                      type="text"
                      value={product.name || ""}
                      onChange={(e) =>
                        setProduct({ ...product, name: e.target.value })
                      }
                      data-cy="modify-product-name"
                    ></input>
                  </div>
                  <div className={styles.productLabelContainer}>
                    <label htmlFor="brand" className={styles.labelPopUp}>
                      Marque
                    </label>
                    <input
                      className={styles.input}
                      id="brand"
                      type="text"
                      value={product.brand || ""}
                      onChange={(e) =>
                        setProduct({ ...product, brand: e.target.value })
                      }
                    ></input>
                  </div>
                </section>
                <section className={styles.dateContainer}>
                  <div className={styles.productLabelContainer}>
                    <label htmlFor="caution">Caution</label>
                    <input
                      cclassName={styles.input}
                      id="caution"
                      type="text"
                      value={product.caution || ""}
                      onChange={(e) =>
                        setProduct({ ...product, caution: e.target.value })
                      }
                    ></input>
                  </div>
                  <div className={styles.productLabelContainer}>
                    <label htmlFor="price" className={styles.labelPopUp}>
                      Catégorie de prix
                    </label>
                    <select
                      className={styles.input}
                      id="price"
                      type="text"
                      value={product.priceCategoryId || ""}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          priceCategoryId: e.target.value,
                        })
                      }
                    >
                      {priceCategories.map((price) => (
                        <option key={price.id} value={price.id}>
                          {price.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </section>
                <section className={styles.contiditionPremiseContainer}>
                  <div className={styles.productLabelContainer}>
                    <label htmlFor="description" className={styles.labelPopUp}>
                      Description
                    </label>
                    <textarea
                      className={(styles.input, styles.descriptionTextArea)}
                      id="description"
                      type="textarea"
                      value={product.description || ""}
                      onChange={(e) =>
                        setProduct({ ...product, description: e.target.value })
                      }
                    ></textarea>
                  </div>
                </section>
              </section>
            </div>

            <aside className={styles.pictureContainer}>
              <img
                // src={productPicture}
                // alt={productSample.referenceNumber}
                className={styles.productPicture}
                width="100%"
                height="100%"
              />
            </aside>
          </form>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default EditProduct;
