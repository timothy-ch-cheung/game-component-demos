import GameWindow from "../components/GameWindow";

export function MapTween() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
      <GameWindow wasmFile="mapTween-1-0-0.wasm" width={480} height={480} />
    </div>
  );
}
