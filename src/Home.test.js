import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

test("renders games icon", () => {
  const { getByText } = render(<Home />);
  const icon = getByText("games");
  expect(icon).toBeInTheDocument();
});

test("renders header text", () => {
  const { getByText } = render(<Home />);
  const text = getByText("Welcome to JavaScriptGames");
  expect(text).toBeInTheDocument();
});
