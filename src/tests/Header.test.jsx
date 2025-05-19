import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header.jsx";

describe("Header component", () => {
  it("displays header when rendered", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("displays default h1 when not given a prop", () => {
    render(<Header />);
    console.log(screen.getByRole("heading").textContent);
    expect(screen.getByRole("heading").textContent).toMatch(/[\S\s]+[\S]+/);
  });

  it("displays h1 when given title prop", () => {
    render(<Header title="My shop" />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("displays correct contect of h1", () => {
    render(<Header title="My shop" />);
    expect(screen.getByRole("heading").textContent).toMatch("My shop");
  });
});
