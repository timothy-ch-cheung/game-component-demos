import React from "react";
import { Background } from "./components/Background";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Background>
      <NavBar />
      <h1>Content</h1>
    </Background>
  );
}

export default App;
