import React from 'react';

export default function FormattedDate(props) {
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let currentDate = props.date.getDate();
  let month = months[props.date.getMonth()];
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day},{month} {currentDate} | {hours}:{minutes}
    </div>
  );
}
