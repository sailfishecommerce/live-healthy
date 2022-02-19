import { PropsWithChildren } from "react";
import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";

import LayoutWrapper from "./LayoutWrapper";

const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer"));

interface Applayout {
  title: string;
}

export default function Applayout({
  children,
  title,
}: PropsWithChildren<Applayout>) {
  return (
    <LayoutWrapper>
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
      <Header />
      {children}
      <div id="4420c1ed-e3a7-47c2-b6a2-2d7386a819da"></div>
      <div id="01739a85-4698-4d4c-90d5-876048fba847"></div>
      <Footer />
    </LayoutWrapper>
  );
}

// Applayout.whyDidYouRender = true;
