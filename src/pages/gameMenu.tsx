import { Stack } from "@mui/material";
import { DeviceSize, useDeviceSize } from "../components/Device";
import GameWindow from "../components/GameWindow";
import Description from "../components/Description";
const DESCRIPTION =
  "Menu UI rendering in tandem with regular Ebitengine rendering. Demonstrates how to switch been different screens for a game.";
const CONTROLS = [
  { key: "Left Mouse Click", action: "Interact with UI" },
  { key: "Arrow Keys", action: "Move player in Arcade Mode" },
];

const LIBRARIES = [
  {
    name: "Ebiten",
    description: "Game Engine",
    link: "https://ebitengine.org/",
  },
  {
    name: "EbitenUI",
    description: "Game Setting UI",
    link: "https://github.com/ebitenui/ebitenui",
  },
];

const ART = [{ name: "Sprites", link: "https://github.com/timothy-ch-cheung" }];

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

export function GameMenu() {
  let [width, height] = getWindowSize(useDeviceSize());
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
      <Stack spacing={2}>
        <GameWindow
          wasmFile="gameMenu-1-0-0.wasm"
          width={width}
          height={height}
        />
        <Description
          desc={DESCRIPTION}
          sourceCode="https://github.com/timothy-ch-cheung/go-game-menu"
          controls={CONTROLS}
          libraries={LIBRARIES}
          art={ART}
          maxWidth={width}
        />
      </Stack>
    </div>
  );
}
