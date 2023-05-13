import { Box } from "@mui/material";
import React from "react";
import { Button, Logo } from "../../components";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setScreen }) => {
  const navgiate = useNavigate();
  return (
    <Box className="login" sx={{ display: "flex", gap: "1rem" }}>
      <div className="login-header">
        <p
          className="login-header_welcome"
          style={{ textAlign: "center", color: "white", fontSize: "1.4rem" }}
        >
          Welcome to
        </p>
        <Logo />
      </div>
      <div className="cta-btns">
        <Button handleClick={() => navgiate("/signup")} text="Sign Up" />
        <Button handleClick={() => navgiate("/signin")} text="Sign In" />
      </div>
    </Box>
  );
};

export default Login;
