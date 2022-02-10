/* eslint-disable react-hooks/exhaustive-deps */
// import dynamic from "next/dynamic";
// import { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
// import {
//   ComponentRenderData,
//   PlasmicRootProvider,
// } from "@plasmicapp/loader-react";
// import Error from "next/error";

import useUserToken from "@/hooks/useUserToken";
import PlasmicLayout from "@/layout/Plasmiclayout";
import Metatag from "@/components/Metatag";
import { PLASMIC } from "../plasmic-init";

// const DyanmicPlasmicComponent: any = dynamic(() =>
//   import("@plasmicapp/loader-nextjs").then(
//     (response: any) => response.PlasmicComponent
//   )
// );

export default function PlasmicLoaderPage() {
//   props: {
//   plasmicData?: ComponentRenderData;
// }
  // const { plasmicData } = props;
  // const { generateUserToken } = useUserToken();

  // useEffect(() => {
  //   generateUserToken();
  // }, []);

  // if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
  //   return <Error statusCode={404} />;
  // }

  return (
    <>
      <h1>Plasmic page</h1>
      {/* <Metatag />
      <PlasmicLayout>
        <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
          <DyanmicPlasmicComponent
            component={plasmicData.entryCompMetas[0].name}
          />
        </PlasmicRootProvider>
      </PlasmicLayout> */}
    </>
  );
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { catchall } = context.params ?? {};

//   const plasmicPath =
//     typeof catchall === "string"
//       ? catchall
//       : Array.isArray(catchall)
//       ? `/${catchall.join("/")}`
//       : "/";

//   const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
//   if (plasmicData) {
//     return {
//       props: { plasmicData },
//     };
//   }
//   return {
//     props: {},
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const pageModules = await PLASMIC.fetchPages();

//   return {
//     paths: pageModules.map((mod) => ({
//       params: {
//         catchall: mod.path.substring(1).split("/"),
//       },
//     })),
//     fallback: false,
//   };
// };