import Head from "next/head";
import { PropsWithChildren } from "react";

import Footer from "@/json/footer-1.json"
import Header from "@/components/header/";
import LayoutWrapper from "@/layout/LayoutWrapper";

interface Props {
  title: string;
}

export default function Applayout({
  children,
  title,
}: PropsWithChildren<Props>) {
  return (
    <LayoutWrapper>
      <Head>
        <title>{title} | Live healthy e-commerce online store </title>
      </Head>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  );
}
