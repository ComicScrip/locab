import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { SelectCartProvider } from "../contexts/selectCartContext";
import { SessionProvider } from "next-auth/react";
import { CurrentUserContextProvider } from "../contexts/currentUserContext";
import { ToastProvider } from "react-toast-notifications";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ToastProvider>
      <SessionProvider session={session}>
        <CurrentUserContextProvider>
          <SelectCartProvider>
            <Component {...pageProps} />
          </SelectCartProvider>
        </CurrentUserContextProvider>
      </SessionProvider>
    </ToastProvider>
  );
}

export default appWithTranslation(MyApp);
