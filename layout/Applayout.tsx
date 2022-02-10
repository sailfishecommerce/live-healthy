import { PropsWithChildren } from "react";
import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";

import Header from "@/components/Header";
import LayoutWrapper from "./LayoutWrapper";
import useLoading from "@/hooks/useLoading";

const Footer = dynamic(() => import("../components/Footer"));
const LoadingBar = dynamic(() => import("../components/loadingBar"));

interface Applayout {
  title: string;
}

export default function Applayout({
  children,
  title,
}: PropsWithChildren<Applayout>) {
  const { loading } = useLoading();

  return (
    <LayoutWrapper>
      <Script strategy="afterInteractive" id="truconversionScript">{`
        var _tip = _tip || [];
        (function(d,s,id){
            var js, tjs = d.getElementsByTagName(s)[0];
            if(d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.async = true;
            js.src = d.location.protocol + '//app.truconversion.com/ti-js/19189/ae4b0.js';
            tjs.parentNode.insertBefore(js, tjs);
        }(document, 'script', 'ti-js'));                       
      `}</Script>
        <Script
          src="https://en.trustmate.io/api/widget/4420c1ed-e3a7-47c2-b6a2-2d7386a819da/script"
          strategy="afterInteractive"
        />
        <Script
          src="https://en.trustmate.io/api/widget/01739a85-4698-4d4c-90d5-876048fba847/script"
          strategy="afterInteractive"
        />
      <Head>
        <title>{title} | Sailfish e-commerce online store </title>
      </Head>
      {loading && <LoadingBar />}
      <Header support="00123-456-789" topbarBgColor="#373F50" />
      {children}
      <div id="4420c1ed-e3a7-47c2-b6a2-2d7386a819da"></div>
      <div id="01739a85-4698-4d4c-90d5-876048fba847"></div>
      <Footer topSectionBgColor="#373F50" bottomSectionBgColor="#2B3445" />
    </LayoutWrapper>
  );
}

// Applayout.whyDidYouRender = true;
