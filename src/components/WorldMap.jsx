import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import "./WorldMap.css";

const geoUrl = "https://unpkg.com/world-atlas@1/world/110m.json";

const WorldMap = () => {
  const handleGeographyClick = (geo) => {
    console.log(geo);
  };

  return (
    <div className="map-container">
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => handleGeographyClick(geo)}
                style={{
                  default: { fill: "#D6D6DA", outline: "none" },
                  hover: { fill: "#F53", outline: "none", cursor: "pointer" },
                  pressed: { fill: "#E42", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
