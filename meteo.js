async function chargerMeteo() {
  const url = "https://api.open-meteo.com/v1/forecast?latitude=45.75&longitude=4.85&current_weather=true";

  try {
    const response = await fetch(url);
    const data = await response.json();
    const temperature = data.current_weather.temperature;
    const vent = data.current_weather.windspeed;

    document.getElementById("meteo").textContent =
      `${temperature}°C | ${vent} km/h`;

    const navbar = document.querySelector(".navbar");

    if (temperature < 10) {
      navbar.style.backgroundColor = "#1e90ff";
    }
    else if (temperature >= 10 && temperature <= 25) {
      navbar.style.backgroundColor = "#2ecc71";
    }
    else {
      navbar.style.backgroundColor = "#e74c3c";
    }

  } catch (error) {
    document.getElementById("meteo").textContent = "Erreur météo";
  }
}

chargerMeteo();