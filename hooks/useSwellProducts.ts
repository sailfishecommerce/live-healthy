import axios from "axios";
import swellClientInit from "@/lib/config";
import { useQuery } from "react-query";

type filterType = {
  page: number;
  limit: number;
  sort: string;
  categories: string; // optional category slug or ID
  $filters: {
    price: number[];
    category: string[];
    size: string[];
  };
};

export default function useSwellProducts() {
  const { swell, initializeSwell } = swellClientInit();
  initializeSwell();

  async function listProducts() {
    return await swell.products.list({
      limit: 25,
      page: 1,
    });
  }
  async function allProducts() {
    return await swell.products.list();
  }

  async function filterProducts(filter: filterType) {
    return await swell.products.list({
      ...filter,
    });
  }

  async function getAllAttributes() {
    return await swell.attributes.list({
      limit: 25,
      page: 1,
    });
  }

  return { listProducts, allProducts, filterProducts, getAllAttributes };
}

export function useDocsuppliesProduct(): any {
  function fetchDocsuppliesProducts() {
    return axios.get("/api/get-docsupplies-product");
  }
  const {
    data: docsuppliesProduct,
    status: docsuppliesStatus,
    error: docsuppliesError,
  } = useQuery("fetchDocsuppliesProducts", fetchDocsuppliesProducts);

  return {
    docsuppliesProduct,
    docsuppliesStatus,
    docsuppliesError,
  };
}
