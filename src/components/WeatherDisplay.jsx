// src/components/WeatherDisplay.js
import React from 'react';
import WeeklyForecast from './WeeklyForecast';

const WeatherDisplay = ({ weatherData }) => {
  // Check if weatherData is available
  if (!weatherData) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or message
  }

  // Function to format the date
  const formatDate = (timestamp) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(timestamp * 1000).toLocaleDateString('en-US', options);
  };

  // Get the weather icon code from the API response
  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

  // Dummy data for the weekly forecast with icon codes
  const weeklyDataWithIcons = [
    { day: 'Monday', temperature: 25, icon: '01d' },
    { day: 'Tuesday', temperature: 24, icon: '02d' },
    { day: 'Wednesday', temperature: 23, icon: '03d' },
    { day: 'Thursday', temperature: 22, icon: '04d' },
    { day: 'Friday', temperature: 20, icon: '09d' },
    { day: 'Saturday', temperature: 18, icon: '10d' },
    { day: 'Sunday', temperature: 19, icon: '11d' },
  ];
  

  return (
    <div className='main-container'>
      <div className='weathercontainer'>
        <h2>{weatherData.name}</h2>
        <p>Date: {formatDate(weatherData.dt)}</p>
        <p>Temperature: {weatherData.main && weatherData.main.temp}°C</p>
        <p>Weather: {weatherData.weather[0].description}</p>
        <img src={iconUrl} alt="Weather Icon" />
        <p>Wind Speed: {weatherData.wind && weatherData.wind.speed} m/s</p>
      </div>
      <div className='weekly-forecast-container'>
        <WeeklyForecast weeklyDataWithIcons={weeklyDataWithIcons} />
      </div>
    </div>
  );
};

export default WeatherDisplay;
