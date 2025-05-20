import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

const App = () => {
  const [cartItemsIds, setCartItemsIds] = useState([]);
  const [quantities, setQuantities] = useState(new Map());

  const handleAddToCart = (e) => {
    const addedItem = e.target.closest("article").getAttribute("dataid");
    if (!cartItemsIds.find((item) => item.id === addedItem)) {
      setCartItemsIds([...cartItemsIds, addedItem]);
      setQuantities(new Map(quantities).set(addedItem, 1));
    }
  };

  const handleRemoveFromCart = (e) => {
    const removedItemId = e.target.closest("article").getAttribute("dataid");
    setCartItemsIds(cartItemsIds.filter((item) => item !== removedItemId));
    setQuantities(new Map(quantities).delete(removedItemId));
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
          context={{ cartItemsIds, handleAddToCart, handleRemoveFromCart }}
        />
      </main>
    </>
  );
};

export default App;
