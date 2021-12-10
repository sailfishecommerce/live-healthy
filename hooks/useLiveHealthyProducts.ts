import axios from "axios";

export default async function useLiveHealthyProduct() {
  const response = await axios.get("/api/get-livehealthy-product");

  return response.data;
}
