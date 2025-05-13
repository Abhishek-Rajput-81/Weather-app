import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import "./App.css";

const API_KEY = "Your_OpenWeatherMap_API_Key";
 
function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      alert("City not found");
    }
  };

  return (
    <div className="app-container">
      <div className="weather-header">
        <h2>Weather App</h2>
        <div className="date">{new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
