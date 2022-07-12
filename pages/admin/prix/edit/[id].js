// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import styles from "../../../../styles/EditProduct.module.css";
// import LayoutAdmin from "../../../../components/LayoutAdmin";

// const EditPrice = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [price, setPrice] = useState("");

//   useEffect(() => {
//     axios
//       .get(`/api/price/${id}`)
//       .then((res) => {
//         setPrice(res.data);
//       })
//       .catch(console.error);
//   }, [id]);

//   const handlePatchPrice = (e) => {
//     e.preventDefault();
//     axios
//       .patch(`/api/price/${id}`, {
//         name: price.name,
// oneDay: price.oneDay,
// twoDays: price.twoDays,
// threeDays: price.threeDays,
// fourDays: "",
// fiveDays: "",
// sixDays: "",
// sevenDays: "",
// eightDays: "",
// nineDays: "",
// tenDays: "",
// elevenDays: "",
// twelveDays: "",
// thirteenDays: "",
// fourteenDays: "",
// fifteenDays: "",
// sixteenDays: "",
//       })
//       .then(() => router.push("/admin/prix"))
//       .catch(console.error);
//   };

//   return (
//     <LayoutAdmin>
//       <div className={styles.pageEdit}>
//         <div className={styles.formPopup}>
//           <h1 className={styles.titlePopupProducts}>Modifier un produit</h1>
//           <form
//             className={styles.formPopUpAddProducts}
//             onSubmit={handlePatchProduct}
//           >
//             <div className={styles.inputLign}>
//               <div className={styles.productsName}>
//                 <label htmlFor="nom" className={styles.labelPopUp}>
//                   Nom
//                 </label>
//                 <input
//                   className={styles.inputPopUp}
//                   id="nom"
//                   type="text"
//                   value={product.name || ""}
//                   onChange={(e) =>
//                     setProduct({ ...product, name: e.target.value })
//                   }
//                   data-cy="modify-product-name"
//                 ></input>
//               </div>
//               <div className={styles.productsMark}>
//                 <label htmlFor="brand" className={styles.labelPopUp}>
//                   Marque
//                 </label>
//                 <input
//                   className={styles.inputPopUp}
//                   id="brand"
//                   type="text"
//                   value={product.brand || ""}
//                   onChange={(e) =>
//                     setProduct({ ...product, brand: e.target.value })
//                   }
//                 ></input>
//               </div>
//             </div>
//             <div className={styles.inputLign}>
//               <div className={styles.productsQuantity}>
//                 <label htmlFor="caution" className={styles.labelPopUp}>
//                   Caution
//                 </label>
//                 <input
//                   className={styles.inputPopUp}
//                   id="caution"
//                   type="text"
//                   value={product.caution || ""}
//                   onChange={(e) =>
//                     setProduct({ ...product, caution: e.target.value })
//                   }
//                 ></input>
//               </div>
//               <div className={styles.productsPrice}>
//                 <label htmlFor="price" className={styles.labelPopUp}>
//                   Catégorie de prix
//                 </label>
//                 <select
//                   className={styles.inputPopUp}
//                   id="price"
//                   type="text"
//                   value={product.priceCategoryId || ""}
//                   onChange={(e) =>
//                     setProduct({ ...product, priceCategoryId: e.target.value })
//                   }
//                 >
//                   {priceCategories.map((price) => (
//                     <option key={price.id} value={price.id}>
//                       {price.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <div className={styles.productsDescription}>
//               <label htmlFor="description" className={styles.labelPopUp}>
//                 Description
//               </label>
//               <textarea
//                 className={(styles.inputPopUp, styles.descriptionTextArea)}
//                 id="description"
//                 type="textarea"
//                 value={product.description || ""}
//                 onChange={(e) =>
//                   setProduct({ ...product, description: e.target.value })
//                 }
//               ></textarea>
//             </div>
//             <div className={styles.labelPopUp}>Photos</div>
//             <div className={styles.btnPopupDiv}>
//               <button
//                 type="submit"
//                 className={styles.buttonPopUp}
//                 data-cy="modify-product-button"
//               >
//                 Modifier
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </LayoutAdmin>
//   );
// };

// export default EditPrice;
