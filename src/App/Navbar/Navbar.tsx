import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.scss";
import Link from "@mui/material/Link";
import logo from "../../../public/logo.svg"
export const Navbar = () => {



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="navBar">
   
        <Toolbar>
        <Link href="/"  className="bgWite">
      <Box
        component="img"
        sx={{ height: 54 }}
        alt="Logo"
        src={logo}
       
      />
    </Link>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Q & A Mart
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
