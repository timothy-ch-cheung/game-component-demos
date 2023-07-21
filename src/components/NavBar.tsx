import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export const NavBar = () => {
  return (
    <AppBar position="static" style={{ background: "#4F4F4B" }}>
      <Toolbar>
        <Button
          sx={{
            my: 2,
            color: "white",
            display: "block",
            fontWeight: "bold",
            fontSize: "1.2em",
          }}
        >
          Home
        </Button>
        <Button
          sx={{ my: 2, color: "white", display: "block", fontSize: "1.2em" }}
        >
          Game Demos
        </Button>
      </Toolbar>
    </AppBar>
  );
};
