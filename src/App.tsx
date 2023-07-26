import React from "react";
import { Background } from "./components/Background";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Home } from "./pages/home";
import { GameMenu } from "./pages/gameMenu";
import { MapTween } from "./pages/mapTween";

function Layout() {
  return <Background>
      <NavBar />
      <Outlet/>
    </Background>
}


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="game-component-demos/" element={<Layout/>}>
            <Route path="" element={<Home/>}/>
            <Route path="demos/">
              <Route path="game-menu" element={<GameMenu/>}/>
              <Route path="map-tween" element={<MapTween/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
