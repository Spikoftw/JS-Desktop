class WeatherService {
  apiKey = "2a5818b3f446bae382bfb7bc2cdfe21a";

  async getWeather(ville) {
    try {
      const response = await fetch(this.getApiUrl(ville));

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      return {
        temperature: data.main.temp,
        description: data.weather[0].description,
        location: data.name,
      };
    } catch (error) {
      console.error("Error:", error);
    }
  }

  getApiUrl(ville) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${ville}&lang=fr&units=metric&appid=${this.apiKey}`;
  }
}

export default new WeatherService();
