import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  test("Render a button to DOM and checking is working perfect", () => {
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText("Click Me")).toBeInTheDocument();
  });

  test("Checking disabled button if isDisabled become true", () => {
    render(<Button isDisabled={true}>Click</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("variant checking in button component", () => {
    const { rerender } = render(<Button variant="primary">Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");

    rerender(<Button variant="info">Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-info");
  });

  test("checking default loading text while button loading data", () => {
    render(<Button isLoading={true}>Click</Button>);
    expect(screen.getByRole("button")).toHaveTextContent(
      "درحال ارسال درخواست..."
    );
  });
});
