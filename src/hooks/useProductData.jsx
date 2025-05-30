import { useState, useEffect } from "react";
import getFetchRequest from "../functions/getFetchRequest.jsx";

const useProductData = () => {
  const [productData, setProductData] = useState([]);
  const [productError, setProductError] = useState(null);
  const [productLoading, setProductLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        const data = await getFetchRequest(
          "https://fakestoreapi.com/products/"
        );

        if (!ignore) {
          setProductData(data);
          setProductError(null);
        }
      } catch (err) {
        setProductError(err);
      } finally {
        setProductLoading(false);
      }
    };

    fetchData();

    return () => (ignore = true);
  }, []);

  return { productData, productError, productLoading };
};

export default useProductData;
