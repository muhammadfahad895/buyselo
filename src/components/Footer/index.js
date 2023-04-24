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
    <Box>
      <Logo />
      <Stack>
        <ul>
          <li>POPULAR CATEGORIES</li>
          <li>Cars</li>
          <li>Flats for rent</li>
          <li>Mobile Phones</li>
          <li>Jobs</li>
        </ul>

        <ul>
          <li>Trending Searches</li>
          <li>Bikes</li>
          <li>Watches</li>
          <li>Books</li>
          <li>Dogs</li>
        </ul>

        <ul>
          <li>Quick Links</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Help And Support</li>
          <li>Post an Ad</li>
        </ul>

        <Box>
          <Box>
            <Typography>Follow Us</Typography>
            <TiSocialFacebookCircular />
            <TiSocialTwitterCircular />
            <TiSocialYoutube />
            <TiSocialInstagram />
          </Box>

          <AppIcon />
        </Box>
      </Stack>
      <footer>
        <Typography>
          Copyright © 2023 Buysello. All Rights Reserved. Design by: Muhammad
          Fahad
        </Typography>
      </footer>
    </Box>
  );
};

export default Footer;
