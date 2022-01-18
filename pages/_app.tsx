import "../lib/wdyr";
import React, { useEffect } from "react";
import AOS from "aos";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";
import Script from "next/script";
import type { AppProps } from "next/app";
import "simplebar";

import store from "@/redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "simplebar/dist/simplebar.css";
import "@/styles/globals.css";
import "nouislider/dist/nouislider.css";
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
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/lightgallery.js@1.4.0/src/css/lightgallery.css"
        />
      </Head>
      <Script
        src=" https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.5.0/nouislider.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/lightgallery.js@1.4.0/lib/js/lightgallery.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js"
        strategy="afterInteractive"
      />
      <Script type="module" src="/js/theme.js" strategy="afterInteractive" />

      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PersistGate loading={null} persistor={persistor}>
            <React.StrictMode>
              <Component {...pageProps} />
            </React.StrictMode>
          </PersistGate>
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
