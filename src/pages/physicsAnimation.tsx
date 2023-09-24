import GameWindow from "../components/GameWindow";

export function PhysicsAnimation() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
      <GameWindow
        wasmFile="physicsAnimation-1-0-0.wasm"
        width={720}
        height={480}
      />
    </div>
  );
}
