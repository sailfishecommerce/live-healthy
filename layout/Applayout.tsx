import { PropsWithChildren } from "react";
import Head from "next/head";
import Script from "next/script";

import Header from "@/plasmicComponent/Header";
import Footer from "@/components/Footer";
import LayoutWrapper from "./LayoutWrapper";
import LoadingBar from "@/components/loadingBar";
import useLoading from "@/hooks/useLoading";

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
      <Script strategy="beforeInteractive" id="truconversionScript">{`
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

      <Head>
        <title>{title}</title>
       
        <script
          src="https://en.trustmate.io/api/widget/4420c1ed-e3a7-47c2-b6a2-2d7386a819da/script"
          defer
        ></script>
        <script
          src="https://en.trustmate.io/api/widget/01739a85-4698-4d4c-90d5-876048fba847/script"
          defer
        ></script>
      </Head>
      {loading && <LoadingBar />}
      <Header
        headerSliderText1="Free shipping Worldwide"
        headerSliderText2="Trusted by Doctors & Medical Professionals"
        headerSliderText3="Delivery to your doorstep"
        icon1="globe.png"
        icon2="checkIcon.png"
        icon3="delivery.png"
        support="00123-456-789"
        topbarBgColor="#373F50"
        navBgColor="white"
        local={true}
      />
      {children}
      <div id="4420c1ed-e3a7-47c2-b6a2-2d7386a819da"></div>
      <div id="01739a85-4698-4d4c-90d5-876048fba847"></div>
      <Footer topSectionBgColor="#373F50" bottomSectionBgColor="#2B3445" />
    </LayoutWrapper>
  );
}
