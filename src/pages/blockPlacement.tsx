import { DeviceSize, useDeviceSize } from "../components/Device";
import GameWindow from "../components/GameWindow";

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
      <GameWindow
        wasmFile="blockPlacement-1-0-0.wasm"
        width={width}
        height={height}
      />
    </div>
  );
}
