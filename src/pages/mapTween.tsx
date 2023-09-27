import { DeviceSize, useDeviceSize } from "../components/Device";
import GameWindow from "../components/GameWindow";

function getWindowSize(size: DeviceSize): [number, number] {
  switch (size) {
    case DeviceSize.EXTRA_SMALL:
      return [320, 320];
    case DeviceSize.SMALL:
      return [480, 480];
    case DeviceSize.MEDIUM:
      return [640, 640];
    case DeviceSize.LARGE:
      return [960, 960];
  }
}

export function MapTween() {
  let [width, height] = getWindowSize(useDeviceSize());
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
      <GameWindow
        wasmFile="mapTween-1-0-0.wasm"
        width={width}
        height={height}
      />
    </div>
  );
}
