import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

export default function container({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
