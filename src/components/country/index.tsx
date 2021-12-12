import { LoadingButton } from "@mui/lab";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CountryDetailsType } from "../../types/countryType";
import { WeatherDetailsType } from "../../types/weatherType";

export const CountryDetails: React.FC = () => {
  const { country } = useParams();
  // for loading states libraries like react-query would be awesome. didn't use it due to time limit.
  const [loading, setLoading] = useState(true);
  const [weatherLoading, setWeatherLoading] = useState(false);

  const [countryData, setCountryData] = useState<CountryDetailsType | null>(
    null
  );
  const [weatherData, setWeatherData] = useState<WeatherDetailsType | null>(
    null
  );

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => {
        setCountryData(res.data[0]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [country]);

  const getWeatherInfo = (city: string) => {
    setWeatherLoading(true);
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=25ccf4307d158f0b846cbe6614066020&query=${city}`
      )
      .then((res) => {
        setWeatherData(res.data);
        setWeatherLoading(false);
      })
      .catch(() => {
        setWeatherLoading(false);
      });
  };
  return (
    <Box my={4}>
      {countryData && !loading ? (
        <Box>
          <Typography variant="h6" my={2} textAlign="center">
            Country Information
          </Typography>
          <Typography variant="body1" component="p">
            Capital: <strong>{countryData.capital[0]}</strong>
          </Typography>
          <Typography variant="body1">
            Population: <strong>{countryData.population}</strong>
          </Typography>
          <Typography variant="body1">
            latlng: <strong>{JSON.stringify(countryData.latlng)}</strong>
          </Typography>
          <Typography variant="body1">Flag:</Typography>
          <img src={countryData.flags.png} alt="flag" />
          <Box my={4}>
            {weatherData && !weatherLoading ? (
              <Box>
                <Typography variant="h6" my={2} textAlign="center">
                  Weather Information
                </Typography>
                <Typography variant="body1" component="p">
                  Temperature:{" "}
                  <strong>{weatherData.current.temperature}</strong>
                </Typography>
                <Typography variant="body1">
                  Wind Speed: <strong>{weatherData.current.wind_speed}</strong>
                </Typography>
                <Typography variant="body1">
                  Precip: <strong>{weatherData.current.precip}</strong>
                </Typography>
                <Typography variant="body1">Weather Icons:</Typography>
                {weatherData.current.weather_icons.map((icon) => (
                  <img src={icon} alt="weather icon" />
                ))}
              </Box>
            ) : (
              <LoadingButton
                loading={weatherLoading}
                variant="contained"
                onClick={() => getWeatherInfo(countryData.capital[0])}
              >
                Get Capital Weather
              </LoadingButton>
            )}
          </Box>
        </Box>
      ) : loading ? (
        <Typography variant="body1" component="p">
          Loading...
        </Typography>
      ) : (
        <Typography variant="body1" component="p">
          No Details are available
        </Typography>
      )}
    </Box>
  );
};
