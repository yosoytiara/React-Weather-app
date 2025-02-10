A simple, lightweight, and embeddable weather widget built with React. Easily add it to any website using an <iframe> or <script> tag.

LIVE: 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

clone repo
npm install
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


##Embed on Any Website
<script src="https://your-weather-widget.netlify.app/widget.js"></script>
<weather-widget></weather-widget>


🌍 API Configuration
This widget fetches weather data from OpenWeather API.
To use your own API key, update src/config.js:
export const API_KEY = "your-api-key-here";



