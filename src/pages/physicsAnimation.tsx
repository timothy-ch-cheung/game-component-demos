import CircularProgress from "@mui/material/CircularProgress";

export function PhysicsAnimation() {
    return (
        <div>
            <div
                style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
            >
                <div
                    style={{
                        width: "720px",
                        height: "480px",
                        backgroundColor: "grey",
                        zIndex: 1,
                    }}
                >
                    <div style={{ position: "relative", width: 0, height: 0 }}>
                        <CircularProgress
                            style={{
                                position: "absolute",
                                top: "220px",
                                left: "350px",
                                zIndex: -1,
                            }}
                        />
                    </div>
                    <iframe
                        id="physics-animation-iframe"
                        title="Physics Animation"
                        src="../physics-animation.html"
                        width="720"
                        height="480"
                        style={{ border: 0 }}
                        scrolling="no"
                        onLoad={() => {
                            setTimeout(() => {
                                const iframe = document.getElementById("physics-animation-iframe") as HTMLIFrameElement
                                const canvas = iframe?.contentWindow?.document.querySelector("canvas")
                                canvas?.focus()
                            }, 100)
                        }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
