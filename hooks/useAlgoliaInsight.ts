/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import aa from "search-insights";

import searchClient from "@/lib/algoliaConfig";

export default function useAlgoliaInsight() {
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    aa("getUserToken", null, (err, newUserToken) => {
      if (err) {
        console.error("error", err);
        return;
      }
      setUserToken(newUserToken);
    });
  }, []);

  aa("init", {
    appId: "CZT5MA7JLJ",
    apiKey: `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY}`,
    useCookie: true,
  });

  searchClient.search([
    { indexName: "New_Livehealthy_products_index", params: { userToken } },
  ]);

  return {
    userToken,
  };
}
