import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CabinIcon from "@mui/icons-material/Cabin";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { DeviceSize, useDeviceSize } from "./Device";

const SPACING = 2.5;
const ICON_SPACING = 0.25;

const style = {
  my: 2,
  mr: SPACING,
  color: "white",
  display: "block",
  fontSize: "1.2em",
};

const textStyle = {
  fontSize: "1.4em",
  marginRight: SPACING,
};

export const NavBar = () => {
  const navigate = useNavigate();
  const deviceType = useDeviceSize();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleHomeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/game-component-demos/");
  };

  const handleDemoMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDemoMenuClose = () => {
    setAnchorEl(null);
  };

  function demoMenuItemHandler(url: string) {
    return () => {
      setAnchorEl(null);
      navigate(url);
    };
  }

  return (
    <AppBar
      position="static"
      style={{ background: "#393D47", display: "flex" }}
    >
      <Toolbar>
        {deviceType !== DeviceSize.SMALL && deviceType !== DeviceSize.EXTRA_SMALL && (
          <>
            <h1 style={textStyle}>Game Components</h1>
            <Divider
              orientation="vertical"
              flexItem
              light
              style={{ marginLeft: 10, marginRight: 10, background: "white" }}
              variant="middle"
            />
          </>
        )}
        <CabinIcon sx={{ mr: ICON_SPACING }} />
        <Button sx={style} onClick={handleHomeClick}>
          Home
        </Button>
        <SportsEsportsIcon sx={{ mr: ICON_SPACING }} />
        <Button sx={style} onClick={handleDemoMenuClick}>
          Demos
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleDemoMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={demoMenuItemHandler(
              "/game-component-demos/demos/game-menu"
            )}
          >
            Game Menu
          </MenuItem>
          <MenuItem
            onClick={demoMenuItemHandler(
              "/game-component-demos/demos/map-tween"
            )}
          >
            Map Tween
          </MenuItem>
          <MenuItem
            onClick={demoMenuItemHandler(
              "/game-component-demos/demos/physics-animation"
            )}
          >
            Physics Animation
          </MenuItem>
          <MenuItem
            onClick={demoMenuItemHandler(
              "/game-component-demos/demos/block-placement"
            )}
          >
            Block Placement
          </MenuItem>
          <MenuItem
            onClick={demoMenuItemHandler(
              "/game-component-demos/demos/text-crawl"
            )}
          >
            Text Crawl
          </MenuItem>
          <MenuItem
            onClick={demoMenuItemHandler(
              "/game-component-demos/demos/save-state"
            )}
          >
            Save State
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
