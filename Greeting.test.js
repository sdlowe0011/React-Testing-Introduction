import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Testing suit groups tests together: use describe() to do this
describe("Greeting Component", () => {
  test("Renders hello world as a text", () => {
    render(<Greeting />);
    // Select an element by hello world by using screen
    // {exact: false} doesn't mean you have to have an exact match- True means you must have exact match
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    // check if element exists
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders button text has not been changed", () => {
    render(<Greeting />);
    const buttonTextNotChanged = screen.getByText("It's good to see you!", {
      exact: true,
    });
    expect(buttonTextNotChanged).toBeInTheDocument();
  });

  test("renders button text has been changed", () => {
    // Arrange
    render(<Greeting />);
    // Act: was the button clicked?
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const buttonTextChanged = screen.getByText("Changed!");
    expect(buttonTextChanged).toBeInTheDocument();
  });

  test('does not render "good to see you" after button click', () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // use query because we return null if element not found
    const buttonTextChanged = screen.queryByText("It's good to see you!");
    // looking for null output when this element is not rendered
    expect(buttonTextChanged).toBeNull();
  });
});
