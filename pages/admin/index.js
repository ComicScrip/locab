import LayoutAdmin from "../../components/LayoutAdmin";
import styles from "../../styles/LayoutAdmin.module.css";

export default function Dashboard() {
  return (
    <LayoutAdmin pageTitle="Dashboard">
      <h1 className={styles.titleAdmin}>Dashboard</h1>
    </LayoutAdmin>
  );
}
