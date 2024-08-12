import CircularProgress from "@mui/material/CircularProgress";

interface GameWindowProps {
  wasmFile: string;
  goVersion: string;
  width: number;
  height: number;
}

const PROGRESS_SIZE = 20;

function getBody(wasmFile: string, goVersion: string) {
  const origin = window.location.origin;
  return `
    <script src="${origin}/game-component-demos/demos/wasm_exec_${goVersion}.js"></script>
    <script>
      // Polyfill
      if (!WebAssembly.instantiateStreaming) {
        WebAssembly.instantiateStreaming = async (resp, importObject) => {
          const source = await (await resp).arrayBuffer();
          return await WebAssembly.instantiate(source, importObject);
        };
      }

      const go = new Go();
      WebAssembly.instantiateStreaming(
        fetch("${origin}/game-component-demos/demos/${wasmFile}"),
        go.importObject
      ).then((result) => {
        go.run(result.instance);
      });
    </script>
  `;
}

export default function GameWindow({
  wasmFile,
  goVersion,
  width,
  height,
}: GameWindowProps) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: "grey",
        zIndex: 1,
      }}
    >
      <div style={{ position: "relative", width: 0, height: 0 }}>
        <CircularProgress
          style={{
            position: "absolute",
            top: `${height / 2 - PROGRESS_SIZE}px`,
            left: `${width / 2 - PROGRESS_SIZE}px`,
            zIndex: -1,
          }}
        />
      </div>
      <iframe
        srcDoc={getBody(wasmFile, goVersion)}
        title={wasmFile}
        width={width}
        height={height}
        style={{ border: 0 }}
        scrolling="no"
      />
    </div>
  );
}
