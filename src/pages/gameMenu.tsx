import GameWindow from "../components/GameWindow";

export function GameMenu() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
      <GameWindow wasmFile="gameMenu-1-0-0.wasm" width={640} height={480} />
    </div>
  );
}
