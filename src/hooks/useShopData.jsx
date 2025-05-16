import { useState, useEffect } from "react";
import getFetchRequest from "../functions/getFetchRequest.jsx";

const useShopData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        const data = await getFetchRequest(
          "https://fakestoreapi.com/products/"
        );

        if (!ignore) {
          setData(data);
          setError(null);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => (ignore = true);
  }, []);

  return { data, error, loading };
};

export default useShopData;
