import React from "react";
import Logo from "../Logo";
import { Box } from "@mui/material";
import { Button } from "../../components";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  return (
    <Box
      sx={[
        style.navbar,
        {
          backgroundColor: "rgba(0, 0, 0, 0.23)",
          padding: "1rem",
        },
      ]}
    >
      <Box sx={style.navbar}>
        <Logo width="163px" />
        <ul style={style.navbarItems}>
          <li style={style.navbarlist}>Home</li>
          <li style={style.navbarlist}>About Us</li>
          <li style={style.navbarlist}>Contact Us</li>
        </ul>
        <ul style={style.navbarItems}>
          <li>Resigter/Sign In</li>
          <li>
            <Button startIcon={<PersonIcon />} text="POST YOUR AD" />
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Navbar;

const style = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  navbarItems: {
    display: "flex",
    listStyleType: "none",
    gap: "1rem",
    alignItems: "center",
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold",
  },
  navbarlist: {
    border: "2px solid white",
    padding: "0.5rem 0.8rem",
    ":hover": {
      color: "black",
      backgroundColor: "white",
      cursor: "pointer",
    },
  },
};
