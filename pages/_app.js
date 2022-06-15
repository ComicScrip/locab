import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { SelectCartProvider } from "../contexts/selectCartContext";
import { SessionProvider } from "next-auth/react";
import { CurrentUserContextProvider } from "../contexts/currentUserContext";

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <CurrentUserContextProvider>
        <SelectCartProvider>
          <Component {...pageProps} />
        </SelectCartProvider>
      </CurrentUserContextProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(App);
