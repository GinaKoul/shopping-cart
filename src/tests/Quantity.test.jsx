import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Quantity from "../components/Quantity/Quantity.jsx";

describe("Quantity component", () => {
  it("displays buttons when rendered", () => {
    render(<Quantity />);
    expect(screen.queryAllByRole("button")).toHaveLength(2);
  });

  it("displays input field when rendered", () => {
    render(<Quantity />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("Decrease button should not decrease quantity if value is 1 when clicked", async () => {
    const user = userEvent.setup();

    render(<Quantity />);

    await user.click(screen.getByRole("button", { name: "Decrease quantity" }));

    waitFor(() => expect(screen.findByRole("textbox")).toHaveValue("1"));
  });

  it("Increase button should increase quantity when clicked", async () => {
    const user = userEvent.setup();

    render(<Quantity />);

    await user.click(screen.getByRole("button", { name: "Increase quantity" }));

    waitFor(() => expect(screen.findByRole("textbox")).toHaveValue("2"));
  });

  it("Increase and decrease buttons are handling quantity correctly when clicked", async () => {
    const user = userEvent.setup();

    render(<Quantity />);

    await user.click(screen.getByRole("button", { name: "Increase quantity" }));
    await user.click(screen.getByRole("button", { name: "Increase quantity" }));

    waitFor(() => expect(screen.findByRole("textbox")).toHaveValue("3"));

    await user.click(screen.getByRole("button", { name: "Decrease quantity" }));

    waitFor(() => expect(screen.findByRole("textbox")).toHaveValue("2"));
  });

  it("Should not call the onClick function when buttons are not clicked", async () => {
    render(<Quantity />);

    expect(screen.getByRole("textbox")).toHaveValue("1");
  });
});
