import { useOutletContext } from "react-router-dom";
import styles from "./Products.module.css";
import useProductData from "../../hooks/useProductData.jsx";
import Card from "../Card/Card.jsx";
import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";

const Products = () => {
  const { cartItemsIds, handleAddToCart, handleRemoveFromCart } =
    useOutletContext();
  const { productData, productError, productLoading } = useProductData();

  return (
    <>
      <div className={styles.grid}>
        <section>
          <h2>Products</h2>
          {productLoading && <p>Loading ...</p>}
          {productError && <p>{productError}</p>}
          <div className={styles.cards}>
            {productData &&
              productData.map((item) => (
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
          cartItemsIds={cartItemsIds}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </div>
    </>
  );
};

export default Products;
