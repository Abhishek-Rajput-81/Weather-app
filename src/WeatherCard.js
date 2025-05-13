import React from "react";

function formatTime(unix, offset) {
  const date = new Date((unix + offset) * 1000);
  const hours = date.getUTCHours();
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  return `${(hours % 12 || 12)}:${minutes} ${ampm}`;
}

function WeatherCard({ data }) {
  const { main, weather, wind, sys, timezone, rain } = data;

  return (
    <div className="weather-card">
      <div className="weather-left">
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
          alt={weather[0].description}
        />
        <div className="weather-temp">{Math.round(main.temp)}°C</div>
        <div className="weather-desc">{weather[0].description}</div>
      </div>
      <div className="weather-right">
        <div className="info-box">
          <div className="info-label">Feels Like</div>
          <div className="info-value">
            {Math.round(main.feels_like)}°C
            <img src="https://img.icons8.com/fluency/48/temperature.png" alt="temp" />
          </div>
        </div>
        <div className="info-box">
          <div className="info-label">Wind</div>
          <div className="info-value">
            {wind.speed} m/s
            <img src="https://img.icons8.com/color/48/wind.png" alt="wind" />
          </div>
        </div>
        <div className="info-box">
          <div className="info-label">Humidity</div>
          <div className="info-value">
            {main.humidity}%
            <img src="https://img.icons8.com/color/48/humidity.png" alt="humidity" />
          </div>
        </div>
        <div className="info-box">
          <div className="info-label">Rain</div>
          <div className="info-value">
            {rain ? `${rain["1h"]} mm` : "N/A"}
            <img src="https://img.icons8.com/color/48/rain.png" alt="rain" />
          </div>
        </div>
        <div className="info-box">
          <div className="info-label">Sunrise</div>
          <div className="info-value">
            {formatTime(sys.sunrise, timezone)}
            <img src="https://img.icons8.com/fluency/48/sunrise.png" alt="sunrise" />
          </div>
        </div>
        <div className="info-box">
          <div className="info-label">Sunset</div>
          <div className="info-value">
            {formatTime(sys.sunset, timezone)}
            <img src="https://img.icons8.com/fluency/48/sunset.png" alt="sunset" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
