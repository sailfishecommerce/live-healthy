import { render } from "react-dom";
import algoliasearch from "algoliasearch";
import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js";
import { createElement, Fragment, useEffect, useRef } from "react";

import { ProductItem } from "./ProductItem";

export function Autocomplete(props: any) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete({
      container: containerRef.current,
      renderer: { createElement, Fragment },
      render({ children }, root) {
        render(children, root);
      },
      ...props,
    });

    return () => {
      search.destroy();
    };
  }, [props]);

  return <div ref={containerRef} />;
}

const searchClient = algoliasearch(
  `${process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID}`,
  `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY}`
);

export default function CustomAutocomplete() {
  return (
    <Autocomplete
      openOnFocus={focus}
      getSources={({ query }: any) => [
        {
          sourceId: "",
          getItems() {
            return getAlgoliaResults({
              searchClient,
              queries: [
                {
                  indexName: "New_Livehealthy_products_index",
                  query,
                },
              ],
            });
          },
          templates: {
            item({ item, components }: any) {
              return <ProductItem hit={item} components={components} />;
            },
          },
        },
      ]}
    />
  );
}
