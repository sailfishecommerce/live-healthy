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
import whyDidYouRender from "@welldone-software/why-did-you-render";

import store from "@/redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "simplebar/dist/simplebar.css";
import "@/styles/globals.css";
import "nouislider/dist/nouislider.css";
import "@/styles/theme.min.css";

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  whyDidYouRender(React);
}

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

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: true,
        refetchOnReconnect: true,
      },
    },
  });

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
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.5.0/nouislider.min.css"
          rel="stylesheet"
        />
      </Head>

      <Script src=" https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.5.0/nouislider.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/lightgallery.js@1.4.0/lib/js/lightgallery.min.js" />
      <Script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js" />
      <Script type="module" src="/js/theme.js" strategy="lazyOnload" />

      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
