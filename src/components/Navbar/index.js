import React from "react";
import Logo from "../Logo";
import { Box } from "@mui/material";
import { Button as Btn } from "../../components";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { signOutUser } from "../../Config/firebase";

const Navbar = ({ setScreen, user }) => {
  // const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
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
          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem
                  onClick={async () => {
                    await signOutUser();
                    await setScreen("dashboard");
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <li onClick={() => setScreen("login")}>Resigter/Sign In</li>
          )}

          <li>
            <Btn
              startIcon={<PersonIcon />}
              handleClick={() =>
                user ? setScreen("addpost") : setScreen("signin")
              }
              text="POST YOUR AD"
            />
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
