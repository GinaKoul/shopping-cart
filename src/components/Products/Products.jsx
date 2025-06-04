import styles from "./Products.module.css";
import { useOutletContext } from "react-router-dom";
import useProductData from "../../hooks/useProductData.jsx";
import Card from "../Card/Card.jsx";

const Products = () => {
  const { cartItemsIds, quantities, handleAddToCart } = useOutletContext();
  const { productData, productError, productLoading } = useProductData();

  return (
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
              quantity={quantities.get(item.id) || 1}
              image={item.image}
              isInCart={cartItemsIds.includes(item.id)}
              handleAddToCart={handleAddToCart}
            />
          ))}
      </div>
    </section>
  );
};

export default Products;
