import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

const App = () => {
  const [cartItemsIds, setCartItemsIds] = useState([]);

  const handleAddToCart = (e) => {
    const addedItem = e.target;
    setCartItemsIds([...cartItemsIds, addedItem]);
  };

  const handleRemoveFromCart = (e) => {
    const removedItemId = e.target;
    setCartItemsIds(cartItemsIds.filter((item) => item.id !== removedItemId));
  };
  return (
    <>
      <Header>
        <NavBar
          items={[
            { url: "/", name: "Homepage" },
            { url: "/products", name: "Products" },
          ]}
        />
      </Header>
      <main>
        <Outlet
          cartItemsIds={cartItemsIds}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </main>
    </>
  );
};

export default App;
