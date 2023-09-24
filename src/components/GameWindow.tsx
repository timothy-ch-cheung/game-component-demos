import CircularProgress from "@mui/material/CircularProgress";

interface GameWindowProps {
  wasmFile: string;
  width: number;
  height: number;
}

const PROGRESS_SIZE = 20;

function getBody(wasmFile: string) {
  return `
    <script src="wasm_exec.js"></script>
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
        fetch("${wasmFile}"),
        go.importObject
      ).then((result) => {
        go.run(result.instance);
      });
    </script>
  `;
}

export default function GameWindow({
  wasmFile,
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
        srcDoc={getBody(wasmFile)}
        title={wasmFile}
        width={width}
        height={height}
        style={{ border: 0 }}
        scrolling="no"
      />
    </div>
  );
}
