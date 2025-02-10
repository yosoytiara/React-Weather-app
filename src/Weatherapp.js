import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
// import Forecast from "./Forecast";
import Footer from "./Footer";
import axios from "axios";


export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "b262154b2d4d3113da298dca71b99a47";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className='weather-app' id='WeatherApp'>
        <form className='search-form' id='search-form' onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-sm-8'>
              <input
                type='search'
                placeholder='Type a city..'
                autoFocus='on'
                autoComplete='off'
                id='city-input'
                onChange={handleCityChange}
                className='form-control shadow-sm city-input'
              />
            </div>
            <div className='col-3'>
              <input
                type='submit'
                value='Search'
                className='form-control btn btn-dark submit'
              />
            </div>
            <div className='col-1'>
              <button
                type='button'
                className='btn btn-info button'
                id='current-location-button'
              >
                <span role='img' alt='location'>
                  {' '}
                  📍
                </span>
              </button>
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />
        {/* <Forecast coordinates={weatherData.coordinates} /> */}
        <Footer />
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}
