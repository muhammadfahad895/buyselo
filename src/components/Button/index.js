import React from "react";
import { Button as MuiButton, CircularProgress } from "@mui/material";

const Button = ({
  handleClick,
  text,
  type,
  loading,
  icon,
  sx,
  startIcon,
  endIcon,
}) => (
  <MuiButton
    sx={{ ...style, ...sx }}
    variant="contained"
    onClick={handleClick}
    type={type}
    startIcon={startIcon}
    endIcon={endIcon}
  >
    {loading ? (
      <CircularProgress size={25} sx={{ color: "#0984e3" }} />
    ) : (
      (icon, text)
    )}
  </MuiButton>
);

export default Button;

const style = {
  background: "white",
  color: "#0984e3",
  textTransform: "initial",
  borderRadius: "30px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "white",
    cursor: "pointer",
  },
};
