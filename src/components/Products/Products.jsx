import useProductData from "../../hooks/useProductData.jsx";
import Card from "../Card/Card.jsx";

const Products = () => {
  const { data, error, loading } = useProductData();

  return (
    <>
      <p>This is the Shop Page</p>
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}
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
    </>
  );
};

export default Products;
