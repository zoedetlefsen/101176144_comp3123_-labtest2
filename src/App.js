// src/App.js
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css'

const API_KEY = '7720dbbceb0a4876837acdb765f22142';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (location) => {
    const response = await fetch(`${API_URL}?q=${location}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    setWeatherData(data);
  };

  useEffect(() => {
    fetchWeatherData('Toronto'); // Set default city to Toronto
  }, []); 

  return (
    <div>
      <h1>WEATHER FORECAST - 101176144</h1>
      <SearchBar onSearch={fetchWeatherData} />
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}

export default App;

