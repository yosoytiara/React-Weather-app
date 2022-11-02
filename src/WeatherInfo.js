import React from "react";
import Footer from "./Footer";

import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="city">{props.data.city}</h1>

      <p className="day" id="date">
        <FormattedDate date={props.data.date} />
      </p>
      <div className="MainTemp">
        <div className="float-left">
          <span className="units" id="temps"></span>

          <span className="temp" id="temperature">
            {Math.round(props.data.temperature)}
          </span>
        </div>
      </div>
      <p className="desc" id="description">
        {props.data.description}
      </p>
      <div className="icons">
        <img src="" alt="Clear" id="icon" width="150" />
      </div>
      <div className="H-W">
        <span className="hu">
          Humidity:<span id="humidity"> {props.data.humidity}</span> %
        </span>

        <span className="windy">
          {" "}
          Wind: <span id="wind">{props.data.wind}</span> mph{" "}
        </span>
      </div>
      <br />

      <Forecast />
      <Footer />
    </div>
  );
}
