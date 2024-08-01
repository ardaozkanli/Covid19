import React from "react";
import WorldMap from "./components/WorldMap";
import "./App.css"
const App = () => (
  <div className="app-container">
    <header>
      <h1>COVID-19 WORLD MAP</h1>
    </header>
    <main>
      <WorldMap />
    </main>
  </div>
);

export default App;
