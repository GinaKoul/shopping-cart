import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

const App = () => {
  const [cartItemsIds, setCartItemsIds] = useState([]);

  const handleAddToCart = (e) => {
    const addedItem = e.target.closest("article").getAttribute("dataid");
    if (!cartItemsIds.find((item) => item.id === addedItem))
      setCartItemsIds([...cartItemsIds, { id: addedItem, quantity: 1 }]);
  };

  const handleRemoveFromCart = (e) => {
    const removedItemId = e.target.closest("article").getAttribute("dataid");
    console.log(removedItemId);
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
          context={{ cartItemsIds, handleAddToCart, handleRemoveFromCart }}
        />
      </main>
    </>
  );
};

export default App;
