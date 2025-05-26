import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart.jsx";

describe("ShoppingCart component", async () => {
  it("Displays aside when rendered", () => {
    render(<ShoppingCart />);
    expect(screen.queryByRole("complementary")).toBeInTheDocument();
  });

  it("Displays heading when rendered", () => {
    render(<ShoppingCart />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
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
    render(<ShoppingCart cartItemsIds={cartItemsIds} />);
    expect(await screen.findAllByRole("listitem")).toHaveLength(2);
  });
});
