import React from "react";
import { Background } from "./components/Background";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Home } from "./pages/home";
import { GameMenu } from "./pages/gameMenu";
import { MapTween } from "./pages/mapTween";
import { PhysicsAnimation } from "./pages/physicsAnimation";
import { BlockPlacement } from "./pages/blockPlacement";
import { TextCrawl } from "./pages/textCrawl";
import { SaveState } from "./pages/saveState";

function Layout() {
  return (
    <Background>
      <NavBar />
      <Outlet />
    </Background>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="game-component-demos/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="demos/">
            <Route path="game-menu" element={<GameMenu />} />
            <Route path="map-tween" element={<MapTween />} />
            <Route path="physics-animation" element={<PhysicsAnimation />} />
            <Route path="block-placement" element={<BlockPlacement />} />
            <Route path="text-crawl" element={<TextCrawl />} />
            <Route path="save-state" element={<SaveState />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
