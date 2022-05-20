import { render, screen } from "@testing-library/react";
import App from "./App";

// 2 arguments: description of test, and function that contains the testing code

test.skip("renders learn react link", () => {
  // Render function imported from testing library
  render(<App />);
  // Identify an element by the text identified inside of it
  const linkElement = screen.getByText(/learn react/i);
  // check if element is in the document
  expect(linkElement).toBeInTheDocument();
});
