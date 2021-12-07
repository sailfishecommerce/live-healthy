import path from "path";
import fs from "fs";
import Airtable from "airtable";
import type { NextApiRequest, NextApiResponse } from "next";

const base = new Airtable({
  apiKey: "keyaF5bLqQ92wcNjk",
}).base("appWYa04URh7qcq81");

const filePath = path.join(__dirname, "../../public/airtable.json");

export default async function fetchProductsFromAirtable(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      
    }
  }
}
