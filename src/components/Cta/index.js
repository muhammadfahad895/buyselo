import { Box, Typography } from "@mui/material";
import React from "react";
import AppIcon from "../AppIcon";
import mobile from "../../assets/mobile.jpg";

const Cta = () => {
  return (
    <Box sx={cta}>
      <Typography variant="h3">Download Our App</Typography>
      <Typography variant="h3"> world market in your hand</Typography>
      <Typography>
        Buy, sell and find just about anything using the app on your mobile.
      </Typography>
      <AppIcon gap />
    </Box>
  );
};

export default Cta;

const cta = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  paddingBlock: "2.5rem",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${mobile})`,
  height: "500px",
  backgroundPosition: " center ",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  color: "white",
  flexWrap: "wrap",
};
