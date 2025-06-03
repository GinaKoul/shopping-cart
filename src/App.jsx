import styles from "./App.module.css";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useCallback } from "react";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

const App = () => {
  const [cartItemsIds, setCartItemsIds] = useState([]);
  const [quantities, setQuantities] = useState(new Map());

  const location = useLocation();
  const showHeaderCart = location.pathname.startsWith("/products");

  const handleAddToCart = useCallback((e) => {
    const card = e.target.closest("article");
    const addedItem = Number(card.getAttribute("dataid"));
    const itemQuantity = card.querySelector("input");
    setCartItemsIds((cartItemsIds) =>
      cartItemsIds.includes(addedItem)
        ? cartItemsIds
        : [...cartItemsIds, addedItem]
    );
    setQuantities((quantities) =>
      new Map(quantities).set(
        addedItem,
        itemQuantity.value === "" ? 1 : Number(itemQuantity.value)
      )
    );
  }, []);

  const handleRemoveFromCart = useCallback((e) => {
    const removedItemId = Number(
      e.target.closest("article").getAttribute("dataid")
    );
    setCartItemsIds((cartItemsIds) =>
      cartItemsIds.filter((item) => item !== removedItemId)
    );
    setQuantities((quantities) => {
      const newMap = new Map(quantities);
      newMap.delete(removedItemId);
      return newMap;
    });
  }, []);

  const handleQuantityUpdate = useCallback((component) => {
    const card = component.closest("article");
    const addedItem = Number(card.getAttribute("dataid"));
    const itemQuantity = card.querySelector("input");

    setQuantities((quantities) =>
      new Map(quantities).set(
        addedItem,
        itemQuantity.value === "" ? 1 : Number(itemQuantity.value)
      )
    );
  }, []);

  const handleCartReset = useCallback(() => {
    setCartItemsIds([]);
    setQuantities(new Map());
  }, []);

  return (
    <>
      <Header
        showHeaderCart={showHeaderCart}
        cartItemsCount={cartItemsIds.length}
      />
      <main className={styles.main}>
        <aside className={styles.aside}>
          <NavBar
            items={[
              { url: "/", name: "Homepage" },
              { url: "/products", name: "Products" },
              { url: "/checkout", name: "My Cart" },
            ]}
          />
        </aside>
        <Outlet
          context={{
            cartItemsIds,
            quantities,
            handleAddToCart,
            handleRemoveFromCart,
            handleQuantityUpdate,
            handleCartReset,
          }}
        />
      </main>
      <footer className={styles.footer}>&copy; Gina Kouliaki</footer>
    </>
  );
};

export default App;
