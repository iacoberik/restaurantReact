import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load heading contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  const button = screen.getByRole("button");

  //   Assertion
  expect(heading).toBeInTheDocument();
});
test("should load button contact us component", () => {
  render(<Contact />);
  const button = screen.getByRole("button");

  //   Assertion
  expect(button).toBeInTheDocument();
});
test("should load text contact us component", () => {
  render(<Contact />);
  const button = screen.getByRole("random");

  //   Assertion
  expect(button).toBeInTheDocument();
});
