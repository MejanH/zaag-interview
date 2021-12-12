import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { renderWithRouter } from "./tests/utils";

test("Home page should have header, a textfield and a submit button", () => {
  renderWithRouter(<App />);
  const appHeader = screen.getByText("Zaag Interview");
  const submitButton = screen.getByRole("button");

  expect(appHeader).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
