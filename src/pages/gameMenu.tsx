import { DeviceSize, useDeviceSize } from "../components/Device";
import GameWindow from "../components/GameWindow";

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
      <GameWindow
        wasmFile="gameMenu-1-0-0.wasm"
        width={width}
        height={height}
      />
    </div>
  );
}
