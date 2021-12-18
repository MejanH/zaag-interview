import { screen } from "@testing-library/react";
import Home from ".";
import { renderWithRouter } from "../../tests/utils";

test("Home page should have a search field and submit button", () => {
  renderWithRouter(<Home />);

  expect(screen.getByRole("search")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
});
