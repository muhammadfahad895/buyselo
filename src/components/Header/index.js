import React from "react";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import { Box } from "@mui/material";
import Hero from "../../assets/Hero.png";

const Header = ({ setScreen, user }) => {
  return (
    <Box sx={style}>
      <Navbar setScreen={setScreen} user={user} />
      <HeroSection />
    </Box>
  );
};

export default Header;

const style = {
  backgroundImage: `url(${Hero})`,
  height: "500px",
  backgroundPosition: " center top",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  color: "white",
};
