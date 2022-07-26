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

  let lastDateNewFormat;
  let datePurchaseNewFormat;

  if (productSample.unavailabilityEnd !== null) {
    const lastDate = productSample.unavailabilityEnd;
    lastDateNewFormat = dayjs(lastDate).format("YYYY-MM-DD");
  }

  if (productSample.dateOfPurchase !== null) {
    const datePurchase = productSample.dateOfPurchase;
    datePurchaseNewFormat = dayjs(datePurchase).format("YYYY-MM-DD");
  }

  useEffect(() => {
    id &&
      axios
        .get(`/api/productSamples/${id}`)
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

  if (!productSample) return null;

  const productPicture = productSample.product.pictures[0].url;

  const handlePatchProductSample = (e) => {
    e.preventDefault();
    const dateOfPurchase = new Date(productSample.dateOfPurchase);
    const unavailabilityEnd = new Date(productSample.unavailabilityEnd);
    const productId = parseInt(productSample.productId, 10);
    const premiseId = parseInt(productSample.premiseId, 10);

    axios
      .patch(`/api/productSamples/${id}`, {
        referenceNumber: productSample.referenceNumber,
        dateOfPurchase: dateOfPurchase,
        comment: productSample.comment,
        condition: productSample.condition,
        unavailabilityEnd: unavailabilityEnd,
        productId: productId,
        premiseId: premiseId,
      })
      .then(() => router.push("/admin/references"))
      .catch(console.error);
  };

  return (
    <LayoutAdmin pageTitle="Back-office | Editer une référence">
      <div className={styles.mainContainer}>
        <Link href="/admin/references">
          <a>← Retour aux référénces</a>
        </Link>
        <form onSubmit={handlePatchProductSample}>
          <div className={styles.btnContainer}>
            <button className={styles.btn} data-cy="validation-btn">
              Valider
            </button>
          </div>
          <div className={styles.productSampleDetailsContainer}>
            <section className={styles.detailsTextContainer}>
              <section className={styles.productContainer}>
                <div className={styles.productLabelContainer}>
                  <label htmlFor="reference">Référence</label>
                  <input
                    id="reference"
                    name="reference"
                    type="text"
                    className={styles.input}
                    value={productSample.referenceNumber || ""}
                    onChange={(e) =>
                      setProductSample({
                        ...productSample,
                        referenceNumber: e.target.value,
                      })
                    }
                    data-cy="modify-reference-number"
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
                    type="date"
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
                    type="date"
                    className={styles.input}
                    value={lastDateNewFormat || datePurchaseNewFormat}
                    onChange={(e) =>
                      setProductSample({
                        ...productSample,
                        unavailabilityEnd: e.target.value,
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
                    type="text"
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
                  <select
                    id="premise"
                    name="premise"
                    className={styles.input}
                    onChange={(e) =>
                      setProductSample({
                        ...productSample,
                        premiseId: e.target.value,
                      })
                    }
                  >
                    {premiseList.map((premise) => (
                      <option key={premise.id} value={premise.id}>
                        {premise.city}
                      </option>
                    ))}
                  </select>
                </div>
              </section>
              <section className={styles.commentContainer}>
                <div className={styles.productLabelContainer}>
                  <label htmlFor="order">Réservations</label>
                  <div id="order" className={styles.orderListInput}>
                    <ul>
                      {productSample.orderItems.map((item) => (
                        <li
                          key={item.order.orderNumber}
                          id={item.order.orderNumber}
                        >
                          <Link href={`/admin/reservations/${item.order.id}`}>
                            {item.order.orderNumber}
                          </Link>
                        </li>
                      ))}
                    </ul>
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
        </form>
      </div>
    </LayoutAdmin>
  );
};

export default EditProductSample;
