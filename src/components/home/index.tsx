import React from "react";
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleForm = (event: any) => {
    event.preventDefault();
    const countryName = event.target.name.value;
    navigate(`/country/${countryName}`);
  };
  return (
    <Box my={8}>
      <form onSubmit={handleForm}>
        <Stack justifyContent="center" direction="row" spacing={4}>
          <TextField
            size="small"
            name="name"
            id="name"
            placeholder="Enter Country"
            type="search"
            role="search"
          />
          <Button variant="contained" type="submit" role="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Home;
