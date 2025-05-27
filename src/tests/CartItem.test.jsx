import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CartItem from "../components/CartItem/CartItem.jsx";

describe("CartItem  component", () => {
  it("Displays article cart item when rendered", () => {
    render(<CartItem />);
    expect(screen.getByRole("article")).toBeInTheDocument();
  });

  it("Displays default cart item title on screen when rendered without title prop given", () => {
    render(<CartItem />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("Displays cart item title on screen when rendered with title prop given", () => {
    const cartItemProps = {
      id: "1",
      title: "Item Title",
      price: 10,
      image: null,
    };
    render(<CartItem {...cartItemProps} />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("Displays correct cart item title on screen when rendered with title prop given", () => {
    const cartItemProps = {
      id: "1",
      title: "Item Title",
      price: 10,
      image: null,
    };
    render(<CartItem {...cartItemProps} />);
    expect(screen.getByRole("heading").textContent).toMatch(
      cartItemProps.title
    );
  });

  it("Displays cart item price on screen when rendered and price is greater than zero", () => {
    const cartItemProps = {
      id: "1",
      title: "Item Title",
      price: 10,
      image: null,
    };
    render(<CartItem {...cartItemProps} />);
    expect(screen.getByText(cartItemProps.price)).toBeInTheDocument();
  });

  it("Displays cart item remove from cart button on screen when rendered and price is greater than zero", () => {
    const cartItemProps = {
      id: "1",
      title: "Item Title",
      price: 10,
      image: null,
    };
    render(<CartItem {...cartItemProps} />);
    expect(screen.getByRole("button", { name: "Remove" })).toBeInTheDocument();
  });

  it("Does not display cart item price and remove from cart button on screen when rendered with a price equal or smaller than zero", () => {
    const cartItemProps = {
      id: "1",
      title: "Item Title",
      price: 0,
      image: null,
    };
    render(<CartItem {...cartItemProps} />);
    expect(screen.queryByText(cartItemProps.price)).not.toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
