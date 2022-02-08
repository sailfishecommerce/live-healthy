// import "../lib/wdyr";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import AOS from "aos";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Script from "next/script";
import type { AppProps } from "next/app";

// import { ReactQueryDevtools } from "react-query/devtools";

import store from "@/redux/store";
import "nouislider/dist/nouislider.css";
import "@/styles/globals.css";

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
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.6/simplebar.min.js"
        integrity="sha512-rn0CaCtyheymRT43p0ZuFH0SvNriLU5cuJpY2f4IcyLrbHzJdsIF1dygi9oNha1BhHagO8U+h2xRWCosYf9gCg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        strategy="afterInteractive"
      />
      <Script
        type="module"
        src="/js/smooth-scroll.js"
        strategy="beforeInteractive"
      />
      <Script type="module" src="/js/theme.js" strategy="afterInteractive" />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
