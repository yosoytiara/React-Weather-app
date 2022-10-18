import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert("The weather is${response.data.main.temp}");
  }

  let apiKey = "7dd0690899686d2acf490613cb5b2ec3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}
