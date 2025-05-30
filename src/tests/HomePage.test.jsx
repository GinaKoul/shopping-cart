import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "../components/HomePage/HomePage.jsx";

describe("Header component", () => {
  it("displays h2 when rendered", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("displays paragraphs when rendered", () => {
    render(<HomePage />);
    expect(screen.queryAllByRole("paragraph")).toHaveLength(2);
  });

  it("displays figure when rendered", () => {
    render(<HomePage />);
    expect(screen.getByRole("figure")).toBeInTheDocument();
  });

  it("displays link of image when rendered", () => {
    render(<HomePage />);
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("displays image when rendered", () => {
    render(<HomePage />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
