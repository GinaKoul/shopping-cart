import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Card from "../components/Card/Card.jsx";

describe("Card component", () => {
  it("Displays article card when rendered", () => {
    render(<Card />);
    expect(screen.getByRole("article")).toBeInTheDocument();
  });

  it("Displays card title and price on screen when rendered", () => {
    const cardProps = {
      id: "1",
      title: "Item Title",
      price: 10,
      image: null,
    };
    render(<Card {...cardProps} />);
    expect(screen.getByRole("heading").textContent).toMatch(cardProps.title);
    expect(screen.getByText(cardProps.price)).toBeInTheDocument();
  });
});
