import React from "react";
import "./Weatherapp.css";

export default function MainTemp() {
  return (
    <div className="MainTemp">
      <div className="float-left">
        <span className="units" id="temps">
          <a href="#" id="celsius-link" alt="Celsius link">
            °C
          </a>{" "}
          |
          <a href="#" id="fahrenheit-link" alt="Fahrenheit link">
            °F
          </a>
        </span>

        <span className="temp" id="temperature" alt="Temperature">
          19
        </span>
      </div>
    </div>
  );
}
