import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { SessionProvider } from "next-auth/react";
import { CurrentUserContextProvider } from "../contexts/currentUserContext";
import { ToastProvider } from "react-toast-notifications";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <SessionProvider session={session}>
          <CurrentUserContextProvider>
            <Component {...pageProps} />
          </CurrentUserContextProvider>
        </SessionProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
