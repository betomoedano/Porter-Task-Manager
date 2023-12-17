import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";

describe("Button Component", () => {
  test("renders with correct text", () => {
    render(<Button>Click Me!</Button>);
    const buttonElement = screen.getByText("Click Me!");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders correctly", () => {
    render(<Button>a</Button>);
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
