import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

const App = () => {
  const [cartItemsIds, setCartItemsIds] = useState([]);
  const [quantities, setQuantities] = useState(new Map());

  const handleAddToCart = (e) => {
    const card = e.target.closest("article");
    const addedItem = Number(card.getAttribute("dataid"));
    if (!cartItemsIds.includes(addedItem)) {
      const itemQuantity = card.querySelector("input");
      setCartItemsIds([...cartItemsIds, addedItem]);
      setQuantities(
        new Map(quantities).set(
          addedItem,
          itemQuantity.value === "" ? 1 : Number(itemQuantity.value)
        )
      );
    }
  };

  const handleRemoveFromCart = (e) => {
    const removedItemId = Number(
      e.target.closest("article").getAttribute("dataid")
    );
    setCartItemsIds(cartItemsIds.filter((item) => item !== removedItemId));
    const newMap = new Map(quantities);
    newMap.delete(removedItemId);
    setQuantities(newMap);
  };

  const handleCartReset = () => {
    setCartItemsIds([]);
    setQuantities(new Map());
  };

  return (
    <>
      <Header>
        <NavBar
          items={[
            { url: "/", name: "Homepage" },
            { url: "/products", name: "Products" },
            { url: "/checkout", name: "Checkout" },
          ]}
        />
      </Header>
      <main>
        <Outlet
          context={{
            cartItemsIds,
            quantities,
            handleAddToCart,
            handleRemoveFromCart,
            handleCartReset,
          }}
        />
      </main>
    </>
  );
};

export default App;
