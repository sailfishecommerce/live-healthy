import Airtable from "airtable";
import type { NextApiRequest, NextApiResponse } from "next";

const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY })
  .base(`
  process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY`);

export default async function fetchProductsFromAirtable(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      return await base("Gold Clean (Latest)")
        .select({
          view: "Grid view",
        })
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach(function (record) {
              console.log(
                "Retrived airtableProduct",
                record.get("#productname"),
                "airtable record",
                record,
                "airtable records",
                records
              );
            });
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              console.error(err);
              return;
            }
          }
        );
    }
  }
}
