import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import RouterComponent from "./RouterComponent.jsx";
import CartItem from "../components/CartItem/CartItem.jsx";

describe("CartItem  component", () => {
  it("Displays article cart item when rendered", () => {
    render(
      <RouterComponent>
        <CartItem />
      </RouterComponent>
    );
    expect(screen.getByRole("article")).toBeInTheDocument();
  });

  it("Displays default cart item title on screen when rendered without title prop given", () => {
    render(
      <RouterComponent>
        <CartItem />
      </RouterComponent>
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("Displays cart item title on screen when rendered with title prop given", () => {
    const cartItemProps = {
      id: "1",
      title: "Item Title",
      price: 10,
      image: null,
    };
    render(
      <RouterComponent>
        <CartItem {...cartItemProps} />
      </RouterComponent>
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("Displays correct cart item title on screen when rendered with title prop given", () => {
    const cartItemProps = {
      id: "1",
      title: "Item Title",
      price: 10,
      image: null,
    };
    render(
      <RouterComponent>
        <CartItem {...cartItemProps} />
      </RouterComponent>
    );
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
    render(
      <RouterComponent>
        <CartItem {...cartItemProps} />
      </RouterComponent>
    );
    expect(screen.getByText(cartItemProps.price)).toBeInTheDocument();
  });

  it("Displays cart item  increase quantity button on screen when rendered and price is greater than zero", () => {
    const cartItemProps = {
      id: "1",
      title: "Item Title",
      price: 10,
      image: null,
    };
    render(
      <RouterComponent>
        <CartItem {...cartItemProps} />
      </RouterComponent>
    );
    expect(
      screen.queryByRole("button", { name: "Increase quantity" })
    ).toBeInTheDocument();
  });

  it("Displays cart item  decrease quantity button on screen when rendered and price is greater than zero", () => {
    const cartItemProps = {
      id: "1",
      title: "Item Title",
      price: 10,
      image: null,
    };
    render(
      <RouterComponent>
        <CartItem {...cartItemProps} />
      </RouterComponent>
    );
    expect(
      screen.queryByRole("button", { name: "Decrease quantity" })
    ).toBeInTheDocument();
  });

  it("Displays cart item remove from cart button on screen when rendered and price is greater than zero", () => {
    const cartItemProps = {
      id: "1",
      title: "Item Title",
      price: 10,
      image: null,
    };
    render(
      <RouterComponent>
        <CartItem {...cartItemProps} />
      </RouterComponent>
    );
    expect(screen.getByRole("button", { name: "Remove" })).toBeInTheDocument();
  });

  it("Does not display buttons on screen when rendered with a price equal or less than zero", () => {
    const cartItemProps = {
      id: "1",
      title: "Item Title",
      price: 0,
      image: null,
    };
    render(
      <RouterComponent>
        <CartItem {...cartItemProps} />
      </RouterComponent>
    );
    expect(screen.queryAllByRole("button")).toHaveLength(0);
  });

  it("Does not display cart item price on screen when rendered with a price equal or smaller than zero", () => {
    const cartItemProps = {
      id: "1",
      title: "Item Title",
      price: 0,
      image: null,
    };
    render(
      <RouterComponent>
        <CartItem {...cartItemProps} />
      </RouterComponent>
    );
    expect(screen.queryByText(cartItemProps.price)).not.toBeInTheDocument();
  });
});
