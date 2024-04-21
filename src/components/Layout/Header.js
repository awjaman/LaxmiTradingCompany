// import React from 'react'
import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import About from "./../../pages/About";
import Contact from "./../../pages/Contact";
import { Divider } from "@mui/material";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // menu Drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color="goldenrod"
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 ,my:2 }}
      >
        Laxmi Trading Company
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <Box>
      <AppBar component="nav" sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open-drawer"
            edge="start"
            sx={{
              mr: 2,
              display: { sm: "none" },
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="goldenrod"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Laxmi Trading Company
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "240px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>
       <Toolbar />
      </Box>
    </Box>
  );
};

export default Header;
