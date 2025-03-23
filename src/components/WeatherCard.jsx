function WeatherCard({ weather }) {
  const { name, main, weather: details, wind } = weather;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm text-center">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <img
        src={"https://openweathermap.org/img/wn/\${details[0].icon}@2x.png"}
        alt="weather icon"
        className="mx-auto"
      />
      <p className="text-lg">{details[0].description}</p>
      <p className="text-3xl font-bold">{main.temp}°C</p>
      <div className="mt-4 text-sm">
        <p>Humidity: {main.humidity}%</p>
        <p>Wind: {wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;