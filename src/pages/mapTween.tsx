import { Stack } from "@mui/material";
import Description from "../components/Description";
import { DeviceSize, useDeviceSize } from "../components/Device";
import GameWindow from "../components/GameWindow";

const DESCRIPTION =
  "Move between levels on the map with smooth movement. Includes a mini map of the world on the top right.";
const CONTROLS = [
  { key: "Left Mouse Click", action: "Press Next/Prev to move between levels" },
];

const LIBRARIES = [
  {
    name: "Ebiten",
    description: "Game Engine",
    link: "https://ebitengine.org/",
  },
  {
    name: "EbitenUI",
    description: "Next/Prev buttons",
    link: "https://github.com/ebitenui/ebitenui",
  },
  {
    name: "Ebiten-Camera",
    description:
      "Rendering the screen based on where in the world map the camera is",
    link: "https://github.com/MelonFunction/ebiten-camera",
  },
  {
    name: "Ebitengine-Resource",
    description: "Loading sprites",
    link: "https://github.com/quasilyte/ebitengine-resource",
  },
  {
    name: "Gween",
    description:
      "Calculating dx/dy for each tick when moving between levels for smooth movement",
    link: "https://github.com/tanema/gween",
  },
];

const ART = [{ name: "Sprites", link: "https://github.com/timothy-ch-cheung" }];

function getWindowSize(size: DeviceSize): [number, number] {
  switch (size) {
    case DeviceSize.EXTRA_SMALL:
      return [320, 320];
    case DeviceSize.SMALL:
      return [480, 480];
    case DeviceSize.MEDIUM:
      return [640, 640];
    case DeviceSize.LARGE:
      return [800, 800];
  }
}

export function MapTween() {
  let [width, height] = getWindowSize(useDeviceSize());
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
      <Stack spacing={2}>
        <GameWindow
          wasmFile="mapTween-1-0-0.wasm"
          width={width}
          height={height}
        />
        <Description
          desc={DESCRIPTION}
          sourceCode="https://github.com/timothy-ch-cheung/go-game-tween"
          controls={CONTROLS}
          libraries={LIBRARIES}
          art={ART}
          maxWidth={width}
        />
      </Stack>
    </div>
  );
}
