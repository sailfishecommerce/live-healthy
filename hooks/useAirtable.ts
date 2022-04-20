import axios from "axios";
import { useEffect } from "react";

export default function useAirtable() {
  useEffect(() => {
    axios.get("/api/from-airtable-to-swell");
  }, []);
}
