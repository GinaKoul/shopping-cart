import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import useProductData from "../../hooks/useProductData.jsx";
import Card from "../Card/Card.jsx";
import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";

const Products = () => {
  const { cartItemsIds, handleAddToCart, handleRemoveFromCart } =
    useOutletContext();
  const { data, error, loading } = useProductData();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let newCart = [];
    cartItemsIds.forEach((item) => {
      newCart.push({ id: item.id, quantity: item.quantity });
    });

    setCartItems(newCart);
  }, [cartItemsIds]);

  return (
    <>
      <div className={styles.grid}>
        <section>
          <h2>Products</h2>
          {loading && <p>Loading ...</p>}
          {error && <p>{error}</p>}
          <div className={styles.cards}>
            {data &&
              data.map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  handleAddToCart={handleAddToCart}
                />
              ))}
          </div>
        </section>
        <ShoppingCart
          cartItems={cartItems}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </div>
    </>
  );
};

export default Products;
