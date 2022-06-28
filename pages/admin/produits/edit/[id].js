import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const EditProduct = () => {
  const { id } = router.query;
  const router = useRouter();
  const [product, setProduct] = useState("");

  useEffect(() => {
    axios
      .get(`/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch(console.error);
  }, [id]);

  const handlePatchProduct = (e) => {
    e.prevent.default,
      axios
        .patch(`api/products/${id}`, {
          id: product.id,
          name: product.name,
          brand: product.brand,
          caution: product.caution,
          description: product.description,
          priceCategoryId: product.priceCategoryId,
        })
        .then(() => router.push(`/admin/produits/${id}`))
        .catch(console.error);
  };

  return (
    <div>
      <form onChange={handlePatchProduct}></form>
    </div>
  );
};

export default EditProduct;
