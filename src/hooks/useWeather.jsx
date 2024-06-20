import { useState, useEffect } from "react";

const apiKey = "2a5818b3f446bae382bfb7bc2cdfe21a";

const getApiUrl = (ville) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${ville}&lang=fr&units=metric&appid=${apiKey}`;
};

const useWeather = (ville, show) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(getApiUrl(ville));
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWeatherData({
          temperature: data.main.temp,
          description: data.weather[0].description,
          location: data.name,
        });
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (show) {
      const weatherInterval = setInterval(fetchWeather, 1800000); // 30 minutes
      fetchWeather(); // initial fetch
      return () => clearInterval(weatherInterval);
    }
  }, [ville, show]);

  return weatherData;
};

export default useWeather;
