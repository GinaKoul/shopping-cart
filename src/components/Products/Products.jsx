import styles from "./Products.module.css";
import useProductData from "../../hooks/useProductData.jsx";
import Card from "../Card/Card.jsx";
import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";

const Products = () => {
  const { data, error, loading } = useProductData();
  const cartItems = data.slice(0, 5);
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
                />
              ))}
          </div>
        </section>
        <ShoppingCart cartItems={cartItems} />
      </div>
    </>
  );
};

export default Products;
