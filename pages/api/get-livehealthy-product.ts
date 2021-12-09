import swell from "swell-node";
import type { NextApiRequest, NextApiResponse } from "next";

swell.init("sailfish-e-commerce-limited", "5qBYeK0FS6djOP7TzCWOQ5hWQZZzzvnr");

export default async function fetchProductFromLiveHealthStore(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      return await swell
        .get("/products", {
          where: { active: true },
        })
        .then((response: { results: any }) => {
          const liveHealthyProduct = response?.results.filter(
            (product: { select_store: string }) =>
              product.select_store === "livehealthy"
          );
          return res.status(200).json(liveHealthyProduct);
        })
        .catch((error: any) => {
          console.error("error", error);
          return res.status(400).json(error);
        });
    }
  }
}
