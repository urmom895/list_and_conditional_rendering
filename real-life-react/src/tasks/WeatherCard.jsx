import "../styles/WeatherCard.css";
function WeatherCard({ city, tempF, condition, windMph }) {
  let advice = "";
  let adviceColor = "";
  let icon = "";
  let alert = "";

  if (tempF <= 32) {
    advice = "Freezing: heavy coat, hat and gloves";
    adviceColor = "blue";
  } else if (tempF <= 50) {
    advice = "Cold: wear a jacket";
    adviceColor = "purple";
  } else if (tempF <= 75) {
    advice = "Nice: a light layer is fine";
    adviceColor = "green";
  } else {
    advice = "Hot: shorts and plenty of water";
    adviceColor = "orange";
  }

  if (condition === "sunny") {
    icon = "☀️";
  } else if (condition === "cloudy") {
    icon = "☁️";
  } else if (condition === "rain") {
    icon = "🌧️";
  } else if (condition === "snow") {
    icon = "❄️";
  }

  if (condition === "snow" && tempF <= 32) {
    alert = "Check for school delays";
  } else if (windMph >= 25) {
    alert = "Wind advisory";
  }

  return (
    <div className="weather-card">
      <h3>{city}: {tempF}°F</h3>

      <h2>{icon}</h2>

      <p style={{ color: adviceColor }}>{advice}</p>

      {condition === "rain" && (
        <p>Bring an umbrella ☂️</p>
      )}

      {alert && <div className="alert">{alert}</div>}
    </div>
  );
}

export default WeatherCard;