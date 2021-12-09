import type { NextApiRequest, NextApiResponse } from "next";
import algoliasearch from "algoliasearch";

export default function AddProductToAlgoliaIndiceHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = algoliasearch(
    `${process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID}`,
    `${process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY}`
  );
  const index = client.initIndex(
    `${process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}`
  );

  console.log("req.method", req.method, "req.body", req.body);

  switch (req.method) {
    case "POST": {
      index
        .saveObjects(req.body, {
          autoGenerateObjectIDIfNotExist: true,
        })
        .then((response) => {
          console.log("response algolia", response);
          return res.status(200).json(response);
        })
        .catch((error) => {
          console.log("error algolia", error);
          return res.status(400).json(error);
        });
    }
  }
}
