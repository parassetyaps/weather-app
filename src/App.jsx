import { useState } from "react";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;
    setError("");
    try {
      const res = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=\${city}&units=metric&appid=\${import.meta.env.VITE_WEATHER_API_KEY}"
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">🌤️ Weather App</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="px-3 py-2 border rounded-md"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;