import CircularProgress from "@mui/material/CircularProgress";

export function GameMenu() {
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
      >
        <div
          style={{ width: "640px", height: "480px", backgroundColor: "grey", zIndex: 1 }}
        >
          <div style={{ position: "relative", width: 0, height: 0 }}>
            <CircularProgress
              style={{
                position: "absolute",
                top: "220px",
                left: "300px",
                zIndex: -1,
              }}
            />
          </div>
          <iframe
            title="Game Menu"
            src="../game-menu.html"
            width="640"
            height="480"
            style={{ border: 0 }}
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
