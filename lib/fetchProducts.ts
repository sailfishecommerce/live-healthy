import swell from "swell-node";
import swellNodeInit from "@/lib/swellNode";

export default async function fetchProducts() {
  swellNodeInit();
  return await swell.get("/products", {
    where: { select_store: "livehealthy" },
    limit: 1000,
    page: 1,
  });
}
