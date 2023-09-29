import { Stack } from "@mui/material";
import Description from "../components/Description";
import { DeviceSize, useDeviceSize } from "../components/Device";
import GameWindow from "../components/GameWindow";

const DESCRIPTION =
  "Place and Delete blocks. Swith between views using the Iso/2d toggle on the top left";
const CONTROLS = [
  { key: "Left Mouse Click", action: "Place Block, Switch View" },
  { key: "Right Mouse Click", action: "Delete Block" },
];

const LIBRARIES = [
  {
    name: "Ebiten",
    description: "Game Engine",
    link: "https://ebitengine.org/",
  },
  {
    name: "EbitenUI",
    description: "View and block selection UI",
    link: "https://github.com/ebitenui/ebitenui",
  },
  {
    name: "Ebitengine-Input",
    description: "Mapping mouse clicks to actions",
    link: "https://github.com/quasilyte/ebitengine-input",
  },
  {
    name: "Ebitengine-Resource",
    description: "Loading sprites",
    link: "https://github.com/quasilyte/ebitengine-resource",
  },
  {
    name: "Resolv",
    description: "Detecting when the cursor is hovering over a tile",
    link: "https://github.com/SolarLune/resolv",
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

export function BlockPlacement() {
  let [width, height] = getWindowSize(useDeviceSize());
  console.log(width, height);
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
      <Stack spacing={2}>
        <GameWindow
          wasmFile="blockPlacement-1-0-0.wasm"
          width={width}
          height={height}
        />
        <Description
          desc={DESCRIPTION}
          controls={CONTROLS}
          libraries={LIBRARIES}
          maxWidth={width}
        />
      </Stack>
    </div>
  );
}
