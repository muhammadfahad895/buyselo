import React from "react";
import googleStore from "../../assets/playstore.svg";
import appleStore from "../../assets/appleStore.svg";
import appGallery from "../../assets/appgallery.svg";
import { Stack } from "@mui/material";

const AppIcon = ({ width = "11rem", gap = "2rem" }) => {
  return (
    <Stack flexDirection="row" gap={gap}>
      <img style={{ width }} src={googleStore} alt="Google play Store" />
      <img style={{ width }} src={appleStore} alt="Apple Store" />
      <img style={{ width }} src={appGallery} alt="App Gallery" />
    </Stack>
  );
};

export default AppIcon;
