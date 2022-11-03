import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="city">{props.data.city}</h1>

      <p className="day" id="date">
        <FormattedDate date={props.data.date} />
      </p>
      <p className="desc" id="description">
        {props.data.description}
      </p>
      <div className="MainTemp">
        <div className="icons">
          <WeatherIcon code={props.data.icon} size={120} />
        </div>
        <div className="float-left">
          <span className="units" id="temps"></span>

          <span className="temp" id="temperature">
            <WeatherTemp celsius={props.data.temperature} />
          </span>
        </div>
      </div>

      <div className="H-W">
        <span className="hu">
          Humidity:<span id="humidity"> {props.data.humidity}</span> %
        </span>

        <span className="windy">
          {" "}
          Wind: <span id="wind">{props.data.wind}</span>km/h{" "}
        </span>
      </div>
      <br />
    </div>
  );
}
