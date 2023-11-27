import { Stack } from "@mui/material";
import { DeviceSize, useDeviceSize } from "../components/Device";
import GameWindow from "../components/GameWindow";
import Description from "../components/Description";

const DESCRIPTION =
  "A demo to show saving on both desktop and web platforms.";
const CONTROLS = [{ key: "Left mouseclick", action: "Navigate UI" }];

const LIBRARIES = [
  {
    name: "Ebiten",
    description: "Game Engine",
    link: "https://ebitengine.org/",
  },
  {
    name: "Ebitengine-Resource",
    description: "Loading UI sprites",
    link: "https://github.com/quasilyte/ebitengine-resource",
  },
  {
    name: "EbitenUI",
    description: "Notes screen, create note window",
    link: "https://github.com/ebitenui/ebitenui",
  },
];

const ART = [
  { name: "User Interface", link: "https://comp3interactive.itch.io/retro-windows-gui" },
];

function getWindowSize(size: DeviceSize): [number, number] {
  switch (size) {
    case DeviceSize.EXTRA_SMALL:
      return [320, 240];
    case DeviceSize.SMALL:
      return [480, 360];
    case DeviceSize.MEDIUM:
      return [640, 480];
    case DeviceSize.LARGE:
      return [960, 720];
  }
}

export function SaveState() {
  let [width, height] = getWindowSize(useDeviceSize());
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
      <Stack spacing={2}>
        <GameWindow
          wasmFile="saveState-1-0-0.wasm"
          width={width}
          height={height}
        />
        <Description
          desc={DESCRIPTION}
          sourceCode="https://github.com/timothy-ch-cheung/go-game-save-state"
          controls={CONTROLS}
          libraries={LIBRARIES}
          art={ART}
          maxWidth={width}
        />
      </Stack>
    </div>
  );
}
