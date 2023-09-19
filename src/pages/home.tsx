import gameMenu from "../assets/game-menu.gif";
import mapTween from "../assets/map-tween.gif";
import physicsAnimation from "../assets/physics-animation.gif";
import blockPlacement from "../assets/block-placement.gif";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import {
  DeviceOrientation,
  DeviceType,
  useDeviceOrientation,
  useDeviceType,
} from "../components/Device";

interface CardProps {
  onTryClick: () => void;
  codeSource: string;
  title: string;
  description: string;
  image: string;
}

function getCardStyle(type: DeviceType, orientation: DeviceOrientation) {
  if (orientation === DeviceOrientation.PORTRAIT) {
    if (type === DeviceType.MOBILE) {
      return { width: "95vw" };
    } else {
      return { width: "90vw" };
    }
  }
  return { width: "22vw" };
}

function getCardImageStyle(type: DeviceType, orientation: DeviceOrientation) {
  if (orientation === DeviceOrientation.PORTRAIT) {
    if (type === DeviceType.MOBILE) {
      return { height: "95vw" };
    } else {
      return { height: "90vw" };
    }
  }
  return { height: "22vw" };
}

function DemoCard(props: CardProps) {
  const type = useDeviceType();
  const orientation = useDeviceOrientation();

  return (
    <Card
      sx={{
        ...{ overflow: "visible", height: "100%" },
        ...getCardStyle(type, orientation),
      }}
    >
      <CardMedia
        image={props.image}
        sx={getCardImageStyle(type, orientation)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={props.onTryClick}>Try it out</Button>
        <Button component={Link} href={props.codeSource}>
          Source code
        </Button>
      </CardActions>
    </Card>
  );
}

export function Home() {
  const navigate = useNavigate();
  const orientation = useDeviceOrientation();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "2.5%",
      }}
    >
      <Stack alignItems="center" spacing={4}>
        <Typography gutterBottom variant="h5" align="center">
          A collection of demos written in Go using Ebitengine, combining
          various other libraries to make common game concepts/components. They
          are served as WebAssembly, so you can test them out on this site!
        </Typography>
        <Stack
          direction={
            orientation === DeviceOrientation.LANDSCAPE ? "row" : "column"
          }
          spacing={4}
          height="100%"
          alignItems="center"
        >
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
            onTryClick={() =>
              navigate("/game-component-demos/demos/physics-animation")
            }
            codeSource="https://github.com/timothy-ch-cheung/physics-animation"
            title="Physics and Animation"
            description="Basic platformer with physics and animation for combo attacks."
            image={physicsAnimation}
          />
          <DemoCard
            onTryClick={() =>
              navigate("/game-component-demos/demos/block-placement")
            }
            codeSource="https://github.com/timothy-ch-cheung/go-game-block-placement"
            title="Block Placement"
            description="Top down 2D and Isometric rendering with cursor collision detection."
            image={blockPlacement}
          />
        </Stack>
      </Stack>
    </div>
  );
}
