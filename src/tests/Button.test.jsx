import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Button from "../components/Button/Button.jsx";

describe("Button component", () => {
  it("displays button when rendered", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("Displays button label on screen when rendered", () => {
    const buttonProps = {
      label: "Test",
    };
    render(<Button {...buttonProps} />);
    expect(screen.getByRole("button").textContent).toMatch(buttonProps.label);
  });

  //   it("should call the onClick function when clicked", async () => {
  //   const onClick = vi.fn();
  //   const user = userEvent.setup()
  //   render(<CustomButton onClick={onClick} />);

  //   const button = screen.getByRole("button", { name: "Click me" });

  //   await user.click(button);

  //   expect(onClick).toHaveBeenCalled();
  // });

  // it("should not call the onClick function when it isn't clicked", async () => {
  //   const onClick = vi.fn();
  //   render(<CustomButton onClick={onClick} />);

  //   expect(onClick).not.toHaveBeenCalled();
  // });
});
