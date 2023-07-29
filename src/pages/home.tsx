import gameMenu from "../assets/game-menu.gif"
import mapTween from "../assets/map-tween.gif"
import Stack from '@mui/material/Stack';

export function Home() {
    return <div style={{display: "flex", justifyContent: "center", margin: "2.5%"}}>
        <Stack direction="row" spacing={4}>
            <img src={gameMenu} alt="game-menu" />
            <img src={mapTween} alt="map-tween" />
        </Stack>
    </div>
}