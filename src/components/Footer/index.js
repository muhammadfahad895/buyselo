import React from "react";
import Logo from "../Logo";
import { Box, Stack, Typography } from "@mui/material";
import {
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import AppIcon from "../AppIcon";

const Footer = () => {
  return (
    <Box sx={{ color: "white" }}>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        padding="2.5rem"
        backgroundColor="#2980b9"
        alignItems="center"
        flexWrap="wrap"
      >
        <Logo width="130px" height="60px" />
        <ul style={flex}>
          <li style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            POPULAR CATEGORIES
          </li>
          <li>Cars</li>
          <li>Flats for rent</li>
          <li>Mobile Phones</li>
          <li>Jobs</li>
        </ul>

        <ul style={flex}>
          <li style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            Trending Searches
          </li>
          <li>Bikes</li>
          <li>Watches</li>
          <li>Books</li>
          <li>Dogs</li>
        </ul>

        <ul style={flex}>
          <li style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            Quick Links
          </li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Help And Support</li>
          <li>Post an Ad</li>
        </ul>

        <Box>
          <Box sx={flex}>
            <Typography variant="h5" fontWeight="bold">
              Follow Us
            </Typography>
            <Box fontSize="2rem" color="#dfe6e9">
              <TiSocialFacebookCircular />
              <TiSocialTwitterCircular />
              <TiSocialYoutube />
              <TiSocialInstagram />
            </Box>
          </Box>

          <AppIcon width="5rem" gap />
        </Box>
      </Stack>
      <footer
        style={{
          paddingBlock: "1rem",
          textAlign: "center",
          backgroundColor: "#227093",
        }}
      >
        <Typography>
          Copyright © 2023 Buysello. All Rights Reserved. Design by: Muhammad
          Fahad
        </Typography>
      </footer>
    </Box>
  );
};

export default Footer;

const flex = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  flexWrap: "wrap",
};
