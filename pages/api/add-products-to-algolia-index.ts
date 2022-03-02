import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import algoliasearch from "algoliasearch";

export default function AddProductToAlgoliaIndiceHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = algoliasearch(
    "CZT5MA7JLJ",
    `${process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY}`
  );
  const index = client.initIndex("New_Livehealthy_products_index");

  let hits: any[] = [];

  switch (req.method) {
    case "POST": {
      index
        .saveObjects(req.body, {
          autoGenerateObjectIDIfNotExist: true,
        })
        .then((response) => {
          return res.status(200).json(response);
        })
        .catch((error) => {
          return res.status(400).json(error);
        });
    }
    case "GET": {
      index
        .browseObjects({
          batch: (objects) =>
            objects.map((object) => {
              hits = hits.concat(object.objectID);
              return hits;
            }),
        })
        .then(() => {
          console.log("Finished! We got %d hits", hits.length);
          fs.writeFile(
            "./browse.json",
            JSON.stringify(hits, null, 2),
            "utf-8",
            (err) => {
              if (err) throw err;
              console.log("Your index was successfully exported!");
            }
          );
        });
    }
  }
}
