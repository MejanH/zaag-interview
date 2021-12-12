import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/system";
import { Container, Stack, Typography } from "@mui/material";
import { Route, Routes } from "react-router";
import Home from "./components/home";
import { CountryDetails } from "./components/country";
import { Link } from "react-router-dom";

function App() {
  return (
    <Container>
      <Stack justifyContent="center" alignItems="center" direction="column">
        <Typography variant="h4" fontWeight="bold" textAlign="center" my={3}>
          Zaag Interview
        </Typography>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:country" element={<CountryDetails />} />
        </Routes>
      </Stack>
    </Container>
  );
}

export default App;
