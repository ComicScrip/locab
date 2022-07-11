import LayoutAdmin from "../../../../components/LayoutAdmin";
import styles from "../../../../styles/EditProductSample.module.css";

import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const EditProductSample = () => {
  const router = useRouter();
  const { id } = router.query;
  const [productSample, setProductSample] = useState("");
  const [productList, setProductList] = useState([]);
  const [premiseList, setPremiseList] = useState([]);

  const lastDate = productSample.lastDateOrder;
  const lastDateNewFormat = dayjs(lastDate).format("DD/MM/YY");
  const datePurchase = productSample.dateOfPurchase;
  const datePurchaseNewFormat = dayjs(datePurchase).format("DD/MM/YY");

  useEffect(() => {
    id &&
      axios
        .get(`/api/productSample/${id}`)
        .then((res) => {
          setProductSample(res.data);
        })
        .catch(console.error);
  }, [id]);

  useEffect(() => {
    axios
      .get(`/api/products`)
      .then((response) => response.data)
      .then((data) => {
        setProductList(data);
      });

    axios
      .get(`/api/premise`)
      .then((response) => response.data)
      .then((data) => {
        setPremiseList(data);
      });
  }, []);

  const productPicture = productSample.product.pictures[0].url;

  return (
    <LayoutAdmin pageTitle="Back-office | Editer une référence">
      <div className={styles.mainContainer}>
        <Link href="/admin/references">
          <a>← Retour aux référénces</a>
        </Link>
        <div className={styles.btnContainer}>
          <button className={styles.btn}>Valider</button>
        </div>
        <div className={styles.productSampleDetailsContainer}>
          <section className={styles.detailsTextContainer}>
            <section className={styles.productContainer}>
              <div className={styles.productLabelContainer}>
                <label htmlFor="reference">Référence</label>
                <input
                  id="reference"
                  name="reference"
                  className={styles.input}
                  value={productSample.referenceNumber || ""}
                  onChange={(e) =>
                    setProductSample({
                      ...productSample,
                      referenceNumber: e.target.value,
                    })
                  }
                />
              </div>
              <div className={styles.productLabelContainer}>
                <label htmlFor="product">Produit</label>
                <select
                  id="product"
                  name="product"
                  className={styles.input}
                  value={productSample.productId || ""}
                  onChange={(e) =>
                    setProductSample({
                      ...productSample,
                      productId: e.target.value,
                    })
                  }
                >
                  {productList.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
            </section>
            <section className={styles.dateContainer}>
              <div className={styles.productLabelContainer}>
                <label htmlFor="datePurchase">Date d'achat</label>
                <input
                  id="datePurchase"
                  name="datePurchase"
                  className={styles.input}
                  value={datePurchaseNewFormat || ""}
                  onChange={(e) =>
                    setProductSample({
                      ...productSample,
                      dateOfPurchase: e.target.value,
                    })
                  }
                />{" "}
              </div>
              <div className={styles.productLabelContainer}>
                <label htmlFor="lastDate">Dernière date de commande</label>
                <input
                  id="lastDate"
                  name="lastDate"
                  className={styles.input}
                  value={lastDateNewFormat || ""}
                  onChange={(e) =>
                    setProductSample({
                      ...productSample,
                      lastDateOrder: e.target.value,
                    })
                  }
                />{" "}
              </div>
            </section>
            <section className={styles.contiditionPremiseContainer}>
              <div className={styles.productLabelContainer}>
                <label htmlFor="condition">Etat</label>
                <input
                  id="condition"
                  name="condition"
                  className={styles.input}
                  value={productSample.condition || ""}
                  onChange={(e) =>
                    setProductSample({
                      ...productSample,
                      condition: e.target.value,
                    })
                  }
                />
              </div>
              <div className={styles.productLabelContainer}>
                <label htmlFor="premise">Ville</label>
                <select id="premise" name="premise" className={styles.input}>
                  {premiseList.map((premise) => (
                    <option key={premise.id} value={premise.id}>
                      {premise.name} {premise.city}
                    </option>
                  ))}
                </select>
              </div>
            </section>
            <section className={styles.commentContainer}>
              <div className={styles.productLabelContainer}>
                <label htmlFor="order">Réservation</label>
                <div id="order" className={styles.orderCommentInput}>
                  res
                </div>
              </div>
              <div className={styles.productLabelContainer}>
                <label htmlFor="comment">Commentaires</label>
                <textarea
                  id="comment"
                  name="comment"
                  className={styles.orderCommentInput}
                  value={productSample.comment || ""}
                  onChange={(e) =>
                    setProductSample({
                      ...productSample,
                      comment: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </section>
          </section>
          <aside className={styles.pictureContainer}>
            <img
              src={productPicture}
              alt={productSample.referenceNumber}
              className={styles.productPicture}
              width="100%"
              height="100%"
            />
          </aside>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default EditProductSample;
