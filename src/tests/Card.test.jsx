import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "../components/Card/Card.jsx";

describe("Card component", () => {
  it("Displays article card when rendered", () => {
    render(<Card />);
    expect(screen.getByRole("article")).toBeInTheDocument();
  });

  it("Displays default card title on screen when rendered without title prop given", () => {
    render(<Card />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("Displays card title on screen when rendered with title prop given", () => {
    const cardProps = {
      id: "1",
      title: "Item Title",
      price: 10,
      image: null,
    };
    render(<Card {...cardProps} />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("Displays correct card title on screen when rendered with title prop given", () => {
    const cardProps = {
      id: "1",
      title: "Item Title",
      price: 10,
      image: null,
    };
    render(<Card {...cardProps} />);
    expect(screen.getByRole("heading").textContent).toMatch(cardProps.title);
  });

  it("Displays card price on screen when rendered and price is greater than zero", () => {
    const cardProps = {
      id: "1",
      title: "Item Title",
      price: 10,
      image: null,
    };
    render(<Card {...cardProps} />);
    expect(screen.getByText(cardProps.price)).toBeInTheDocument();
  });

  it("Displays card add to cart button on screen when rendered and price is greater than zero", () => {
    const cardProps = {
      id: "1",
      title: "Item Title",
      price: 10,
      image: null,
    };
    render(<Card {...cardProps} />);
    expect(
      screen.queryByRole("button", { name: "Add To Cart" })
    ).toBeInTheDocument();
  });

  it("Displays card increase quantity button on screen when rendered and price is greater than zero", () => {
    const cardProps = {
      id: "1",
      title: "Item Title",
      price: 10,
      image: null,
    };
    render(<Card {...cardProps} />);
    expect(
      screen.queryByRole("button", { name: "Increase quantity" })
    ).toBeInTheDocument();
  });

  it("Displays card decrease quantity button on screen when rendered and price is greater than zero", () => {
    const cardProps = {
      id: "1",
      title: "Item Title",
      price: 10,
      image: null,
    };
    render(<Card {...cardProps} />);
    expect(
      screen.queryByRole("button", { name: "Decrease quantity" })
    ).toBeInTheDocument();
  });

  it("Does not display buttons on screen when rendered and price is 0", () => {
    const cardProps = {
      id: "1",
      title: "Item Title",
      price: 0,
      image: null,
    };
    render(<Card {...cardProps} />);
    expect(screen.queryAllByRole("button")).toHaveLength(0);
  });

  it("Does not display card price on screen when rendered with a price equal or less than zero", () => {
    const cardProps = {
      id: "1",
      title: "Item Title",
      price: 0,
      image: null,
    };
    render(<Card {...cardProps} />);
    expect(screen.queryByText(cardProps.price)).not.toBeInTheDocument();
  });
});
