import React from "react";
import "./Weatherapp.css";

export default function MainTemp() {
  return (
    <div className="MainTemp">
      <div className="float-left">
        <span className="units" id="temps"></span>

        <span className="temp" id="temperature">
          19
        </span>
      </div>
    </div>
  );
}
