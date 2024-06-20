import React from "react";
import useWeather from "../hooks/useWeather"; // Assurez-vous que le chemin est correct

const Weather = ({ show, ville }) => {
  const weatherData = useWeather(ville, show);

  if (!show) return null;

  return (
    <div className="weather">
      <h1 className="Meteo-title">Météo</h1>
      <div id="weather-widget">
        {weatherData ? (
          <>
            <p>
              {weatherData.location}: {weatherData.temperature}°C
            </p>
            <p>{weatherData.description}</p>
          </>
        ) : (
          <p>Chargement...</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
