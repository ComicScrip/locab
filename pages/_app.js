import "../styles/globals.css";
import { SelectCartProvider } from "../contexts/selectCart";
import { SessionProvider } from "next-auth/react";
import { CurrentUserContextProvider } from "../contexts/currentUserContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
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
