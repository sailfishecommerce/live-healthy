import axios from "axios";
import products from "@/json/airtable.json";

export default function useCreateProduct() {
  function createProduct(product: any) {
    axios
      .post("/api/create-product", { record: product })
      .then((response) => {
        console.log("response", response.data);
      })
      .catch((error) => console.log("error", error));
  }
}


 // useEffect(() => {
  //   products.map((product) => createProduct(product));
  // }, [])