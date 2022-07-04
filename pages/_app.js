import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { SelectCartProvider } from "../contexts/selectCartContext";
import { SessionProvider } from "next-auth/react";
import { CurrentUserContextProvider } from "../contexts/currentUserContext";
import { CurrentInfosProvider } from "../contexts/CurrentInfosContext";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <CurrentUserContextProvider>
        <CurrentInfosProvider>
          <SelectCartProvider>
            <Component {...pageProps} />
          </SelectCartProvider>
        </CurrentInfosProvider>
      </CurrentUserContextProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
