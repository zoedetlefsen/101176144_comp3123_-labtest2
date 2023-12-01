// src/components/WeeklyForecast.js
import React from 'react';

const WeeklyForecast = ({ weeklyDataWithIcons }) => {
  return (
    <div>
      <h3>Weekly Forecast</h3>
      <ul>
        {weeklyDataWithIcons.map((dayData) => (
          <li key={dayData.day}>
            {dayData.day}: {dayData.temperature}°C
            <img src={`https://openweathermap.org/img/w/${dayData.icon}.png`} alt="Weather Icon" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyForecast;
