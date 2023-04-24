import React from "react";
import googleStore from "../../assets/playstore.svg";
import appleStore from "../../assets/appleStore.svg";
import appGallery from "../../assets/appgallery.svg";
import { Box } from "@mui/material";

const AppIcon = () => {
  return (
    <Box>
      <img src={googleStore} alt="Google play Store" />
      <img src={appleStore} alt="Apple Store" />
      <img src={appGallery} alt="App Gallery" />
    </Box>
  );
};

export default AppIcon;
