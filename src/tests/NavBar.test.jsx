import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar/NavBar.jsx";

describe("NavBar component", () => {
  it("display navigation bar when rendered", () => {
    render(<NavBar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("display no navigation bar children when rendered with empty array prop", () => {
    render(<NavBar items={[]} />);
    expect(screen.getByRole("navigation").children).toHaveLength(0);
  });
});
