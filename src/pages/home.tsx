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
import { useOrientation } from "@uidotdev/usehooks";

interface CardProps {
  onTryClick: () => void,
  codeSource: string,
  title: string,
  description: string
  image: string
}
function DemoCard(props:CardProps) {
  return <Card sx={{ width: "100%", height: "70%", minHeight: "500px"}}>
  <CardMedia
    image={props.image}
    sx={{
      height: "60%",
      backgroundSize: "cover",
      backgroundPosition: "top",
    }}
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">{props.title}</Typography>
    <Typography variant="body2" color="text.secondary">{props.description}</Typography>
  </CardContent>
  <CardActions>
    <Button
      onClick={props.onTryClick}
    >
      Try it out
    </Button>
    <Button
      component={Link}
      href={props.codeSource}
    >
      Source code
    </Button>
  </CardActions>
</Card>
}

function isLandscape(orientation: string): boolean {
  return orientation === "landscape-primary" || orientation === "landscape-secondary"
}

export function Home() {
  const navigate = useNavigate();
  const orientation = useOrientation();

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "2.5%", height: "100%" }}>
      <Stack alignItems="center" spacing={4} height="100%">
        <p style={{ fontSize: "1.2em", textAlign: "center" }}>
          A collection of demos written in Go using Ebitengine, combining
          various other libraries to make common game concepts/components. They
          are served as WebAssembly, so you can test them out on this site!
        </p>
        <Stack direction={isLandscape(orientation.type)? "row":"column"} spacing={4} height="100%">
          <DemoCard
            onTryClick={() => navigate("/game-component-demos/demos/game-menu")}
            codeSource="https://github.com/timothy-ch-cheung/go-game-menu"
            title="Game Menus"
            description="Menu UI rendering in tandem with regular Ebitengine rendering. Demonstrates how to switch been different screens for a game."
            image={gameMenu}
          />
          <DemoCard
            onTryClick={() => navigate("/game-component-demos/demos/map-tween")}
            codeSource="https://github.com/timothy-ch-cheung/go-game-tween"
            title="Map Panning"
            description="Smooth map camera movement using ebiten-camera and gween. Includes a minimap of world view."
            image={mapTween}
          />
          <DemoCard
            onTryClick={() => navigate("/game-component-demos/demos/physics-animation")}
            codeSource="https://github.com/timothy-ch-cheung/physics-animation"
            title="Physics and Animation"
            description="Basic platformer with physics and animation for combo attacks."
            image={physicsAnimation}
          />
        </Stack>
      </Stack>
    </div>
  );
}
