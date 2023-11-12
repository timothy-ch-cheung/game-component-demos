import { Stack } from "@mui/material";
import { DeviceSize, useDeviceSize } from "../components/Device";
import GameWindow from "../components/GameWindow";
import Description from "../components/Description";

const DESCRIPTION =
  "Demo of custom EbitenUI components and how to create crawling text commonly seen in RPG games.";
const CONTROLS = [{ key: "Space or A", action: "Advance dialogue" }];

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
    name: "EbitenUI",
    description: "Next/Prev buttons",
    link: "https://github.com/ebitenui/ebitenui",
  },
];

const ART = [
  { name: "Background & Player", link: "https://www.luiszuno.com/splash/" },
  {
    name: "UI",
    link: "https://bdragon1727.itch.io/basic-pixel-gui-and-buttons-pack-1",
  },
];

function getWindowSize(size: DeviceSize): [number, number] {
  switch (size) {
    case DeviceSize.EXTRA_SMALL:
      return [384, 216];
    case DeviceSize.SMALL:
      return [512, 288];
    case DeviceSize.MEDIUM:
      return [768, 432];
    case DeviceSize.LARGE:
      return [1024, 576];
  }
}

export function TextCrawl() {
  let [width, height] = getWindowSize(useDeviceSize());
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
      <Stack spacing={2}>
        <GameWindow
          wasmFile="textCrawl-1-0-0.wasm"
          width={width}
          height={height}
        />
        <Description
          desc={DESCRIPTION}
          sourceCode="https://github.com/timothy-ch-cheung/go-game-text-crawl"
          controls={CONTROLS}
          libraries={LIBRARIES}
          art={ART}
          maxWidth={width}
        />
      </Stack>
    </div>
  );
}
