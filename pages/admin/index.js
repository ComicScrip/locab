import AddProductsPopUp from "../../components/AddProductsPopUp";
import LayoutAdmin from "../../components/LayoutAdmin";

export default function Dashboard() {
  return (
    <LayoutAdmin pageTitle="Dashboard">
      <h1>Dashboard</h1>
      <AddProductsPopUp />
    </LayoutAdmin>
  );
}
