import { Counter } from "@/components/Counter";
import { fireEvent, render } from "@testing-library/react";

describe("Counter Component", () => {
  test("Initial count is 0", () => {
    const { getByTestId } = render(<Counter />);
    const countElement = getByTestId("count");
    expect(countElement.textContent).toBe("Counter: 0");
  });

  test("Increments count by 1 when increment button is clicked", () => {
    const { getByTestId } = render(<Counter />);
    const incrementButton = getByTestId("increment-button");
    fireEvent.click(incrementButton);
    const countElement = getByTestId("count");
    expect(countElement.textContent).toBe("Counter: 1");
  });
});
