import gameMenu from "../assets/game-menu.gif"
import mapTween from "../assets/map-tween.gif"
import Stack from '@mui/material/Stack';

export function Home() {
    return <div style={{display: "flex", justifyContent: "center", margin: "2.5%"}}>
        <Stack alignItems="center" spacing={4}>
        <p style={{fontSize: "1.2em", textAlign: "center"}}>A collection of demos written in Go using Ebitengine, combining various other libraries to make common game concepts/components. They are served as WebAssembly, so you can test them out on this site!</p>
        <Stack direction="row" spacing={4}>
            <img src={gameMenu} alt="game-menu" />
            <img src={mapTween} alt="map-tween" />
        </Stack>
        </Stack>
    </div>
}