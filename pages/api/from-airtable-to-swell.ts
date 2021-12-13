import swell from "swell-node";
import Airtable from "airtable";
import axiosRetry from "axios-retry";
import { NextApiRequest, NextApiResponse } from "next";

import toShopifyProductModel from "../../lib/toShopifyProductModel";
import formattedUrlArray from "../../lib/useFormatProductImage";

const base = new Airtable({
  apiKey: `${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
}).base(`${process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY}`);

export default async function createSwellProductHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let count = 0;
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
              records.forEach(async function (record: any) {
                if (record.fields) {
                  const formattedUrl = record.fields["Image Src"]?.split(";");
                  if (formattedUrl) {
                    formattedUrlArray(formattedUrl, record).then(
                      async (response) => {
                        const productData = toShopifyProductModel(
                          record.fields,
                          response
                        );
                        await swell
                          .post("/products", productData)
                          .then((response: any) => {
                            count = count + 1;
                            console.log(
                              "count",
                              count,
                              "response createSwellProductHandler",
                              response
                            );
                            return res.status(200).json(response);
                          })
                          .catch((error: any) => {
                            console.error(
                              "error createSwellProductHandler",
                              error
                            );
                          });
                      }
                    );
                  }
                }
              });
            } catch (e) {
              console.log("error inside each page", e);
              return res.status(400).json(e);
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
