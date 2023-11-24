import gameMenu from "../assets/game-menu.gif";
import mapTween from "../assets/map-tween.gif";
import physicsAnimation from "../assets/physics-animation.gif";
import blockPlacement from "../assets/block-placement.gif";
import textCrawl from "../assets/text-crawl.gif";
import saveState from "../assets/save-state.gif";
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
  DeviceSize,
  useDeviceOrientation,
  useDeviceSize,
} from "../components/Device";
import Grid from "@mui/material/Grid";

interface CardProps {
  onTryClick: () => void;
  codeSource: string;
  title: string;
  description: string;
  image: string;
}

function getCardImageStyle(type: DeviceSize, orientation: DeviceOrientation) {
  if (type === DeviceSize.SMALL || type === DeviceSize.EXTRA_SMALL) {
    return { height: "95vw" };
  } else if (type === DeviceSize.MEDIUM) {
    return { height: "45vw" };
  }
  return { height: "22vw" };
}

function DemoCard(props: CardProps) {
  const type = useDeviceSize();
  const orientation = useDeviceOrientation();

  return (
    <Grid item xs={12} md={6} lg={3} paddingRight="8px" paddingBottom="8px">
      <Card
        sx={{
          ...{ overflow: "visible", height: "100%" },
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
    </Grid>
  );
}

export function Home() {
  const navigate = useNavigate();

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
        <Grid container spacing={1} alignItems="stretch">
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
          <DemoCard
            onTryClick={() =>
              navigate("/game-component-demos/demos/text-crawl")
            }
            codeSource="https://github.com/timothy-ch-cheung/go-game-text-crawl"
            title="Text Crawl"
            description="A demo to show saving on both desktop and web platforms."
            image={textCrawl}
          />
          <DemoCard
            onTryClick={() =>
              navigate("/game-component-demos/demos/save-state")
            }
            codeSource="https://github.com/timothy-ch-cheung/go-gamesave-state"
            title="Save State"
            description="A demo to show saving on both desktop and web platforms."
            image={saveState}
          />
        </Grid>
      </Stack>
    </div>
  );
}
