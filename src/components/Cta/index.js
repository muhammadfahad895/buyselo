import { Box, Typography } from "@mui/material";
import React from "react";
import AppIcon from "../AppIcon";

const Cta = () => {
  return (
    <Box>
      <Typography variant="h3">Download Our App</Typography>
      <Typography variant="h3"> world market in your hand</Typography>
      <Typography>
        Buy, sell and find just about anything using the app on your mobile.
      </Typography>
      <AppIcon />
    </Box>
  );
};

export default Cta;
