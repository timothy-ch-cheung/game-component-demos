import { Stack } from "@mui/material";
import { DeviceSize, useDeviceSize } from "../components/Device";
import GameWindow from "../components/GameWindow";
import Description from "../components/Description";

const DESCRIPTION =
  "Basic platformer with physics and animation for combo attacks.";
const CONTROLS = [
  { key: "Arrow Keys or WASD", action: "Move character" },
  { key: "Space", action: "Attack" },
];

const LIBRARIES = [
  {
    name: "Ebiten",
    description: "Game Engine",
    link: "https://ebitengine.org/",
  },
  {
    name: "Ebitengine-Resource",
    description: "Loading sprites",
    link: "https://github.com/quasilyte/ebitengine-resource",
  },
  {
    name: "Resolv",
    description: "Detecting collisions between character, platforms and ground",
    link: "https://github.com/SolarLune/resolv",
  },
  {
    name: "Resolv",
    description: "Animating character sprite",
    link: "https://github.com/yohamta/ganim8",
  },
];

const ART = [
  { name: "Character", link: "https://rvros.itch.io/animated-pixel-hero" },
  { name: "Platform", link: "https://szadiart.itch.io/pixel-dark-forest" },
  {
    name: "Background",
    link: "https://edermunizz.itch.io/free-pixel-art-forest",
  },
];

function getWindowSize(size: DeviceSize): [number, number] {
  switch (size) {
    case DeviceSize.EXTRA_SMALL:
      return [360, 240];
    case DeviceSize.SMALL:
      return [540, 360];
    case DeviceSize.MEDIUM:
      return [720, 480];
    case DeviceSize.LARGE:
      return [1080, 720];
  }
}

export function PhysicsAnimation() {
  let [width, height] = getWindowSize(useDeviceSize());
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
      <Stack spacing={2}>
        <GameWindow
          wasmFile="physicsAnimation-1-0-0.wasm"
          width={width}
          height={height}
        />
        <Description
          desc={DESCRIPTION}
          sourceCode="https://github.com/timothy-ch-cheung/go-game-animation-physics"
          controls={CONTROLS}
          libraries={LIBRARIES}
          art={ART}
          maxWidth={width}
        />
      </Stack>
    </div>
  );
}
