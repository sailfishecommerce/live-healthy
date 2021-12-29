import dynamic from "next/dynamic";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

import {
  ComponentRenderData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-react";
import Error from "next/error";
import { PLASMIC } from "../plasmic-init";
import PlasmicLayout from "@/layout/Plasmiclayout";

const DyanmicPlasmicComponent: any = dynamic(() =>
  import("@plasmicapp/loader-nextjs").then(
    (response: any) => response.PlasmicComponent
  )
);

export default function PlasmicLoaderPage(props: {
  plasmicData?: ComponentRenderData;
}) {
  const { plasmicData } = props;
  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    return <Error statusCode={404} />;
  }
  return (
    <>
      <Head>
        <meta property="og:site_name" content="Live healthy" />
        <meta property="og:url" content="https://livehealthy.hk/" />
        <meta
          property="og:title"
          content="Live healthy Store - Quality Australian Products - Free Shipping to HK"
        />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="No minimum orders and free shipping to Hong Kong. Quality imported products from Australia. Choose from over 10,000 genuine health, personal care, confectionery, beauty and baby care products. Get vitamins, health and food supplements, cosmetics, confectionery, quit smoking aids, hair colours, baby food and much more. Owned & operated by HK'ers."
        />

        <meta name="twitter:site" content="@https://" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Live healthy Store - Quality Australian Products - Free Shipping to HK"
        />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta
          property="og:image"
          content="https://cdn.shopify.com/s/files/1/0040/1699/6481/files/Facebook_DP_97730035-fb01-4b92-930e-1e651e16b00b.png?v=1627736864"
        />
        <meta
          name="twitter:description"
          content="No minimum orders and free shipping to Hong Kong. Quality imported products from Australia. Choose from over 10,000 genuine health, beauty and baby care products. Get vitamins, health and food supplements, cosmetics, quit smoking aids, hair colours, baby food and much more. Owned &amp; operated by HK'ers."
        />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "url":"https://livehealthy.hk/",
            "logo": "//cdn.shopify.com/s/files/1/0040/1699/6481/files/Sailfish-logo.png?v=1626620681"
          }`}
        </script>
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "url":"https://livehealthy.hk/",
            "logo": "//cdn.shopify.com/s/files/1/0040/1699/6481/files/Sailfish-logo.png?v=1626620681"
          }`}
        </script>
      </Head>
      <PlasmicLayout>
        <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
          <DyanmicPlasmicComponent
            component={plasmicData.entryCompMetas[0].name}
          />
        </PlasmicRootProvider>
      </PlasmicLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { catchall } = context.params ?? {};

  const plasmicPath =
    typeof catchall === "string"
      ? catchall
      : Array.isArray(catchall)
      ? `/${catchall.join("/")}`
      : "/";
  const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
  if (plasmicData) {
    return {
      props: { plasmicData },
    };
  }
  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pageModules = await PLASMIC.fetchPages();

  return {
    paths: pageModules.map((mod) => ({
      params: {
        catchall: mod.path.substring(1).split("/"),
      },
    })),
    fallback: false,
  };
};
