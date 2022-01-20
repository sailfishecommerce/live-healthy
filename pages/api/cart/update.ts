import swell from "swell-node";
import type { NextApiRequest, NextApiResponse } from "next";
import swellNodeInit from "../../../lib/swellNode";

export default async function fetchProductsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  swellNodeInit();

  const cart = req.body;

  console.log("received cart", cart);

  switch (req.method) {
    case "POST": {
      return await swell
        .put("/carts/{id}", cart)
        .then((response: any) => {
          console.log("response cart", response);
          return res.status(200).send(response);
        })
        .catch((error: any) => {
          console.log("error", error);
          return res.status(400).send(error);
        });
    }    
  }
}
