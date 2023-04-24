import React from "react";
import Logo from "../Logo";
import { Box } from "@mui/material";
import { Button } from "../../components";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  return (
    <Box>
      <Logo />
      <Box>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>Resigter/Sign In</li>
          <li>
            <Button icon={<PersonIcon />} text="POST YOUR AD" />
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Navbar;
