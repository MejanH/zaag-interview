import { cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { CountryDetails } from ".";
import { countryTestApiData } from "../../tests/countryTestApiData";
import { renderWithRouter } from "../../tests/utils";
import { weatherTestApiData } from "../../tests/weatherTestApiData";
jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;
afterEach(cleanup);
test("Country details page should have country information and should display weather informations after clicking on GET WEATHER DATA button", async () => {
  mockedAxios.get.mockResolvedValueOnce({
    data: countryTestApiData,
    status: 200,
    statusText: "OK",
    headers: {},
    config: {},
  });
  renderWithRouter(<CountryDetails />, { route: "/country/bangladesh" });
  expect(window.location.pathname).toBe("/country/bangladesh");
  await waitFor(() => {
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  // country details test
  const capitalInfoEl = screen.getByTestId("capital-info");
  const populationInfoEl = screen.getByTestId("population-info");
  const latlngInfoEl = screen.getByTestId("latlng-info");
  expect(screen.getByText("Country Information")).toBeInTheDocument();
  expect(capitalInfoEl).toHaveTextContent("Capital: Dhaka");
  expect(populationInfoEl).toHaveTextContent("Population: 164689383");
  expect(latlngInfoEl).toHaveTextContent("latlng: [24,90]");
  expect(screen.getByText("Flag:")).toBeInTheDocument();
  expect(screen.getByAltText("flag")).toHaveAttribute(
    "src",
    "https://flagcdn.com/w320/bd.png"
  );

  // weather details test
  mockedAxios.get.mockResolvedValueOnce({
    data: weatherTestApiData,
    status: 200,
    statusText: "OK",
    headers: {},
    config: {},
  });
  userEvent.click(screen.getByText("Get Capital Weather"));
  await waitFor(() => {
    expect(axios.get).toHaveBeenCalledTimes(2);
  });

  const tempInfoEl = screen.getByTestId("temp-info");
  const windInfoEl = screen.getByTestId("wind-info");
  const precipInfoEl = screen.getByTestId("precip-info");
  expect(screen.getByText("Weather Information")).toBeInTheDocument();
  expect(tempInfoEl).toHaveTextContent("Temperature: 25");
  expect(windInfoEl).toHaveTextContent("Wind Speed: 11");
  expect(precipInfoEl).toHaveTextContent("Precip: 0");
  expect(screen.getByText("Weather Icons:")).toBeInTheDocument();
  expect(screen.getByAltText("weather icon")).toHaveAttribute(
    "src",
    "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
  );
});
