/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
// import "../lib/wdyr";
import { QueryClient, QueryClientProvider } from "react-query";
import AOS from "aos";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Script from "next/script";
import type { AppProps } from "next/app";

import { ReactQueryDevtools } from "react-query/devtools";

import store from "@/redux/store";
import "@/styles/globals.css";
import "@/styles/theme.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      easing: "ease", // default easing for AOS animations
      delay: 500,
    });
    AOS.refresh();
  }, []);
  const persistor = persistStore(store);

  const queryClient = new QueryClient();
  return (
    <div>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
