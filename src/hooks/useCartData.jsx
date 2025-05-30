import { useState, useEffect } from "react";
import getFetchRequest from "../functions/getFetchRequest.jsx";

const useCartData = (cartItemsIds) => {
  const [cartData, setCartData] = useState([]);
  const [cartError, setCartError] = useState(null);
  const [cartLoading, setCartLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const fetchUrls = [];

        cartItemsIds.forEach((item) => {
          fetchUrls.push(
            getFetchRequest(`https://fakestoreapi.com/products/${item}`)
          );
        });

        const responses = await Promise.all(fetchUrls);

        setCartData(responses);
        setCartError(null);
      } catch (err) {
        setCartError(err);
      } finally {
        setCartLoading(false);
      }
    };

    fetchAll();
  }, [cartItemsIds]);

  return { cartData, cartError, cartLoading };
};

export default useCartData;
