import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Products from "../components/Products/Products.jsx";

describe("Product component", () => {
  it("Displays heading when rendered", () => {
    render(<Products />);
    expect(screen.queryAllByRole("heading").length).toBeGreaterThanOrEqual(1);
  });
});
