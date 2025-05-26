import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Quantity from "../components/Quantity/Quantity.jsx";

describe("Quantity component", () => {
  it("displays button when rendered", () => {
    render(<Quantity />);
    expect(screen.queryAllByRole("button")).toHaveLength(2);
  });
});
