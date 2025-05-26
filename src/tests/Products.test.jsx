import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Products from "../components/Products/Products.jsx";

import { MemoryRouter, Routes, Route, Outlet } from "react-router-dom";

function renderWithOutletContext(ui, contextValue) {
  return render(
    <MemoryRouter>
      <Routes>
        <Route element={<Outlet context={contextValue} />}>
          <Route index element={ui} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

describe("Product component", () => {
  it("Displays heading when rendered", () => {
    const mockContext = {
      CartItemsIds: ["1", "3", "5"],
      handleAddToCart: () => {},
      handleRemoveFromCart: () => {},
    };

    const { queryByRole } = renderWithOutletContext(<Products />, mockContext);

    expect(queryByRole("heading", { name: "Products" })).toBeInTheDocument();
  });
});
