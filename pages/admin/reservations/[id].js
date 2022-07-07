import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import OrderDetails from "../../../components/backoffice/OrderDetails";
import LayoutAdmin from "../../../components/LayoutAdmin";
import styles from "../../../styles/BackReservations.module.css";
import dayjs from "dayjs";

export default function ReservationDetail() {
  const [orderDetails, setOrderDetails] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    id &&
      axios
        .get(`/api/orders/${id}`)
        .then((res) => setOrderDetails(res.data))
        .catch(console.error);
  }, [id]);

  if (!orderDetails) return null;

  const orderStartDateOld = orderDetails.startDate;
  const orderStartDateNewFormat = dayjs(orderStartDateOld).format("DD/MM/YY");
  const orderEndDateOld = orderDetails.endDate;
  const orderEndDateNewFormat = dayjs(orderEndDateOld).format("DD/MM/YY");

  return (
    <LayoutAdmin pageTitle="Back-office | Réservations">
      <div className={styles.reservationMainContainer}>
        <div style={{ fontSize: "0.9rem", cursor: "pointer" }}>
          <Link href="/admin/reservations">
            <a>← Retour aux réservations</a>
          </Link>
        </div>
        <p>
          <b>Commande N°{orderDetails.orderNumber}</b> du{" "}
          {orderStartDateNewFormat} au {orderEndDateNewFormat}
        </p>
        <p>
          <b>Total : </b> {orderDetails.paidPrice} €
        </p>
        <OrderDetails orderDetails={orderDetails} />
      </div>
    </LayoutAdmin>
  );
}
