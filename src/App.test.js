import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders followers link", () => {
  render(<App />);
  const linkElement = screen.getByText(/followers/i);
  expect(linkElement).toBeInTheDocument();
});
