import swell from "swell-node";
import Airtable from "airtable";
import { NextApiRequest, NextApiResponse } from "next";
import toShopifyProductModel from "../../lib/toShopifyProductModel";

const base = new Airtable({
  apiKey: `${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
}).base(`${process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY}`);

export default async function createSwellProductHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      base("To Shopify")
        .select({
          maxRecords: 7794,
          view: "Grid view",
          filterByFormula: "NOT({Product Type} = '')",
        })
        .eachPage(
          function page(records, fetchNextPage) {
            try {
              records.forEach(async function (record) {
                if (record.fields) {
                  const productData = toShopifyProductModel(record.fields);
                  await swell
                    .post("/products", productData)
                    .then((response: any) => {
                      console.log(
                        "response createSwellProductHandler",
                        response
                      );
                      return res.status(200).json(response);
                    })
                    .catch((error: any) => {
                      console.error("error createSwellProductHandler", error);
                    });
                }
              });
            } catch (e) {
              console.log("error inside each page", e);
            }
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              res.status(400).json({ status: err });
              console.error(err);
              return res.status(400).json(err);
            } else {
              console.log("All products uploaded successfully");
              return res.status(200).json({ status: "ok" });
            }
          }
        );
    }
  }
}
