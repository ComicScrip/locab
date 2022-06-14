import "../styles/globals.css";
import { SelectCartProvider } from "../contexts/selectCart";

function MyApp({ Component, pageProps }) {
  return (
    <SelectCartProvider>
      <Component {...pageProps} />;
    </SelectCartProvider>
  );
}

export default MyApp;
