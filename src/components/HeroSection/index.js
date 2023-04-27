import { Stack, Typography } from "@mui/material";
import React from "react";
import SearchBar from "../SearchBar";

const HeroSection = () => {
  return (
    <Stack
      justifyContent="center"
      // alignItems="center"
      height="331px"
      width="100%"
      gap="1rem"
      flexWrap="wrap"
      textAlign="center"
      paddingX="8rem"
    >
      <Typography variant="h4" fontWeight="bold">
        World's Largest Classifieds Site
      </Typography>
      <Typography variant="h6">
        Buy, sell and find just about anything using the app on your mobile.
      </Typography>
      <SearchBar />
    </Stack>
  );
};

export default HeroSection;
