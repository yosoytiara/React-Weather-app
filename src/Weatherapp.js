import React from "react";

import Forecast from "./Forecast";
import Footer from "./Footer";
import MainTemp from "./MainTemp";
import HW from "./HW";

import "./Weatherapp.css";

export default function WeatherApp() {
  return (
    <div className="weather-app" id="weatherapp">
      <form className="search-form" id="search-form">
        <div className="row">
          <div className="col-sm-8">
            <input
              type="search"
              placeholder="Type a city.."
              autofocus="on"
              autocomplete="off"
              id="city-input"
              className="form-control shadow-sm city-input"
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-outline-light submitt"
            />
          </div>
          <div class="col-1">
            <button
              type="button"
              className="btn btn-info button"
              id="current-location-button"
            >
              <span role="img" alt="location">
                {" "}
                📍
              </span>
            </button>
          </div>
        </div>
      </form>

      <h1 id="city">New York City</h1>

      <p className="day" id="date">
        Day
      </p>
      <MainTemp />
      <p className="desc" id="description">
        SUNNY
      </p>
      <div className="icons">
        <img src="" alt="Clear" id="icon" width="150" />
      </div>
      <HW />

      <Forecast />
      <Footer />
    </div>
  );
}
