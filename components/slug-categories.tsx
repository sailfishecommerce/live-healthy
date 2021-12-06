/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { useQuery } from "react-query";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";

import { PlasmicRootProvider } from "@plasmicapp/loader-react";
import { PLASMIC } from "../plasmic-init";
import PlasmicLayout from "@/layout/Plasmiclayout";

import useCategory from "@/hooks/useCategory";

interface CategoryProps {
  category: any;
  allCategoriesArray: [];
}
export default function Category({ category }: CategoryProps): JSX.Element {
  const { getProductsInACategory } = useCategory();

  const { data, status, error } = useQuery("productsInCategory", () =>
    getProductsInACategory(category.slug)
  );
  console.log("products in category", data?.results);
  return (
    <PlasmicLayout>
      <PlasmicRootProvider loader={PLASMIC}>
        <PlasmicComponent component="/products" />
      </PlasmicRootProvider>
    </PlasmicLayout>
  );
}

// export async function getStaticProps({ params }: { params: { slug: string } }) {
//   const { listAllCategory } = useCategory();
//   const data: any = await listAllCategory();
//   const allCategoriesArray = data?.results;

//   const category = allCategoriesArray.filter(
//     (category: { slug: any }) => category?.slug === params.slug
//   );

//   return {
//     props: {
//       category: category[0],
//       allCategoriesArray,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const { listAllCategory } = useCategory();
//   const data: any = await listAllCategory();
//   const allCategoriesArray = data?.results;

//   return {
//     paths:
//       allCategoriesArray?.map(
//         (category: { slug: any }) => `/categories/${category.slug}`
//       ) || [],
//     fallback: false,
//   };
// }
