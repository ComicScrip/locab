import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { SelectCartProvider } from "../contexts/selectCartContext";
import { SessionProvider } from "next-auth/react";
import { CurrentUserContextProvider } from "../contexts/currentUserContext";
import { InfosUserContextProvider } from "../contexts/InfosUserContext";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <CurrentUserContextProvider>
        <SelectCartProvider>
          <InfosUserContextProvider>
            <Component {...pageProps} />
          </InfosUserContextProvider>
        </SelectCartProvider>
      </CurrentUserContextProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
