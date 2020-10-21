import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders games icon", () => {
  const { getByText } = render(<App />);
  const icon = getByText("games");
  expect(icon).toBeInTheDocument();
});

test("renders header text", () => {
  const { getByText } = render(<App />);
  const text = getByText("Welcome to JavaScriptGames");
  expect(text).toBeInTheDocument();
});
