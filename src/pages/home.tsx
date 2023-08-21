import gameMenu from "../assets/game-menu.gif";
import mapTween from "../assets/map-tween.gif";
import physicsAnimation from "../assets/physics-animation.gif"
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "2.5%" }}>
      <Stack alignItems="center" spacing={4}>
        <p style={{ fontSize: "1.2em", textAlign: "center" }}>
          A collection of demos written in Go using Ebitengine, combining
          various other libraries to make common game concepts/components. They
          are served as WebAssembly, so you can test them out on this site!
        </p>
        <Stack direction="row" spacing={4}>
          <Card sx={{ width: 530 }}>
            <CardMedia
              image={gameMenu}
              sx={{
                height: 400,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Game Menus
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Menu UI rendering in tandem with regular Ebitengine rendering.
                Demonstrates how to switch been different screens for a game.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() =>
                  navigate("/game-component-demos/demos/game-menu")
                }
              >
                Try it out
              </Button>
              <Button
                component={Link}
                href="https://github.com/timothy-ch-cheung/go-game-menu"
              >
                Source code
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ width: 400 }}>
            <CardMedia
              image={mapTween}
              sx={{
                height: 400,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Map Panning
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Smooth map camera movement using ebiten-camera and gween.
                Includes a minimap of world view.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() =>
                  navigate("/game-component-demos/demos/map-tween")
                }
              >
                Try it out
              </Button>
              <Button
                component={Link}
                href="https://github.com/timothy-ch-cheung/go-game-tween"
              >
                Source code
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ width: 500 }}>
            <CardMedia
              image={physicsAnimation}
              sx={{
                height: 400,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Physics and Animation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Basic platformer with physics and animation for combo attacks.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() =>
                  navigate("/game-component-demos/demos/physics-animation")
                }
              >
                Try it out
              </Button>
              <Button
                component={Link}
                href="https://github.com/timothy-ch-cheung/go-game-animation-physics"
              >
                Source code
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </Stack>
    </div>
  );
}
