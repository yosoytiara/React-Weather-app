import React from "react";
import "./Weatherapp.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="weather-forecast" id="forecast">
        <div className="row">
          <div className="col-2">
            <div className="weather-forecast-date">Thu</div>
            <img
              src="http://openweathermap.org/img/wn/50d@2x.png"
              alt=""
              width="80"
            />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max"> 18° </span> |
              <span className="weather-forecast-temperature-min"> 12° </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
