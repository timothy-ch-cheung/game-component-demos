import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CabinIcon from "@mui/icons-material/Cabin";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

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
  return (
    <AppBar position="static" style={{ background: "#393D47" }}>
      <Toolbar>
        <CabinIcon sx={{ mr: ICON_SPACING }} />
        <Button sx={style}>Home</Button>
        <SportsEsportsIcon sx={{ mr: ICON_SPACING }} />
        <Button sx={style}>Game Component Demos</Button>
      </Toolbar>
    </AppBar>
  );
};
