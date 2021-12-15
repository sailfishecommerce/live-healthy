import fs from "fs";
import swell from "swell-node";
import type { NextApiRequest, NextApiResponse } from "next";
import swellNodeInit from "../../lib/swellNode";

export default async function fetchProductsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  swellNodeInit();

  const pathName = "./products1.json";

  switch (req.method) {
    case "GET": {
      return await swell
        .get("/products", {
          where: { select_store: "livehealthy" },
          limit: 1000,
          page: 1,
        })
        .then((response: any) => {
          console.log("response", response);
          fs.writeFile(
            pathName,
            JSON.stringify(response.results),
            function (err) {
              if (err) {
                console.log("an error occured", err);
                return res.status(400).send(err);
              } else {
                console.log("success");
                return res.status(200).json({ status: "success" });
              }
            }
          );
        })
        .catch((error: any) => {
          console.log("error", error);
        });
    }
  }
}
