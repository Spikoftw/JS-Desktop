import React, { useState, useEffect } from "react";
import WeatherService from "../services/weather.service";

const Weather = ({ show, ville }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const updateWeather = () => {
      WeatherService.getWeather(ville).then((data) => setWeatherData(data));
    };

    if (show) {
      const weatherInterval = setInterval(updateWeather, 1800000);
      updateWeather();
      return () => clearInterval(weatherInterval);
    }
  }, [show, ville]);

  if (!show) return null;

  return (
    <div className="weather">
      <h1 className="Meteo-title">Météo</h1>
      <div id="weather-widget">
        {weatherData && (
          <>
            <p>
              {weatherData.location}: {weatherData.temperature}°C
            </p>
            <p>{weatherData.description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;
