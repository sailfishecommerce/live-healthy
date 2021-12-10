import swell from "swell-node";
import algoliasearch from "algoliasearch";
import type { NextApiRequest, NextApiResponse } from "next";

swell.init(
  "sailfish-e-commerce-limited",
  `${process.env.NEXT_PUBLIC_SWELL_SECRET_KEY}`
);

export default async function fetchProductFromLiveHealthStore(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = algoliasearch(
    `${process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID}`,
    `${process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY}`
  );

  const index = client.initIndex("Livehealthy__products");

  switch (req.method) {
    case "GET": {
      return await swell
        .get("/products", {
          where: { select_store: "livehealthy" },
          limit: 1000,
          page: 7,
        })
        .then((response: { results: any }) => {
          console.log("length", response.results.length);
          index
            .saveObjects(response.results, {
              autoGenerateObjectIDIfNotExist: true,
            })
            .then(({ objectIDs }) => {
              console.log("response algolia", objectIDs);
            })
            .catch((error) => {
              console.log("error algolia", error);
              return res.status(400).json(error);
            });
        })
        .catch((error: any) => {
          console.error("error", error);
          return res.status(400).json(error);
        });
    }
  }
}
