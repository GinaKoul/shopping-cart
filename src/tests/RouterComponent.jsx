import { useState, useCallback, useMemo } from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { OutletContextProvider } from "./OutletContextProvider";

const RouterComponent = ({
  cartIds = [],
  cartQuantities = new Map(),
  children,
}) => {
  const [cartItemsIds, setCartItemsIds] = useState(cartIds);
  const [quantities, setQuantities] = useState(cartQuantities);

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

  const mockContext = useMemo(
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
  return (
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route element={<OutletContextProvider context={mockContext} />}>
          <Route path="/" element={children} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

export default RouterComponent;
