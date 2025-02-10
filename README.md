A simple, lightweight, and embeddable weather widget built with React. Easily add it to any website using an <iframe> or <script> tag.

LIVE: https://tiara-weather-widget.netlify.app/


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Getting Started
1. Clone the Repository
2. Install Dependencies
`npm install`
3. Run the App Locally
 `npm start`

 Building the App
`npm build`
.

##Embed on Any Website
<script src="https://your-weather-widget.netlify.app/widget.js"></script>
<weather-widget></weather-widget>


🌍 API Configuration
This widget fetches weather data from OpenWeather API.
To use your own API key, update src/config.js:
export const API_KEY = "your-api-key-here";

Technologies Used
React for building the user interface.
Parcel as the bundler.
OpenWeatherMap API (or any other weather API) for fetching weather data.

