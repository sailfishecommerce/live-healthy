import algoliasearch from "algoliasearch/lite";

const searchClient = algoliasearch(
  `${process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID}`,
  `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY}`
);

export default searchClient;
