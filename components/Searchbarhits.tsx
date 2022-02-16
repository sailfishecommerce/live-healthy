/* eslint-disable react-hooks/exhaustive-deps */
import { connectHits } from "react-instantsearch-dom";
import { hitType } from "@/types";

import ViewSearchQuery from "./ViewSearchQuery.";

interface SearchHitsProps {
  hits: hitType[];
}

function SearchHits({ hits }: SearchHitsProps) {
  return <>{hits.length === 0 ? "" : <ViewSearchQuery hits={hits} />}</>;
}
const SearchbarHits = connectHits(SearchHits);

export default SearchbarHits;
