import { useState } from "react";
import AddProductsPopUp from "../../components/AddProductsPopUp";
import LayoutAdmin from "../../components/LayoutAdmin";

export default function Dashboard() {
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => {
    setShowPopup(true);
  };

  return (
    <LayoutAdmin pageTitle="Dashboard">
      <h1>Dashboard</h1>

      <div>
        <button onClick={handleClick} type="button">
          +
        </button>

        <AddProductsPopUp show={showPopup} setShow={setShowPopup} />
      </div>
    </LayoutAdmin>
  );
}
