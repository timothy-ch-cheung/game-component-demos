import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CabinIcon from "@mui/icons-material/Cabin";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from "react";

const SPACING = 2.5;
const ICON_SPACING = 0.25;

const style = {
  my: 2,
  mr: SPACING,
  color: "white",
  display: "block",
  fontSize: "1.2em",
};

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar position="static" style={{ background: "#393D47" }}>
      <Toolbar>
        <CabinIcon sx={{ mr: ICON_SPACING }} />
        <Link to="/game-component-demos/">
          <Button sx={style}>Home</Button>
        </Link>
        <SportsEsportsIcon sx={{ mr: ICON_SPACING }} />
        <Button sx={style} onClick={handleClick}>Game Component Demos</Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to="/game-component-demos/demos/game-menu">
          <MenuItem onClick={handleClose}>Game Menu</MenuItem>
        </Link>
        <Link to="/game-component-demos/demos/map-tween">
          <MenuItem onClick={handleClose}>Map Tween</MenuItem>
        </Link>
      </Menu>
      </Toolbar>
    </AppBar>
  );
};
