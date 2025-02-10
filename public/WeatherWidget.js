import React from 'react';
import ReactDOM from 'react-dom/client';
import WeatherApp from '../src/Weatherapp';

class WeatherWidget extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    const mountPoint = document.createElement('div');
    this.shadowRoot.appendChild(mountPoint);

    const root = ReactDOM.createRoot(mountPoint);
    root.render(<WeatherApp />);
  }
}

customElements.define('weather-widget', WeatherWidget);
