import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart.jsx";

describe("ShoppingCart component", () => {
  it("Displays aside when rendered", () => {
    render(<ShoppingCart />);
    expect(screen.getByRole("complementary")).toBeInTheDocument();
  });

  it("Displays heading when rendered", () => {
    render(<ShoppingCart />);
    expect(screen.getAllByRole("heading").length).toBeGreaterThanOrEqual(1);
  });

  it("Displays list when rendered", () => {
    render(<ShoppingCart />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("Displays no list item when not given a prop when rendered", () => {
    render(<ShoppingCart />);
    expect(screen.queryAllByRole("listitem").length).toBe(0);
  });

  it("Displays list items when given an array prop when rendered", () => {
    const cartItemsProp = [
      {
        id: "1",
        title: "Item Title",
        price: 10,
        image: null,
      },
      {
        id: "2",
        title: "Item Title 2",
        price: 12,
        image: null,
      },
    ];
    render(<ShoppingCart cartItems={cartItemsProp} />);
    expect(screen.queryAllByRole("listitem").length).toBe(2);
  });
});
