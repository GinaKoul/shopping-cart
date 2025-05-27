import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart.jsx";

describe("ShoppingCart component", async () => {
  it("Displays heading when rendered", () => {
    render(<ShoppingCart />);
    expect(screen.getAllByRole("heading")).toHaveLength(2);
  });

  it("Displays list when rendered", () => {
    render(<ShoppingCart />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("Displays no list item when not given a prop when rendered", () => {
    render(<ShoppingCart />);
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("Displays list items when given an array prop when rendered", async () => {
    const cartItemsIds = ["1", "3"];
    const cartQuantities = new Map();
    cartQuantities.set("1", 1);
    cartQuantities.set("2", 1);

    render(
      <ShoppingCart cartItemsIds={cartItemsIds} quantities={cartQuantities} />
    );
    expect(await screen.findAllByRole("listitem")).toHaveLength(2);
  });
});
