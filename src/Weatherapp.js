import React, { useState } from "react";

import Forecast from "./Forecast";
import Footer from "./Footer";
import HW from "./HW";
import axios from "axios";
import FormattedDate from "./FormattedDate";

import "./Weatherapp.css";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
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
                className="form-control btn btn-light submitt"
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
          <FormattedDate date={weatherData.date} />
        </p>
        <div className="MainTemp">
          <div className="float-left">
            <span className="units" id="temps"></span>

            <span className="temp" id="temperature">
              {Math.round(weatherData.temperature)}
            </span>
          </div>
        </div>
        <p className="desc" id="description">
          {weatherData.description}
        </p>
        <div className="icons">
          <img src="" alt="Clear" id="icon" width="150" />
        </div>
        <HW />

        <Forecast coordinates={weatherData.coordinates} />
        <Footer />
      </div>
    );
  } else {
    const apiKey = "29527448df563b5249939b0ef208047a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
