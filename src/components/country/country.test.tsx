import { waitFor } from "@testing-library/react";
import axios from "axios";
import { CountryDetails } from ".";
import { countryTestApiData } from "../../tests/countryTestApiData";
import { renderWithRouter } from "../../tests/utils";
jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedAxiosGet = mockedAxios.get.mockReturnValueOnce(countryTestApiData);
test("render county details", async () => {
  renderWithRouter(<CountryDetails />, { route: "/country/bangladesh" });
  await waitFor(() => {
    expect(mockedAxiosGet).toHaveBeenCalledTimes(1);
  });
});
