import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherTemp from './WeatherTemp';
import WeatherIcon from './WeatherIcon';
import './App.css';

export default function WeatherInfo(props) {
  return (
    <div className='WeatherInfo'>
      <div>
        <h1 className='city'>{props.data.city}</h1>

        <div className='day' id='date'>
          <FormattedDate date={props.data.date} />
        </div>
      </div>
      <div className='MainTemp'>
        <div className='float-left'>
          <span className='units' id='temps'></span>
          <div>
            <span className='temp' id='temperature'>
              <WeatherTemp celsius={props.data.temperature} />
            </span>
            <p className='desc' id='description'>
              {props.data.description}
            </p>
          </div>
        </div>

        <div className='icons'>
          <WeatherIcon code={props.data.icon} size={80} />
        </div>
      </div>

      <div className='H-W'>
        <span className='hu'>
          Humidity:<span id='humidity'> {props.data.humidity}</span> %
        </span>

        <span className='windy'>
          {' '}
          Wind: <span id='wind'>{props.data.wind}</span>km/h{' '}
        </span>
      </div>
      <br />
    </div>
  );
}
