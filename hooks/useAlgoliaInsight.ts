/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import aa from "search-insights";

import searchClient from "@/lib/algoliaConfig";
import { useCart, useAuth } from ".";

export default function useAlgoliaInsight() {
  const [userToken, setUserToken] = useState("");
  const { getUserDetails } = useAuth();
  const { cart }: any = useCart();

  useEffect(() => {
    if (userToken.length === 0) {
      getUserDetails()
        .then((response) => {
          if (response !== null) {
            setUserToken(response.id);
          } else {
            setUserToken(cart.id);
          }
        })
        .catch((error) => console.error("error", error));
    }
  }, []);

  aa("init", {
    appId: `${process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID}`,
    apiKey: `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY}`,
  });

  searchClient.search([
    { indexName: "Livehealthy__products", params: { userToken } },
  ]);

  return {
    userToken,
  };
}
