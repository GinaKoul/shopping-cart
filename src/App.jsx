import styles from "./App.module.css";
import { Outlet, useLocation } from "react-router-dom";
import { useCallback, useMemo, useReducer } from "react";
import cartItemsReducer from "./functions/cartItemsReducer.jsx";
import quantitiesReducer from "./functions/quantitiesReducer.jsx";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

const App = () => {
  const [cartItemsIds, dispatchCart] = useReducer(cartItemsReducer, []);
  const [quantities, dispatchQuantities] = useReducer(
    quantitiesReducer,
    new Map()
  );

  const location = useLocation();
  const showHeaderCart = location.pathname.startsWith("/products");

  const handleAddToCart = useCallback((card) => {
    const itemId = Number(card.getAttribute("dataid"));
    const itemQuantity = card.querySelector("input").value;
    dispatchCart({ type: "add", id: itemId });
    dispatchQuantities({
      type: "add_update",
      id: itemId,
      value: itemQuantity,
    });
  }, []);

  const handleRemoveFromCart = useCallback((card) => {
    const itemId = Number(card.getAttribute("dataid"));
    dispatchCart({ type: "remove", id: itemId });
    dispatchQuantities({
      type: "remove",
      id: itemId,
    });
  }, []);

  const handleQuantityUpdate = useCallback((card) => {
    const itemId = Number(card.getAttribute("dataid"));
    const itemQuantity = card.querySelector("input").value;
    dispatchQuantities({
      type: "add_update",
      id: itemId,
      value: itemQuantity,
    });
  }, []);

  const handleCartReset = useCallback(() => {
    dispatchCart({ type: "reset" });
    dispatchQuantities({
      type: "reset",
    });
  }, []);

  const outletValue = useMemo(
    () => ({
      cartItemsIds,
      quantities,
      handleAddToCart,
      handleRemoveFromCart,
      handleQuantityUpdate,
      handleCartReset,
    }),
    [
      cartItemsIds,
      quantities,
      handleAddToCart,
      handleRemoveFromCart,
      handleQuantityUpdate,
      handleCartReset,
    ]
  );

  const navigationLinks = useMemo(
    () => [
      { url: "/", name: "Homepage" },
      { url: "/products", name: "Products" },
      { url: "/checkout", name: "My Cart" },
    ],
    []
  );
  return (
    <>
      <Header
        showHeaderCart={showHeaderCart}
        cartItemsCount={cartItemsIds.length}
      />
      <main className={styles.main}>
        <aside className={styles.aside}>
          <NavBar items={navigationLinks} />
        </aside>
        <Outlet context={outletValue} />
      </main>
      <footer className={styles.footer}>&copy; Gina Kouliaki</footer>
    </>
  );
};

export default App;
