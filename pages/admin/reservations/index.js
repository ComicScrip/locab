import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LayoutAdmin from "../../../components/LayoutAdmin";

export default function Reservations() {
  const [orderDescription, setOrderDescription] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("/api/orders")
      .then((res) => setOrderDescription(res.data))
      .catch(console.error);
  }, []);

  return (
    <LayoutAdmin pageTitle="Back-office | Réservations">
      <div>
        {orderDescription.map((order) => (
          <p key={order.key}>
            {order.orderNumber}{" "}
            <button
              onClick={() => {
                router.push({
                  pathname: "/admin/reservations/[reservation_id]",
                  query: { reservation_id: order.id },
                });
              }}
            >
              modifier
            </button>
          </p>
        ))}
      </div>
    </LayoutAdmin>
  );
}
